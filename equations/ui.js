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
    pm: '\\pm',
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
        this.mathFields = {};         // { x: math-field, y: math-field }
        this.mathFieldOrder = [];     // ['x'] or ['x','y'] — input focus order
        this.currentView = 'grid';
        this.setupSuccessScreenButtons();
    }

    _getRatingClass(ratingKey) {
        return ratingKey === 'true-mastery' ? 'queen' : ratingKey;
    }

    _onSettingsRendered() {
        this.initializeMathInputs();
    }

    initializeMathInputs() {
        configureMathLiveGlobals();
        const staticExamples = [
            'power-example',
            'fraction-example',
            'sqrt-example',
            'pm-example',
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
        this.mathFields = {};
        this.mathFieldOrder = [];

        configureMathLiveGlobals();

        // Problem line(s) (static math) — string for one equation, array for stacked
        const problemLines = Array.isArray(question.problem) ? question.problem : [question.problem];
        problemLines.forEach(latex => {
            const problemLineContainer = createEl('div', { className: 'problem-line' });
            this.elements.questionText.appendChild(problemLineContainer);
            const problemContainer = createEl('span');
            problemLineContainer.appendChild(problemContainer);
            renderStaticLatex(problemContainer, latex);
        });

        const inputs = question.inputs || { vars: ['x'] };
        const vars = inputs.vars;
        const multi = !!inputs.multi;

        if (question.hint) {
            const hintLine = createEl('div', { className: 'question-hint', textContent: question.hint });
            this.elements.questionText.appendChild(hintLine);
        }

        // Answer area
        const answerWrap = createEl('div', { className: 'answer-wrap' });
        this.elements.questionText.appendChild(answerWrap);

        vars.forEach((v, idx) => {
            const row = createEl('div', { className: 'answer-line' });

            if (!inputs.type?.startsWith('ineq')) {
                const label = createEl('span', { className: 'equals-sign' });
                renderStaticLatex(label, `${v} =`);
                row.appendChild(label);
            }

            const field = document.createElement('math-field');
            field.classList.add('math-field-answer');
            if (multi) field.classList.add('equations-multi-input');
            row.appendChild(field);
            answerWrap.appendChild(row);

            field.mathVirtualKeyboardPolicy = 'manual';
            field.inlineShortcuts = { ...field.inlineShortcuts, ...INLINE_SHORTCUTS };
            field.menuItems = [];

            const isLast = idx === vars.length - 1;
            const onCommit = () => {
                if (!isLast) {
                    const nextVar = vars[idx + 1];
                    const next = this.mathFields[nextVar];
                    if (next) next.focus();
                } else {
                    document.dispatchEvent(new CustomEvent('math-enter'));
                }
            };
            field.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    onCommit();
                }
            });

            // MathLive fires 'change' on commit (the Return key — including the virtual
            // keyboard's, which doesn't emit a DOM keydown) and on blur. Only act on a
            // focused commit so blurring a field doesn't advance/submit.
            field.addEventListener('change', () => {
                if (field.hasFocus && field.hasFocus()) onCommit();
            });

            field.addEventListener('pointerdown', (e) => {
                if (e.target === field) field.focus();
            });

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

        if (inputs.type === 'ineq-union' || inputs.showUnionHint) {
            const hint = createEl('div', {
                className: 'equations-input-hint',
                textContent: "Enter both inequalities separated by , e.g. x < −2, x > 3"
            });
            answerWrap.appendChild(hint);
        }

        // Focus first field
        setTimeout(() => {
            const first = this.mathFields[this.mathFieldOrder[0]];
            if (first) focusWhenReady(first);
        }, 100);
    }

    getAnswerFromUI() {
        const out = {};
        for (const v of this.mathFieldOrder) {
            out[v] = this.mathFields[v] ? this.mathFields[v].value : '';
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
            if (f) f.value = '';
        }
        const first = this.mathFields[this.mathFieldOrder[0]];
        if (first) first.focus();
    }

    focusFirstField() {
        const first = this.mathFields[this.mathFieldOrder[0]];
        if (first) first.focus();
    }

    // --- Feedback ---

    showFeedback(isCorrect, message, correctAnswer = null, userAnswer = null) {
        this.elements.feedbackMessage.innerHTML = '';
        this.elements.feedbackMessage.className = `feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

        if (!isCorrect && correctAnswer) {
            const grid = createEl('div', { className: 'feedback-answer-grid' });

            const userLatex = userAnswer ? this._renderUserAnswerLatex(userAnswer) : '';
            if (userLatex) {
                grid.appendChild(createEl('span', { className: 'feedback-answer-label', textContent: 'Your answer:' }));
                const yourSpan = createEl('span', { className: 'feedback-answer-your inline-block' });
                grid.appendChild(yourSpan);
                renderStaticLatex(yourSpan, userLatex);
            }

            grid.appendChild(createEl('span', { className: 'feedback-answer-label', textContent: 'Correct answer:' }));
            const correctSpan = createEl('span', { className: 'feedback-answer-correct inline-block' });
            grid.appendChild(correctSpan);
            renderStaticLatex(correctSpan, this._renderCorrectAnswerLatex(correctAnswer));

            this.elements.feedbackMessage.appendChild(grid);
        } else if (message) {
            this.elements.feedbackMessage.textContent = message;
        }
    }

    // Render the student's raw per-variable MathLive input as "x = …, y = …".
    _renderUserAnswerLatex(userAnswerObj) {
        const parts = [];
        for (const v of this.mathFieldOrder) {
            const val = userAnswerObj ? userAnswerObj[v] : '';
            if (val == null || String(val).trim() === '') continue;
            parts.push(`${v} = ${val}`);
        }
        return parts.join(', \\quad ');
    }

    _toLatex(expr) {
        let s = String(expr).trim();

        // (content)^(1/N) → \sqrt[N]{content}
        const nthRootParen = s.match(/^\((.+)\)\^\(1\/(\d+)\)$/);
        if (nthRootParen) {
            const inner = this._fracToLatex(nthRootParen[1]);
            const n = nthRootParen[2];
            return n === '2' ? `\\sqrt{${inner}}` : `\\sqrt[${n}]{${inner}}`;
        }

        // plain^(1/N) → \sqrt[N]{plain}
        const nthRootPlain = s.match(/^(-?[\d.]+)\^\(1\/(\d+)\)$/);
        if (nthRootPlain) {
            const n = nthRootPlain[2];
            return n === '2' ? `\\sqrt{${nthRootPlain[1]}}` : `\\sqrt[${n}]{${nthRootPlain[1]}}`;
        }

        const fracMatch = s.match(/^\((.+)\)\/(-?\d+)$/);
        if (fracMatch) {
            return `\\frac{${this._convertSqrt(fracMatch[1])}}{${fracMatch[2]}}`;
        }

        // simple integer fraction: -?\d+ / \d+  e.g. '4/3', '-3/2'
        const simpleFrac = s.match(/^(-?\d+)\/(\d+)$/);
        if (simpleFrac) {
            return `\\frac{${simpleFrac[1]}}{${simpleFrac[2]}}`;
        }

        return this._convertSqrt(s);
    }

    _fracToLatex(s) {
        const m = s.match(/^(-?\d+)\/(\d+)$/);
        return m ? `\\frac{${m[1]}}{${m[2]}}` : s;
    }

    _convertSqrt(s) {
        s = s.replace(/(\d+)\*sqrt\((\d+)\)/g, '$1\\sqrt{$2}');
        s = s.replace(/sqrt\((\d+)\)/g, '\\sqrt{$1}');
        return s;
    }

    _renderCorrectAnswerLatex(answerObj) {
        const parts = [];
        for (const v of Object.keys(answerObj)) {
            if (v === 'toleranceDp') continue;
            const val = answerObj[v];
            if (val && typeof val === 'object' && !Array.isArray(val) && val.ineq) {
                parts.push(this._renderInequalityLatex(v, val));
            } else if (Array.isArray(val)) {
                if (val.length === 1) {
                    parts.push(`${v} = ${this._toLatex(val[0])}`);
                } else {
                    parts.push(`${v} = ${val.map(r => this._toLatex(r)).join(' \\text{ or } ')}`);
                }
            } else {
                parts.push(`${v} = ${this._toLatex(val)}`);
            }
        }
        return parts.join(', \\quad ');
    }

    _renderInequalityLatex(variable, val) {
        const opLatex = { '>': '>', '<': '<', '>=': '\\geq', '<=': '\\leq' };
        if (val.ineq === 'union') {
            return val.parts
                .map(p => `${variable} ${opLatex[p.ineq] ?? p.ineq} ${p.rhs}`)
                .join(' \\text{ or } ');
        }
        if (val.ineq === 'between') {
            const lo = val.loStrict ? '<' : '\\leq';
            const hi = val.hiStrict ? '<' : '\\leq';
            return `${val.lo} ${lo} ${variable} ${hi} ${val.hi}`;
        }
        // linear
        return `${variable} ${opLatex[val.ineq] ?? val.ineq} ${val.rhs}`;
    }

    clearFeedback() {
        this.elements.feedbackMessage.textContent = '';
    }

    showInputFeedback(isCorrect) {
        for (const v of this.mathFieldOrder) {
            const field = this.mathFields[v];
            if (field) {
                field.classList.remove('correct', 'incorrect');
                field.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
        }
    }

    clearInputFeedback() {
        for (const v of this.mathFieldOrder) {
            const field = this.mathFields[v];
            if (field) field.classList.remove('correct', 'incorrect');
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
