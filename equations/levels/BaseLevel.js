// levels/BaseLevel.js
// Shared base class for equations levels. Each question in the questions
// array is shaped { problem, inputs, answer } — see equations/ui.js and
// equations/equationsAnswerChecker.js for the contract.

export class BaseLevel {
    constructor(key, name, questions) {
        this.key = key;
        this.name = name;
        this.questions = questions;
        this.usedQuestionIndices = new Set();
    }

    generateQuestion() {
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        let idx;
        do {
            idx = Math.floor(Math.random() * this.questions.length);
        } while (this.usedQuestionIndices.has(idx));
        this.usedQuestionIndices.add(idx);
        return this.questions[idx];
    }
}
