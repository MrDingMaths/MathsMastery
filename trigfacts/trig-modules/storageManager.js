import { CONFIG } from './config.js';
import { RatingUtils } from '../../shared/ratingUtils.js';
import { StorageManager as BaseStorageManager } from '../../shared/storageManager.js';

const _sm = new BaseStorageManager(CONFIG.STORAGE_PREFIX);

/**
 * StorageManager - Handles localStorage operations for progress tracking.
 * Static API preserved; delegates to shared BaseStorageManager instance.
 */
export const StorageManager = {
    saveBestTime: (levelKey, time) => _sm.saveBestTime(levelKey, time),
    getBestTime: (levelKey) => _sm.getBestTime(levelKey),
    getRating: (time, levelKey) => RatingUtils.getRating(time, levelKey, CONFIG.REQUIRED_STREAK, CONFIG),
    clearAllData: () => _sm.clearAllData()
};
