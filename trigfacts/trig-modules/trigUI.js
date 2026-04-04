import { CONFIG } from './config.js';
import { Timer } from '../../shared/timer.js';
import { StorageManager } from './storageManager.js';
import { RatingUtils } from '../../shared/ratingUtils.js';
import { QuadrantDiagramRenderer } from './quadrantDiagramRenderer.js';
import { BaseUI } from '../../shared/baseUI.js';

/**
 * TrigUI - Handles all UI rendering, MathQuill initialization, and user feedback display
 */
export class TrigUI extends BaseUI {
    constructor() {
        super();
        this.elements = {
            settingsScreen: document.getElementById('settings-screen'),
            gameScreen: document.getElementById('game-screen'),
            successScreen: document.getElementById('success-screen'),
            levelSelection: document.getElementById('level-selection-container'),
            streakCounter: document.getElementById('streak-counter'),
            timer: document.getElementById('timer'),
            diagramContainer: document.getElementById('diagram-container'),
            diagramCanvas: document.getElementById('quadrant-diagram'),
            questionText: document.getElementById('question-text'),
            inputContainer: document.getElementById('input-container'),
            mathquillInput: document.getElementById('mathquill-input'),
            feedbackMessage: document.getElementById('feedback-message'),
            timerPausedMessage: document.getElementById('timer-paused-message'),
            quitBtn: document.getElementById('quit-btn'),
            replayLevelBtn: document.getElementById('replay-level-btn'),
            playAgainBtn: document.getElementById('play-again-btn'),
            completedLevel: document.getElementById('completed-level'),
            finalTime: document.getElementById('final-time'),
            ratingEmoji: document.getElementById('rating-emoji'),
            finalRating: document.getElementById('final-rating'),
            bestTimeMessage: document.getElementById('best-time-message'),
            ratingExplanation: document.getElementById('rating-explanation'),
            levelName: document.getElementById('level-name'),
        };

        this.storage = StorageManager;
        this.diagramRenderer = new QuadrantDiagramRenderer(this.elements.diagramCanvas);
        this.mathField = null;
        this.onReplayLevel = null;
        this.onBackToLevels = null;
        this.setupSuccessScreenButtons();
    }

    // --- Trig-specific override: pulse animation on streak milestones ---

    updateStreak(streak) {
        this.elements.streakCounter.textContent = streak;
        if (streak > 0 && streak % 5 === 0) {
            this.elements.streakCounter.parentElement.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                this.elements.streakCounter.parentElement.style.animation = '';
            }, 500);
        }
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
                    inputWrapper.appendChild(this.elements.mathquillInput);

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
                inputWrapper.appendChild(this.elements.mathquillInput);

                const secondPart = document.createElement('span');
                this.renderMath(parts[1], secondPart);

                this.elements.questionText.appendChild(firstPart);
                this.elements.questionText.appendChild(inputWrapper);
                this.elements.questionText.appendChild(secondPart);
            } else {
                this.renderMath(question.format, this.elements.questionText);
            }
        }

        this.initializeMathQuill();
        this.enableInput();
    }

    renderMath(latex, container) {
        container.innerHTML = '';

        if (typeof MathQuill === 'undefined') {
            console.error('MathQuill not loaded');
            container.textContent = latex;
            return;
        }

        const MQ = MathQuill.getInterface(2);
        const mathField = MQ.StaticMath(container);
        mathField.latex(latex);
    }

    initializeMathQuill() {
        if (this.mathField) {
            this.mathField.revert();
        }

        const MQ = MathQuill.getInterface(2);
        this.mathField = MQ.MathField(this.elements.mathquillInput, {
            spaceBehavesLikeTab: true,
            leftRightIntoCmdGoes: 'up',
            restrictMismatchedBrackets: true,
            sumStartsWithNEquals: true,
            supSubsRequireOperand: true,
            charsThatBreakOutOfSupSub: '+-=<>',
            autoSubscriptNumerals: true,
            autoCommands: 'pi theta alpha beta gamma delta epsilon zeta eta mu nu xi rho sigma tau phi chi psi omega sqrt sum prod int frac',
            autoOperatorNames: 'sin cos tan cot sec csc sinh cosh tanh coth sech csch arcsin arccos arctan arccot arcsec arccsc',
        });

        this.elements.mathquillInput.classList.remove('correct', 'incorrect');
        this.mathField.focus();
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
        const inputElement = this.elements.mathquillInput;

        if (questionType === 'equivalent') {
            inputElement.style.minWidth = '200px';
            inputElement.style.width = '200px';
        } else {
            inputElement.style.minWidth = '120px';
            inputElement.style.width = '120px';
        }
    }

    getAnswerFromUI() {
        if (!this.mathField) return '';
        const rawLatex = this.mathField.latex().trim();
        return this.addAutoParentheses(rawLatex);
    }

    clearAnswer() {
        if (this.mathField) {
            this.mathField.latex('');
            this.mathField.focus();
        }
        this.elements.mathquillInput.classList.remove('correct', 'incorrect');
    }

    showInputFeedback(isCorrect) {
        this.elements.mathquillInput.classList.remove('correct', 'incorrect');
        this.elements.mathquillInput.classList.add(isCorrect ? 'correct' : 'incorrect');
    }

    disableInput() {
        if (this.mathField) {
            this.mathField.config({ disabled: true });
        }
    }

    enableInput() {
        if (this.mathField) {
            this.mathField.config({ disabled: false });
        }
    }

    // --- Feedback ---

    showFeedback(isCorrect, message, correctAnswer = null) {
        this.elements.feedbackMessage.innerHTML = '';
        this.elements.feedbackMessage.className = `feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

        if (correctAnswer) {
            const answerLine = document.createElement('div');

            const answerSpan = document.createElement('span');
            answerSpan.className = 'inline-block';
            answerLine.appendChild(answerSpan);

            this.elements.feedbackMessage.appendChild(answerLine);
            this.renderMath(correctAnswer, answerSpan);
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
        this.elements.completedLevel.textContent = levelName;
        this.elements.finalTime.textContent = new Timer().formatTime(time);
        const ratingEmojis = {
            'true-mastery': '💖',
            'mastery': '🏆',
            'expert': '⭐',
            'developing': '🎯',
            'beginner': '🌱',
        };
        this.elements.ratingEmoji.textContent = ratingEmojis[rating.key] || '🏅';
        this.elements.finalRating.textContent = rating.name;

        // Fixed: pass full rating object (not rating.key) to match shared RatingUtils API
        const nextTarget = RatingUtils.getNextRatingTarget(rating, levelKey, CONFIG.REQUIRED_STREAK, CONFIG);

        if (nextTarget) {
            const targetTimeFormatted = new Timer().formatTime(nextTarget.targetTime);
            this.elements.ratingExplanation.textContent =
                `Complete in ${targetTimeFormatted} or less for ${nextTarget.nextRating.name}`;
        } else {
            const multiplier = CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS[levelKey]
                || CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS['default']
                || 1.0;
            const threshold = new Timer().formatTime(rating.maxAvg * multiplier * CONFIG.REQUIRED_STREAK * 1000);
            this.elements.ratingExplanation.textContent =
                `You beat the threshold of ${threshold} for ${rating.name}`;
        }

        if (isNewBest) {
            this.elements.bestTimeMessage.textContent = previousBest
                ? `New personal best! Beat your old time of ${new Timer().formatTime(previousBest)}.`
                : `You've set your first record!`;
        } else {
            this.elements.bestTimeMessage.textContent =
                `Your best time is still ${new Timer().formatTime(previousBest)}.`;
        }

        this.showScreen('success');
    }
}
