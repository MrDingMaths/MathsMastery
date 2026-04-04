/**
 * shared/storageManager.js
 * Base localStorage interface parameterised by storage prefix.
 * Each app instantiates this with its own STORAGE_PREFIX.
 *
 * DEPRECATED: BaseStorageManager is no longer used by any app wrapper.
 * Per-app StorageManagers now delegate to window.progressTracker.
 * Kept for safety; can be deleted in a follow-up PR.
 */
export class StorageManager {
    /**
     * @param {string} storagePrefix - The key prefix for this app (e.g. 'algebra_bestTime_v1_')
     */
    constructor(storagePrefix) {
        this.prefix = storagePrefix;
    }

    saveBestTime(levelKey, time) {
        try {
            localStorage.setItem(`${this.prefix}${levelKey}`, time);
        } catch (error) {
            console.error('Error saving best time:', error);
        }
    }

    getBestTime(levelKey) {
        try {
            const time = localStorage.getItem(`${this.prefix}${levelKey}`);
            return time ? parseInt(time, 10) : null;
        } catch (error) {
            console.error('Error retrieving best time:', error);
            return null;
        }
    }

    clearAllData() {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith(this.prefix))
                .forEach(key => localStorage.removeItem(key));
        } catch (error) {
            console.error('Error clearing data:', error);
        }
    }
}
