// shared/baseUI.js
// Base class for per-app UI classes.
//
// Subclass contract:
//   - Set this.elements (object of DOM refs) in the subclass constructor
//   - Set this.storage (StorageManager-compatible object) before any level render methods are called
//   - Set this.currentView = 'skill-path' if using the skill-path/grid toggle
//
// Override _getRatingClass(ratingKey) to map true-mastery to a different CSS class (e.g. algebra uses 'queen')
// Override updateStreak(streak) to add animations (e.g. trig pulse animation)
// Override showScreen(screenName) to add side effects (e.g. algebra hides mobile keyboard)

import { Timer } from './timer.js';
import { createEl } from './createEl.js';

// Number of filled circles required to complete a level (matches CONFIG.REQUIRED_STREAK).
export const STREAK_TARGET = 10;

// Second chances available per question. Derived from BaseGameState.isSecondIncorrectAttempt()
// which triggers the reset at consecutiveIncorrect >= 2, i.e. one free retry per question.
export const MAX_SECOND_CHANCES = 1;

export class BaseUI {

    // --- Rating class hook ---

    _getRatingClass(ratingKey) {
        return ratingKey;
    }

    // --- Screen transitions ---

    showScreen(screenName) {
        ['settings', 'game', 'success'].forEach(s => {
            this.elements[`${s}Screen`].classList.toggle('hidden', s !== screenName);
        });
        // Clean up leaderboard side-card when leaving success screen
        if (screenName !== 'success') {
            const container = this.elements.successScreen?.parentElement;
            if (container) container.classList.remove('success-layout');
            const lbCard = document.getElementById('leaderboard-card');
            if (lbCard) lbCard.remove();
            const chartCard = document.getElementById('success-progress-chart-card');
            if (chartCard) chartCard.remove();
        }
    }

    // --- Game HUD ---

    showTimerPausedMessage() {
        if (this.elements.timerPausedMessage) {
            this.elements.timerPausedMessage.classList.remove('hidden');
        }
    }

    hideTimerPausedMessage() {
        if (this.elements.timerPausedMessage) {
            this.elements.timerPausedMessage.classList.add('hidden');
        }
    }

    updateStreak(streak) {
        const container = this.elements.streakCounter;
        if (container) {
            // Build the 10 segments once, then just toggle .filled so CSS transitions run.
            if (container.childElementCount !== STREAK_TARGET) {
                container.textContent = '';
                for (let i = 0; i < STREAK_TARGET; i++) {
                    container.appendChild(createEl('span', { className: 'streak-seg' }));
                }
            }
            const segs = container.children;
            for (let i = 0; i < segs.length; i++) {
                segs[i].classList.toggle('filled', i < streak);
            }
        }

        if (this.elements.streakCount) {
            this.elements.streakCount.textContent = `${streak} / ${STREAK_TARGET}`;
        }
    }

    updateSecondChances(remaining = MAX_SECOND_CHANCES) {
        const container = this.elements.secondChanceCounter;
        if (!container) return;

        const available = remaining > 0;

        // Build the retry indicator (dot + label) once, then update state.
        if (container.childElementCount !== 2) {
            container.textContent = '';
            container.appendChild(createEl('span', { className: 'retry-dot' }));
            container.appendChild(createEl('span', { className: 'retry-label' }));
        }
        container.classList.toggle('spent', !available);
        container.lastChild.textContent = available ? 'retry ready' : 'retry used';
    }

    updateLevelName(name) {
        // Flatten the grid's two-line "Topic<br>Easy" form into one header line.
        this.elements.levelName.innerHTML = (name || '').replace(/<br\s*\/?>/gi, ' ');
        if (this.elements.levelMeta) {
            this.elements.levelMeta.textContent = this.subjectName || '';
        }
    }

    // --- Success screen ---

    setSuccessScreenCallbacks(onReplayLevel, onBackToLevels) {
        this.onReplayLevel = onReplayLevel;
        this.onBackToLevels = onBackToLevels;
    }

    setupSuccessScreenButtons() {
        if (this.elements.replayLevelBtn) {
            this.elements.replayLevelBtn.addEventListener('click', () => {
                if (this.onReplayLevel) this.onReplayLevel();
            });
        }

        if (this.elements.playAgainBtn) {
            this.elements.playAgainBtn.addEventListener('click', () => {
                if (this.onBackToLevels) this.onBackToLevels();
            });
        }

        // Keyboard shortcuts: Enter = replay, Escape = back to levels
        this.handleSuccessScreenKey = (e) => {
            if (this.elements.successScreen.classList.contains('hidden')) return;
            if (e.key === 'Enter') {
                e.preventDefault();
                if (this.onReplayLevel) this.onReplayLevel();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                if (this.onBackToLevels) this.onBackToLevels();
            }
        };
        document.addEventListener('keydown', this.handleSuccessScreenKey);
    }

    _renderRatingTimeline(container, currentRatingKey) {
        const ratings = [
            { key: 'beginner',     name: 'Beginner',    emoji: '🌱' },
            { key: 'developing',   name: 'Developing',  emoji: '🎯' },
            { key: 'expert',       name: 'Expert',      emoji: '⭐' },
            { key: 'mastery',      name: 'Mastery',     emoji: '🏆' },
            { key: 'true-mastery', name: 'Maths Queen', emoji: '💖' },
        ];
        const currentIndex = ratings.findIndex(r => r.key === currentRatingKey);
        container.innerHTML = '';

        ratings.forEach((rating, i) => {
            const isAchieved = i < currentIndex;
            const isCurrent  = i === currentIndex;
            const cls = `success-timeline-item${isAchieved ? ' achieved' : ''}${isCurrent ? ' current' : ''}`;
            const item  = createEl('div', { className: cls });
            const node  = createEl('div', { className: 'success-timeline-node', textContent: rating.emoji });
            const label = createEl('div', { className: 'success-timeline-label', textContent: rating.name });
            item.appendChild(node);
            item.appendChild(label);
            container.appendChild(item);

            if (i < ratings.length - 1) {
                const connector = createEl('div', {
                    className: `success-timeline-connector${isAchieved ? ' achieved' : ''}`
                });
                container.appendChild(connector);
            }
        });
    }

    // --- Level grid ---

    renderLevelGrid(levelGroups, onSelect) {
        if (!this.elements.levelSelection) return;

        // Find first unmastered level to highlight
        let nextLevelKey = null;
        outer: for (const groupName in levelGroups) {
            for (const level of levelGroups[groupName]) {
                const bestTime = this.storage.getBestTime(level.key);
                const rating = bestTime ? this.storage.getRating(bestTime, level.key) : null;
                if (!rating || (rating.key !== 'mastery' && rating.key !== 'true-mastery')) {
                    nextLevelKey = level.key;
                    break outer;
                }
            }
        }

        for (const groupName in levelGroups) {
            const title = createEl('h2', { className: 'level-section-title', textContent: groupName });
            const grid = createEl('div', { className: 'level-grid' });

            levelGroups[groupName].forEach(level => {
                const bestTime = this.storage.getBestTime(level.key);
                const rating = bestTime ? this.storage.getRating(bestTime, level.key) : null;
                const ratingClass = rating ? `rating-${this._getRatingClass(rating.key)}` : 'rating-none';
                const isNext = level.key === nextLevelKey;

                const btn = createEl('div', { className: `level-btn ${ratingClass}${isNext ? ' current' : ''}` });
                btn.dataset.levelKey = level.key;

                const levelTitle = createEl('div', { className: 'level-title', innerHTML: level.name });
                const bestTimeText = createEl('div', {
                    className: 'best-time',
                    textContent: bestTime ? `Best: ${new Timer().formatTime(bestTime, 2)}` : 'No time set'
                });

                btn.append(levelTitle, bestTimeText);
                btn.addEventListener('click', () => {
                    const selected = Object.values(levelGroups).flat().find(l => l.key === btn.dataset.levelKey);
                    onSelect(selected);
                });
                grid.append(btn);
            });
            this.elements.levelSelection.append(title, grid);
        }
    }

    // --- Skill path ---
    // Uses .skill-path-inner as inner flex container inside #skill-path.skill-path-scroll.
    // Both app CSS files must define .skill-path-inner and .skill-path-inner::before.

    renderSkillPath(levelGroups, onSelect) {
        this.elements.skillPath.innerHTML = '';
        const pathContainer = createEl('div', { className: 'skill-path-inner' });

        const allLevels = [];
        let currentSection = '';
        Object.keys(levelGroups).forEach(groupName => {
            levelGroups[groupName].forEach(level => {
                if (groupName !== currentSection) {
                    allLevels.push({ type: 'section', name: groupName });
                    currentSection = groupName;
                }
                allLevels.push({ type: 'level', ...level, groupName });
            });
        });

        let nextAvailableIndex = -1;
        allLevels.forEach((item, index) => {
            if (item.type === 'level' && nextAvailableIndex === -1) {
                const bestTime = this.storage.getBestTime(item.key);
                const rating = bestTime ? this.storage.getRating(bestTime, item.key) : null;
                if (!rating || (rating.key !== 'mastery' && rating.key !== 'true-mastery')) {
                    nextAvailableIndex = index;
                }
            }
        });

        allLevels.forEach((item, index) => {
            if (item.type === 'section') {
                const section = createEl('div', { className: 'skill-path-section' });
                const sectionTitle = createEl('div', { className: 'skill-path-section-title', textContent: item.name });
                section.appendChild(sectionTitle);
                pathContainer.appendChild(section);
            } else if (item.type === 'level') {
                const node = this.createSkillPathNode(item, index === nextAvailableIndex);
                node.addEventListener('click', () => onSelect(item));
                pathContainer.appendChild(node);
            }
        });

        this.elements.skillPath.appendChild(pathContainer);
        this.setupHorizontalScroll(this.elements.skillPath);

        if (nextAvailableIndex !== -1) {
            let levelOnlyIndex = 0;
            for (let i = 0; i < nextAvailableIndex; i++) {
                if (allLevels[i].type === 'level') levelOnlyIndex++;
            }
            setTimeout(() => this.scrollToNextLevel(levelOnlyIndex), 100);
        }
    }

    createSkillPathNode(level, isNext = false) {
        const bestTime = this.storage.getBestTime(level.key);
        const rating = bestTime ? this.storage.getRating(bestTime, level.key) : null;
        const ratingClass = rating ? `rating-${this._getRatingClass(rating.key)}` : 'rating-none';

        const node = createEl('div', {
            className: `skill-path-node ${ratingClass} ${isNext ? 'current' : ''}`
        });
        node.dataset.levelKey = level.key;

        const label = createEl('div', { className: 'skill-path-label', innerHTML: level.name });
        const timeDisplay = createEl('div', {
            className: 'skill-path-time',
            textContent: bestTime ? `Best: ${new Timer().formatTime(bestTime, 2)}` : 'Not attempted'
        });
        node.append(label, timeDisplay);
        return node;
    }

    scrollToNextLevel(levelIndex) {
        const scrollContainer = this.elements.skillPath;
        const levelNodes = scrollContainer.querySelectorAll('.skill-path-node');
        if (!levelNodes[levelIndex]) return;

        const nodeRect = levelNodes[levelIndex].getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const scrollAmount = nodeRect.left - containerRect.left - (containerRect.width / 2) + (nodeRect.width / 2);
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    setupHorizontalScroll(container) {
        container.addEventListener('wheel', (e) => {
            if (container.scrollWidth > container.clientWidth) {
                e.preventDefault();
                container.scrollLeft += e.deltaY * 2;
            }
        });
    }

    // --- Mastery progress bars ---

    renderMasteryProgressBars(progressData) {
        if (!this.elements.masteryProgressBars) return;
        this.elements.masteryProgressBars.innerHTML = '';

        progressData.forEach(topic => {
            const container = createEl('div', { className: 'mb-3' });

            const label = createEl('div', { className: 'mastery-progress-label' });
            const titleSpan = createEl('span', { textContent: topic.name });
            const statsSpan = createEl('span', {
                className: 'mastery-progress-stats',
                textContent: `${topic.masteredCount}/${topic.totalCount} mastered`
            });
            label.append(titleSpan, statsSpan);

            const progressBar = createEl('div', { className: 'mastery-progress-bar' });
            const progressFill = createEl('div', {
                className: 'mastery-progress-fill',
                style: { width: `${topic.percentage}%`, backgroundColor: topic.color }
            });
            if (topic.percentage > 15) {
                progressFill.textContent = `${topic.percentage}%`;
            }
            progressBar.appendChild(progressFill);
            container.append(label, progressBar);
            this.elements.masteryProgressBars.appendChild(container);
        });
    }

    // --- Skill path / grid toggle ---

    setupToggleGridView() {
        if (this.elements.toggleGridView) {
            this.elements.toggleGridView.addEventListener('click', () => this.toggleView());
        }
    }

    toggleView() {
        if (!this.elements.levelSelection || !this.elements.skillPath) return;
        if (this.currentView === 'skill-path') {
            this.currentView = 'grid';
            this.elements.skillPath.classList.add('hidden');
            this.elements.levelSelection.classList.remove('hidden');
            this.elements.toggleGridView.textContent = 'Show Learning Path';
        } else {
            this.currentView = 'skill-path';
            this.elements.levelSelection.classList.add('hidden');
            this.elements.skillPath.classList.remove('hidden');
            this.elements.toggleGridView.textContent = 'Show All Levels';
        }
    }

    // --- Toast notification ---

    showToast(message) {
        if (!this._toastEl) {
            this._toastEl = document.createElement('div');
            this._toastEl.className = 'quit-toast';
            document.body.appendChild(this._toastEl);
        }
        this._toastEl.textContent = message;

        // Anchor just below the input area, using the feedback element as reference
        const anchor = this.elements.feedbackMessage;
        if (anchor) {
            const rect = anchor.getBoundingClientRect();
            this._toastEl.style.top = `${rect.top + rect.height / 2}px`;
            this._toastEl.style.left = `${rect.left + rect.width / 2}px`;
        }

        clearTimeout(this._toastHideTimeout);
        this._toastEl.classList.add('visible');
        this._toastHideTimeout = setTimeout(() => {
            this._toastEl.classList.remove('visible');
        }, 1400);
    }

    updateLevelsInterface(levelGroups, onSelect, masteryData) {
        if (masteryData) {
            this.renderMasteryProgressBars(masteryData);
        }
        if (this.elements.skillPath) {
            this.renderSkillPath(levelGroups, onSelect);
        }
        this.renderLevelGrid(levelGroups, onSelect);
        if (this.currentView === 'skill-path' && this.elements.skillPath) {
            this.elements.levelSelection.classList.add('hidden');
            this.elements.skillPath.classList.remove('hidden');
        }
    }

    // ── Level Select Screen (Hi-Fi redesign) ─────────────────────

    renderLevelSelectScreen(levelGroups, onSelect, config = {}) {
        const {
            subjectName = 'Skills',
            subjectSubtitle = '',
            subjectIcon = '?',
            subjectIconItalic = false,
            accentColor = '#4A7CF7',
            singleLevel = false,
            keyboardTableHTML = null,
        } = config;

        this.subjectName = subjectName;

        const screen = this.elements.settingsScreen;
        if (!screen) return;
        screen.innerHTML = '';

        const body = createEl('div', { className: 'ls-body' });
        const left = this._lsBuildLeft(levelGroups, accentColor, subjectName, subjectSubtitle, subjectIcon, subjectIconItalic);
        const main = this._lsBuildMain(levelGroups, onSelect, accentColor, singleLevel, keyboardTableHTML);
        const right = this._lsBuildRight(levelGroups, accentColor, subjectName);
        body.append(left, main, right);
        screen.appendChild(body);

        this._lsSetupGroupNav(left, main, levelGroups, accentColor);
        this._onSettingsRendered();
    }

    _onSettingsRendered() {}

    // ── Rating visuals ────────────────────────────────────────────

    _lsRatingVisuals(rk) {
        const RT = {
            none:           { emoji: '',   bg: '#f9fafb', grad: null,                                       bc: '#e5e7eb', tc: '#6b7280' },
            beginner:       { emoji: '🌱', bg: '#f8fafc', grad: 'linear-gradient(135deg,#f8fafc,#e2e8f0)',  bc: '#94a3b8', tc: '#334155' },
            developing:     { emoji: '🎯', bg: '#f0fdf4', grad: 'linear-gradient(135deg,#f0fdf4,#bbf7d0)',  bc: '#4ade80', tc: '#15803d' },
            expert:         { emoji: '⭐', bg: '#ecfdf5', grad: 'linear-gradient(135deg,#ecfdf5,#a7f3d0)',  bc: '#34d399', tc: '#065f46' },
            mastery:        { emoji: '🏆', bg: '#fefce8', grad: 'linear-gradient(135deg,#fefce8,#fde68a)',  bc: '#fbbf24', tc: '#92400e' },
            queen:          { emoji: '💖', bg: '#fdf4ff', grad: 'linear-gradient(135deg,#fdf4ff,#f5d0fe)',  bc: '#e879f9', tc: '#a21caf' },
            'true-mastery': { emoji: '💖', bg: '#fdf4ff', grad: 'linear-gradient(135deg,#fdf4ff,#f5d0fe)',  bc: '#e879f9', tc: '#a21caf' },
        };
        return RT[rk] || RT.none;
    }

    _lsFmtMs(ms) {
        const s = Math.round(ms / 1000);
        const m = Math.floor(s / 60), ss = s % 60;
        return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
    }

    _lsIsMastered(rk) {
        return rk === 'mastery' || rk === 'true-mastery' || rk === 'queen';
    }

    _lsLevelRatingKey(levelKey) {
        const bestTime = this.storage.getBestTime(levelKey);
        if (!bestTime) return 'none';
        const rating = this.storage.getRating(bestTime, levelKey);
        return rating ? this._getRatingClass(rating.key) : 'none';
    }

    _lsLevelBestMs(levelKey) {
        return this.storage.getBestTime(levelKey) || null;
    }

    _lsGroupStats(levelGroups) {
        const out = {};
        for (const g in levelGroups) {
            const lvls = levelGroups[g];
            out[g] = {
                mastered: lvls.filter(l => this._lsIsMastered(this._lsLevelRatingKey(l.key))).length,
                total: lvls.length,
            };
        }
        return out;
    }

    _lsAllStats(levelGroups) {
        let masteredCount = 0, totalCount = 0;
        const ratingCounts = { beginner: 0, developing: 0, expert: 0, mastery: 0, queen: 0 };
        for (const g in levelGroups) {
            for (const level of levelGroups[g]) {
                totalCount++;
                const rk = this._lsLevelRatingKey(level.key);
                if (this._lsIsMastered(rk)) masteredCount++;
                const mappedKey = (rk === 'true-mastery') ? 'queen' : rk;
                if (ratingCounts.hasOwnProperty(mappedKey)) ratingCounts[mappedKey]++;
            }
        }
        return { masteredCount, totalCount, ratingCounts };
    }


    _lsGetNextUp(levelGroups) {
        for (const g in levelGroups) {
            for (const level of levelGroups[g]) {
                if (!this._lsIsMastered(this._lsLevelRatingKey(level.key))) return { level, groupName: g };
            }
        }
        return null;
    }

    _lsGetLastPlayed(levelGroups) {
        const dh = window.progressTracker?.getAllProgress() ?? {};
        let lastKey = null, lastTime = 0;
        for (const g in levelGroups) {
            for (const level of levelGroups[g]) {
                const entry = dh[level.key];
                if (entry?.lastAttempt && entry.lastAttempt > lastTime) {
                    lastTime = entry.lastAttempt;
                    lastKey = level.key;
                }
            }
        }
        if (!lastKey) return null;
        for (const g in levelGroups) {
            const level = levelGroups[g].find(l => l.key === lastKey);
            if (level) return { level, groupName: g, bestMs: this._lsLevelBestMs(lastKey) };
        }
        return null;
    }

    _lsGroupAlgebra(levels) {
        const clusters = [];
        for (let i = 0; i < levels.length; i += 3) {
            clusters.push({ topic: levels[i].name.split('<br>')[0], levels: levels.slice(i, i + 3) });
        }
        return clusters;
    }

    _lsDiffInfo(levelKey) {
        if (levelKey.endsWith('Easy'))   return { label: 'Easy', color: '#16a34a' };
        if (levelKey.endsWith('Medium')) return { label: 'Medium', color: '#d97706' };
        if (levelKey.endsWith('Hard'))   return { label: 'Hard', color: '#dc2626' };
        return { label: '', color: '#6b7280' };
    }

    _lsProgressRingSVG(pct, size, color) {
        const r = size * 0.36, circ = 2 * Math.PI * r;
        const safe = isNaN(pct) ? 0 : Math.max(0, Math.min(1, pct));
        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('width', size); svg.setAttribute('height', size);
        svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
        svg.style.flexShrink = '0';

        const track = document.createElementNS(ns, 'circle');
        track.setAttribute('cx', size/2); track.setAttribute('cy', size/2);
        track.setAttribute('r', r); track.setAttribute('fill', 'none');
        track.setAttribute('stroke', '#e5e7eb'); track.setAttribute('stroke-width', size*0.1);

        const fill = document.createElementNS(ns, 'circle');
        fill.setAttribute('cx', size/2); fill.setAttribute('cy', size/2);
        fill.setAttribute('r', r); fill.setAttribute('fill', 'none');
        fill.setAttribute('stroke', color); fill.setAttribute('stroke-width', size*0.1);
        fill.setAttribute('stroke-dasharray', `${circ*safe} ${circ*(1-safe)}`);
        fill.setAttribute('stroke-linecap', 'round');
        fill.setAttribute('transform', `rotate(-90 ${size/2} ${size/2})`);

        const text = document.createElementNS(ns, 'text');
        text.setAttribute('x', size/2); text.setAttribute('y', size/2 + size*0.07);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', size*0.2); text.setAttribute('font-weight', '700');
        text.setAttribute('font-family', 'Inter,system-ui,sans-serif'); text.setAttribute('fill', '#1f2937');
        text.textContent = `${Math.round(safe*100)}%`;

        svg.append(track, fill, text);
        return svg;
    }

    // ── Left sidebar ──────────────────────────────────────────────

    _lsBuildLeft(levelGroups, color, name, subtitle, icon, iconItalic) {
        const aside = createEl('aside', { className: 'ls-left' });

        // Subject badge
        const badge = createEl('div', { className: 'ls-subject-badge' });
        const iconEl = createEl('div', { className: 'ls-subject-icon' });
        iconEl.style.background = color;
        if (iconItalic) iconEl.style.fontStyle = 'italic';
        iconEl.textContent = icon;
        const nameDiv = createEl('div');
        nameDiv.appendChild(createEl('div', { className: 'ls-subject-name', textContent: name }));
        nameDiv.appendChild(createEl('div', { className: 'ls-subject-subtitle', textContent: subtitle }));
        badge.append(iconEl, nameDiv);
        aside.appendChild(badge);

        aside.appendChild(createEl('div', { className: 'ls-divider' }));
        aside.appendChild(createEl('div', { className: 'ls-section-label', textContent: 'Topics' }));

        // Group nav buttons
        const btnsContainer = createEl('div', { className: 'ls-group-btns' });
        const groupBtns = {};
        for (const groupName in levelGroups) {
            const lvls = levelGroups[groupName];
            const mastered = lvls.filter(l => this._lsIsMastered(this._lsLevelRatingKey(l.key))).length;
            const pct = lvls.length ? mastered / lvls.length : 0;

            const btn = createEl('button', { className: 'ls-group-btn' });
            const top = createEl('div', { className: 'ls-group-btn-top' });
            top.appendChild(createEl('span', { className: 'ls-group-btn-name', textContent: groupName }));
            top.appendChild(createEl('span', { className: 'ls-group-btn-count', textContent: `${mastered}/${lvls.length}` }));
            const track = createEl('div', { className: 'ls-mini-bar-track' });
            const fill = createEl('div', { className: 'ls-mini-bar-fill' });
            fill.style.width = `${pct > 0 ? Math.max(pct * 100, 5) : 0}%`;
            fill.style.background = color;
            track.appendChild(fill);
            btn.append(top, track);
            groupBtns[groupName] = btn;
            btnsContainer.appendChild(btn);
        }
        aside.appendChild(btnsContainer);

        const footer = createEl('div', { className: 'ls-footer' });
        footer.innerHTML = 'Found a bug? Email<br>jding@plc.nsw.edu.au';
        aside.appendChild(footer);

        aside._groupBtns = groupBtns;
        aside._color = color;
        return aside;
    }

    _lsSetupGroupNav(leftEl, mainEl, levelGroups, color) {
        const btns = leftEl._groupBtns;
        if (!btns) return;
        let activeGroup = null;

        const allSections = () => mainEl.querySelectorAll('[data-ls-group]');

        const clearActive = () => {
            for (const b of Object.values(btns)) {
                b.style.borderColor = '#e5e7eb';
                b.style.background = 'transparent';
                const nameEl = b.querySelector('.ls-group-btn-name');
                if (nameEl) { nameEl.style.color = '#1f2937'; nameEl.style.fontWeight = '400'; }
            }
            for (const sec of allSections()) sec.style.display = '';
            activeGroup = null;
        };

        for (const groupName in levelGroups) {
            const btn = btns[groupName];
            if (!btn) continue;
            btn.addEventListener('click', () => {
                if (activeGroup === groupName) {
                    clearActive();
                    return;
                }
                clearActive();
                activeGroup = groupName;

                // Highlight active btn
                btn.style.borderColor = color;
                btn.style.background = `${color}12`;
                const activeNameEl = btn.querySelector('.ls-group-btn-name');
                if (activeNameEl) { activeNameEl.style.color = color; activeNameEl.style.fontWeight = '600'; }

                // Show only this group's section
                for (const sec of allSections()) {
                    sec.style.display = sec.dataset.lsGroup === groupName ? '' : 'none';
                }

                const activeSection = mainEl.querySelector(`[data-ls-group="${groupName.replace(/"/g, '\\"')}"]`);
                if (activeSection) activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    }

    // ── Main content ──────────────────────────────────────────────

    _lsBuildMain(levelGroups, onSelect, color, singleLevel, keyboardTableHTML) {
        const main = createEl('main', { className: 'ls-main' });

        // Quick cards
        const nextUp = this._lsGetNextUp(levelGroups);
        const lastPlayed = this._lsGetLastPlayed(levelGroups);
        if (nextUp || lastPlayed) {
            main.appendChild(this._lsBuildQuickCards(nextUp, lastPlayed, onSelect, color, singleLevel));
        }

        // Level group sections
        const nextUpKey = nextUp?.level?.key;
        for (const groupName in levelGroups) {
            const levels = levelGroups[groupName];
            const mastered = levels.filter(l => this._lsIsMastered(this._lsLevelRatingKey(l.key))).length;

            const section = createEl('div', { className: 'ls-group-section' });
            section.id = `ls-group-${CSS.escape(groupName)}`;
            section.dataset.lsGroup = groupName;

            const heading = createEl('div', { className: 'ls-group-heading' });
            heading.appendChild(createEl('h2', { textContent: groupName }));
            heading.appendChild(createEl('span', { className: 'ls-group-heading-count', textContent: `${mastered}/${levels.length} mastered` }));
            section.appendChild(heading);

            if (singleLevel) {
                const tilesWrap = createEl('div', { className: 'ls-level-tiles' });
                for (const level of levels) {
                    tilesWrap.appendChild(this._lsBuildLevelTile(level, onSelect, color, level.key === nextUpKey));
                }
                section.appendChild(tilesWrap);
            } else {
                for (const cluster of this._lsGroupAlgebra(levels)) {
                    section.appendChild(this._lsBuildHybridRow(cluster, onSelect, color, nextUpKey));
                }
            }
            main.appendChild(section);
        }

        // Optional keyboard shortcuts table (Algebra)
        if (keyboardTableHTML) {
            const wrap = createEl('div', { className: 'ls-keyboard-table' });
            wrap.innerHTML = keyboardTableHTML;
            main.appendChild(wrap);
        }

        return main;
    }

    _lsBuildQuickCards(nextUp, lastPlayed, onSelect, color, singleLevel) {
        const wrap = createEl('div', { className: 'ls-quick-cards' });

        if (nextUp) {
            const card = createEl('div', { className: 'ls-quick-card' });
            const info = createEl('div', { className: 'ls-quick-info' });
            info.appendChild(createEl('div', { className: 'ls-quick-label', textContent: 'Next up' }));
            const titleEl = createEl('div', { className: 'ls-quick-title' });
            titleEl.textContent = nextUp.level.name.split('<br>')[0];
            if (!singleLevel) {
                const diff = this._lsDiffInfo(nextUp.level.key);
                if (diff.label) {
                    const ds = createEl('span');
                    ds.style.cssText = `color:${diff.color};font-size:12px;font-weight:600;margin-left:4px`;
                    ds.textContent = diff.label;
                    titleEl.appendChild(ds);
                }
            }
            info.appendChild(titleEl);
            const startBtn = createEl('button', { className: 'ls-quick-start-btn', textContent: 'Start →' });
            startBtn.style.background = color;
            startBtn.addEventListener('click', () => onSelect(nextUp.level));
            card.append(info, startBtn);
            wrap.appendChild(card);
        }

        if (lastPlayed) {
            const card = createEl('div', { className: 'ls-quick-card' });
            const info = createEl('div', { className: 'ls-quick-info' });
            info.appendChild(createEl('div', { className: 'ls-quick-label', textContent: 'Last played' }));
            const titleEl = createEl('div', { className: 'ls-quick-title' });
            titleEl.textContent = lastPlayed.level.name.split('<br>')[0];
            if (!singleLevel) {
                const diff = this._lsDiffInfo(lastPlayed.level.key);
                if (diff.label) {
                    const ds = createEl('span');
                    ds.style.cssText = `color:${diff.color};font-size:12px;font-weight:600;margin-left:4px`;
                    ds.textContent = diff.label;
                    titleEl.appendChild(ds);
                }
            }
            info.appendChild(titleEl);
            const playBtn = createEl('button', { className: 'ls-quick-start-btn', textContent: 'Start →' });
            playBtn.style.background = color;
            playBtn.addEventListener('click', () => onSelect(lastPlayed.level));
            card.append(info, playBtn);
            wrap.appendChild(card);
        }

        return wrap;
    }

    _lsBuildHybridRow(cluster, onSelect, color, nextUpKey) {
        const row = createEl('div', { className: 'ls-hybrid-row' });
        row.appendChild(createEl('div', { className: 'ls-hybrid-topic', textContent: cluster.topic }));
        const tilesWrap = createEl('div', { className: 'ls-hybrid-tiles' });
        for (const level of cluster.levels) {
            tilesWrap.appendChild(this._lsBuildHybridTile(level, onSelect, level.key === nextUpKey));
        }
        row.appendChild(tilesWrap);
        return row;
    }

    _lsBuildHybridTile(level, onSelect, isCurrent) {
        const rk = this._lsLevelRatingKey(level.key);
        const rv = this._lsRatingVisuals(rk);
        const diff = this._lsDiffInfo(level.key);
        const bestMs = this._lsLevelBestMs(level.key);

        const showCurrentStyle = isCurrent && !bestMs;

        const tile = createEl('button', { className: `ls-hybrid-tile${isCurrent ? ' ls-current' : ''}` });
        tile.classList.add(`rating-${rk}`);
        tile.style.background = showCurrentStyle ? 'rgba(59,130,246,0.04)' : (rv.grad || rv.bg);
        tile.style.borderColor = showCurrentStyle ? '#3b82f6' : rv.bc;

        const top = createEl('div', { className: 'ls-hybrid-tile-top' });
        const diffLabel = createEl('div', { className: 'ls-diff-label' });
        const dot = createEl('span', { className: 'ls-diff-dot' });
        dot.style.background = diff.color;
        const diffText = createEl('span', { className: 'ls-diff-text', textContent: diff.label });
        diffText.style.color = diff.color;
        diffLabel.append(dot, diffText);
        const ratingIcon = createEl('span', { className: 'ls-tile-rating-icon' });
        ratingIcon.textContent = isCurrent ? '▶' : (rv.emoji || '');
        top.append(diffLabel, ratingIcon);

        const timeEl = createEl('div', { className: 'ls-hybrid-tile-time' });
        timeEl.style.color = showCurrentStyle ? '#2563eb' : (bestMs ? rv.tc : '#d1d5db');
        timeEl.style.fontSize = showCurrentStyle ? '11px' : (bestMs ? '13px' : '11px');
        timeEl.style.fontWeight = showCurrentStyle ? '600' : (bestMs ? '700' : '400');
        timeEl.textContent = showCurrentStyle ? 'Start here' : (bestMs ? this._lsFmtMs(bestMs) : '—');

        tile.append(top, timeEl);
        tile.addEventListener('click', () => onSelect(level));
        return tile;
    }

    _lsBuildLevelTile(level, onSelect, color, isCurrent) {
        const rk = this._lsLevelRatingKey(level.key);
        const rv = this._lsRatingVisuals(rk);
        const bestMs = this._lsLevelBestMs(level.key);
        const topicName = level.name.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').trim();

        const showCurrentStyle = isCurrent && !bestMs;

        const tile = createEl('button', { className: `ls-level-tile${isCurrent ? ' ls-current' : ''}` });
        tile.classList.add(`rating-${rk}`);
        tile.style.background = showCurrentStyle ? 'rgba(59,130,246,0.04)' : (rv.grad || rv.bg);
        tile.style.borderColor = showCurrentStyle ? '#3b82f6' : rv.bc;

        const top = createEl('div', { className: 'ls-tile-top' });
        top.appendChild(createEl('span', { className: 'ls-tile-next-badge', textContent: isCurrent ? '▶ Next up' : '' }));
        const emojiEl = createEl('span');
        emojiEl.style.fontSize = '15px'; emojiEl.style.lineHeight = '1';
        emojiEl.textContent = showCurrentStyle ? '' : (rv.emoji || '');
        top.appendChild(emojiEl);

        const nameEl = createEl('div', { className: 'ls-tile-name', textContent: topicName });
        nameEl.style.color = showCurrentStyle ? '#1d4ed8' : (bestMs ? rv.tc : '');

        const timeEl = createEl('div', { className: 'ls-tile-time' });
        timeEl.style.color = showCurrentStyle ? '#2563eb' : (bestMs ? rv.tc : '#6b7280');
        timeEl.style.fontWeight = (isCurrent || bestMs) ? '600' : '400';
        timeEl.textContent = showCurrentStyle ? 'Start here' : (bestMs ? this._lsFmtMs(bestMs) : 'Not attempted');

        tile.append(top, nameEl, timeEl);
        tile.addEventListener('click', () => onSelect(level));
        return tile;
    }

    // ── Right sidebar ─────────────────────────────────────────────

    _lsBuildRight(levelGroups, color, subjectName) {
        const aside = createEl('aside', { className: 'ls-right' });
        const { masteredCount, totalCount } = this._lsAllStats(levelGroups);

        // Progress button — opens the existing progressUI modal
        const progressBtn = createEl('button', { className: 'ls-progress-btn' });
        progressBtn.style.borderColor = color; progressBtn.style.color = color;
        progressBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg><span>Progress</span>`;
        progressBtn.addEventListener('click', () => window.progressUI?.show());
        aside.appendChild(progressBtn);

        // Summary cards — old inline-summary-cards style, data from progressTracker
        const summary = window.progressTracker?.getProgressSummary?.() ?? {};
        const timeStr = window.progressShare?.formatTime?.(summary.totalTimeSpent ?? 0) ?? '0:00';
        const summaryCards = [
            { icon: '📚', val: summary.totalAttempts ?? 0,                     lbl: 'Total Attempts' },
            { icon: '✅', val: summary.totalQuestionsAnswered ?? 0,             lbl: 'Questions Answered' },
            { icon: '⏱️', val: timeStr,                                         lbl: 'Time Practising' },
            { icon: '📈', val: `${summary.averageImprovement || 0}%`,           lbl: 'Avg Improvement' },
        ];
        const grid = createEl('div', { className: 'ls-sidebar-summary' });
        for (const s of summaryCards) {
            const card = createEl('div', { className: 'summary-card' });
            card.appendChild(createEl('div', { className: 'card-icon', textContent: s.icon }));
            card.appendChild(createEl('div', { className: 'card-value', textContent: String(s.val) }));
            card.appendChild(createEl('div', { className: 'card-label', textContent: s.lbl }));
            grid.appendChild(card);
        }
        aside.appendChild(grid);
        aside.appendChild(createEl('div', { className: 'ls-hr' }));

        // Overall ring
        const overallWrap = createEl('div', { className: 'ls-overall-ring' });
        overallWrap.appendChild(this._lsProgressRingSVG(totalCount > 0 ? masteredCount / totalCount : 0, 76, color));
        const ringLabel = createEl('span', { className: 'ls-ring-label' });
        ringLabel.appendChild(document.createTextNode(`${masteredCount} / ${totalCount}`));
        ringLabel.appendChild(createEl('span', { textContent: 'mastered' }));
        overallWrap.appendChild(ringLabel);
        aside.appendChild(overallWrap);
        aside.appendChild(createEl('div', { className: 'ls-hr' }));

        // Per-section rings
        const secWrap = createEl('div');
        secWrap.appendChild(createEl('div', { className: 'ls-section-rings-label', textContent: 'By section' }));
        const rings = createEl('div', { className: 'ls-section-rings' });
        for (const g in levelGroups) {
            const lvls = levelGroups[g];
            const gM = lvls.filter(l => this._lsIsMastered(this._lsLevelRatingKey(l.key))).length;
            const row = createEl('div', { className: 'ls-section-ring-row' });
            row.appendChild(this._lsProgressRingSVG(lvls.length ? gM / lvls.length : 0, 44, color));
            const info = createEl('div', { className: 'ls-section-ring-info' });
            info.appendChild(createEl('div', { className: 'ls-section-ring-name', textContent: g }));
            info.appendChild(createEl('div', { className: 'ls-section-ring-count', textContent: `${gM}/${lvls.length}` }));
            row.appendChild(info);
            rings.appendChild(row);
        }
        secWrap.appendChild(rings);
        aside.appendChild(secWrap);
        aside.appendChild(createEl('div', { className: 'ls-hr' }));

        return aside;
    }

}
