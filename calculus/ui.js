// ui.js
import { CONFIG } from './config.js';
import { createEl } from '../shared/createEl.js';
import { Timer } from '../shared/timer.js';
import { StorageManager } from './storage.js';
import { BaseUI } from '../shared/baseUI.js';

function focusWhenReady(field, attempts = 10) {
    try {
        field.focus();
    } catch {
        if (attempts > 0) setTimeout(() => focusWhenReady(field, attempts - 1), 50);
    }
}

const INLINE_SHORTCUTS = {
    pi: '\\pi',
    theta: '\\theta',
    sqrt: '\\sqrt{#?}',
    nthroot: '\\sqrt[#?]{#?}',
};

const configureMathLiveGlobals = () => window.MathRenderer?.configureMathLiveGlobals();
const renderStaticLatex = (container, latex) => window.MathRenderer?.renderStaticLatex(container, latex);

export class UI extends BaseUI {
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
            levelName: document.getElementById('level-name'),
            levelMeta: document.getElementById('level-meta'),
            timer: document.getElementById('timer'),
            timerPausedMessage: document.getElementById('timer-paused-message'),
            questionText: document.getElementById('question-text'),
            feedbackMessage: document.getElementById('feedback-message'),
            testAnswerContent: document.getElementById('test-answer-content'),
            quitBtn: document.getElementById('quit-btn'),
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
            skillPathContainer: document.getElementById('skill-path-container'),
            masteryProgressBars: document.getElementById('mastery-progress-bars'),
            replayLevelBtn: document.getElementById('replay-level-btn'),
            nextLevelBtn: document.getElementById('next-level-btn'),
        };
        this.storage = StorageManager;
        this.mathField = null;
        this.currentView = 'grid';
        this.setupSuccessScreenButtons();
    }

    // --- Rating class override ---

    _getRatingClass(ratingKey) {
        return ratingKey === 'true-mastery' ? 'queen' : ratingKey;
    }

    // --- Settings rendered hook ---

    _onSettingsRendered() {
        this.initializeMathInputs();
    }

    // --- Static math examples on the level select screen ---

    initializeMathInputs() {
        configureMathLiveGlobals();
        const staticExamples = [
            'power-example',
            'fraction-example',
            'sqrt-example',
            'nthroot-example',
        ];
        staticExamples.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const latex = element.textContent.trim();
                renderStaticLatex(element, latex);
            }
        });
    }

    // --- Question display ---

    displayQuestion(question) {
        this.elements.questionText.innerHTML = '';

        if (question.hint) {
            const hintLine = createEl('div', { className: 'question-hint', textContent: question.hint });
            this.elements.questionText.appendChild(hintLine);
        }

        const problemLineContainer = createEl('div', { className: 'problem-line' });
        this.elements.questionText.appendChild(problemLineContainer);

        const problemContainer = createEl('span');
        problemLineContainer.appendChild(problemContainer);
        renderStaticLatex(problemContainer, question.problem);

        const answerLineContainer = createEl('div', { className: 'answer-line' });
        this.elements.questionText.appendChild(answerLineContainer);

        const equalsSign = createEl('span', {
            className: 'equals-sign',
            textContent: ' = '
        });
        answerLineContainer.appendChild(equalsSign);

        const answerField = document.createElement('math-field');
        answerField.classList.add('math-field-answer');
        answerLineContainer.appendChild(answerField);

        configureMathLiveGlobals();

        answerField.mathVirtualKeyboardPolicy = 'manual';
        answerField.inlineShortcuts = { ...answerField.inlineShortcuts, ...INLINE_SHORTCUTS };
        answerField.menuItems = [];
        answerField.smartSuperscript = false;   // keep cursor inside exponent; right-arrow to exit

        answerField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.dispatchEvent(new CustomEvent('math-enter'));
            }
        });

        // MathLive fires 'change' on commit (the Return key — including the virtual
        // keyboard's, which doesn't emit a DOM keydown) and on blur. Only submit on a
        // focused commit so blurring the field doesn't auto-submit.
        answerField.addEventListener('change', () => {
            if (answerField.hasFocus && answerField.hasFocus()) {
                document.dispatchEvent(new CustomEvent('math-enter'));
            }
        });

        answerField.addEventListener('pointerdown', (e) => {
            if (e.target === answerField) answerField.focus();
        });

        this.mathField = answerField;

        setTimeout(() => {
            focusWhenReady(answerField);
        }, 100);
    }

    getAnswerFromUI() {
        if (!this.mathField) return null;
        return this.mathField.value;
    }

    clearAnswer() {
        if (this.mathField) {
            this.mathField.value = '';
            this.mathField.focus();
        }
    }

    // --- Feedback ---

    showFeedback(isCorrect, message, correctAnswer = null, question = null, userAnswer = null) {
        this.elements.feedbackMessage.innerHTML = '';
        this.elements.feedbackMessage.className = `feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

        if (!isCorrect && correctAnswer) {
            const grid = createEl('div', { className: 'feedback-answer-grid' });

            if (userAnswer && String(userAnswer).trim() !== '') {
                grid.appendChild(createEl('span', { className: 'feedback-answer-label', textContent: 'Your answer:' }));
                const yourSpan = createEl('span', { className: 'feedback-answer-your inline-block' });
                grid.appendChild(yourSpan);
                renderStaticLatex(yourSpan, userAnswer);
            }

            grid.appendChild(createEl('span', { className: 'feedback-answer-label', textContent: 'Correct answer:' }));
            const correctSpan = createEl('span', { className: 'feedback-answer-correct inline-block' });
            grid.appendChild(correctSpan);
            renderStaticLatex(correctSpan, correctAnswer);

            this.elements.feedbackMessage.appendChild(grid);
        } else {
            this.elements.feedbackMessage.textContent = message;
        }
    }

    clearFeedback() {
        this.elements.feedbackMessage.textContent = '';
    }

    updateTestAnswer(answer) {
        if (this.elements.testAnswerContent) {
            renderStaticLatex(this.elements.testAnswerContent, answer);
        }
    }

    showInputFeedback(isCorrect) {
        if (this.mathField) {
            this.mathField.classList.remove('correct', 'incorrect');
            this.mathField.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    }

    clearInputFeedback() {
        if (this.mathField) {
            this.mathField.classList.remove('correct', 'incorrect');
        }
    }

    // --- Success screen ---

    showSuccess(levelName, time, rating, isNewBest, previousBest, levelKey, questionCount) {
        const ratingEmojis = {
            'true-mastery': '💖',
            'mastery': '🏆',
            'expert': '⭐',
            'developing': '🎯',
            'beginner': '🌱',
        };

        // Header
        this.elements.completedLevel.innerHTML = levelName;
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
            const nextTarget = RatingUtils.getNextRatingTarget(rating, levelKey, questionCount, CONFIG);
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
