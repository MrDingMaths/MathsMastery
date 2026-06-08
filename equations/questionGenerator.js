// questionGenerator.js
import * as Levels from './levels/index.js';

export class QuestionGenerator {
    constructor() {
        this.lastQuestionsByLevel = {};
    }

    generateQuestion(levelKey) {
        const level = Levels[levelKey];
        if (level) return level.generateQuestion();
        console.log('Level not yet implemented:', levelKey);
        return { problem: '2x = 4', inputs: { vars: ['x'] }, answer: { x: '2' } };
    }
}
