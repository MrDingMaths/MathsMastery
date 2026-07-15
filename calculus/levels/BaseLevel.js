// levels/BaseLevel.js
// Shared base class for calculus levels. Each question is shaped
// { problem, answer } where both are LaTeX strings. The level's `mode`
// ('derivative' | 'integral') and optional `toleranceDp` are stamped onto each
// generated question and consumed by calculusAnswerChecker.js.
//
// Integration model answers SHOULD include "+ C" (for display); the checker
// strips it before numeric comparison and is lenient about whether the student
// writes it.

export class BaseLevel {
    constructor(key, name, questions, options = {}) {
        this.key = key;
        this.name = name;
        this.questions = questions;
        this.mode = options.mode ?? 'derivative';
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
        const out = { ...q, mode: this.mode };
        if (this.toleranceDp != null) out.toleranceDp = this.toleranceDp;
        if (this.hint) out.hint = this.hint;
        return out;
    }
}
