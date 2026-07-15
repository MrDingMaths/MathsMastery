// levels/expandBracketsWithSurdsEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'expandBracketsWithSurdsEasy',
    'Expanding Surds (Easy)',
    [
            // Single-bracket distribution with variable surds
            {problem: "\\sqrt{x}(\\sqrt{x} + \\sqrt{3})", answer: "x + \\sqrt{3x}"},
            {problem: "\\sqrt{x}(\\sqrt{x} - \\sqrt{2})", answer: "x - \\sqrt{2x}"},
            {problem: "\\sqrt{a}(\\sqrt{a} + 1)", answer: "a + \\sqrt{a}"},
            {problem: "\\sqrt{x}(\\sqrt{x} - 1)", answer: "x - \\sqrt{x}"},
            {problem: "\\sqrt{2}(\\sqrt{x} + \\sqrt{2})", answer: "\\sqrt{2x} + 2"},
            {problem: "\\sqrt{3}(\\sqrt{x} + \\sqrt{3})", answer: "\\sqrt{3x} + 3"},
            {problem: "\\sqrt{x}(\\sqrt{y} + \\sqrt{x})", answer: "\\sqrt{xy} + x"},
            {problem: "\\sqrt{a}(\\sqrt{b} - \\sqrt{a})", answer: "\\sqrt{ab} - a"},
            {problem: "\\sqrt{x}(2 + \\sqrt{x})", answer: "2\\sqrt{x} + x"},
            {problem: "\\sqrt{x}(\\sqrt{x} - \\sqrt{y})", answer: "x - \\sqrt{xy}"},
            {problem: "2\\sqrt{x}(\\sqrt{x} + 1)", answer: "2x + 2\\sqrt{x}"},
            {problem: "3\\sqrt{a}(\\sqrt{a} + 2)", answer: "3a + 6\\sqrt{a}"},
            {problem: "\\sqrt{x}(3 - \\sqrt{x})", answer: "3\\sqrt{x} - x"},
            {problem: "\\sqrt{a}(\\sqrt{a} + \\sqrt{b})", answer: "a + \\sqrt{ab}"},
            // Difference of two squares with variable surds
            {problem: "(\\sqrt{x} + \\sqrt{3})(\\sqrt{x} - \\sqrt{3})", answer: "x - 3"},
            {problem: "(\\sqrt{x} + \\sqrt{2})(\\sqrt{x} - \\sqrt{2})", answer: "x - 2"},
            {problem: "(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b})", answer: "a - b"},
            {problem: "(\\sqrt{x} + 2)(\\sqrt{x} - 2)", answer: "x - 4"},
            {problem: "(\\sqrt{a} + 1)(\\sqrt{a} - 1)", answer: "a - 1"},
            {problem: "(3 + \\sqrt{x})(3 - \\sqrt{x})", answer: "9 - x"},
            {problem: "(\\sqrt{x} + \\sqrt{y})(\\sqrt{x} - \\sqrt{y})", answer: "x - y"},
            {problem: "(\\sqrt{a} + 5)(\\sqrt{a} - 5)", answer: "a - 25"},
            // Products of single surds with variables
            {problem: "\\sqrt{x} \\times \\sqrt{x}", answer: "x"},
            {problem: "2\\sqrt{x} \\times \\sqrt{x}", answer: "2x"},
            {problem: "\\sqrt{x} \\times \\sqrt{y}", answer: "\\sqrt{xy}"},
            {problem: "3\\sqrt{a} \\times \\sqrt{a}", answer: "3a"},
            // A handful of numeric questions for fluency
            {problem: "\\sqrt{2}(\\sqrt{10} - \\sqrt{2})", answer: "2\\sqrt{5} - 2"},
            {problem: "\\sqrt{5}(\\sqrt{15} + 4)", answer: "5\\sqrt{3} + 4\\sqrt{5}"},
            {problem: "(5 + \\sqrt{5})(5 - \\sqrt{5})", answer: "20"},
            {problem: "(3 - \\sqrt{2})(3 + \\sqrt{2})", answer: "7"},
            {problem: "(\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - \\sqrt{2})", answer: "1"},
            {problem: "\\sqrt{3}(\\sqrt{12} + 2)", answer: "6 + 2\\sqrt{3}"},
            {problem: "2\\sqrt{3} \\times 3\\sqrt{3}", answer: "18"},
            {problem: "(2 + \\sqrt{3})(2 - \\sqrt{3})", answer: "1"}
        ]
);
