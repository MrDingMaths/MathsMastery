import { CONFIG } from './config.js';
import { StorageManager } from './storage.js';
import { GameController } from './gameController.js';

window.CONFIG = CONFIG;
window.StorageManager = StorageManager;

document.addEventListener('DOMContentLoaded', () => {
    window.gameController = new GameController();
});
