// levels/BaseLevel.js - Shared base class for standard algebra levels
// Standard levels that just pick from a predefined questions array can use this directly.
// Levels with custom generateQuestion() logic should extend this class.export class BaseLevel {
    constructor(key, name, questions) {
        this.key = key;
        this.name = name;
        this.usedQuestionIndices = new Set();
        this.questions = questions;
    }

    generateQuestion() {
        // Reset if we've used all questions in this session
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }

        // Pick a random unused question
        let questionIndex;
        do {
            questionIndex = Math.floor(Math.random() * this.questions.length);
        } while (this.usedQuestionIndices.has(questionIndex));

        this.usedQuestionIndices.add(questionIndex);
        return this.questions[questionIndex];
    }

    getQuestions() {
        return this.questions;
    }
}
