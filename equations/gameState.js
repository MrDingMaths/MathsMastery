// gameState.js
import { CONFIG } from './config.js';
import { BaseGameState } from '../shared/baseGameState.js';

export class GameState extends BaseGameState {
    constructor() {
        super(CONFIG);
    }

    reset() {
        super.reset();
        this.currentQuestion = null;
    }
}
