// levels/divideTermsEasy.js
import { BaseLevel } from './BaseLevel.js';
// Custom generateQuestion: converts division (÷) notation to fraction notation 95% of the time
// Tier principle: ZERO index-law reductions, at most two distinct variables. One coefficient
// reduction plus cancelling at most one shared first-power variable. Sign is not a difficulty
// driver (negatives, negative÷negative live here).
class DivideTermsEasyLevel extends BaseLevel {
    constructor() {
        super('divideTermsEasy', 'Cancelling Factors (Easy)', [
            // Basic numerical coefficient cancelling
            {problem: "8b ÷ 2", answer: "4b"},
            {problem: "12x ÷ 3", answer: "4x"},
            {problem: "15y ÷ 5", answer: "3y"},
            {problem: "6a ÷ 2", answer: "3a"},
            {problem: "9x ÷ 3", answer: "3x"},
            {problem: "14x ÷ 7", answer: "2x"},
            {problem: "24x ÷ 6", answer: "4x"},

            // Negative numerators
            {problem: "-12x ÷ 4", answer: "-3x"},
            {problem: "-8y ÷ 2", answer: "-4y"},
            {problem: "-15x ÷ 3", answer: "-5x"},
            {problem: "-10a ÷ 5", answer: "-2a"},
            {problem: "-16b ÷ 8", answer: "-2b"},

            // Negatives with division by a negative / fractional results (sign not a driver)
            {problem: "-2a ÷ 6", answer: "-\\frac{a}{3}"},
            {problem: "-4b ÷ 8", answer: "-\\frac{b}{2}"},
            {problem: "-10x ÷ 5", answer: "-2x"},
            {problem: "6x ÷ (-3)", answer: "-2x"},
            {problem: "8y ÷ (-4)", answer: "-2y"},
            {problem: "-9b ÷ (-3)", answer: "3b"},
            {problem: "-15x ÷ (-5)", answer: "3x"},
            {problem: "-7x ÷ 14", answer: "-\\frac{x}{2}"},
            {problem: "21x ÷ (-7)", answer: "-3x"},

            // Basic variable cancelling (one shared first-power variable)
            {problem: "8ab ÷ 4a", answer: "2b"},
            {problem: "12xy ÷ 3x", answer: "4y"},
            {problem: "15ax ÷ 5a", answer: "3x"},
            {problem: "30xy ÷ 10yx", answer: "3"},
            {problem: "4x ÷ 8xy", answer: "\\frac{1}{2y}"},
            {problem: "6a ÷ 12ab", answer: "\\frac{1}{2b}"},
            {problem: "9x ÷ 15xy", answer: "\\frac{3}{5y}"},

            // Coefficients that don't fully cancel (numeric fraction result)
            {problem: "6x ÷ 9", answer: "\\frac{2x}{3}"},
            {problem: "8y ÷ 12", answer: "\\frac{2y}{3}"},
            {problem: "15x ÷ 20", answer: "\\frac{3x}{4}"},
            {problem: "4ab ÷ 6b", answer: "\\frac{2a}{3}"},
            {problem: "8xy ÷ 14y", answer: "\\frac{4x}{7}"},
            {problem: "15xy ÷ 25y", answer: "\\frac{3x}{5}"},

            // Textbook questions (single fraction, first powers, ≤2 variables)
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
            {problem: "\\frac{30x}{5}", answer: "6x"},
            {problem: "\\frac{9ab}{4b}", answer: "\\frac{9a}{4}"},
            {problem: "\\frac{2ab}{5a}", answer: "\\frac{2b}{5}"},
            {problem: "\\frac{4xy}{2x}", answer: "2y"},
            {problem: "\\frac{9x}{3xy}", answer: "\\frac{3}{y}"},
            {problem: "\\frac{7x}{14y}", answer: "\\frac{x}{2y}"},
            {problem: "\\frac{10xy}{12y}", answer: "\\frac{5x}{6}"},
            {problem: "\\frac{ab}{4b}", answer: "\\frac{a}{4}"},
            {problem: "\\frac{2}{12x}", answer: "\\frac{1}{6x}"},
            {problem: "\\frac{-4}{-3a}", answer: "\\frac{4}{3a}"},
            {problem: "\\frac{11xy}{3}", answer: "\\frac{11xy}{3}"},
            {problem: "\\frac{-10}{2xy}", answer: "-\\frac{5}{xy}"},
            {problem: "\\frac{-3xy}{yx}", answer: "-3"},
            {problem: "\\frac{7xy}{3x}", answer: "\\frac{7y}{3}"},
            {problem: "\\frac{3xy}{6y}", answer: "\\frac{x}{2}"},
            {problem: "-\\frac{2a}{6}", answer: "-\\frac{a}{3}"},
            {problem: "\\frac{4ab}{6}", answer: "\\frac{2ab}{3}"},
            {problem: "-\\frac{5xy}{20y}", answer: "-\\frac{x}{4}"},
            {problem: "\\frac{10xy}{6y}", answer: "\\frac{5x}{3}"},
            {problem: "\\frac{2x}{5}", answer: "\\frac{2x}{5}"},
            {problem: "\\frac{4ab}{2a}", answer: "2b"},
            {problem: "-\\frac{15xy}{5y}", answer: "-3x"},
            {problem: "-\\frac{4xy}{8x}", answer: "-\\frac{y}{2}"},
            {problem: "-\\frac{28ab}{56b}", answer: "-\\frac{a}{2}"},
            {problem: "\\frac{8a^2}{2}", answer: "4a^2"},
            {problem: "\\frac{xy}{2x}", answer: "\\frac{y}{2}"},
            {problem: "\\frac{20x}{15xy}", answer: "\\frac{4}{3y}"},
            {problem: "\\frac{-15ab}{-5b}", answer: "3a"},
            {problem: "\\frac{21x}{-3y}", answer: "-\\frac{7x}{y}"},
            {problem: "-\\frac{3a}{9}", answer: "-\\frac{a}{3}"},
            {problem: "-\\frac{2ab}{8}", answer: "-\\frac{ab}{4}"},
            {problem: "\\frac{-2x}{x}", answer: "-2"},
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
            {problem: "\\frac{-7x}{21xy}", answer: "-\\frac{1}{3y}"},
            {problem: "\\frac{3ab}{a}", answer: "3b"}
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
