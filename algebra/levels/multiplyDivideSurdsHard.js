// levels/multiplyDivideSurdsHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'multiplyDivideSurdsHard',
    'Multiplying Dividing Surds (Hard)',
    [
            // Higher powers of surds with variables
            {problem: "(3\\sqrt{x})^3", answer: "27x\\sqrt{x}"},
            {problem: "(2\\sqrt{a})^4", answer: "16a^2"},
            {problem: "(2\\sqrt{2x})^3", answer: "16x\\sqrt{2x}"},
            {problem: "(\\sqrt{2x})^4", answer: "4x^2"},
            {problem: "(a\\sqrt{b})^2", answer: "a^2b"},
            {problem: "(2x\\sqrt{y})^2", answer: "4x^2y"},
            {problem: "(2\\sqrt{xy})^2", answer: "4xy"},
            // Products simplifying to a single term
            {problem: "4\\sqrt{2x} \\times 3\\sqrt{8x}", answer: "48x"},
            {problem: "5\\sqrt{2a} \\times 2\\sqrt{6a}", answer: "20a\\sqrt{3}"},
            {problem: "\\sqrt{x^5} \\times \\sqrt{x^3}", answer: "x^4"},
            {problem: "\\sqrt{2x^3} \\times \\sqrt{8x}", answer: "4x^2"},
            {problem: "2\\sqrt{3x} \\times \\sqrt{6x} \\times \\sqrt{2}", answer: "12x"},
            // Quotients simplifying to single terms
            {problem: "\\frac{6\\sqrt{20x^3}}{2\\sqrt{5x}}", answer: "6x"},
            {problem: "\\frac{\\sqrt{48a^5}}{\\sqrt{3a}}", answer: "4a^2"},
            {problem: "\\frac{4\\sqrt{15a^3}}{2\\sqrt{3a}}", answer: "2a\\sqrt{5}"},
            {problem: "\\frac{\\sqrt{54x^5}}{\\sqrt{2x}}", answer: "3x^2\\sqrt{3}"},
            // Combined multiply and divide
            {problem: "\\frac{\\sqrt{18x^3} \\times \\sqrt{2x}}{\\sqrt{9}}", answer: "2x^2"},
            {problem: "\\frac{\\sqrt{12x} \\times \\sqrt{6x}}{\\sqrt{2}}", answer: "6x"},
            {problem: "\\frac{\\sqrt{20x^3} \\times \\sqrt{5x}}{\\sqrt{4}}", answer: "5x^2"},
            // Powers over coefficients
            {problem: "\\frac{(2\\sqrt{x})^3}{4}", answer: "2x\\sqrt{x}"},
            {problem: "\\frac{(3\\sqrt{a})^4}{9}", answer: "9a^2"},
            {problem: "\\frac{(2\\sqrt{x})^5}{8}", answer: "4x^2\\sqrt{x}"},
            {problem: "\\frac{(2\\sqrt{3x})^2}{6}", answer: "2x"},
            // Square roots of fractions with higher powers
            {problem: "\\sqrt{\\frac{a^4}{9}}", answer: "\\frac{a^2}{3}"},
            {problem: "\\sqrt{\\frac{50x^4}{2}}", answer: "5x^2"},
            {problem: "\\sqrt{\\frac{x^6}{4x^2}}", answer: "\\frac{x^2}{2}"},
            // A handful of numeric questions for fluency (kept small)
            {problem: "\\frac{(2\\sqrt{7})^3}{4}", answer: "14\\sqrt{7}"},
            {problem: "(3\\sqrt{2})^3", answer: "54\\sqrt{2}"},
            {problem: "\\sqrt{24} \\times \\sqrt{3}", answer: "6\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{98}}{\\sqrt{2}}", answer: "7"}
        ]
);
