import { CONFIG } from './config.js';
import { Timer } from '../shared/timer.js';
import { StorageManager } from './storageManager.js';
import { RatingUtils } from '../shared/ratingUtils.js';
import { QuadrantDiagramRenderer } from './quadrantDiagramRenderer.js';
import { BaseUI } from '../shared/baseUI.js';

const INLINE_SHORTCUTS = {
    pi: '\\pi', theta: '\\theta', alpha: '\\alpha', beta: '\\beta',
    gamma: '\\gamma', delta: '\\delta', epsilon: '\\epsilon', zeta: '\\zeta',
    eta: '\\eta', mu: '\\mu', nu: '\\nu', xi: '\\xi', rho: '\\rho',
    sigma: '\\sigma', tau: '\\tau', phi: '\\phi', chi: '\\chi', psi: '\\psi',
    omega: '\\omega',
};

const configureMathLiveGlobals = () => window.MathRenderer?.configureMathLiveGlobals();
const renderStaticLatex = (container, latex) => window.MathRenderer?.renderStaticLatex(container, latex);

export class TrigUI extends BaseUI {
    constructor() {
        super();
        this.elements = {
            settingsScreen: document.getElementById('settings-screen'),
            gameScreen: document.getElementById('game-screen'),
            successScreen: document.getElementById('success-screen'),
            levelSelection: document.getElementById('level-selection-container'),
            streakCounter: document.getElementById('streak-counter'),
            streakCount: document.getElementById('streak-count'),
            secondChanceCounter: document.getElementById('second-chance-counter'),
            timer: document.getElementById('timer'),
            diagramContainer: document.getElementById('diagram-container'),
            diagramCanvas: document.getElementById('quadrant-diagram'),
            questionText: document.getElementById('question-text'),
            mathFieldInput: document.getElementById('math-field-input'),
            feedbackMessage: document.getElementById('feedback-message'),
            timerPausedMessage: document.getElementById('timer-paused-message'),
            quitBtn: document.getElementById('quit-btn'),
            replayLevelBtn: document.getElementById('replay-level-btn'),
            nextLevelBtn: document.getElementById('next-level-btn'),
            playAgainBtn: document.getElementById('play-again-btn'),
            completedLevel: document.getElementById('completed-level'),
            finalTime: document.getElementById('final-time'),
            ratingEmoji: document.getElementById('rating-emoji'),
            finalRating: document.getElementById('final-rating'),
            ratingIconCircle: document.getElementById('rating-icon-circle'),
            newBestBadge: document.getElementById('new-best-badge'),
            previousBestSection: document.getElementById('previous-best-section'),
            previousBestTime: document.getElementById('previous-best-time'),
            ratingTimeline: document.getElementById('rating-timeline'),
            ratingHint: document.getElementById('rating-hint'),
            ratingHintText: document.getElementById('rating-hint-text'),
            levelName: document.getElementById('level-name'),
            levelMeta: document.getElementById('level-meta'),
        };

        this.storage = StorageManager;
        this.diagramRenderer = new QuadrantDiagramRenderer(this.elements.diagramCanvas);
        this.mathField = this.elements.mathFieldInput;
        this.mathFieldConfigured = false;
        this.onReplayLevel = null;
        this.onBackToLevels = null;
        this.setupSuccessScreenButtons();
    }

    // --- Question display ---

    displayQuestion(question, levelType) {
        this.elements.questionText.innerHTML = '';

        if ((levelType === 'quadrant' || levelType === 'equivalent' || levelType === 'reference_angles' || levelType === 'reference_angles_rad') && question.angleDeg) {
            this.elements.diagramContainer.classList.remove('hidden');
            if (levelType === 'reference_angles' || levelType === 'reference_angles_rad') {
                this.diagramRenderer.drawReferenceAngleDiagram(question.angleDeg);
            } else {
                this.diagramRenderer.draw(question.angleDeg, question.quadrant);
            }
        } else {
            this.elements.diagramContainer.classList.add('hidden');
        }

        this.adjustInputWidth(question.type);

        if (question.format.includes('\n')) {
            const paragraphs = question.format.split('\n\n').filter(p => p.trim());

            const multilineContainer = document.createElement('div');
            multilineContainer.style.display = 'flex';
            multilineContainer.style.flexDirection = 'column';
            multilineContainer.style.alignItems = 'flex-start';
            multilineContainer.style.gap = '1rem';
            multilineContainer.style.marginLeft = '2rem';

            paragraphs.forEach((paragraph) => {
                const paraDiv = document.createElement('div');
                const parts = paragraph.split('\\_\\_\\_');

                if (parts.length === 2) {
                    const firstPart = document.createElement('span');
                    this.renderMath(parts[0], firstPart);

                    const inputWrapper = document.createElement('span');
                    inputWrapper.style.marginLeft = '0.5rem';
                    inputWrapper.style.marginRight = '0.5rem';
                    inputWrapper.appendChild(this.elements.mathFieldInput);

                    const secondPart = document.createElement('span');
                    this.renderMath(parts[1], secondPart);

                    paraDiv.appendChild(firstPart);
                    paraDiv.appendChild(inputWrapper);
                    paraDiv.appendChild(secondPart);
                } else {
                    const paraPart = document.createElement('span');
                    this.renderMath(paragraph, paraPart);
                    paraDiv.appendChild(paraPart);
                }

                multilineContainer.appendChild(paraDiv);
            });

            this.elements.questionText.appendChild(multilineContainer);
        } else {
            const parts = question.format.split('\\_\\_\\_');

            if (parts.length === 2) {
                const firstPart = document.createElement('span');
                this.renderMath(parts[0], firstPart);

                const inputWrapper = document.createElement('span');
                inputWrapper.appendChild(this.elements.mathFieldInput);

                const secondPart = document.createElement('span');
                this.renderMath(parts[1], secondPart);

                this.elements.questionText.appendChild(firstPart);
                this.elements.questionText.appendChild(inputWrapper);
                this.elements.questionText.appendChild(secondPart);
            } else {
                this.renderMath(question.format, this.elements.questionText);
            }
        }

        this.initializeMathField();
        this.enableInput();
    }

    renderMath(latex, container) {
        renderStaticLatex(container, latex);
    }

    initializeMathField() {
        configureMathLiveGlobals();
        const field = this.mathField;
        if (!field) return;

        if (!this.mathFieldConfigured) {
            field.mathVirtualKeyboardPolicy = 'manual';
            field.inlineShortcuts = { ...field.inlineShortcuts, ...INLINE_SHORTCUTS };
            field.menuItems = [];
            field.addEventListener('pointerdown', (e) => {
                if (e.target === field) field.focus();
            });
            // MathLive fires 'change' on commit (the Return key — including the virtual
            // keyboard's, which doesn't emit a DOM keydown) and on blur. Only submit on a
            // focused commit so blurring the field doesn't auto-submit.
            field.addEventListener('change', () => {
                if (field.hasFocus && field.hasFocus()) {
                    document.dispatchEvent(new CustomEvent('math-enter'));
                }
            });
            this.mathFieldConfigured = true;
        }

        field.value = '';
        field.classList.remove('correct', 'incorrect');
        field.focus();
    }

    addAutoParentheses(latex) {
        const trigFunctions = ['sin', 'cos', 'tan', 'cot', 'sec', 'csc'];

        let result = latex;

        for (const func of trigFunctions) {
            const pattern = new RegExp(`(\\\\${func})([0-9]+(?:\\.[0-9]+)?|\\\\pi|\\\\frac\\{[^}]+\\}\\{[^}]+\\})(?!\\()`, 'g');
            result = result.replace(pattern, `$1\\left($2\\right)`);

            const simplePattern = new RegExp(`(${func})([0-9]+(?:\\.[0-9]+)?|pi|frac\\{[^}]+\\}\\{[^}]+\\})(?!\\()`, 'g');
            result = result.replace(simplePattern, `$1($2)`);
        }

        return result;
    }

    adjustInputWidth(questionType) {
        const inputElement = this.elements.mathFieldInput;

        if (questionType === 'equivalent') {
            inputElement.style.minWidth = '240px';
            inputElement.style.width = '240px';
        } else {
            inputElement.style.minWidth = '160px';
            inputElement.style.width = '160px';
        }
    }

    getAnswerFromUI() {
        if (!this.mathField) return '';
        const rawLatex = (this.mathField.value || '').trim();
        return this.addAutoParentheses(rawLatex);
    }

    clearAnswer() {
        if (this.mathField) {
            this.mathField.value = '';
            this.mathField.focus();
        }
        this.elements.mathFieldInput.classList.remove('correct', 'incorrect');
    }

    showInputFeedback(isCorrect) {
        this.elements.mathFieldInput.classList.remove('correct', 'incorrect');
        this.elements.mathFieldInput.classList.add(isCorrect ? 'correct' : 'incorrect');
    }

    disableInput() {
        if (this.mathField) {
            this.mathField.disabled = true;
        }
    }

    enableInput() {
        if (this.mathField) {
            this.mathField.disabled = false;
            this.mathField.focus();
        }
    }

    // --- Feedback ---

    showFeedback(isCorrect, message, correctAnswer = null, userAnswer = null) {
        this.elements.feedbackMessage.innerHTML = '';
        this.elements.feedbackMessage.className = `feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

        if (correctAnswer) {
            const grid = document.createElement('div');
            grid.className = 'feedback-answer-grid';

            if (userAnswer && String(userAnswer).trim() !== '') {
                const yourLabel = document.createElement('span');
                yourLabel.className = 'feedback-answer-label';
                yourLabel.textContent = 'Your answer:';
                grid.appendChild(yourLabel);

                const yourSpan = document.createElement('span');
                yourSpan.className = 'feedback-answer-your inline-block';
                grid.appendChild(yourSpan);
                this.renderMath(userAnswer, yourSpan);
            }

            const correctLabel = document.createElement('span');
            correctLabel.className = 'feedback-answer-label';
            correctLabel.textContent = 'Correct answer:';
            grid.appendChild(correctLabel);

            const correctSpan = document.createElement('span');
            correctSpan.className = 'feedback-answer-correct inline-block';
            grid.appendChild(correctSpan);
            this.renderMath(correctAnswer, correctSpan);

            this.elements.feedbackMessage.appendChild(grid);
        } else if (message) {
            this.elements.feedbackMessage.textContent = message;
        }
    }

    clearFeedback() {
        this.elements.feedbackMessage.innerHTML = '';
        this.elements.feedbackMessage.className = 'feedback';
    }

    // --- Success screen ---

    showSuccess(levelName, time, rating, isNewBest, previousBest, levelKey, requiredStreak) {
        const ratingEmojis = {
            'true-mastery': '💖',
            'mastery': '🏆',
            'expert': '⭐',
            'developing': '🎯',
            'beginner': '🌱',
        };

        // Header
        this.elements.completedLevel.textContent = levelName;
        this.elements.finalRating.textContent = rating.name;
        this.elements.ratingEmoji.textContent = ratingEmojis[rating.key] || '🏅';
        this.elements.ratingIconCircle.className = `success-icon-circle rating-${this._getRatingClass(rating.key)}`;

        // Time
        const timer = new Timer();
        this.elements.finalTime.textContent = timer.formatTime(time, 2);

        // New best badge
        this.elements.newBestBadge.classList.toggle('hidden', !isNewBest);

        // Previous best
        if (previousBest) {
            this.elements.previousBestSection.classList.remove('hidden');
            this.elements.previousBestTime.textContent = timer.formatTime(previousBest, 2);
        } else {
            this.elements.previousBestSection.classList.add('hidden');
        }

        // Rating timeline
        this._renderRatingTimeline(this.elements.ratingTimeline, rating.key);

        // Next rating hint
        try {
            const nextTarget = RatingUtils.getNextRatingTarget(rating, levelKey, CONFIG.REQUIRED_STREAK, CONFIG);
            if (nextTarget) {
                const t = timer.formatTime(nextTarget.targetTime, 2);
                this.elements.ratingHintText.innerHTML =
                    `Finish in <strong class="success-hint-time">${t}</strong> or faster to unlock <strong class="success-hint-rating">${nextTarget.nextRating.name}</strong>`;
                this.elements.ratingHint.querySelector('.success-hint-icon').textContent =
                    ratingEmojis[nextTarget.nextRating.key] || '🏆';
                this.elements.ratingHint.classList.remove('hidden');
            } else {
                this.elements.ratingHint.classList.add('hidden');
            }
        } catch (error) {
            console.error('Failed to set rating hint:', error);
            this.elements.ratingHint.classList.add('hidden');
        }

        this.showScreen('success');
    }
}
