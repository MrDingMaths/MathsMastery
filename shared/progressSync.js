// shared/progressSync.js
// Automatic cloud backup and smart merge sync for signed-in users.
// Plain script (not ES module) — sets window.ProgressSync.
// Load after supabaseClient.js and per-app progressTracker.js.

(function () {
    const APP_CONFIG = {
        mathsfacts: { storageKey: 'mf_progress_data_v4',     bestTimePrefix: 'mf_bestTime_v5_' },
        algebra:    { storageKey: 'algebra_progress_data_v4', bestTimePrefix: 'algebra_bestTime_v1_' },
        trigfacts:  { storageKey: 'tf_progress_data_v1',      bestTimePrefix: 'tf_bestTime_v5_' }
    };

    const MAX_SESSIONS     = 1000;
    const MAX_ATTEMPTS     = 500;
    const MAX_MISTAKES     = 100;
    const MIN_SCHEMA_VERSION = 4;

    window.ProgressSync = {
        _syncedUserId: null,

        detectApp() {
            const path = window.location.pathname;
            if (path.includes('/mathsfacts')) return 'mathsfacts';
            if (path.includes('/algebra'))    return 'algebra';
            if (path.includes('/trigfacts'))  return 'trigfacts';
            return null;
        },

        _loadLocal(storageKey) {
            try {
                const raw = localStorage.getItem(storageKey);
                if (!raw) return null;
                const data = JSON.parse(raw);
                if (!data || typeof data !== 'object') return null;
                if (!Array.isArray(data.sessions)) return null;
                if (!data.drillHistory || typeof data.drillHistory !== 'object') return null;
                return data;
            } catch (e) {
                console.warn('[ProgressSync] Could not load local data:', e);
                return null;
            }
        },

        _saveLocal(storageKey, data) {
            try {
                localStorage.setItem(storageKey, JSON.stringify(data));
            } catch (e) {
                console.warn('[ProgressSync] Could not save local data:', e);
            }
        },

        async _fetchCloud(userId, app) {
            try {
                const { data, error } = await window.supabaseClient
                    .from('user_progress')
                    .select('progress_data, schema_version')
                    .eq('user_id', userId)
                    .eq('app', app)
                    .maybeSingle();

                if (error) {
                    console.warn('[ProgressSync] Fetch error:', error.message);
                    return null;
                }
                if (!data) return null;

                if (data.schema_version < MIN_SCHEMA_VERSION) {
                    console.warn('[ProgressSync] Cloud data schema too old, ignoring.');
                    return null;
                }

                return data.progress_data || null;
            } catch (e) {
                console.warn('[ProgressSync] _fetchCloud threw:', e);
                return null;
            }
        },

        async _pushCloud(userId, app, progressData) {
            try {
                const { error } = await window.supabaseClient
                    .from('user_progress')
                    .upsert(
                        {
                            user_id:        userId,
                            app:            app,
                            progress_data:  progressData,
                            schema_version: MIN_SCHEMA_VERSION,
                            updated_at:     new Date().toISOString()
                        },
                        { onConflict: 'user_id,app' }
                    );

                if (error) {
                    console.warn('[ProgressSync] Push error:', error.message);
                }
            } catch (e) {
                console.warn('[ProgressSync] _pushCloud threw:', e);
            }
        },

        // Recompute all derived fields from raw attempts.
        // attempts: array sorted ascending by timestamp
        // firstAttemptTime/Date: the canonical first-ever attempt values
        _recomputeDrillStats(attempts, firstAttemptTime, firstAttemptDate) {
            if (!attempts || attempts.length === 0) {
                return {
                    attempts: [],
                    bestTime: null,
                    bestTimeDate: null,
                    firstAttemptTime: firstAttemptTime || null,
                    firstAttemptDate: firstAttemptDate || null,
                    totalAttempts: 0,
                    averageTime: 0,
                    lastAttempt: null,
                    improvements: []
                };
            }

            const sorted = attempts.slice().sort((a, b) => a.timestamp - b.timestamp);

            let bestTime = Infinity;
            let bestTimeDate = null;
            let runningBest = null;
            const improvements = [];

            for (const attempt of sorted) {
                if (runningBest === null) {
                    runningBest = attempt.time;
                } else if (attempt.time < runningBest) {
                    improvements.push({
                        previousBest: runningBest,
                        newBest: attempt.time,
                        improvement: runningBest - attempt.time,
                        percentImprovement: ((runningBest - attempt.time) / runningBest * 100).toFixed(1),
                        percentImprovementFromBaseline: firstAttemptTime
                            ? ((firstAttemptTime - attempt.time) / firstAttemptTime * 100).toFixed(1)
                            : '0.0',
                        date: attempt.timestamp
                    });
                    runningBest = attempt.time;
                }

                if (attempt.time < bestTime) {
                    bestTime = attempt.time;
                    bestTimeDate = attempt.timestamp;
                }
            }

            if (bestTime === Infinity) bestTime = null;

            // Re-stamp isBest
            const finalAttempts = sorted.map(a => ({
                time: a.time,
                timestamp: a.timestamp,
                isBest: a.time === bestTime
            }));

            const totalTime = finalAttempts.reduce((sum, a) => sum + a.time, 0);
            const averageTime = finalAttempts.length > 0 ? totalTime / finalAttempts.length : 0;
            const lastAttempt = finalAttempts[finalAttempts.length - 1].timestamp;

            return {
                attempts:          finalAttempts,
                bestTime:          bestTime,
                bestTimeDate:      bestTimeDate,
                firstAttemptTime:  firstAttemptTime || sorted[0].time,
                firstAttemptDate:  firstAttemptDate || sorted[0].timestamp,
                totalAttempts:     finalAttempts.length,
                averageTime:       averageTime,
                lastAttempt:       lastAttempt,
                improvements:      improvements
            };
        },

        _mergeProgressData(local, cloud) {
            if (!cloud) return local;
            if (!local) return cloud;

            // --- Sessions: union by id ---
            const sessionMap = new Map();
            for (const s of (local.sessions || [])) sessionMap.set(s.id, s);
            for (const s of (cloud.sessions || [])) {
                if (!sessionMap.has(s.id)) sessionMap.set(s.id, s);
            }
            let mergedSessions = Array.from(sessionMap.values())
                .sort((a, b) => a.timestamp - b.timestamp);
            if (mergedSessions.length > MAX_SESSIONS) {
                mergedSessions = mergedSessions.slice(-MAX_SESSIONS);
            }

            // --- drillHistory: union attempts by timestamp per level ---
            const allLevelKeys = new Set([
                ...Object.keys(local.drillHistory || {}),
                ...Object.keys(cloud.drillHistory || {})
            ]);

            const mergedDrillHistory = {};
            for (const levelKey of allLevelKeys) {
                const localDrill = (local.drillHistory || {})[levelKey];
                const cloudDrill = (cloud.drillHistory || {})[levelKey];

                const localAttempts = localDrill?.attempts || [];
                const cloudAttempts = cloudDrill?.attempts || [];

                const attemptMap = new Map();
                for (const a of localAttempts) attemptMap.set(a.timestamp, a);
                for (const a of cloudAttempts) {
                    if (!attemptMap.has(a.timestamp)) attemptMap.set(a.timestamp, a);
                }

                let mergedAttempts = Array.from(attemptMap.values())
                    .sort((a, b) => a.timestamp - b.timestamp);
                if (mergedAttempts.length > MAX_ATTEMPTS) {
                    mergedAttempts = mergedAttempts.slice(-MAX_ATTEMPTS);
                }

                // Preserve the earliest firstAttemptTime across both datasets
                const localFirst  = localDrill?.firstAttemptTime  ?? Infinity;
                const cloudFirst  = cloudDrill?.firstAttemptTime  ?? Infinity;
                const localFirstDate  = localDrill?.firstAttemptDate  ?? null;
                const cloudFirstDate  = cloudDrill?.firstAttemptDate  ?? null;
                const firstAttemptTime = localFirst <= cloudFirst ? localFirst : cloudFirst;
                const firstAttemptDate = localFirst <= cloudFirst ? localFirstDate : cloudFirstDate;

                mergedDrillHistory[levelKey] = this._recomputeDrillStats(
                    mergedAttempts,
                    firstAttemptTime === Infinity ? null : firstAttemptTime,
                    firstAttemptDate
                );
            }

            // --- Mistakes: union by id per level (algebra only) ---
            let mergedMistakes = undefined;
            const localMistakes = local.mistakes;
            const cloudMistakes = cloud.mistakes;
            if (localMistakes !== undefined || cloudMistakes !== undefined) {
                mergedMistakes = {};
                const mistakeLevelKeys = new Set([
                    ...Object.keys(localMistakes || {}),
                    ...Object.keys(cloudMistakes || {})
                ]);
                for (const levelKey of mistakeLevelKeys) {
                    const mistakeMap = new Map();
                    for (const m of (localMistakes?.[levelKey] || [])) mistakeMap.set(m.id, m);
                    for (const m of (cloudMistakes?.[levelKey] || [])) {
                        if (!mistakeMap.has(m.id)) mistakeMap.set(m.id, m);
                    }
                    let levelMistakes = Array.from(mistakeMap.values())
                        .sort((a, b) => a.timestamp - b.timestamp);
                    if (levelMistakes.length > MAX_MISTAKES) {
                        levelMistakes = levelMistakes.slice(-MAX_MISTAKES);
                    }
                    mergedMistakes[levelKey] = levelMistakes;
                }
            }

            const result = {
                version:      MIN_SCHEMA_VERSION,
                sessions:     mergedSessions,
                drillHistory: mergedDrillHistory
            };
            if (mergedMistakes !== undefined) result.mistakes = mergedMistakes;
            return result;
        },

        // Write bestTime values from drillHistory into the individual StorageManager keys
        // so that level card colours and best-time labels reflect the synced data.
        _syncBestTimeKeys(drillHistory, bestTimePrefix) {
            if (!drillHistory || !bestTimePrefix) return;
            for (const [levelKey, drill] of Object.entries(drillHistory)) {
                if (drill.bestTime !== null && drill.bestTime !== undefined) {
                    try {
                        localStorage.setItem(bestTimePrefix + levelKey, drill.bestTime);
                    } catch (e) {
                        console.warn('[ProgressSync] Could not write bestTime key:', e);
                    }
                }
            }
        },

        async syncOnSignIn(userId, app) {
            if (this._syncedUserId === userId) return;
            this._syncedUserId = userId;

            const config = APP_CONFIG[app];
            if (!config) return;

            try {
                const [localData, cloudData] = await Promise.all([
                    Promise.resolve(this._loadLocal(config.storageKey)),
                    this._fetchCloud(userId, app)
                ]);

                const merged = this._mergeProgressData(localData, cloudData);
                if (!merged) return;

                this._saveLocal(config.storageKey, merged);
                this._syncBestTimeKeys(merged.drillHistory, config.bestTimePrefix);
                await this._pushCloud(userId, app, merged);

                console.log('[ProgressSync] Sync complete for', app);
            } catch (e) {
                console.warn('[ProgressSync] syncOnSignIn error:', e);
            }
        },

        pushAfterLevel(app) {
            if (!app || !window.supabaseUser) return;
            const userId = window.supabaseUser.id;
            const storageKey = APP_CONFIG[app]?.storageKey;
            if (!storageKey) return;

            const data = this._loadLocal(storageKey);
            if (!data) return;

            this._pushCloud(userId, app, data)
                .catch(e => console.warn('[ProgressSync] pushAfterLevel error:', e));
        },

        _init() {
            document.addEventListener('supabase-auth-change', async (e) => {
                const { event, user } = e.detail || {};
                if ((event === 'SIGNED_IN' || event === 'INITIAL_SESSION') && user) {
                    const app = window.ProgressSync.detectApp();
                    if (app) await window.ProgressSync.syncOnSignIn(user.id, app);
                }
                if (event === 'SIGNED_OUT') {
                    window.ProgressSync._syncedUserId = null;
                }
            });

            // Handle the case where supabaseClient already resolved before this script loaded
            if (window.supabaseUser) {
                const app = window.ProgressSync.detectApp();
                if (app) window.ProgressSync.syncOnSignIn(window.supabaseUser.id, app);
            }
        }
    };

    window.ProgressSync._init();
})();
