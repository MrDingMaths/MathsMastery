// levels/BaseLevel.js
// Shared base class for equations levels. Each question in the questions
// array is shaped { problem, inputs, answer } — see equations/ui.js and
// equations/equationsAnswerChecker.js for the contract.

export class BaseLevel {
    constructor(key, name, questions, options = {}) {
        this.key = key;
        this.name = name;
        this.questions = questions;
        this.toleranceDp = options.toleranceDp ?? null;
        this.hint = options.hint ?? null;
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
        const q = this.questions[idx];
        const out = { ...q };
        if (this.toleranceDp != null) out.answer = { ...q.answer, toleranceDp: this.toleranceDp };
        if (this.hint) out.hint = this.hint;
        return out;
    }
}
