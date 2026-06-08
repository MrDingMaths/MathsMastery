// ui.js
import { CONFIG } from './config.js';
import { createEl } from '../shared/createEl.js';
import { Timer } from '../shared/timer.js';
import { StorageManager } from './storage.js';
import { BaseUI } from '../shared/baseUI.js';

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
            replayLevelBtn: document.getElementById('replay-level-btn'),
        };
        this.storage = StorageManager;
        this.mathFields = {};         // { x: MathField, y: MathField }
        this.mathFieldOrder = [];     // ['x'] or ['x','y'] — input focus order
        this.MQ = null;
        this.currentView = 'grid';
        this.setupSuccessScreenButtons();
    }

    _getRatingClass(ratingKey) {
        return ratingKey === 'true-mastery' ? 'queen' : ratingKey;
    }

    _onSettingsRendered() {
        this.initializeMathQuill();
    }

    initializeMathQuill() {
        this.MQ = MathQuill.getInterface(2);
    }

    // --- Question display ---

    displayQuestion(question) {
        this.elements.questionText.innerHTML = '';
        this.mathFields = {};
        this.mathFieldOrder = [];

        // Problem line(s) (static math) — string for one equation, array for stacked
        const problemLines = Array.isArray(question.problem) ? question.problem : [question.problem];
        problemLines.forEach(latex => {
            const problemLineContainer = createEl('div', { className: 'problem-line' });
            this.elements.questionText.appendChild(problemLineContainer);
            const problemContainer = createEl('span');
            problemLineContainer.appendChild(problemContainer);
            const problemMath = this.MQ.StaticMath(problemContainer);
            problemMath.latex(latex);
        });

        const inputs = question.inputs || { vars: ['x'] };
        const vars = inputs.vars;
        const multi = !!inputs.multi;

        // Answer area
        const answerWrap = createEl('div', { className: 'answer-wrap' });
        this.elements.questionText.appendChild(answerWrap);

        vars.forEach((v, idx) => {
            const row = createEl('div', { className: 'answer-line' });
            const label = createEl('span', { className: 'equals-sign' });
            const labelMath = this.MQ.StaticMath(label);
            labelMath.latex(`${v} =`);
            row.appendChild(label);

            const inputContainer = createEl('span', {
                className: multi ? 'mathquill-editable equations-multi-input' : 'mathquill-editable'
            });
            row.appendChild(inputContainer);
            answerWrap.appendChild(row);

            const isLast = idx === vars.length - 1;
            const mathFieldConfig = {
                spaceBehavesLikeTab: true,
                leftRightIntoCmdGoes: 'up',
                restrictMismatchedBrackets: true,
                supSubsRequireOperand: true,
                charsThatBreakOutOfSupSub: '+-=<>',
                autoSubscriptNumerals: false,
                autoCommands: 'pi theta sqrt nthroot pm',
                handlers: {
                    enter: () => {
                        if (!isLast) {
                            const nextVar = vars[idx + 1];
                            const next = this.mathFields[nextVar];
                            if (next) next.focus();
                        } else {
                            document.dispatchEvent(new CustomEvent('mathquill-enter'));
                        }
                    }
                }
            };

            const field = this.MQ.MathField(inputContainer, mathFieldConfig);
            this.mathFields[v] = field;
            this.mathFieldOrder.push(v);
        });

        if (multi) {
            const hint = createEl('div', {
                className: 'equations-input-hint',
                textContent: "Enter solutions separated by , or use ±"
            });
            answerWrap.appendChild(hint);
        }

        // Focus first field
        setTimeout(() => {
            const first = this.mathFields[this.mathFieldOrder[0]];
            if (first) first.focus();
        }, 100);
    }

    getAnswerFromUI() {
        const out = {};
        for (const v of this.mathFieldOrder) {
            out[v] = this.mathFields[v] ? this.mathFields[v].latex() : '';
        }
        return out;
    }

    isAnswerComplete(answer) {
        if (!answer) return false;
        for (const v of this.mathFieldOrder) {
            const val = answer[v];
            if (val == null || String(val).trim() === '') return false;
        }
        return true;
    }

    clearAnswer() {
        for (const v of this.mathFieldOrder) {
            const f = this.mathFields[v];
            if (f) f.latex('');
        }
        const first = this.mathFields[this.mathFieldOrder[0]];
        if (first) first.focus();
    }

    focusFirstField() {
        const first = this.mathFields[this.mathFieldOrder[0]];
        if (first) first.focus();
    }

    // --- Feedback ---

    showFeedback(isCorrect, message, correctAnswer = null) {
        this.elements.feedbackMessage.innerHTML = '';
        this.elements.feedbackMessage.className = `feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

        if (!isCorrect && correctAnswer) {
            const latex = this._renderCorrectAnswerLatex(correctAnswer);
            const answerLine = createEl('div');
            const answerSpan = createEl('span', { className: 'inline-block' });
            answerLine.appendChild(answerSpan);
            this.elements.feedbackMessage.appendChild(answerLine);
            const staticMath = this.MQ.StaticMath(answerSpan);
            staticMath.latex(latex);
        } else if (message) {
            this.elements.feedbackMessage.textContent = message;
        }
    }

    _renderCorrectAnswerLatex(answerObj) {
        const parts = [];
        for (const v of Object.keys(answerObj)) {
            const val = answerObj[v];
            if (Array.isArray(val)) {
                if (val.length === 1) {
                    parts.push(`${v} = ${val[0]}`);
                } else {
                    parts.push(`${v} = ${val.join(' \\text{ or } ')}`);
                }
            } else {
                parts.push(`${v} = ${val}`);
            }
        }
        return parts.join(', \\quad ');
    }

    clearFeedback() {
        this.elements.feedbackMessage.textContent = '';
    }

    showInputFeedback(isCorrect) {
        const fields = this.elements.questionText.querySelectorAll('.mq-editable-field');
        fields.forEach(el => {
            el.classList.remove('correct', 'incorrect');
            el.classList.add(isCorrect ? 'correct' : 'incorrect');
        });
    }

    clearInputFeedback() {
        const fields = this.elements.questionText.querySelectorAll('.mq-editable-field');
        fields.forEach(el => el.classList.remove('correct', 'incorrect'));
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

        this.elements.completedLevel.innerHTML = levelName;
        this.elements.finalRating.textContent = rating.name;
        this.elements.ratingEmoji.textContent = ratingEmojis[rating.key] || '🏅';
        this.elements.ratingIconCircle.className = `success-icon-circle rating-${this._getRatingClass(rating.key)}`;

        const timer = new Timer();
        this.elements.finalTime.textContent = timer.formatTime(time, 2);

        this.elements.newBestBadge.classList.toggle('hidden', !isNewBest);

        if (previousBest) {
            this.elements.previousBestSection.classList.remove('hidden');
            this.elements.previousBestTime.textContent = timer.formatTime(previousBest, 2);
        } else {
            this.elements.previousBestSection.classList.add('hidden');
        }

        this._renderRatingTimeline(this.elements.ratingTimeline, rating.key);

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
