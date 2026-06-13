// gameController.js
import { CONFIG } from './config.js';
import { GameState } from './gameState.js';
import { UI } from './ui.js';
import { Timer } from '../shared/timer.js';
import { QuestionGenerator } from './questionGenerator.js';
import { Confetti } from '../shared/confetti.js';
import { StorageManager } from './storage.js';
import { RatingUtils } from '../shared/ratingUtils.js';
import { CalculusAnswerChecker } from './calculusAnswerChecker.js';

// Make RatingUtils globally available for progress tracking modules
window.RatingUtils = RatingUtils;

export class GameController {
    constructor() {
        this.state = new GameState();
        this.ui = new UI();
        this.timer = new Timer(this.ui.elements.timer);
        this.questionGen = new QuestionGenerator();
        this.checker = new CalculusAnswerChecker();
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
            window.progressShare = new ProgressShare(window.progressTracker, window.progressChart, 'Calculus Challenge');
            window.progressUI = new ProgressUI(window.progressTracker, window.progressChart, window.progressShare);
        }
    }

    initializeLearningPath() {
        this.ui.setSuccessScreenCallbacks(
            () => this.replayCurrentLevel(),
            () => this.quitGame()
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
                if (e.key === 'Escape') {
                    this.confirmQuit();
                }
            }
        };
        document.addEventListener('keydown', this.handleGlobalKeys);

        // Capture phase so MathLive doesn't swallow the \ key (skip question)
        this.handleSkipKey = (e) => {
            if (e.key === '\\' && !this.ui.elements.gameScreen.classList.contains('hidden')) {
                e.stopPropagation();
                if (this._moveToNextQuestion) {
                    document.removeEventListener('keydown', this._moveToNextQuestion);
                    this._moveToNextQuestion = null;
                }
                this.ui.hideTimerPausedMessage();
                this.timer.start();
                this.answerSubmitted = false;
                this.isChecking = false;
                this.generateQuestion();
            }
        };
        document.addEventListener('keydown', this.handleSkipKey, { capture: true });
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
        if (!question) {
            console.error("Failed to generate question");
            return;
        }

        this.state.currentQuestion = question;
        this.state.currentAnswer = question.answer;
        this.ui.displayQuestion(question);
        this.ui.updateTestAnswer(question.answer);
    }

    checkAnswer() {
        if (this.isChecking || this.answerSubmitted) return;
        this.answerSubmitted = true;
        this.isChecking = true;

        const userAnswer = this.ui.getAnswerFromUI();

        if (!userAnswer || userAnswer.trim() === '') {
            this.ui.showFeedback(false, 'Please enter an answer');
            this.answerSubmitted = false;
            this.isChecking = false;
            return;
        }

        this.state.incrementQuestionsAttempted();

        const question = this.state.currentQuestion;
        const correctAnswer = question.answer;
        const result = this.checker.check(userAnswer, {
            answer: correctAnswer,
            mode: question.mode,
            toleranceDp: question.toleranceDp,
        });
        const isCorrect = result.correct;

        if (isCorrect) {
            this.state.resetIncorrectCount();

            const newStreak = this.state.incrementStreak();
            this.ui.updateStreak(newStreak);
            this.ui.showInputFeedback(true);
            this.ui.showFeedback(true, CONFIG.POSITIVE_FEEDBACK[Math.floor(Math.random() * CONFIG.POSITIVE_FEEDBACK.length)]);
            this.confetti.trigger(CONFIG.CONFETTI.CORRECT);

            // Correct, but the student omitted the constant of integration.
            if (result.missingC) {
                this.ui.showToast('Correct — but don’t forget + C ✏️');
            }

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
            const incorrectCount = this.state.incrementIncorrectCount();

            if (this.state.isSecondIncorrectAttempt()) {
                this.state.resetStreak();
                this.ui.updateStreak(0);
                this.ui.showInputFeedback(false);
                this.ui.showFeedback(false, null, correctAnswer, this.state.currentQuestion.problem);
                this.ui.showTimerPausedMessage();
                this.timer.reset();

                this.recordMistake(userAnswer, correctAnswer);

                this.ui.clearAnswer();

                this._moveToNextQuestion = (e) => {
                    if (e.key.length === 1 || e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Escape') {
                        document.removeEventListener('keydown', this._moveToNextQuestion);
                        this._moveToNextQuestion = null;

                        if (e.key === 'Escape') {
                            return;
                        }

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

                    if (this.ui.mathField) {
                        this.ui.mathField.focus();
                    }
                }, CONFIG.FEEDBACK_DELAY_INCORRECT);
            }
        }
    }

    showSuccess() {
        this.timer.stop();
        const time = this.timer.getMs();
        const previousBest = StorageManager.getBestTime(this.state.currentLevel.key);
        const isNewBest = !previousBest || time < previousBest;

        if (isNewBest) {
            this.confetti.trigger(CONFIG.CONFETTI.SUCCESS);
        }

        try {
            if (window.progressTracker) {
                console.log('Recording progress for:', this.state.currentLevel.key, 'Time:', time);
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

        // Leaderboard intentionally deferred for calculus (not yet in the
        // Supabase CHECK constraint). Progress still persists locally.

        if (typeof renderProgressChartOnSuccessScreen === 'function') {
            renderProgressChartOnSuccessScreen(this.state.currentLevel.key, this.state.currentLevel.name);
        }

        this.isChecking = false;

        if (window.ProgressSync && window.supabaseUser) {
            window.ProgressSync.pushAfterLevel(window.ProgressSync.detectApp());
        }
    }

    recordMistake(studentAnswer, correctAnswer) {
        try {
            if (window.progressTracker && this.state.currentLevel && this.state.currentQuestion) {
                console.log('Recording mistake for:', this.state.currentLevel.key);
                window.progressTracker.recordMistake(
                    this.state.currentLevel.key,
                    this.state.currentLevel.name,
                    this.state.currentQuestion.problem,
                    correctAnswer,
                    studentAnswer
                );
            }
        } catch (error) {
            console.error('Error recording mistake (non-blocking):', error);
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

    // --- Learning Path Methods ---

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
                <td><span class="math-static" id="nthroot-example">\\sqrt[n]{a}</span></td>
                <td><span class="dcg">n</span><span class="dcg">t</span><span class="dcg">h</span><span class="dcg">r</span><span class="dcg">o</span><span class="dcg">o</span><span class="dcg">t</span></td>
            </tr>
        </table>`;
        this.ui.renderLevelSelectScreen(CONFIG.LEVEL_GROUPS, (level) => this.startGame(level), {
            subjectName: 'Calculus',
            subjectSubtitle: 'Differentiate & integrate',
            subjectIcon: '∫',
            accentColor: '#7c5cff',
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
}
