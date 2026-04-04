import { CONFIG } from './config.js';
import { GameState } from './trigGameState.js';
import { TrigUI } from './trigUI.js';
import { Timer } from '../../shared/timer.js';
import { Confetti } from '../../shared/confetti.js';
import { AnswerChecker } from './trigAnswerChecker.js';
import { StorageManager } from './storageManager.js';
import { TrigQuestionGenerator } from './questions/trigQuestionGenerator.js';

/**
 * TrigGameController - Main game orchestrator managing game flow and user interactions
 */
export class TrigGameController {
    constructor() {
        // Make CONFIG and StorageManager globally available for progress tracking modules
        window.CONFIG = CONFIG;
        window.StorageManager = StorageManager;

        this.state = new GameState();
        this.ui = new TrigUI();
        this.timer = new Timer(this.ui.elements.timer);
        this.questionGen = new TrigQuestionGenerator();
        this.confetti = new Confetti('confetti-canvas');
        this.answerChecker = new AnswerChecker();

        this.setupEventListeners();
        this.initialize();
        setTimeout(() => this.initializeProgressTracking(), 100);
    }

    initializeProgressTracking() {
        if (!window.progressUI) {
            window.progressChart = new ProgressChart('progress-chart', window.progressTracker);
            window.progressShare = new ProgressShare(window.progressTracker, window.progressChart, 'Trig Facts');
            window.progressUI = new ProgressUI(window.progressTracker, window.progressChart, window.progressShare);
        }
    }

    initialize() {
        this.ui.renderLevelGrid(CONFIG.LEVEL_GROUPS, (level) => this.startGame(level));
        this.ui.setSuccessScreenCallbacks(
            () => this.replayCurrentLevel(),
            () => this.quitGame()
        );
        this.ui.showScreen('settings');
    }

    setupEventListeners() {
        // Button listeners
        this.ui.elements.quitBtn.addEventListener('click', () => this.confirmQuit());
        // playAgainBtn (Back to Levels on success screen) is handled by BaseUI.setupSuccessScreenButtons via setSuccessScreenCallbacks

        // Keyboard listeners
        document.addEventListener('keydown', (e) => this.handleKeypress(e));
    }

    handleKeypress(e) {
        // Only handle keypresses during game
        if (this.ui.elements.gameScreen.classList.contains('hidden')) {
            return;
        }

        // Escape key to quit
        if (e.key === 'Escape') {
            this.confirmQuit();
            return;
        }

        // Enter key to submit answer
        if (e.key === 'Enter' && !this.state.isAnswering) {
            e.preventDefault();
            this.checkAnswer();
        }
    }

    startGame(level) {
        this.state.setLevel(level);
        this.ui.showScreen('game');
        this.ui.updateLevelName(level.name);
        this.ui.updateStreak(0);
        this.ui.hideTimerPausedMessage();
        this.timer.start();
        this.generateQuestion();
    }

    generateQuestion() {
        this.ui.clearFeedback();
        this.state.setAnswering(false);

        try {
            const question = this.questionGen.generate(this.state.currentLevel);

            if (question.error) {
                console.error('Question generation failed');
                this.ui.showFeedback(false, 'Error generating question');
                setTimeout(() => this.generateQuestion(), 1000);
                return;
            }

            this.state.setQuestion(question);

            this.ui.displayQuestion(
                question,
                this.state.currentLevel.type
            );

        } catch (error) {
            console.error('Error in generateQuestion:', error, error.stack);
            this.ui.showFeedback(false, 'Error generating question');
            setTimeout(() => this.generateQuestion(), 1000);
        }
    }

    checkAnswer() {
        if (this.state.isAnswering) return;

        const userAnswer = this.ui.getAnswerFromUI();
        if (!userAnswer || userAnswer.trim() === '') {
            this.ui.showFeedback(false, 'Please enter an answer');
            return;
        }

        this.state.incrementQuestionsAttempted();
        this.state.setAnswering(true);
        this.ui.disableInput();

        const isCorrect = this.answerChecker.checkAnswer(
            userAnswer,
            this.state.currentAnswer,
            this.state.currentQuestion.type
        );

        if (isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleIncorrectAnswer();
        }
    }

    handleCorrectAnswer() {
        const newStreak = this.state.incrementStreak();
        this.ui.updateStreak(newStreak);

        this.ui.showInputFeedback(true);

        const feedback = CONFIG.POSITIVE_FEEDBACK[
            Math.floor(Math.random() * CONFIG.POSITIVE_FEEDBACK.length)
        ];
        this.ui.showFeedback(true, feedback);

        this.confetti.trigger(CONFIG.CONFETTI.CORRECT);

        if (this.state.isComplete()) {
            setTimeout(() => this.showSuccess(), CONFIG.FEEDBACK_DELAY_CORRECT);
        } else {
            setTimeout(() => this.generateQuestion(), CONFIG.FEEDBACK_DELAY_CORRECT);
        }
    }

    handleIncorrectAnswer() {
        const incorrectCount = this.state.incrementIncorrectCount();

        if (this.state.isSecondIncorrectAttempt()) {
            // Second incorrect attempt - show answer and reset timer
            this.state.resetStreak();
            this.ui.updateStreak(0);

            this.ui.showInputFeedback(false);

            // Show correct answer
            this.ui.showFeedback(false, null, this.state.currentAnswer);

            // Reset timer
            this.timer.reset();
            this.ui.showTimerPausedMessage();

            // Clear the answer input
            this.ui.clearAnswer();

            // Setup keystroke listener for advancing
            this._moveToNextQuestion = (e) => {
                // Filter for valid keys (not meta/modifier keys)
                if (e.key.length === 1 || e.key === 'Enter' ||
                    e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Escape') {

                    // Remove listener immediately (one-time use)
                    document.removeEventListener('keydown', this._moveToNextQuestion);
                    this._moveToNextQuestion = null;

                    // If Escape, let the main handler deal with it (don't advance question)
                    if (e.key === 'Escape') {
                        return;
                    }

                    // Execute transition sequence
                    this.ui.hideTimerPausedMessage();
                    this.state.setAnswering(false);
                    this.timer.start();  // Restart timer from 0:00
                    this.generateQuestion();
                }
            };

            // Attach listener to document (50ms delay prevents same keystroke from double-firing)
            setTimeout(() => {
                document.addEventListener('keydown', this._moveToNextQuestion);
            }, 50);
        } else {
            // First incorrect attempt - show hint and let user try again
            this.ui.showInputFeedback(false);
            this.ui.showFeedback(false, CONFIG.SECOND_CHANCE_FEEDBACK[Math.floor(Math.random() * CONFIG.SECOND_CHANCE_FEEDBACK.length)]);

            // Don't reset timer, just re-enable input
            setTimeout(() => {
                this.ui.clearFeedback();
                this.state.setAnswering(false);
                this.ui.enableInput();
            }, CONFIG.FEEDBACK_DELAY_INCORRECT);
        }
    }

    showSuccess() {
        this.timer.stop();
        const time = this.timer.getSeconds();
        const previousBest = StorageManager.getBestTime(this.state.currentLevel.key);
        const isNewBest = !previousBest || time < previousBest;

        if (isNewBest) {
            StorageManager.saveBestTime(this.state.currentLevel.key, time);
            this.confetti.trigger(CONFIG.CONFETTI.SUCCESS);
        }

        if (window.progressTracker) {
            window.progressTracker.recordProgress(this.state.currentLevel.key, time, CONFIG.REQUIRED_STREAK, this.state.questionsAttempted);
        }

        const rating = StorageManager.getRating(time, this.state.currentLevel.key);

        this.ui.showSuccess(
            this.state.currentLevel.name,
            time,
            rating,
            isNewBest,
            previousBest,
            this.state.currentLevel.key,
            CONFIG.REQUIRED_STREAK
        );

        if (isNewBest && window.supabaseUser && typeof Leaderboard !== 'undefined') {
            Leaderboard.submitEntry('trigfacts', this.state.currentLevel.key, time, rating)
                .catch(err => console.error('Leaderboard submit error:', err));
        }
        if (typeof Leaderboard !== 'undefined') {
            Leaderboard.renderOnSuccessScreen('trigfacts', this.state.currentLevel.key, window.supabaseUser?.id || null)
                .catch(err => console.error('Leaderboard render error:', err));
        }
    }

    replayCurrentLevel() {
        if (this.state.currentLevel) {
            this.startGame(this.state.currentLevel);
        } else {
            this.quitGame();
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
        if (this._quitPending) return; // within 200ms delay, ignore
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
        if (this._moveToNextQuestion) {
            document.removeEventListener('keydown', this._moveToNextQuestion);
            this._moveToNextQuestion = null;
        }
        this.ui.hideTimerPausedMessage();
        this.initialize();
    }
}
