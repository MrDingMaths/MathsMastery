/**
 * Hub Leaderboard — modal for browsing all-levels leaderboards from the main index page.
 * Plain script; depends on window.Leaderboard (shared/leaderboard.js),
 * window.supabaseUser, and window.LevelRegistry (shared/levelRegistry.js).
 */

const HUB_LEVELS = (function buildFromRegistry() {
    const reg = window.LevelRegistry || {};
    const out = {};
    for (const [app, data] of Object.entries(reg)) {
        out[app] = {
            appLabel: data.appLabel,
            groups: Object.fromEntries(
                Object.entries(data.LEVEL_GROUPS).map(([groupName, levels]) => [
                    groupName,
                    levels.map(l => ({ key: l.key, name: l.name.replace(/<br>/g, ' '), comingSoon: !!l.comingSoon })),
                ])
            ),
        };
    }
    return out;
})();

const HOF_TOTAL_LEVELS = Object.fromEntries(
    Object.entries(HUB_LEVELS).map(([app, data]) => [
        app,
        Object.values(data.groups).reduce(
            (sum, levels) => sum + levels.filter(l => !l.comingSoon).length,
            0
        ),
    ])
);

const RATING_EMOJIS = {
    'true-mastery': '💖',
    'mastery': '🏆',
    'expert': '⭐',
    'developing': '🎯',
    'beginner': '🌱',
};

class HubLeaderboard {
    constructor() {
        this._activeApp = 'mathsfacts';
        this._openLevelKey = null;
        this._overlay = document.getElementById('hub-lb-overlay');
        this._content = document.getElementById('hub-lb-content');
    }

    open() {
        this._overlay.classList.remove('hub-lb-hidden');
        document.body.style.overflow = 'hidden';
        this._renderLevels(this._activeApp);
    }

    close() {
        this._overlay.classList.add('hub-lb-hidden');
        document.body.style.overflow = '';
        this._openLevelKey = null;
    }

    switchTab(app) {
        this._activeApp = app;
        this._openLevelKey = null;
        document.querySelectorAll('.hub-lb-tab').forEach(btn => {
            btn.classList.toggle('hub-lb-tab-active', btn.dataset.app === app);
        });
        this._renderLevels(app);
    }

    _renderLevels(app) {
        const appData = HUB_LEVELS[app];
        let html = '';
        for (const [groupName, levels] of Object.entries(appData.groups)) {
            html += `<div class="hub-lb-group">
                <div class="hub-lb-group-name">${_hubEscape(groupName)}</div>`;
            for (const level of levels) {
                html += `<div class="hub-lb-level-row" data-app="${_hubEscape(app)}" data-key="${_hubEscape(level.key)}" role="button" tabindex="0" aria-expanded="false">
                    <span class="hub-lb-level-name">${_hubEscape(level.name)}</span>
                    <span class="hub-lb-chevron">›</span>
                </div>
                <div class="hub-lb-level-panel hub-lb-hidden" id="hub-lb-panel-${_hubEscape(level.key)}"></div>`;
            }
            html += '</div>';
        }
        this._content.innerHTML = html;

        this._content.querySelectorAll('.hub-lb-level-row').forEach(row => {
            const activate = () => this._toggleLevel(row.dataset.app, row.dataset.key, row);
            row.addEventListener('click', activate);
            row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
        });
    }

    async _toggleLevel(app, levelKey, rowEl) {
        const panel = document.getElementById(`hub-lb-panel-${levelKey}`);
        if (!panel) return;

        const isOpen = !panel.classList.contains('hub-lb-hidden');
        if (isOpen) {
            panel.classList.add('hub-lb-hidden');
            rowEl.classList.remove('hub-lb-level-row-open');
            rowEl.setAttribute('aria-expanded', 'false');
            this._openLevelKey = null;
            return;
        }

        // Close previously open panel
        if (this._openLevelKey) {
            const prev = document.getElementById(`hub-lb-panel-${this._openLevelKey}`);
            if (prev) prev.classList.add('hub-lb-hidden');
            const prevRow = this._content.querySelector(`[data-key="${this._openLevelKey}"]`);
            if (prevRow) {
                prevRow.classList.remove('hub-lb-level-row-open');
                prevRow.setAttribute('aria-expanded', 'false');
            }
        }

        this._openLevelKey = levelKey;
        panel.classList.remove('hub-lb-hidden');
        rowEl.classList.add('hub-lb-level-row-open');
        rowEl.setAttribute('aria-expanded', 'true');
        if (!window.supabaseUser) {
            panel.innerHTML = '<p class="leaderboard-login-note">Log in to see who is on the leaderboard.</p>';
            return;
        }

        panel.innerHTML = '<div class="hub-lb-loading">Loading…</div>';

        const entries = await Leaderboard.fetchTop10(app, levelKey);
        const userId = window.supabaseUser?.id ?? null;
        let userEntry = null, userRank = null;
        if (userId && !entries.some(e => e.user_id === userId)) {
            userEntry = await Leaderboard.fetchUserEntry(app, levelKey, userId);
            if (userEntry) {
                userRank = await Leaderboard.fetchUserRank(app, levelKey, userEntry.best_time);
            }
        }
        panel.innerHTML = this._renderEntries(entries, userEntry, userRank);
    }

    _renderEntries(entries, userEntry = null, userRank = null) {
        if (entries.length === 0) {
            return '<p class="leaderboard-empty">No entries yet — be the first!</p>';
        }

        const currentUserId = window.supabaseUser?.id ?? null;
        let html = '<ol class="leaderboard-list">';
        entries.forEach((entry, i) => {
            const isYou = currentUserId && entry.user_id === currentUserId;
            const emoji = RATING_EMOJIS[entry.rating_key] || '📚';
            const time = _hubFormatTime(entry.best_time);
            const rank = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
            const youClass = isYou ? ' leaderboard-entry-you' : '';
            const youBadge = isYou ? ' <span class="leaderboard-you-badge">you</span>' : '';
            const avatarUrl = entry.profiles?.avatar_url;
            const avatarHtml = avatarUrl
                ? `<img class="leaderboard-avatar" src="${_hubEscape(avatarUrl)}" alt="" loading="lazy">`
                : `<span class="leaderboard-avatar leaderboard-avatar-fallback">${_hubEscape((entry.display_name || 'A')[0].toUpperCase())}</span>`;

            html += `<li class="leaderboard-entry${youClass}">
                <span class="leaderboard-rank">${rank}</span>
                ${avatarHtml}
                <span class="leaderboard-name">${_hubAbbreviateName(entry.display_name)}${youBadge}</span>
                <span class="leaderboard-time">${time}</span>
                <span class="leaderboard-rating-emoji">${emoji}</span>
            </li>`;
        });
        if (userEntry) {
            const rankLabel = userRank !== null ? `${userRank}.` : '–';
            const emoji = RATING_EMOJIS[userEntry.rating_key] || '📚';
            const avatarUrl = userEntry.profiles?.avatar_url;
            const avatarHtml = avatarUrl
                ? `<img class="leaderboard-avatar" src="${_hubEscape(avatarUrl)}" alt="" loading="lazy">`
                : `<span class="leaderboard-avatar leaderboard-avatar-fallback">${_hubEscape((userEntry.display_name || 'A')[0].toUpperCase())}</span>`;
            html += `<li class="leaderboard-separator">· · ·</li>`;
            html += `<li class="leaderboard-entry leaderboard-entry-you">
                <span class="leaderboard-rank">${rankLabel}</span>
                ${avatarHtml}
                <span class="leaderboard-name">${_hubAbbreviateName(userEntry.display_name)} <span class="leaderboard-you-badge">you</span></span>
                <span class="leaderboard-time">${_hubFormatTime(userEntry.best_time)}</span>
                <span class="leaderboard-rating-emoji">${emoji}</span>
            </li>`;
        }
        html += '</ol>';
        return html;
    }
}

function _hubFormatTime(ms) {
    if (!ms || ms < 0) ms = 0;
    const totalSeconds = Math.floor(ms / 1000);
    const tenths = Math.floor((ms % 1000) / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return minutes > 0
        ? `${minutes}:${secs}.${tenths}`
        : `${secs}.${tenths}s`;
}

function _hubAbbreviateName(name) {
    if (!name) return 'Anonymous';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return _hubEscape(parts[0]);
    return _hubEscape(parts[0]) + ' ' + _hubEscape(parts[parts.length - 1][0]);
}

function _hubEscape(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

class HubPanels {
    constructor() {
        this._recentEl = document.getElementById('panel-recent');
        this._hofEl    = document.getElementById('panel-hof');
        this._hofApp   = 'mathsfacts';
    }

    init() {
        if (!this._hofEl) return;
        this._hofEl.querySelectorAll('.panel-hof-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                this._hofApp = btn.dataset.app;
                this._hofEl.querySelectorAll('.panel-hof-tab').forEach(b =>
                    b.classList.toggle('panel-hof-tab-active', b === btn)
                );
                this._loadHof(this._hofApp);
            });
        });
    }

    show(user) {
        if (!user) return;
        const row = document.querySelector('.chalk-main-row');
        if (row) row.classList.add('panels-visible');
        if (this._recentEl) this._recentEl.classList.add('panel-visible');
        if (this._hofEl)    this._hofEl.classList.add('panel-visible');
        this._loadRecent();
        this._loadHof(this._hofApp);
    }

    hide() {
        const row = document.querySelector('.chalk-main-row');
        if (row) row.classList.remove('panels-visible');
        if (this._recentEl) this._recentEl.classList.remove('panel-visible');
        if (this._hofEl)    this._hofEl.classList.remove('panel-visible');
    }

    async _loadRecent() {
        const body = this._recentEl && this._recentEl.querySelector('.panel-body');
        if (!body || !window.supabaseClient || !window.supabaseUser) return;
        body.innerHTML = '<div class="panel-loading">Loading…</div>';
        try {
            const { data, error } = await window.supabaseClient
                .from('leaderboard_entries')
                .select('display_name, app, level_key, rating_key, rating_name, updated_at')
                .in('rating_key', ['mastery', 'true-mastery'])
                .lte('updated_at', new Date().toISOString())
                .order('updated_at', { ascending: false })
                .limit(20);
            if (error || !data) { body.innerHTML = '<div class="panel-empty">Could not load.</div>'; return; }
            this._renderRecent(data, body);
        } catch (e) {
            body.innerHTML = '<div class="panel-empty">Could not load.</div>';
        }
    }

    async _loadHof(app) {
        const body = this._hofEl && this._hofEl.querySelector('.panel-body');
        if (!body || !window.supabaseClient || !window.supabaseUser) return;
        body.innerHTML = '<div class="panel-loading">Loading…</div>';
        if (!this._hofSeq) this._hofSeq = 0;
        const seq = ++this._hofSeq;
        try {
            const PAGE = 1000;
            let allData = [], from = 0;
            while (true) {
                const { data, error } = await window.supabaseClient
                    .from('leaderboard_entries')
                    .select('user_id, display_name, rating_key, best_time, profiles(avatar_url)')
                    .eq('app', app)
                    .order('user_id')
                    .range(from, from + PAGE - 1);
                if (seq !== this._hofSeq) return;
                if (this._hofApp !== app) return;
                if (error || !data) { body.innerHTML = '<div class="panel-empty">No data yet.</div>'; return; }
                allData = allData.concat(data);
                if (data.length < PAGE) break;
                from += PAGE;
            }
            const data = allData;

            const map = new Map();
            for (const e of data) {
                if (!map.has(e.user_id)) {
                    map.set(e.user_id, { display_name: e.display_name, avatar_url: e.profiles?.avatar_url || null, queen: 0, totalTime: 0, mastery: 0, expert: 0, developing: 0, beginner: 0, total: 0 });
                }
                const u = map.get(e.user_id);
                u.total++;
                if (e.rating_key === 'true-mastery') {
                    u.queen++;
                    u.totalTime += e.best_time || 0;
                } else if (e.rating_key === 'mastery')    u.mastery++;
                else if   (e.rating_key === 'expert')     u.expert++;
                else if   (e.rating_key === 'developing') u.developing++;
                else if   (e.rating_key === 'beginner')   u.beginner++;
            }

            const totalLevels = HOF_TOTAL_LEVELS[app] || Infinity;
            const allQueens = [...map.values()]
                .filter(u => u.queen >= totalLevels)
                .sort((a, b) => a.totalTime - b.totalTime);
            const rest = [...map.values()]
                .filter(u => u.queen < totalLevels)
                .sort((a, b) => b.queen - a.queen || b.mastery - a.mastery || b.expert - a.expert || b.total - a.total)
                .slice(0, 10);

            this._renderHof(allQueens, rest, body);
        } catch (e) {
            body.innerHTML = '<div class="panel-empty">No data yet.</div>';
        }
    }

    _renderRecent(entries, body) {
        if (!entries.length) { body.innerHTML = '<div class="panel-empty">No activity yet.</div>'; return; }
        let html = '';
        for (const e of entries) {
            const badge      = this._appBadge(e.app);
            const emoji      = RATING_EMOJIS[e.rating_key] || '';
            const levelName  = _hubEscape(this._lookupLevelName(e.level_key));
            const difficulty = e.level_key.match(/(Easy|Medium|Hard)$/)?.[1] ?? null;
            const diffHtml   = difficulty ? ` · <span class="panel-entry-diff">${difficulty}</span>` : '';
            html += `<div class="panel-entry">
                <span class="panel-badge panel-badge-${_hubEscape(e.app)}">${badge}</span>
                <div class="panel-entry-body">
                    <span class="panel-entry-name">${_hubAbbreviateName(e.display_name)}</span>
                    <span class="panel-entry-detail">${emoji} ${levelName}${diffHtml}</span>
                    <span class="panel-entry-time">${this._timeAgo(e.updated_at)}</span>
                </div>
            </div>`;
        }
        body.innerHTML = html;
    }

    _renderHof(allQueens, rest, body) {
        if (!allQueens.length && !rest.length) { body.innerHTML = '<div class="panel-empty">No entries yet.</div>'; return; }

        const renderEntry = (u, rank, showTime) => {
            const rankLabel = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
            const initial = _hubEscape((u.display_name || 'A')[0].toUpperCase());
            const avatarHtml = u.avatar_url
                ? `<img class="panel-hof-avatar panel-hof-avatar-img" src="${_hubEscape(u.avatar_url)}" alt="" loading="lazy">`
                : `<span class="panel-hof-avatar">${initial}</span>`;
            let medals = '';
            if (u.queen)      medals += `<span class="panel-medal">💖${u.queen}</span>`;
            if (u.mastery)    medals += `<span class="panel-medal">🏆${u.mastery}</span>`;
            if (u.expert)     medals += `<span class="panel-medal">⭐${u.expert}</span>`;
            if (u.developing) medals += `<span class="panel-medal">🎯${u.developing}</span>`;
            if (u.beginner)   medals += `<span class="panel-medal">🌱${u.beginner}</span>`;
            const timeHtml = showTime ? `<span class="panel-hof-total-time">${_hubFormatTime(u.totalTime)}</span>` : '';
            return `<div class="panel-hof-entry">
                <span class="panel-hof-rank">${rankLabel}</span>
                ${avatarHtml}
                <div class="panel-hof-info">
                    <span class="panel-hof-name">${_hubAbbreviateName(u.display_name)}</span>
                    <span class="panel-hof-medals">${medals}</span>
                </div>
                ${timeHtml}
            </div>`;
        };

        const bothCols = allQueens.length > 0 && rest.length > 0;

        if (bothCols) {
            let leftHtml = '<div class="panel-hof-section-label">💝 Maths Queens</div>';
            allQueens.forEach((u, i) => { leftHtml += renderEntry(u, i + 1, true); });

            let rightHtml = '<div class="panel-hof-section-label">Leaderboard</div>';
            rest.forEach((u, i) => { rightHtml += renderEntry(u, i + 1, false); });

            body.innerHTML = `<div class="panel-hof-cols"><div>${leftHtml}</div><div>${rightHtml}</div></div>`;
        } else if (allQueens.length) {
            let html = '';
            allQueens.forEach((u, i) => { html += renderEntry(u, i + 1, true); });
            body.innerHTML = html;
        } else {
            let html = '';
            rest.forEach((u, i) => { html += renderEntry(u, i + 1, false); });
            body.innerHTML = html;
        }
    }

    _lookupLevelName(levelKey) {
        for (const app of Object.values(HUB_LEVELS)) {
            for (const levels of Object.values(app.groups)) {
                const found = levels.find(l => l.key === levelKey);
                if (found) return found.name.replace(/\s+(Easy|Medium|Hard)$/i, '').trim();
            }
        }
        return levelKey;
    }

    _timeAgo(iso) {
        if (!iso) return '';
        const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
        if (mins < 1)  return 'just now';   // includes future timestamps from client clock skew
        if (mins < 60) return `${mins}m ago`;
        const hours = Math.floor(mins / 60);
        if (hours < 24) return `${hours}h ago`;
        return `${Math.floor(hours / 24)}d ago`;
    }

    _appBadge(app) {
        return { mathsfacts: '±', algebra: '𝑥', trigfacts: 'θ', equations: '=', calculus: '∫' }[app] || app;
    }
}

// Initialise after DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const hub = new HubLeaderboard();

    document.getElementById('hub-lb-open-btn').addEventListener('click', () => hub.open());
    document.getElementById('hub-lb-close').addEventListener('click', () => hub.close());

    document.getElementById('hub-lb-overlay').addEventListener('click', e => {
        if (e.target === e.currentTarget) hub.close();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') hub.close();
    });

    document.querySelectorAll('.hub-lb-tab').forEach(btn => {
        btn.addEventListener('click', () => hub.switchTab(btn.dataset.app));
    });

    window.hubPanels = new HubPanels();
    window.hubPanels.init();
});
