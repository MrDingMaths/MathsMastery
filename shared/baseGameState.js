/**
 * BaseGameState - Shared game state base class for all three apps.
 * Tracks level, answer, streaks, and incorrect attempts.
 * Per-app subclasses extend this with app-specific properties.
 */
export class BaseGameState {
    constructor(config) {
        this.config = config;
        this.reset();
    }

    reset() {
        this.currentLevel = null;
        this.currentAnswer = null;
        this.correctStreak = 0;
        this.consecutiveIncorrect = 0;
        this.questionsAttempted = 0;
    }

    setLevel(level) {
        this.reset();
        this.currentLevel = level;
    }

    incrementQuestionsAttempted() {
        this.questionsAttempted++;
        return this.questionsAttempted;
    }

    incrementStreak() {
        this.correctStreak++;
        return this.correctStreak;
    }

    resetStreak() {
        this.correctStreak = 0;
    }

    incrementIncorrectCount() {
        this.consecutiveIncorrect++;
        return this.consecutiveIncorrect;
    }

    resetIncorrectCount() {
        this.consecutiveIncorrect = 0;
    }

    isSecondIncorrectAttempt() {
        return this.consecutiveIncorrect >= 2;
    }

    isComplete() {
        return this.correctStreak >= this.config.REQUIRED_STREAK;
    }
}
