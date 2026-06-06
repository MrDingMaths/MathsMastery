import { CONFIG } from './config.js';
import { RatingUtils } from '../shared/ratingUtils.js';

export const StorageManager = {
    saveBestTime: (levelKey, time) => { /* no-op */ },
    getBestTime: (levelKey) => window.progressTracker?.getBestTime(levelKey) ?? null,
    getRating: (time, levelKey) => RatingUtils.getRating(time, levelKey, CONFIG.REQUIRED_STREAK, CONFIG),
    clearAllData: () => { if (window.progressTracker) window.progressTracker.resetData(); }
};
