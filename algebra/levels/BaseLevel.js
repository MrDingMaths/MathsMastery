// levels/BaseLevel.js - Shared base class for standard algebra levels
// Standard levels that just pick from a predefined questions array can use this directly.
// Levels with custom generateQuestion() logic should extend this class.export class BaseLevel {
    constructor(key, name, questions, hint = null) {
        this.key = key;
        this.name = name;
        this.hint = hint;
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
        const question = this.questions[questionIndex];
        return this.hint ? { ...question, hint: this.hint } : question;
    }
}
