// storage.js
import { CONFIG } from './config.js';
import { RatingUtils } from '../shared/ratingUtils.js';

export class StorageManager {
    static getBestTime(levelKey) {
        return window.progressTracker?.getBestTime(levelKey) ?? null;
    }

    static getRating(time, levelKey) {
        return RatingUtils.getRating(time, levelKey, CONFIG.REQUIRED_STREAK, CONFIG);
    }
}
