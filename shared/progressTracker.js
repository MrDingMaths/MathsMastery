// shared/progressTracker.js - Core tracking and data management
// Plain script (not ES module) — instantiated by per-app wrappers
class ProgressTracker {
    constructor(storageKey, options = {}) {
        this.STORAGE_KEY = storageKey;
        this.SCHEMA_VERSION = 5;
        this.MAX_ENTRIES_PER_DRILL = 500;
        this.MAX_MISTAKES_PER_LEVEL = 100;
        this.enableMistakes = options.enableMistakes || false;
        this.oldVersionKeys = options.oldVersionKeys || [];
        this._cache = null;
        this.initializeStorage();
    }

    // Initialize storage, clearing any old version data
    initializeStorage() {
        for (const oldKey of this.oldVersionKeys) {
            localStorage.removeItem(oldKey);
        }
        if (!this.loadData()) {
            this.resetData();
        }
    }

    // Create default data structure
    _createDefaultData() {
        const data = {
            version: this.SCHEMA_VERSION,
            sessions: [],
            drillHistory: {}
        };
        if (this.enableMistakes) {
            data.mistakes = {};
        }
        return data;
    }

    // Save progress data with validation
    recordProgress(levelKey, time, streak = 15, questionsAnswered = 0) {
        try {
            const data = this.loadData();
            const timestamp = Date.now();

            const session = {
                id: this.generateId(),
                levelKey: levelKey,
                time: time,
                streak: streak,
                questionsAnswered: questionsAnswered,
                timestamp: timestamp,
                date: new Date(timestamp).toISOString(),
                deviceInfo: this.getDeviceInfo(),
                averageTimePerQuestion: time / streak
            };

            data.sessions = data.sessions || [];
            data.sessions.push(session);

            data.drillHistory = data.drillHistory || {};
            if (!data.drillHistory[levelKey]) {
                data.drillHistory[levelKey] = {
                    attempts: [],
                    bestTime: null,
                    bestTimeDate: null,
                    firstAttemptTime: null,
                    firstAttemptDate: null,
                    totalAttempts: 0,
                    averageTime: 0,
                    lastAttempt: null,
                    improvements: []
                };
            }

            const drillData = data.drillHistory[levelKey];

            if (drillData.firstAttemptTime === null) {
                drillData.firstAttemptTime = time;
                drillData.firstAttemptDate = timestamp;
            }

            if (drillData.bestTime === null || time < drillData.bestTime) {
                if (drillData.bestTime !== null) {
                    const cumulativeImprovement = drillData.firstAttemptTime
                        ? ((drillData.firstAttemptTime - time) / drillData.firstAttemptTime * 100).toFixed(1)
                        : '0.0';

                    drillData.improvements.push({
                        previousBest: drillData.bestTime,
                        newBest: time,
                        improvement: drillData.bestTime - time,
                        percentImprovement: ((drillData.bestTime - time) / drillData.bestTime * 100).toFixed(1),
                        percentImprovementFromBaseline: cumulativeImprovement,
                        date: timestamp
                    });
                }
                drillData.bestTime = time;
                drillData.bestTimeDate = timestamp;
            }

            drillData.attempts.push({
                time: time,
                timestamp: timestamp,
                isBest: time === drillData.bestTime
            });

            if (drillData.attempts.length > this.MAX_ENTRIES_PER_DRILL) {
                drillData.attempts = drillData.attempts.slice(-this.MAX_ENTRIES_PER_DRILL);
            }

            drillData.totalAttempts = drillData.attempts.length;
            drillData.lastAttempt = timestamp;
            drillData.averageTime = this.calculateAverage(drillData.attempts.map(a => a.time));

            if (data.sessions.length > 1000) {
                data.sessions = data.sessions.slice(-1000);
            }

            this.saveData(data);
            return session;

        } catch (error) {
            console.error('Error recording progress:', error);
            this.handleCorruptedData();
            return null;
        }
    }

    getDrillProgress(levelKey) {
        const data = this.loadData();
        return data.drillHistory?.[levelKey] || null;
    }

    getAllProgress() {
        const data = this.loadData();
        return data.drillHistory || {};
    }

    // --- Mistakes methods (only meaningful when enableMistakes is true) ---

    recordMistake(levelKey, levelName, question, correctAnswer, studentAnswer) {
        try {
            const data = this.loadData();
            const timestamp = Date.now();

            data.mistakes = data.mistakes || {};
            if (!data.mistakes[levelKey]) {
                data.mistakes[levelKey] = [];
            }

            const mistake = {
                id: this.generateId(),
                levelKey: levelKey,
                levelName: levelName,
                question: question,
                correctAnswer: correctAnswer,
                studentAnswer: studentAnswer,
                timestamp: timestamp,
                date: new Date(timestamp).toISOString()
            };

            data.mistakes[levelKey].push(mistake);

            if (data.mistakes[levelKey].length > this.MAX_MISTAKES_PER_LEVEL) {
                data.mistakes[levelKey] = data.mistakes[levelKey].slice(-this.MAX_MISTAKES_PER_LEVEL);
            }

            this.saveData(data);
            return mistake;

        } catch (error) {
            console.error('Error recording mistake:', error);
            this.handleCorruptedData();
            return null;
        }
    }

    getLevelMistakes(levelKey) {
        const data = this.loadData();
        return (data.mistakes && data.mistakes[levelKey]) || [];
    }

    getAllMistakes() {
        const data = this.loadData();
        const mistakes = [];

        if (data.mistakes) {
            Object.entries(data.mistakes).forEach(([levelKey, levelMistakes]) => {
                mistakes.push(...levelMistakes);
            });
        }

        return mistakes.sort((a, b) => b.timestamp - a.timestamp);
    }

    deleteMistake(mistakeId) {
        try {
            const data = this.loadData();
            let found = false;

            if (data.mistakes) {
                Object.keys(data.mistakes).forEach(levelKey => {
                    const initialLength = data.mistakes[levelKey].length;
                    data.mistakes[levelKey] = data.mistakes[levelKey].filter(
                        mistake => mistake.id !== mistakeId
                    );
                    if (data.mistakes[levelKey].length < initialLength) {
                        found = true;
                    }
                });
            }

            if (found) {
                this.saveData(data);
                return true;
            }
            return false;

        } catch (error) {
            console.error('Error deleting mistake:', error);
            return false;
        }
    }

    clearAllMistakes() {
        try {
            const data = this.loadData();
            data.mistakes = {};
            this.saveData(data);
            return true;
        } catch (error) {
            console.error('Error clearing mistakes:', error);
            return false;
        }
    }

    // --- Session & summary methods ---

    getRecentSessions(limit = 10) {
        const data = this.loadData();
        return (data.sessions || [])
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, limit);
    }

    getProgressSummary() {
        const data = this.loadData();
        const drillHistory = data.drillHistory || {};

        const sessions = data.sessions || [];
        const summary = {
            totalDrills: Object.keys(drillHistory).length,
            totalAttempts: 0,
            totalQuestionsAnswered: sessions.reduce((sum, s) => sum + (s.questionsAnswered || 0), 0),
            totalTimeSpent: 0,
            drillsWithImprovement: 0,
            averageImprovement: 0,
            recentActivity: []
        };

        Object.entries(drillHistory).forEach(([key, drill]) => {
            summary.totalAttempts += drill.totalAttempts;
            summary.totalTimeSpent += drill.attempts.reduce((sum, a) => sum + a.time, 0);
            if (drill.improvements.length > 0) {
                summary.drillsWithImprovement++;
            }
        });

        // Calculate average cumulative improvement across all drills
        const drillsWithBaseline = Object.values(drillHistory)
            .filter(d => d.firstAttemptTime && d.bestTime && d.firstAttemptTime > d.bestTime);

        if (drillsWithBaseline.length > 0) {
            const cumulativeImprovements = drillsWithBaseline.map(d =>
                ((d.firstAttemptTime - d.bestTime) / d.firstAttemptTime * 100)
            );
            summary.averageImprovement = (cumulativeImprovements.reduce((a, b) => a + b, 0) / cumulativeImprovements.length).toFixed(1);
        }

        return summary;
    }

    // --- Data validation & persistence ---

    validateData(data) {
        if (!data || typeof data !== 'object') return false;
        if (!data.version || data.version < this.SCHEMA_VERSION) return false;
        if (!Array.isArray(data.sessions)) return false;
        if (!data.drillHistory || typeof data.drillHistory !== 'object') return false;

        if (this.enableMistakes && data.version >= 3) {
            if (!data.mistakes || typeof data.mistakes !== 'object') return false;
        }

        return true;
    }

    handleCorruptedData() {
        console.error('Corrupted data detected, creating backup and resetting...');
        const backup = localStorage.getItem(this.STORAGE_KEY);
        if (backup) {
            localStorage.setItem(this.STORAGE_KEY + '_backup_' + Date.now(), backup);
        }
        this.resetData();
    }

    resetData() {
        this.saveData(this._createDefaultData());
    }

    loadData() {
        if (this._cache) return this._cache;
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (!stored) return null;

            const data = JSON.parse(stored);
            if (!this.validateData(data)) {
                throw new Error('Invalid data structure');
            }
            this._cache = data;
            return data;
        } catch (error) {
            console.error('Error loading progress data:', error);
            return null;
        }
    }

    saveData(data) {
        try {
            this._cache = data;
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving progress data:', error);
            this._cache = null;
            if (error.name === 'QuotaExceededError') {
                this.cleanupOldData();
                try {
                    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
                    this._cache = data;
                } catch (retryError) {
                    console.error('Failed to save after cleanup:', retryError);
                }
            }
        }
    }

    invalidateCache() {
        this._cache = null;
    }

    getBestTime(levelKey) {
        const data = this.loadData();
        return data?.drillHistory?.[levelKey]?.bestTime ?? null;
    }

    cleanupOldData() {
        const data = this.loadData();
        if (!data) return;

        // Keep only last 30 days of sessions
        const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        data.sessions = (data.sessions || []).filter(s => s.timestamp > thirtyDaysAgo);

        // Limit attempts per drill
        Object.keys(data.drillHistory || {}).forEach(key => {
            const drill = data.drillHistory[key];
            if (drill.attempts.length > this.MAX_ENTRIES_PER_DRILL / 2) {
                drill.attempts = drill.attempts.slice(-this.MAX_ENTRIES_PER_DRILL / 2);
            }
        });

        this.saveData(data);
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            platform: navigator.platform
        };
    }

    calculateAverage(numbers) {
        if (numbers.length === 0) return 0;
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }
}

// Per-app factory. Constructs window.progressTracker with the canonical
// storage key for the app and cleans up obsolete bestTime localStorage entries.
// Per-app wrappers under each app's progress-tracking/progressTracker.js
// call this with their app name and migration history.
window.initProgressTracker = function (app, opts) {
    const APP_STORAGE = {
        algebra:    { storageKey: 'algebra_progress_data_v5', obsoleteBestTimePrefixes: ['algebra_bestTime_v1_'] },
        mathsfacts: { storageKey: 'mf_progress_data_v5',      obsoleteBestTimePrefixes: ['mf_bestTime_v1_', 'mf_bestTime_v5_'] },
        trigfacts:  { storageKey: 'tf_progress_data_v5',      obsoleteBestTimePrefixes: ['tf_bestTime_v5_'] },
        equations:  { storageKey: 'equations_progress_data_v5', obsoleteBestTimePrefixes: [] },
        calculus:   { storageKey: 'calculus_progress_data_v5', obsoleteBestTimePrefixes: [] },
    };
    const cfg = APP_STORAGE[app];
    if (!cfg) throw new Error(`initProgressTracker: unknown app "${app}"`);
    window.progressTracker = new ProgressTracker(cfg.storageKey, opts);
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && cfg.obsoleteBestTimePrefixes.some(p => key.startsWith(p))) {
            localStorage.removeItem(key);
        }
    }
};
