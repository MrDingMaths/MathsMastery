// levels/expandBracketsWithSurdsMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'expandBracketsWithSurdsMedium',
    'Expanding Surds (Medium)',
    [
            // FOIL with variable surds
            {problem: "(\\sqrt{x} + 1)(\\sqrt{x} + 2)", answer: "x + 3\\sqrt{x} + 2"},
            {problem: "(\\sqrt{x} - 2)(\\sqrt{x} + 3)", answer: "x + \\sqrt{x} - 6"},
            {problem: "(\\sqrt{a} - 1)(\\sqrt{a} - 3)", answer: "a - 4\\sqrt{a} + 3"},
            {problem: "(\\sqrt{x} + 4)(\\sqrt{x} - 1)", answer: "x + 3\\sqrt{x} - 4"},
            {problem: "(\\sqrt{x} + \\sqrt{2})(\\sqrt{x} + \\sqrt{3})", answer: "x + \\sqrt{3x} + \\sqrt{2x} + \\sqrt{6}"},
            {problem: "(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} + 1)", answer: "a + \\sqrt{ab} + \\sqrt{a} + \\sqrt{b}"},
            {problem: "(2\\sqrt{x} + 1)(\\sqrt{x} - 2)", answer: "2x - 3\\sqrt{x} - 2"},
            {problem: "(\\sqrt{x} + 5)(\\sqrt{x} + 1)", answer: "x + 6\\sqrt{x} + 5"},
            // Perfect squares with variable surds
            {problem: "(\\sqrt{x} + 3)^2", answer: "x + 6\\sqrt{x} + 9"},
            {problem: "(\\sqrt{a} - 2)^2", answer: "a - 4\\sqrt{a} + 4"},
            {problem: "(\\sqrt{x} + \\sqrt{y})^2", answer: "x + 2\\sqrt{xy} + y"},
            {problem: "(2\\sqrt{x} + 1)^2", answer: "4x + 4\\sqrt{x} + 1"},
            {problem: "(\\sqrt{x} - \\sqrt{3})^2", answer: "x - 2\\sqrt{3x} + 3"},
            {problem: "(\\sqrt{a} + 5)^2", answer: "a + 10\\sqrt{a} + 25"},
            // Difference of squares with coefficients
            {problem: "(2\\sqrt{x} + 3)(2\\sqrt{x} - 3)", answer: "4x - 9"},
            {problem: "(3\\sqrt{x} - \\sqrt{y})(3\\sqrt{x} + \\sqrt{y})", answer: "9x - y"},
            {problem: "(\\sqrt{x} + 2\\sqrt{y})(\\sqrt{x} - 2\\sqrt{y})", answer: "x - 4y"},
            {problem: "(5 + \\sqrt{a})(5 - \\sqrt{a})", answer: "25 - a"},
            // Single brackets with simplification
            {problem: "\\sqrt{x}(\\sqrt{4x} + \\sqrt{3})", answer: "2x + \\sqrt{3x}"},
            {problem: "2\\sqrt{x}(3\\sqrt{x} - \\sqrt{2})", answer: "6x - 2\\sqrt{2x}"},
            {problem: "\\sqrt{a}(\\sqrt{9a} + 1)", answer: "3a + \\sqrt{a}"},
            {problem: "3\\sqrt{x}(\\sqrt{x} + 2\\sqrt{y})", answer: "3x + 6\\sqrt{xy}"},
            // Multi-step
            {problem: "\\sqrt{x}(\\sqrt{x} + 1) + 3\\sqrt{x}", answer: "x + 4\\sqrt{x}"},
            {problem: "(\\sqrt{x} + 2)(\\sqrt{x} - 2) + 6", answer: "x + 2"},
            // A handful of numeric questions for fluency
            {problem: "(\\sqrt{3} + 1)^2", answer: "4 + 2\\sqrt{3}"},
            {problem: "(2 - \\sqrt{6})^2", answer: "10 - 4\\sqrt{6}"},
            {problem: "(\\sqrt{5} + \\sqrt{2})(\\sqrt{3} + \\sqrt{2})", answer: "\\sqrt{15} + \\sqrt{10} + \\sqrt{6} + 2"},
            {problem: "(3\\sqrt{2} - \\sqrt{11})(3\\sqrt{2} + \\sqrt{11})", answer: "7"},
            {problem: "(7 - 2\\sqrt{5})(7 + 2\\sqrt{5})", answer: "29"},
            {problem: "2\\sqrt{5}(\\sqrt{20} - 3)", answer: "20 - 6\\sqrt{5}"},
            {problem: "(\\sqrt{6} - 1)(\\sqrt{6} - 2)", answer: "8 - 3\\sqrt{6}"}
        ]
);
