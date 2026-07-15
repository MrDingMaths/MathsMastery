// levels/divideTermsHard.js
import { BaseLevel } from './BaseLevel.js';
// Custom generateQuestion: converts division (÷) notation to fraction notation 95% of the time
// Tier principle: TWO simultaneous index-law reductions — both numerator and denominator carry
// powers on two different variables, leaving variables top and bottom plus a coefficient fraction.
class DivideTermsHardLevel extends BaseLevel {
    constructor() {
        super('divideTermsHard', 'Cancelling Factors (Hard)', [
            // Two simultaneous index-law reductions (existing)
            {problem: "18a^2b ÷ 24ab^2", answer: "\\frac{3a}{4b}"},
            {problem: "20x^3y^2 ÷ 25xy^3", answer: "\\frac{4x^2}{5y}"},
            {problem: "12x^2y ÷ 18xy^2", answer: "\\frac{2x}{3y}"},
            {problem: "15x^2y ÷ 20xy^2", answer: "\\frac{3x}{4y}"},
            {problem: "14a^2b ÷ 21ab^2", answer: "\\frac{2a}{3b}"},
            {problem: "16x^2y ÷ 24xy^2", answer: "\\frac{2x}{3y}"},
            {problem: "28x^3y^2 ÷ 21xy^3", answer: "\\frac{4x^2}{3y}"},
            {problem: "30x^4y ÷ 40x^2y^2", answer: "\\frac{3x^2}{4y}"},
            {problem: "25x^3y ÷ 15xy^3", answer: "\\frac{5x^2}{3y^2}"},
            {problem: "32a^3b^2 ÷ 48a^2b^3", answer: "\\frac{2a}{3b}"},
            {problem: "50x^4y^2 ÷ 20x^2y^3", answer: "\\frac{5x^2}{2y}"},
            {problem: "24x^2y ÷ 36xy^2", answer: "\\frac{2x}{3y}"},
            {problem: "27x^3y ÷ 18xy^3", answer: "\\frac{3x^2}{2y^2}"},
            {problem: "45a^4b ÷ 60a^3b^2", answer: "\\frac{3a}{4b}"},

            // Two simultaneous reductions (migrated from Medium)
            {problem: "12x^2y^3 ÷ 4xy^2", answer: "3xy"},
            {problem: "18a^3b^2 ÷ 6a^2b", answer: "3ab"},
            {problem: "7x^2y ÷ 14x^3y^2", answer: "\\frac{1}{2xy}"},

            // New: two simultaneous reductions with fresh power patterns
            {problem: "8x^3y^2 ÷ 12x^2y", answer: "\\frac{2xy}{3}"},
            {problem: "9a^2b^3 ÷ 15ab^2", answer: "\\frac{3ab}{5}"},
            {problem: "10a^2b^3 ÷ 25a^3b", answer: "\\frac{2b^2}{5a}"},
            {problem: "14x^3y ÷ 21x^2y^2", answer: "\\frac{2x}{3y}"},
            {problem: "12x^4y^2 ÷ 18x^2y^3", answer: "\\frac{2x^2}{3y}"},
            {problem: "15x^3y^2 ÷ 20x^2y^4", answer: "\\frac{3x}{4y^2}"},
            {problem: "21x^3y^2 ÷ 14x^2y^3", answer: "\\frac{3x}{2y}"},
            {problem: "25a^2b^4 ÷ 30a^3b^2", answer: "\\frac{5b^2}{6a}"},
            {problem: "18a^2b^3 ÷ 27a^4b", answer: "\\frac{2b^2}{3a^2}"},
            {problem: "8x^3y^2 ÷ 20x^2y^4", answer: "\\frac{2x}{5y^2}"},
            {problem: "35a^4b^2 ÷ 28a^2b^3", answer: "\\frac{5a^2}{4b}"},
            {problem: "24x^3y ÷ 36xy^3", answer: "\\frac{2x^2}{3y^2}"},
            {problem: "27a^2b^3 ÷ 45a^3b^2", answer: "\\frac{3b}{5a}"}
        ]);
    }

    generateQuestion() {
        const question = BaseLevel.prototype.generateQuestion.call(this);

        // 5% chance to keep division symbol, 95% convert to fraction
        if (Math.random() < 0.05) {
            return question;
        }

        const divisionMatch = question.problem.match(/^(.+)\s÷\s(.+)$/);
        if (divisionMatch) {
            return {
                problem: `\\frac{${divisionMatch[1]}}{${divisionMatch[2]}}`,
                answer: question.answer
            };
        }

        return question;
    }
}

export default new DivideTermsHardLevel();
