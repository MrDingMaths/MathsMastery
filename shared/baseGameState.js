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

    /**
     * Returns the level immediately after the current level in the flattened
     * LEVEL_GROUPS ordering (group insertion order, then array order within
     * each group), or null if there is no current level or it is the last one.
     */
    getNextLevel(levelGroups) {
        if (!this.currentLevel || !levelGroups) return null;
        const all = Object.values(levelGroups).flat();
        const i = all.findIndex(l => l.key === this.currentLevel.key);
        return i >= 0 ? (all[i + 1] || null) : null;
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
