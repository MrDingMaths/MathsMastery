// levels/divideTermsEasy.js
import { BaseLevel } from './BaseLevel.js';
// Custom generateQuestion: converts division (÷) notation to fraction notation 95% of the time
class DivideTermsEasyLevel extends BaseLevel {
    constructor() {
        super('divideTermsEasy', 'Cancelling Factors (Easy)', [
            // Category 1: Basic Numerical Coefficient Cancelling
            {problem: "8b ÷ 2", answer: "4b"},
            {problem: "12x ÷ 3", answer: "4x"},
            {problem: "15y ÷ 5", answer: "3y"},
            {problem: "6a ÷ 2", answer: "3a"},
            {problem: "9x ÷ 3", answer: "3x"},
            {problem: "14x ÷ 7", answer: "2x"},
            {problem: "24x ÷ 6", answer: "4x"},

            // Category 1: Negative numerators
            {problem: "-12x ÷ 4", answer: "-3x"},
            {problem: "-8y ÷ 2", answer: "-4y"},
            {problem: "-15x ÷ 3", answer: "-5x"},
            {problem: "-10a ÷ 5", answer: "-2a"},
            {problem: "-16b ÷ 8", answer: "-2b"},

            // Category 3: Basic Variable Cancelling (Same Variables)
            {problem: "8ab ÷ 4a", answer: "2b"},
            {problem: "12xy ÷ 3x", answer: "4y"},
            {problem: "15abx ÷ 5a", answer: "3bx"},
            {problem: "18xya ÷ 6x", answer: "3ya"},
            {problem: "21xya ÷ 7x", answer: "3ya"},
            {problem: "4x ÷ 8xy", answer: "\\frac{1}{2y}"},
            {problem: "6a ÷ 12ab", answer: "\\frac{1}{2b}"},
            {problem: "9x ÷ 15xy", answer: "\\frac{3}{5y}"},

            // Keep questions where powers are present but core task doesn't involve changing powers
            {problem: "6x ÷ 3x^2", answer: "\\frac{2}{x}"},
            {problem: "8ab ÷ 4a^2", answer: "\\frac{2b}{a}"},
            {problem: "12xy ÷ 6x^2y", answer: "\\frac{2}{x}"},

            // Textbook Questions - Easy Level
            {problem: "\\frac{2x}{5x}", answer: "\\frac{2}{5}"},
            {problem: "\\frac{5a}{9a}", answer: "\\frac{5}{9}"},
            {problem: "\\frac{2x}{4}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{9x}{12}", answer: "\\frac{3x}{4}"},
            {problem: "\\frac{10a}{15a}", answer: "\\frac{2}{3}"},
            {problem: "\\frac{30y}{40y}", answer: "\\frac{3}{4}"},
            {problem: "\\frac{4a}{2}", answer: "2a"},
            {problem: "\\frac{21x}{7x}", answer: "3"},
            {problem: "\\frac{5a}{10a}", answer: "\\frac{1}{2}"},
            {problem: "\\frac{8b}{2}", answer: "4b"},
            {problem: "\\frac{12ab}{2}", answer: "6ab"},
            {problem: "\\frac{8x}{x}", answer: "8"},
            {problem: "\\frac{7x}{7}", answer: "x"},
            {problem: "\\frac{6ab}{2}", answer: "3ab"},
            {problem: "\\frac{5x}{x}", answer: "5"},
            {problem: "\\frac{2y}{y}", answer: "2"},
            {problem: "\\frac{30x}{5}", answer: "6x"}
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

export default new DivideTermsEasyLevel();
