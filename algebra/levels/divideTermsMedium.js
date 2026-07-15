// levels/divideTermsMedium.js
import { BaseLevel } from './BaseLevel.js';
// Custom generateQuestion: converts division (÷) notation to fraction notation 95% of the time
// Tier principle: EITHER exactly one index-law reduction (one variable carries a power that must
// be reduced, e.g. a^2/a), OR zero reductions but three+ distinct variables/factors to track.
class DivideTermsMediumLevel extends BaseLevel {
    constructor() {
        super('divideTermsMedium', 'Cancelling Factors (Medium)', [
            // One index-law reduction (single powered variable)
            {problem: "8abx ÷ 4ab^2x", answer: "\\frac{2}{b}"},
            {problem: "\\frac{8a^2}{a}", answer: "8a"},
            {problem: "\\frac{8a^2}{2a}", answer: "4a"},
            {problem: "6x^2y ÷ 3xy", answer: "2x"},
            {problem: "6x ÷ 3x^2", answer: "\\frac{2}{x}"},
            {problem: "8ab ÷ 4a^2", answer: "\\frac{2b}{a}"},
            {problem: "12xy ÷ 6x^2y", answer: "\\frac{2}{x}"},

            // Three or more distinct variables/factors to track (zero reductions)
            {problem: "15abx ÷ 5a", answer: "3bx"},
            {problem: "18xya ÷ 6x", answer: "3ya"},
            {problem: "21xya ÷ 7x", answer: "3ya"},
            {problem: "24xya ÷ 8x", answer: "3ya"},
            {problem: "12abx ÷ 30x", answer: "\\frac{2ab}{5}"},
            {problem: "20xya ÷ 30ya", answer: "\\frac{2x}{3}"},
            {problem: "14xya ÷ 28a", answer: "\\frac{xy}{2}"},
            {problem: "16xya ÷ 24ya", answer: "\\frac{2x}{3}"},
            {problem: "24abxy ÷ 8abx", answer: "3y"},
            {problem: "30axyb ÷ 12axy", answer: "\\frac{5b}{2}"},
            {problem: "36xyab ÷ 9xya", answer: "4b"},
            {problem: "42abx ÷ 14ab", answer: "3x"},
            {problem: "60xya ÷ 20xy", answer: "3a"},
            {problem: "\\frac{7xya}{21ya}", answer: "\\frac{x}{3}"},
            {problem: "\\frac{-5x}{10ya^2}", answer: "-\\frac{x}{2ya^2}"},
            {problem: "\\frac{-8x}{4xya}", answer: "-\\frac{2}{ya}"},
            {problem: "-\\frac{50xya}{100x}", answer: "-\\frac{ya}{2}"},
            {problem: "-\\frac{20xya}{4xa}", answer: "-5y"},

            // New: single index-law reduction with fresh power patterns
            {problem: "9x^3 ÷ 3x", answer: "3x^2"},
            {problem: "10y^2 ÷ 5y", answer: "2y"},
            {problem: "14a^2b ÷ 7a", answer: "2ab"},
            {problem: "6a^2b ÷ 9a", answer: "\\frac{2ab}{3}"},
            {problem: "24x^2y ÷ 16x", answer: "\\frac{3xy}{2}"}
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

export default new DivideTermsMediumLevel();
