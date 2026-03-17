/**
 * Game State Management classes for Maths Facts Challenge
 * Provides core state tracking, timing, and local storage functionality
 */
import { CONFIG } from './config.js';
import { RatingUtils } from '../shared/ratingUtils.js';
import { StorageManager as BaseStorageManager } from '../shared/storageManager.js';
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
 * Delegates to shared BaseStorageManager; static API preserved for callers.
 */
const _sm = new BaseStorageManager(CONFIG.STORAGE_PREFIX);

export const StorageManager = {
    saveBestTime: (levelKey, time) => _sm.saveBestTime(levelKey, time),
    getBestTime: (levelKey) => _sm.getBestTime(levelKey),
    getRating: (time, levelKey = null) => RatingUtils.getRating(time, levelKey, CONFIG.REQUIRED_STREAK, CONFIG)
};
