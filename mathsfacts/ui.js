/**
 * UI class for Maths Facts Challenge DOM manipulation and rendering
 * Handles all user interface interactions, question display, and visual feedback
 * Manages screen transitions, input handling, and dynamic content rendering
 */
import { createEl } from './utils.js';
import { Timer, StorageManager } from './gameState.js';
import { RatingUtils } from '../shared/ratingUtils.js';
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
            streakCount: document.getElementById('streak-count'),
            secondChanceCounter: document.getElementById('second-chance-counter'),
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
            skillPathContainer: document.getElementById('skill-path-container'),
            masteryProgressBars: document.getElementById('mastery-progress-bars'),
            replayLevelBtn: document.getElementById('replay-level-btn'),
            levelName: document.getElementById('level-name'),
            levelMeta: document.getElementById('level-meta'),
        };
        this.storage = StorageManager;
        this.onBackToLevels = null;
        this.questionRenderers = {
            '{{EQUIV_FRACTION_CHALLENGE}}': this._renderEquivFraction,
            '{{SIMPLIFY_FRACTION_CHALLENGE}}': this._renderSimplifyFraction,
            '{{FDP_CONVERSION_CHALLENGE}}': this._renderFDPConversion,
            '{{UNIT_CONVERSION}}': this._renderUnitConversion,
            'default': this._renderDefaultQuestion
        };
        this.currentView = 'grid';
        this.setupSuccessScreenButtons();
    }

    // --- Question display ---

    displayQuestion(question, levelKey) {
        this.elements.questionText.innerHTML = '';
        const renderer = this.questionRenderers[question.format] || this.questionRenderers.default;
        renderer.call(this, question, levelKey);
        const input = this.elements.questionText.querySelector('input');
        if (input) input.focus();
    }

    // --- Question Renderers ---

    _renderDefaultQuestion(question, levelKey) {
        const parts = question.format.split('{{INPUT}}');
        const frag = document.createDocumentFragment();

        const appendKatexWithBreaks = (latex) => {
            const lines = latex.split('\n');
            lines.forEach((line, i) => {
                if (i > 0) {
                    // .question-text is a flex-wrap container, so a <br> won't
                    // force a line break. A full-width zero-height div does.
                    frag.append(createEl('div', { style: { flexBasis: '100%', height: '0' } }));
                }
                if (line === '') return;
                const el = createEl('span');
                katex.render(line, el, { throwOnError: false });
                frag.append(el);
            });
        };

        if (parts[0]) appendKatexWithBreaks(parts[0]);

        const inputOptions = { type: 'number', className: 'inline-input', step: 'any', autocomplete: 'off' };
        if (levelKey === 'powersOf10' || levelKey === 'unitConversions' || levelKey === 'multiplyDivideBy100' || levelKey === 'integerOperations' || levelKey === 'roundingDecimals') {
            inputOptions.style = { width: '12rem' };
        }
        const inputEl = createEl('input', inputOptions);
        frag.append(inputEl);

        if (parts[1]) appendKatexWithBreaks(parts[1]);
        this.elements.questionText.append(frag);
    }

    _createFraction(num, den, isInput = false) {
        const container = createEl('div', { className: 'fraction-container' });
        let numEl, denEl;
        if (isInput) {
             numEl = createEl('input', { type: 'number', id: 'input-fraction-num', className: 'inline-input', width: '5rem', autocomplete: 'off' });
             denEl = createEl('input', { type: 'number', id: 'input-fraction-den', className: 'inline-input', width: '5rem', autocomplete: 'off' });
        } else {
             numEl = createEl('span', { className: 'fraction-numerator'});
             katex.render(String(num), numEl, { throwOnError: false });
             denEl = createEl('span', { className: 'fraction-denominator'});
             katex.render(String(den), denEl, { throwOnError: false });
        }
        container.append(numEl, denEl);
        return container;
    }

    _renderEquivFraction(question) {
        const qp = question.questionParts;
        const leftFraction = this._createFraction(qp.baseNum, qp.baseDen);
        leftFraction.style.fontSize = '2.5rem';

        const equals = createEl('span', { className: 'mx-4' });
        katex.render('=', equals, { throwOnError: false, displayMode: true });

        const rightFraction = createEl('div', { className: 'fraction-container', style: { fontSize: '2.5rem' } });

        let numContent, denContent;
        const inputOptions = {type: 'number', className: 'inline-input', style: {width: '5rem'}, autocomplete: 'off'};

        if (qp.equivNum === null) {
            numContent = createEl('input', inputOptions);
        } else {
            numContent = createEl('span');
            katex.render(String(qp.equivNum), numContent, { throwOnError: false });
        }

        if (qp.equivDen === null) {
            denContent = createEl('input', inputOptions);
        } else {
            denContent = createEl('span');
            katex.render(String(qp.equivDen), denContent, { throwOnError: false });
        }

        const numContainer = createEl('span', { className: 'fraction-numerator' });
        numContainer.append(numContent);
        const denContainer = createEl('span', { className: 'fraction-denominator' });
        denContainer.append(denContent);
        rightFraction.append(numContainer, denContainer);

        this.elements.questionText.append(leftFraction, equals, rightFraction);
    }

    _renderSimplifyFraction(question) {
        const qp = question.questionParts;
        const leftFraction = this._createFraction(qp.complexNum, qp.complexDen);
        leftFraction.style.fontSize = '2.5rem';
        const equals = createEl('span', { className: 'mx-4' });
        katex.render('=', equals, { throwOnError: false, displayMode: true });
        const rightFraction = this._createFraction(null, null, true);
        this.elements.questionText.append(leftFraction, equals, rightFraction);
    }

    _renderFDPConversion(question) {
        const parts = question.questionParts;
        const table = createEl('table', { className: 'fdp-table' });
        table.innerHTML = `<thead><tr><th>Fraction</th><th>Decimal</th><th>Percentage</th></tr></thead>`;
        const tbody = createEl('tbody');
        const tr = createEl('tr');

        const tdFraction = createEl('td');
        const tdDecimal = createEl('td');
        const tdPercentage = createEl('td');
        const inputOptions = { type: 'number', className: 'inline-input', step: 'any', autocomplete: 'off' };

        if (parts.givenType === 'recurring') {
            tdFraction.append(this._createFraction(null, null, true));

            const decimalSpan = createEl('span');
            katex.render(parts.values.decimal, decimalSpan, { throwOnError: false });
            tdDecimal.append(decimalSpan);

            const percentageSpan = createEl('span');
            katex.render(parts.values.percentage, percentageSpan, { throwOnError: false });
            tdPercentage.append(percentageSpan);

        } else {
            if (parts.givenType === 'fraction') {
                const fractionEl = this._createFraction(parts.fraction.num, parts.fraction.den);
                fractionEl.style.fontSize = '1.5rem';
                tdFraction.append(fractionEl);
            } else {
                tdFraction.append(this._createFraction(null, null, true));
            }

            if (parts.givenType === 'decimal') {
                const decimalSpan = createEl('span', { style: { fontSize: '1.5rem' } });
                katex.render(String(parts.decimal), decimalSpan, { throwOnError: false });
                tdDecimal.append(decimalSpan);
            } else {
                tdDecimal.append(createEl('input', { ...inputOptions, id: 'input-decimal' }));
            }

            if (parts.givenType === 'percentage') {
                const percentageSpan = createEl('span', { style: { fontSize: '1.5rem' } });
                katex.render(String(parts.percentage) + '\\%', percentageSpan, { throwOnError: false });
                tdPercentage.append(percentageSpan);
            } else {
                const container = createEl('div', { className: 'percentage-cell' });
                const input = createEl('input', { ...inputOptions, id: 'input-percentage' });
                const symbol = createEl('span', { style: { fontSize: '1.5rem' } });
                katex.render('\\%', symbol, { throwOnError: false });
                container.append(input, symbol);
                tdPercentage.append(container);
            }
        }

        tr.append(tdFraction, tdDecimal, tdPercentage);
        tbody.append(tr);
        table.append(tbody);
        this.elements.questionText.append(table);
    }

    _renderUnitConversion(question) {
        const frag = document.createDocumentFragment();

        const convertUnitToPlainText = (unit) => {
            return unit
                .replace(/²/g, '²')
                .replace(/³/g, '³')
                .replace(/\^2/g, '²')
                .replace(/\^3/g, '³')
                .replace(/km²/g, 'km²')
                .replace(/m²/g, 'm²')
                .replace(/cm²/g, 'cm²')
                .replace(/mm²/g, 'mm²');
        };

        const sourceUnitSpan = createEl('span', { style: { fontSize: '2rem', marginRight: '0.5rem' } });
        sourceUnitSpan.textContent = convertUnitToPlainText(question.sourceUnit);
        frag.append(sourceUnitSpan);

        const operationSelect = createEl('select', {
            id: 'input-unit-operation',
            className: 'unit-conversion-select',
            style: { marginRight: '0.5rem', marginLeft: '0.5rem', fontSize: '1.5rem', border: '1px solid #999', borderRadius: '4px', padding: '4px', color: '#0066cc' }
        });
        const multiplyOption = createEl('option', { value: 'multiply', textContent: '×' });
        const divideOption = createEl('option', { value: 'divide', textContent: '÷' });
        operationSelect.append(multiplyOption, divideOption);
        frag.append(operationSelect);

        const factorSelect = createEl('select', {
            id: 'input-unit-factor',
            className: 'unit-conversion-select',
            style: { marginRight: '0.5rem', marginLeft: '0.5rem', fontSize: '1.5rem', border: '1px solid #999', borderRadius: '4px', padding: '4px', color: '#0066cc', textAlign: 'right' }
        });
        const placeholderOption = createEl('option', { value: '', textContent: 'factor', disabled: true, selected: true });
        factorSelect.append(placeholderOption);

        question.factorOptions.forEach(factor => {
            let label, optionValue;
            if (typeof factor === 'object' && factor.display) {
                label = factor.display;
                optionValue = factor.value;
            } else {
                label = typeof factor === 'string' ? factor : factor.toString();
                optionValue = factor;
            }

            label = label.replace(/\^(\d+)/g, (_, exponent) => {
                const superscripts = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
                return exponent.split('').map(digit => superscripts[digit]).join('');
            });
            if (!label.match(/[⁰-⁹]/)) {
                label = label.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            }
            const option = createEl('option', { value: optionValue, textContent: label });
            factorSelect.append(option);
        });
        frag.append(factorSelect);

        const equals = createEl('span', { style: { marginRight: '0.5rem', marginLeft: '0.5rem' } });
        equals.textContent = '=';
        frag.append(equals);

        const targetUnitSpan = createEl('span', { style: { fontSize: '2rem' } });
        targetUnitSpan.textContent = convertUnitToPlainText(question.targetUnit);
        frag.append(targetUnitSpan);

        this.elements.questionText.append(frag);

        setTimeout(() => {
            const factorOptions = factorSelect.querySelectorAll('option');
            factorOptions.forEach((option, index) => {
                if (index === 0) return;
                const value = option.value;
                if (typeof value === 'string' && value.includes('^')) {
                    const tempContainer = document.createElement('span');
                    katex.render(value, tempContainer, { throwOnError: false });
                    option.dataset.katexHtml = tempContainer.innerHTML;
                }
            });
        }, 0);
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

            try {
                katex.render(correctAnswer, answerSpan, { throwOnError: false });
            } catch (e) {
                answerSpan.textContent = correctAnswer;
            }
        } else {
            this.elements.feedbackMessage.textContent = message;
        }
    }

    clearFeedback() { this.elements.feedbackMessage.textContent = ''; }

    showInputFeedback(isCorrect) {
        const inputs = this.elements.questionText.querySelectorAll('input');
        inputs.forEach(input => input.classList.remove('correct', 'incorrect'));
        const feedbackClass = isCorrect ? 'correct' : 'incorrect';
        inputs.forEach(input => input.classList.add(feedbackClass));
    }

    clearInputFeedback() {
        const inputs = this.elements.questionText.querySelectorAll('input');
        inputs.forEach(input => input.classList.remove('correct', 'incorrect'));
    }

    clearAnswer() {
        const inputs = this.elements.questionText.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    }

    getAnswerFromUI(levelKey) {
        if (levelKey === 'unitConversions') {
            const operationSelect = document.getElementById('input-unit-operation');
            const factorSelect = document.getElementById('input-unit-factor');

            if (operationSelect && factorSelect) {
                const factorValue = factorSelect.value;
                if (!factorValue) {
                    return null;
                }
                return {
                    operation: operationSelect.value,
                    factor: parseFloat(factorValue)
                };
            }
            return null;
        }

        if (levelKey === 'fdpConversions' || levelKey === 'fdpConversionsMultiples') {
            const answer = {};
            const decInput = document.getElementById('input-decimal');
            const perInput = document.getElementById('input-percentage');
            const fracNumInput = document.getElementById('input-fraction-num');
            const fracDenInput = document.getElementById('input-fraction-den');

            if (decInput) answer.decimal = parseFloat(decInput.value);
            if (perInput) answer.percentage = parseFloat(perInput.value);
            if (fracNumInput && fracDenInput) {
                answer.fraction = {
                    num: parseInt(fracNumInput.value, 10),
                    den: parseInt(fracDenInput.value, 10)
                };
            }
            return answer;
        }

        const numInput = document.getElementById('input-fraction-num');
        if (numInput) {
            return {
                num: parseInt(numInput.value, 10),
                den: parseInt(document.getElementById('input-fraction-den').value, 10)
            };
        }

        if (this.elements.questionText.querySelectorAll('.inline-input').length > 1) {
            const inputs = this.elements.questionText.querySelectorAll('.inline-input');
            const filledInput = Array.from(inputs).find(i => i.value !== '');
            return filledInput ? parseFloat(filledInput.value) : null;
        }

        const input = this.elements.questionText.querySelector('.inline-input');
        return input ? parseFloat(input.value) : null;
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

    formatAnswerForDisplay(answer, levelKey) {
        if (levelKey === 'unitConversions') {
            if (answer && typeof answer === 'object') {
                const operationSymbol = answer.correctOperation === 'multiply' ? '×' : '÷';
                const factorLabel = typeof answer.correctFactor === 'string' ? answer.correctFactor : answer.correctFactor.toString();
                return `${operationSymbol} ${factorLabel}`;
            }
            return String(answer);
        } else if (levelKey === 'fdpConversions' || levelKey === 'fdpConversionsMultiples') {
            let parts = [];

            if (answer && typeof answer === 'object') {
                if (answer.fraction && answer.fraction.num !== undefined && answer.fraction.den !== undefined) {
                    parts.push(`\\frac{${answer.fraction.num}}{${answer.fraction.den}}`);
                }
                if (answer.decimal !== undefined) {
                    parts.push(answer.decimal.toString());
                }
                if (answer.percentage !== undefined) {
                    parts.push(`${answer.percentage}\\%`);
                }
                if (parts.length > 0) {
                    return parts.join(', ');
                }
            }

            return String(answer);
        } else if (typeof answer === 'object' && answer !== null && answer.num !== undefined) {
            return `\\frac{${answer.num}}{${answer.den}}`;
        } else {
            return String(answer);
        }
    }
}
