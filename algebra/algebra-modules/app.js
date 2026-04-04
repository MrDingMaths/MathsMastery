import { CONFIG } from './config.js';
import { StorageManager } from './storage.js';
import { GameController } from './gameController.js';

// Expose CONFIG and StorageManager as globals for plain-script progress-tracking modules
window.CONFIG = CONFIG;
window.StorageManager = StorageManager;

document.addEventListener('DOMContentLoaded', () => {
    window.gameController = new GameController();
});
