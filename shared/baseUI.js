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
        this.elements.streakCounter.textContent = streak;
    }

    updateLevelName(name) {
        this.elements.levelName.innerHTML = name;
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

    // --- Level grid ---

    renderLevelGrid(levelGroups, onSelect) {
        this.elements.levelSelection.innerHTML = '';

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
                    textContent: bestTime ? `Best: ${new Timer().formatTime(bestTime)}` : 'No time set'
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
            textContent: bestTime ? `Best: ${new Timer().formatTime(bestTime)}` : 'Not attempted'
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
}
