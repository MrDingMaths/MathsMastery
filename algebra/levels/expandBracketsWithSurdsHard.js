// levels/expandBracketsWithSurdsHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'expandBracketsWithSurdsHard',
    'Expanding Surds (Hard)',
    [
            // Difference of squares with a rational term
            {problem: "(a + \\sqrt{x})(a - \\sqrt{x})", answer: "a^2 - x"},
            {problem: "(x + \\sqrt{y})(x - \\sqrt{y})", answer: "x^2 - y"},
            {problem: "(3\\sqrt{x} + 2)(3\\sqrt{x} - 2)", answer: "9x - 4"},
            // Perfect squares with rational/variable parts
            {problem: "(a - \\sqrt{x})^2", answer: "a^2 - 2a\\sqrt{x} + x"},
            {problem: "(a + \\sqrt{b})^2", answer: "a^2 + 2a\\sqrt{b} + b"},
            {problem: "(3 - \\sqrt{x})^2", answer: "9 - 6\\sqrt{x} + x"},
            // Perfect squares with two variable surds
            {problem: "(2\\sqrt{x} + \\sqrt{y})^2", answer: "4x + 4\\sqrt{xy} + y"},
            {problem: "(3\\sqrt{x} - 2\\sqrt{y})^2", answer: "9x - 12\\sqrt{xy} + 4y"},
            {problem: "(\\sqrt{2x} + \\sqrt{y})^2", answer: "2x + 2\\sqrt{2xy} + y"},
            // FOIL with two variable surds
            {problem: "(\\sqrt{x} + \\sqrt{y})(\\sqrt{x} + 2\\sqrt{y})", answer: "x + 3\\sqrt{xy} + 2y"},
            {problem: "(2\\sqrt{x} - \\sqrt{y})(\\sqrt{x} + 3\\sqrt{y})", answer: "2x + 5\\sqrt{xy} - 3y"},
            {problem: "(\\sqrt{x} + \\sqrt{y})(2\\sqrt{x} - \\sqrt{y})", answer: "2x + \\sqrt{xy} - y"},
            {problem: "(3\\sqrt{x} - \\sqrt{y})(3\\sqrt{x} + \\sqrt{y})", answer: "9x - y"},
            // FOIL with simplification of surd products
            {problem: "(\\sqrt{x} + \\sqrt{2})(\\sqrt{x} - \\sqrt{8})", answer: "x - \\sqrt{2x} - 4"},
            {problem: "(\\sqrt{x} - \\sqrt{3})(\\sqrt{x} + \\sqrt{12})", answer: "x + \\sqrt{3x} - 6"},
            {problem: "(2\\sqrt{x} + \\sqrt{3})(\\sqrt{x} - \\sqrt{3})", answer: "2x - \\sqrt{3x} - 3"},
            // Distribution across two terms then collect
            {problem: "\\sqrt{x}(\\sqrt{x} + \\sqrt{y}) + \\sqrt{y}(\\sqrt{x} - \\sqrt{y})", answer: "x + 2\\sqrt{xy} - y"},
            {problem: "2\\sqrt{x}(\\sqrt{x} + 3) - (\\sqrt{x} - 1)^2", answer: "x + 8\\sqrt{x} - 1"},
            {problem: "(\\sqrt{x} + 3)^2 - (\\sqrt{x} - 3)^2", answer: "12\\sqrt{x}"},
            {problem: "(\\sqrt{x} + 2)(\\sqrt{x} - 2) + 6", answer: "x + 2"},
            {problem: "(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) + b", answer: "a"},
            // Triple-bracket / cubic-style expansion
            {problem: "(\\sqrt{x} + 1)(\\sqrt{x} - 1)(\\sqrt{x} + 2)", answer: "x\\sqrt{x} + 2x - \\sqrt{x} - 2"},
            {problem: "\\sqrt{x}(\\sqrt{x} + \\sqrt{y})(\\sqrt{x} - \\sqrt{y})", answer: "x\\sqrt{x} - y\\sqrt{x}"},
            // Fractional surd squares (kept clean)
            {problem: "(1 + \\frac{1}{\\sqrt{2}})^2", answer: "\\frac{3}{2} + \\sqrt{2}"},
            {problem: "(\\sqrt{3} - \\frac{1}{\\sqrt{3}})^2", answer: "\\frac{4}{3}"},
            // A handful of numeric questions for fluency (kept small)
            {problem: "(3\\sqrt{2} + \\sqrt{5})(2\\sqrt{2} - \\sqrt{5})", answer: "7 - \\sqrt{10}"},
            {problem: "(\\sqrt{7} + 2\\sqrt{3})(2\\sqrt{7} - \\sqrt{3})", answer: "8 + 3\\sqrt{21}"},
            {problem: "(2\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - 2\\sqrt{2})", answer: "2 - 3\\sqrt{6}"},
            {problem: "(3\\sqrt{2} - 2\\sqrt{3})^2", answer: "30 - 12\\sqrt{6}"},
            {problem: "(2\\sqrt{5} + 3\\sqrt{2})^2", answer: "38 + 12\\sqrt{10}"}
        ]
);
