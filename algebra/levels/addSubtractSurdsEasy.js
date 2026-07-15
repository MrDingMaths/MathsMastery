// levels/addSubtractSurdsEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'addSubtractSurdsEasy',
    'Adding/Subtracting Surds (Easy)',
    [
            // Direct like-surd collection (variable radicands)
            {problem: "2\\sqrt{x} + 4\\sqrt{x}", answer: "6\\sqrt{x}"},
            {problem: "5\\sqrt{a} - 2\\sqrt{a}", answer: "3\\sqrt{a}"},
            {problem: "7\\sqrt{x} - 3\\sqrt{x}", answer: "4\\sqrt{x}"},
            {problem: "3\\sqrt{y} + 4\\sqrt{y}", answer: "7\\sqrt{y}"},
            {problem: "\\sqrt{a} + 3\\sqrt{a}", answer: "4\\sqrt{a}"},
            {problem: "6\\sqrt{x} - 2\\sqrt{x}", answer: "4\\sqrt{x}"},
            {problem: "9\\sqrt{y} - 4\\sqrt{y}", answer: "5\\sqrt{y}"},
            {problem: "5\\sqrt{a} - \\sqrt{a}", answer: "4\\sqrt{a}"},
            {problem: "2\\sqrt{x} + \\sqrt{x}", answer: "3\\sqrt{x}"},
            {problem: "8\\sqrt{y} - 3\\sqrt{y}", answer: "5\\sqrt{y}"},
            // Three-term collection
            {problem: "\\sqrt{x} + 3\\sqrt{x} + 2\\sqrt{x}", answer: "6\\sqrt{x}"},
            {problem: "4\\sqrt{a} - \\sqrt{a} + 2\\sqrt{a}", answer: "5\\sqrt{a}"},
            {problem: "2\\sqrt{y} + \\sqrt{y} - \\sqrt{y}", answer: "2\\sqrt{y}"},
            {problem: "6\\sqrt{x} - 2\\sqrt{x} - 3\\sqrt{x}", answer: "\\sqrt{x}"},
            {problem: "5\\sqrt{a} + 3\\sqrt{a} - 4\\sqrt{a}", answer: "4\\sqrt{a}"},
            // Coefficient-variable like surds
            {problem: "a\\sqrt{3} + 2a\\sqrt{3}", answer: "3a\\sqrt{3}"},
            {problem: "5x\\sqrt{2} - 2x\\sqrt{2}", answer: "3x\\sqrt{2}"},
            {problem: "4a\\sqrt{5} - a\\sqrt{5}", answer: "3a\\sqrt{5}"},
            {problem: "x\\sqrt{7} + 3x\\sqrt{7}", answer: "4x\\sqrt{7}"},
            // Simplify one term first, then collect
            {problem: "\\sqrt{4x} + \\sqrt{x}", answer: "3\\sqrt{x}"},
            {problem: "\\sqrt{9x} - \\sqrt{x}", answer: "2\\sqrt{x}"},
            {problem: "\\sqrt{16a} - \\sqrt{a}", answer: "3\\sqrt{a}"},
            {problem: "\\sqrt{25y} + \\sqrt{y}", answer: "6\\sqrt{y}"},
            {problem: "\\sqrt{4a} + 3\\sqrt{a}", answer: "5\\sqrt{a}"},
            {problem: "2\\sqrt{x} + \\sqrt{9x}", answer: "5\\sqrt{x}"},
            {problem: "\\sqrt{36x} - 2\\sqrt{x}", answer: "4\\sqrt{x}"},
            {problem: "\\sqrt{49a} - 3\\sqrt{a}", answer: "4\\sqrt{a}"},
            // Two unlike variable surds (cannot combine)
            {problem: "2\\sqrt{x} + 3\\sqrt{y}", answer: "2\\sqrt{x} + 3\\sqrt{y}"},
            {problem: "5\\sqrt{a} - \\sqrt{b}", answer: "5\\sqrt{a} - \\sqrt{b}"},
            // Negative result
            {problem: "\\sqrt{x} - 5\\sqrt{x} + 2\\sqrt{x}", answer: "-2\\sqrt{x}"},
            {problem: "2\\sqrt{a} - 6\\sqrt{a}", answer: "-4\\sqrt{a}"},
            // A handful of numeric questions for fluency (small radicands)
            {problem: "2\\sqrt{5} + 4\\sqrt{5}", answer: "6\\sqrt{5}"},
            {problem: "5\\sqrt{3} - 2\\sqrt{3}", answer: "3\\sqrt{3}"},
            {problem: "7\\sqrt{2} - 3\\sqrt{2}", answer: "4\\sqrt{2}"},
            {problem: "\\sqrt{8} - \\sqrt{2}", answer: "\\sqrt{2}"},
            {problem: "\\sqrt{8} + 3\\sqrt{2}", answer: "5\\sqrt{2}"},
            {problem: "\\sqrt{27} + \\sqrt{3}", answer: "4\\sqrt{3}"},
            {problem: "\\sqrt{20} - \\sqrt{5}", answer: "\\sqrt{5}"},
            {problem: "\\sqrt{12} + \\sqrt{3}", answer: "3\\sqrt{3}"},
            {problem: "\\sqrt{18} - \\sqrt{2}", answer: "2\\sqrt{2}"},
            {problem: "\\sqrt{50} - \\sqrt{2}", answer: "4\\sqrt{2}"}
        ]
);
