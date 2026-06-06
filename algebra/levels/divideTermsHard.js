// levels/divideTermsHard.js
import { BaseLevel } from './BaseLevel.js';
// Custom generateQuestion: converts division (÷) notation to fraction notation 95% of the time
class DivideTermsHardLevel extends BaseLevel {
    constructor() {
        super('divideTermsHard', 'Cancelling Factors (Hard)', [
            // Keep only questions with simple mental arithmetic
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

            // Keep only textbook questions with simple mental arithmetic and no index laws
            {problem: "\\frac{-5x}{10ya^2}", answer: "-\\frac{x}{2ya^2}"},
            {problem: "\\frac{21x}{-3y}", answer: "-\\frac{7x}{y}"},
            {problem: "-\\frac{3a}{9}", answer: "-\\frac{a}{3}"},
            {problem: "-\\frac{2ab}{8}", answer: "-\\frac{ab}{4}"},
            {problem: "\\frac{-2x}{x}", answer: "-2"},
            {problem: "\\frac{-8x}{4xya}", answer: "-\\frac{2}{ya}"},
            {problem: "\\frac{12xy}{-4x}", answer: "-3y"},
            {problem: "-\\frac{15ab}{5a}", answer: "-3b"},
            {problem: "\\frac{-6xy}{9x}", answer: "-\\frac{2y}{3}"},
            {problem: "\\frac{10xy}{-5x}", answer: "-2y"},
            {problem: "-\\frac{4xy}{12x}", answer: "-\\frac{y}{3}"},
            {problem: "\\frac{-18xy}{6y}", answer: "-3x"},
            {problem: "\\frac{-9ab}{12b}", answer: "-\\frac{3a}{4}"},
            {problem: "\\frac{14x}{-7xy}", answer: "-\\frac{2}{y}"},
            {problem: "-\\frac{16xy}{4x}", answer: "-4y"},
            {problem: "\\frac{-11x}{xy}", answer: "-\\frac{11}{y}"},
            {problem: "\\frac{25xy}{-5x}", answer: "-5y"},
            {problem: "-\\frac{50xya}{100x}", answer: "-\\frac{ya}{2}"},
            {problem: "\\frac{-7x}{21xy}", answer: "-\\frac{1}{3y}"},
            {problem: "\\frac{3ab}{a}", answer: "3b"},
            {problem: "-\\frac{20xya}{4xa}", answer: "-5y"},
            {problem: "\\frac{6x^2y}{3xy}", answer: "2x"}
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
