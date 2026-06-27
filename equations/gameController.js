// gameController.js
import { CONFIG } from './config.js';
import { GameState } from './gameState.js';
import { UI } from './ui.js';
import { Timer } from '../shared/timer.js';
import { QuestionGenerator } from './questionGenerator.js';
import { Confetti } from '../shared/confetti.js';
import { StorageManager } from './storage.js';
import { RatingUtils } from '../shared/ratingUtils.js';
import { EquationsAnswerChecker } from './equationsAnswerChecker.js';

window.RatingUtils = RatingUtils;

export class GameController {
    constructor() {
        this.state = new GameState();
        this.ui = new UI();
        this.timer = new Timer(this.ui.elements.timer);
        this.questionGen = new QuestionGenerator();
        this.answerChecker = new EquationsAnswerChecker();
        this.confetti = new Confetti('confetti-canvas');
        this.isChecking = false;
        this.answerSubmitted = false;
        this.lastQuestionProblem = null;

        this.ui.initializeMathInputs();

        this.setupEventListeners();
        this.initializeProgressTracking();
        this.initializeLearningPath();
    }

    initializeProgressTracking() {
        if (!window.progressUI) {
            window.progressChart = new ProgressChart('progress-chart', window.progressTracker);
            window.progressShare = new ProgressShare(window.progressTracker, window.progressChart, 'Equations Challenge');
            window.progressUI = new ProgressUI(window.progressTracker, window.progressChart, window.progressShare);
        }
    }

    initializeLearningPath() {
        this.ui.setSuccessScreenCallbacks(
            () => this.replayCurrentLevel(),
            () => this.quitGame(),
            () => this.startNextLevel()
        );
        this.updateLearningPathInterface();
    }

    setupEventListeners() {
        this.ui.elements.quitBtn.addEventListener('click', () => this.confirmQuit());

        document.addEventListener('math-enter', () => {
            if (!this.isChecking && !this.answerSubmitted) {
                this.checkAnswer();
            }
        });

        this.handleGlobalKeys = (e) => {
            if (!this.ui.elements.gameScreen.classList.contains('hidden')) {
                if (e.key === 'Escape') this.confirmQuit();
            }
        };
        document.addEventListener('keydown', this.handleGlobalKeys);

        // Capture phase so MathLive doesn't swallow the Ctrl+\ key
        /* this.handleSkipKey = (e) => {
            if (e.key === '\\' && e.ctrlKey && !this.ui.elements.gameScreen.classList.contains('hidden')) {
                e.preventDefault();
                e.stopPropagation();
                if (this._moveToNextQuestion) {
                    document.removeEventListener('keydown', this._moveToNextQuestion);
                    this._moveToNextQuestion = null;
                }
                this.ui.hideTimerPausedMessage();
                this.answerSubmitted = false;
                this.isChecking = false;
                this.generateQuestion();
            }
        };
        document.addEventListener('keydown', this.handleSkipKey, { capture: true }); */
    }

    startGame(level) {
        this.state.setLevel(level);
        this.ui.showScreen('game');
        this.ui.updateStreak(0);
        this.ui.updateSecondChances();
        this.ui.updateLevelName(level.name);
        this.timer.start();
        this.generateQuestion();
    }

    generateQuestion() {
        this.ui.clearFeedback();
        this.ui.clearInputFeedback();
        this.ui.hideTimerPausedMessage();
        this.answerSubmitted = false;
        this.state.resetIncorrectCount();
        this.ui.updateSecondChances();

        let question = this.questionGen.generateQuestion(this.state.currentLevel.key);
        for (let i = 0; i < 5 && this.lastQuestionProblem && question.problem === this.lastQuestionProblem; i++) {
            question = this.questionGen.generateQuestion(this.state.currentLevel.key);
        }
        this.lastQuestionProblem = question.problem;
        if (!question) return;

        this.state.currentQuestion = question;
        this.state.currentAnswer = question.answer;
        this.ui.displayQuestion(question);
    }

    checkAnswer() {
        if (this.isChecking || this.answerSubmitted) return;
        this.answerSubmitted = true;
        this.isChecking = true;

        const userAnswer = this.ui.getAnswerFromUI();

        if (!this.ui.isAnswerComplete(userAnswer)) {
            this.ui.showFeedback(false, 'Please enter an answer');
            this.answerSubmitted = false;
            this.isChecking = false;
            return;
        }

        this.state.incrementQuestionsAttempted();
        const correctAnswer = this.state.currentAnswer;
        const isCorrect = this.answerChecker.check(userAnswer, correctAnswer);

        if (isCorrect) {
            this.state.resetIncorrectCount();
            const newStreak = this.state.incrementStreak();
            this.ui.updateStreak(newStreak);
            this.ui.showInputFeedback(true);
            this.ui.showFeedback(true, CONFIG.POSITIVE_FEEDBACK[Math.floor(Math.random() * CONFIG.POSITIVE_FEEDBACK.length)]);
            this.confetti.trigger(CONFIG.CONFETTI.CORRECT);

            if (this.state.isComplete()) {
                setTimeout(() => this.showSuccess(), 500);
            } else {
                setTimeout(() => {
                    this.answerSubmitted = false;
                    this.generateQuestion();
                    this.isChecking = false;
                }, CONFIG.FEEDBACK_DELAY_CORRECT);
            }
        } else {
            this.state.incrementIncorrectCount();

            if (this.state.isSecondIncorrectAttempt()) {
                this.state.resetStreak();
                this.ui.updateStreak(0);
                this.ui.showInputFeedback(false);
                this.ui.showFeedback(false, null, correctAnswer, userAnswer);
                this.ui.showTimerPausedMessage();
                this.timer.reset();

                this.ui.clearAnswer();

                this._moveToNextQuestion = (e) => {
                    if (e.key.length === 1 || e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Escape') {
                        document.removeEventListener('keydown', this._moveToNextQuestion);
                        this._moveToNextQuestion = null;

                        if (e.key === 'Escape') return;

                        this.ui.hideTimerPausedMessage();
                        this.answerSubmitted = false;
                        this.generateQuestion();
                        this.timer.start();
                        this.isChecking = false;
                    }
                };
                setTimeout(() => {
                    document.addEventListener('keydown', this._moveToNextQuestion);
                }, 50);
            } else {
                this.ui.updateSecondChances(0);
                this.ui.showInputFeedback(false);
                this.ui.showFeedback(false, CONFIG.SECOND_CHANCE_FEEDBACK[Math.floor(Math.random() * CONFIG.SECOND_CHANCE_FEEDBACK.length)]);

                setTimeout(() => {
                    this.ui.clearFeedback();
                    this.ui.clearInputFeedback();
                    this.answerSubmitted = false;
                    this.isChecking = false;
                    this.ui.focusFirstField();
                }, CONFIG.FEEDBACK_DELAY_INCORRECT);
            }
        }
    }

    showSuccess() {
        this.timer.stop();
        const time = this.timer.getMs();
        const previousBest = StorageManager.getBestTime(this.state.currentLevel.key);
        const isNewBest = !previousBest || time < previousBest;

        if (isNewBest) this.confetti.trigger(CONFIG.CONFETTI.SUCCESS);

        try {
            if (window.progressTracker) {
                window.progressTracker.recordProgress(
                    this.state.currentLevel.key,
                    time,
                    CONFIG.REQUIRED_STREAK,
                    this.state.questionsAttempted
                );
            }
        } catch (error) {
            console.error('Error recording progress (non-blocking):', error);
        }

        const rating = StorageManager.getRating(time, this.state.currentLevel.key);

        const hasNext = !!this.state.getNextLevel(CONFIG.LEVEL_GROUPS);
        this.ui.elements.nextLevelBtn?.classList.toggle('hidden', !hasNext);

        try {
            this.ui.showSuccess(
                this.state.currentLevel.name,
                time,
                rating,
                isNewBest,
                previousBest,
                this.state.currentLevel.key,
                CONFIG.REQUIRED_STREAK
            );
        } catch (error) {
            console.error('Error showing success screen:', error);
        }

        if (typeof Leaderboard !== 'undefined') {
            const submitParams = (isNewBest && window.supabaseUser) ? { bestTime: time, rating } : null;
            Leaderboard.renderOnSuccessScreen('equations', this.state.currentLevel.key, window.supabaseUser?.id || null, submitParams)
                .catch(err => console.error('Leaderboard error:', err));
        }

        if (typeof renderProgressChartOnSuccessScreen === 'function') {
            renderProgressChartOnSuccessScreen(this.state.currentLevel.key, this.state.currentLevel.name);
        }

        this.isChecking = false;

        if (window.ProgressSync && window.supabaseUser) {
            window.ProgressSync.pushAfterLevel(window.ProgressSync.detectApp());
        }
    }

    confirmQuit() {
        if (this._quitPending && this._quitAcceptSecond) {
            clearTimeout(this._quitPendingTimeout);
            this._quitPending = false;
            this._quitAcceptSecond = false;
            this.quitGame();
            return;
        }
        if (this._quitPending) return;
        this._quitPending = true;
        this._quitAcceptSecond = false;
        this.ui.showToast('Keep going!');
        setTimeout(() => { this._quitAcceptSecond = true; }, 200);
        this._quitPendingTimeout = setTimeout(() => {
            this._quitPending = false;
            this._quitAcceptSecond = false;
        }, 2000);
    }

    quitGame() {
        this.timer.stop();
        this.state.reset();
        this.isChecking = false;
        this.answerSubmitted = false;
        if (this._moveToNextQuestion) {
            document.removeEventListener('keydown', this._moveToNextQuestion);
            this._moveToNextQuestion = null;
        }
        this.updateLearningPathInterface();
        this.ui.showScreen('settings');
    }

    updateLearningPathInterface() {
        const keyboardTableHTML = `<table>
            <tr>
                <td><span class="math-static" id="power-example">a^n</span></td>
                <td><span class="dcg">^</span> (<span class="dcg">shift</span><span class="dcg">6</span>)</td>
                <td><span class="math-static" id="fraction-example">\\frac{a}{b}</span></td>
                <td><span class="dcg">a</span><span class="dcg">/</span><span class="dcg">b</span></td>
            </tr>
            <tr>
                <td><span class="math-static" id="sqrt-example">\\sqrt{a}</span></td>
                <td><span class="dcg">s</span><span class="dcg">q</span><span class="dcg">r</span><span class="dcg">t</span></td>
                <td><span class="math-static" id="pm-example">\\pm</span></td>
                <td><span class="dcg">p</span><span class="dcg">m</span></td>
            </tr>
        </table>`;
        this.ui.renderLevelSelectScreen(CONFIG.LEVEL_GROUPS, (level) => this.startGame(level), {
            subjectName: 'Equations',
            subjectSubtitle: 'Linear, quadratic & simultaneous',
            subjectIcon: '=',
            accentColor: '#14b8a6',
            singleLevel: false,
            keyboardTableHTML,
        });
    }

    replayCurrentLevel() {
        if (this.state.currentLevel) {
            this.startGame(this.state.currentLevel);
        } else {
            this.quitGame();
        }
    }

    startNextLevel() {
        const next = this.state.getNextLevel(CONFIG.LEVEL_GROUPS);
        if (next) {
            this.startGame(next);
        } else {
            this.quitGame();
        }
    }
}
