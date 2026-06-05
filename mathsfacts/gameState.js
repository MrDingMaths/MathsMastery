/**
 * Game State Management classes for Maths Facts Challenge
 * Provides core state tracking, timing, and local storage functionality
 */
import { CONFIG } from './config.js';
import { RatingUtils } from '../shared/ratingUtils.js';
import { BaseGameState } from '../shared/baseGameState.js';
export { Timer } from '../shared/timer.js';

/**
 * GameState class manages the current game session state
 * Extends BaseGameState with lastQuestionFormat tracking
 */
export class GameState extends BaseGameState {
    constructor() {
        super(CONFIG);
    }

    reset() {
        super.reset();
        this.lastQuestionFormat = null;
    }
}

/**
 * StorageManager provides localStorage interface for game data persistence.
 * Delegates to window.progressTracker; static API preserved for callers.
 */
export const StorageManager = {
    saveBestTime: (levelKey, time) => { /* no-op */ },
    getBestTime: (levelKey) => window.progressTracker?.getBestTime(levelKey) ?? null,
    getRating: (time, levelKey = null) => RatingUtils.getRating(time, levelKey, CONFIG.REQUIRED_STREAK, CONFIG)
};
