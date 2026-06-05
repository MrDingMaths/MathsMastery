// algebra-modules/ui.js
import { CONFIG } from './config.js';
import { createEl } from '../../shared/createEl.js';
import { Timer } from '../../shared/timer.js';
import { StorageManager } from './storage.js';
import { MobileDetection } from './mobileDetection.js';
import { BaseUI } from '../../shared/baseUI.js';

export class UI extends BaseUI {
    constructor() {
        super();
        this.elements = {
            settingsScreen: document.getElementById('settings-screen'),
            gameScreen: document.getElementById('game-screen'),
            successScreen: document.getElementById('success-screen'),
            levelSelection: document.getElementById('level-selection-container'),
            streakCounter: document.getElementById('streak-counter'),
            levelName: document.getElementById('level-name'),
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
        };
        this.storage = StorageManager;
        this.mathField = null;
        this.MQ = null;
        this.currentView = 'grid';
        this.mobileKeyboard = null;
        this.isMobile = MobileDetection.isMobileDevice();
        this.setupSuccessScreenButtons();
        this.initializeMobileKeyboard();
    }

    // --- Algebra-specific overrides ---

    // Algebra uses 'queen' CSS class for true-mastery rating
    _getRatingClass(ratingKey) {
        return ratingKey === 'true-mastery' ? 'queen' : ratingKey;
    }

    // Hide mobile keyboard when leaving game screen
    showScreen(screenName) {
        super.showScreen(screenName);
        if (this.mobileKeyboard && screenName !== 'game') {
            this.mobileKeyboard.hide();
        }
    }

    // --- Settings rendered hook ---

    _onSettingsRendered() {
        this.initializeMathQuill();
    }

    // --- MathQuill / mobile keyboard setup ---

    initializeMathQuill() {
        this.MQ = MathQuill.getInterface(2);

        const staticExamples = [
            'power-example',
            'fraction-example',
            'sqrt-example',
            'nthroot-example'
        ];

        staticExamples.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                this.MQ.StaticMath(element);
            }
        });
    }

    initializeMobileKeyboard() {
        if (typeof MobileKeyboard !== 'undefined') {
            this.mobileKeyboard = new MobileKeyboard();
            this.mobileKeyboard.initialize();
        }
    }

    // --- Question display ---

    displayQuestion(question) {
        this.elements.questionText.innerHTML = '';

        const problemLineContainer = createEl('div', { className: 'problem-line' });
        this.elements.questionText.appendChild(problemLineContainer);

        const problemContainer = createEl('span');
        problemLineContainer.appendChild(problemContainer);

        const problemMath = this.MQ.StaticMath(problemContainer);
        problemMath.latex(question.problem);

        const answerLineContainer = createEl('div', { className: 'answer-line' });
        this.elements.questionText.appendChild(answerLineContainer);

        const equalsSign = createEl('span', {
            className: 'equals-sign',
            textContent: ' = '
        });
        answerLineContainer.appendChild(equalsSign);

        const answerContainer = createEl('span', {
            className: 'mathquill-editable'
        });
        answerLineContainer.appendChild(answerContainer);

        const toggleBtn = createEl('button', {
            id: 'toggle-keyboard-btn',
            textContent: '⌨️'
        });
        answerLineContainer.appendChild(toggleBtn);

        const mathFieldConfig = {
            spaceBehavesLikeTab: true,
            leftRightIntoCmdGoes: 'up',
            restrictMismatchedBrackets: true,
            supSubsRequireOperand: true,
            charsThatBreakOutOfSupSub: '+-=<>',
            autoSubscriptNumerals: false,
            autoCommands: 'pi theta sqrt nthroot',
            handlers: {
                enter: () => {
                    const event = new CustomEvent('mathquill-enter');
                    document.dispatchEvent(event);
                }
            }
        };

        if (this.isMobile) {
            mathFieldConfig.substituteTextarea = MobileKeyboard.createSubstituteTextarea;
            mathFieldConfig.handlers.edit = () => {
                if (this.mobileKeyboard && !this.mobileKeyboard.isVisible) {
                    this.mobileKeyboard.show();
                }
            };
        }

        this.mathField = this.MQ.MathField(answerContainer, mathFieldConfig);

        if (this.mobileKeyboard) {
            this.mobileKeyboard.setMathField(this.mathField);
        }

        if (this.isMobile && this.mobileKeyboard) {
            answerContainer.addEventListener('click', () => {
                this.mobileKeyboard.show();
            });
        }

        if (!this.isMobile && this.mobileKeyboard) {
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.mobileKeyboard.isVisible) {
                    this.mobileKeyboard.hide();
                } else {
                    this.mobileKeyboard.show();
                    this.mathField.focus();
                }
            });
        }

        setTimeout(() => {
            this.mathField.focus();
            if (this.isMobile && this.mobileKeyboard) {
                this.mobileKeyboard.show();
            }
        }, 100);
    }

    getAnswerFromUI() {
        if (!this.mathField) return null;
        return this.mathField.latex();
    }

    clearAnswer() {
        if (this.mathField) {
            this.mathField.latex('');
            this.mathField.focus();
        }
    }

    // --- Feedback ---

    showFeedback(isCorrect, message, correctAnswer = null, question = null) {
        this.elements.feedbackMessage.innerHTML = '';
        this.elements.feedbackMessage.className = `feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

        if (!isCorrect && correctAnswer) {
            const answerLine = createEl('div');

            const answerSpan = createEl('span', { className: 'inline-block' });
            answerLine.appendChild(answerSpan);

            this.elements.feedbackMessage.appendChild(answerLine);

            const staticMath = this.MQ.StaticMath(answerSpan);
            staticMath.latex(correctAnswer);
        } else {
            this.elements.feedbackMessage.textContent = message;
        }
    }

    clearFeedback() {
        this.elements.feedbackMessage.textContent = '';
    }

    updateTestAnswer(answer) {
        if (this.elements.testAnswerContent) {
            this.elements.testAnswerContent.innerHTML = '';
            const staticMath = this.MQ.StaticMath(this.elements.testAnswerContent);
            staticMath.latex(answer);
        }
    }

    showInputFeedback(isCorrect) {
        const mathQuillEl = this.elements.questionText.querySelector('.mq-editable-field');
        if (mathQuillEl) {
            mathQuillEl.classList.remove('correct', 'incorrect');
            mathQuillEl.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    }

    clearInputFeedback() {
        const mathQuillEl = this.elements.questionText.querySelector('.mq-editable-field');
        if (mathQuillEl) {
            mathQuillEl.classList.remove('correct', 'incorrect');
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
