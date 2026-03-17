import { CONFIG } from './config.js';
import { BaseGameState } from '../../shared/baseGameState.js';

/**
 * GameState - Manages trig game state with question tracking and answering guard
 */
export class GameState extends BaseGameState {
    constructor() {
        super(CONFIG);
    }

    reset() {
        super.reset();
        this.currentQuestion = null;
        this.isAnswering = false;
    }

    setQuestion(question) {
        this.currentQuestion = question;
        this.currentAnswer = question.answer;
        this.consecutiveIncorrect = 0;
    }

    setAnswering(value) {
        this.isAnswering = value;
    }
}
