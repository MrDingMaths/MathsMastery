// levels/addSubtractSurdsMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'addSubtractSurdsMedium',
    'Adding/Subtracting Surds (Medium)',
    [
            // Simplify a term, then collect (variable radicands)
            {problem: "3\\sqrt{8x} - \\sqrt{2x}", answer: "5\\sqrt{2x}"},
            {problem: "2\\sqrt{12a} + \\sqrt{3a}", answer: "5\\sqrt{3a}"},
            {problem: "\\sqrt{18x} + \\sqrt{2x}", answer: "4\\sqrt{2x}"},
            {problem: "\\sqrt{50y} - \\sqrt{2y}", answer: "4\\sqrt{2y}"},
            {problem: "\\sqrt{12x} + \\sqrt{27x}", answer: "5\\sqrt{3x}"},
            {problem: "\\sqrt{8a} + \\sqrt{18a} - \\sqrt{2a}", answer: "4\\sqrt{2a}"},
            {problem: "2\\sqrt{20x} - \\sqrt{45x}", answer: "\\sqrt{5x}"},
            {problem: "\\sqrt{75a} - 2\\sqrt{3a}", answer: "3\\sqrt{3a}"},
            {problem: "\\sqrt{32y} + \\sqrt{8y}", answer: "6\\sqrt{2y}"},
            {problem: "3\\sqrt{2x} + \\sqrt{8x} - \\sqrt{18x}", answer: "2\\sqrt{2x}"},
            // Multi-term with two unlike variable surds
            {problem: "2\\sqrt{x} + 3\\sqrt{y} - \\sqrt{x} + 2\\sqrt{y}", answer: "\\sqrt{x} + 5\\sqrt{y}"},
            {problem: "5\\sqrt{a} + 2\\sqrt{b} - 3\\sqrt{a}", answer: "2\\sqrt{a} + 2\\sqrt{b}"},
            {problem: "4\\sqrt{x} - 2\\sqrt{y} + 3\\sqrt{x} - \\sqrt{y}", answer: "7\\sqrt{x} - 3\\sqrt{y}"},
            {problem: "\\sqrt{a} + 4\\sqrt{b} - 3\\sqrt{a} + \\sqrt{b}", answer: "-2\\sqrt{a} + 5\\sqrt{b}"},
            {problem: "3\\sqrt{x} - 4\\sqrt{y} + \\sqrt{x} - 3\\sqrt{y}", answer: "4\\sqrt{x} - 7\\sqrt{y}"},
            // Coefficient-variable surds with simplification
            {problem: "a\\sqrt{12} + a\\sqrt{3}", answer: "3a\\sqrt{3}"},
            {problem: "x\\sqrt{8} - x\\sqrt{2}", answer: "x\\sqrt{2}"},
            {problem: "2x\\sqrt{18} - x\\sqrt{2}", answer: "5x\\sqrt{2}"},
            {problem: "a\\sqrt{50} + 3a\\sqrt{2}", answer: "8a\\sqrt{2}"},
            // Mixed rational and surd terms
            {problem: "\\sqrt{9x^2} + 2\\sqrt{x}", answer: "3x + 2\\sqrt{x}"},
            {problem: "\\sqrt{4a^2} - \\sqrt{a} + a", answer: "3a - \\sqrt{a}"},
            {problem: "x + \\sqrt{16x} + \\sqrt{x}", answer: "x + 5\\sqrt{x}"},
            // Combine across radicands of different variables, simplifying first
            {problem: "\\sqrt{12x} + \\sqrt{48x} - \\sqrt{3x}", answer: "5\\sqrt{3x}"},
            {problem: "\\sqrt{20a} - \\sqrt{45a} + \\sqrt{5a}", answer: "0"},
            {problem: "2\\sqrt{18y} - \\sqrt{8y} + \\sqrt{2y}", answer: "5\\sqrt{2y}"},
            {problem: "\\sqrt{27x} + \\sqrt{12x} - \\sqrt{3x}", answer: "4\\sqrt{3x}"},
            // Negative coefficients
            {problem: "-2\\sqrt{x} + 5\\sqrt{x} - \\sqrt{x}", answer: "2\\sqrt{x}"},
            {problem: "-\\sqrt{a} - 3\\sqrt{a} + 6\\sqrt{a}", answer: "2\\sqrt{a}"},
            {problem: "4\\sqrt{y} - 7\\sqrt{y} + 2\\sqrt{y}", answer: "-\\sqrt{y}"},
            // A handful of numeric questions for fluency
            {problem: "3\\sqrt{8} - \\sqrt{18}", answer: "3\\sqrt{2}"},
            {problem: "\\sqrt{12} + \\sqrt{27} - \\sqrt{3}", answer: "4\\sqrt{3}"},
            {problem: "2\\sqrt{18} - \\sqrt{8} + \\sqrt{2}", answer: "5\\sqrt{2}"},
            {problem: "\\sqrt{32} + \\sqrt{50} - 2\\sqrt{8}", answer: "5\\sqrt{2}"},
            {problem: "4\\sqrt{12} - 3\\sqrt{27} + 2\\sqrt{3}", answer: "\\sqrt{3}"},
            {problem: "2\\sqrt{125} - 3\\sqrt{45}", answer: "\\sqrt{5}"},
            {problem: "\\sqrt{49} + 2\\sqrt{7} - 3", answer: "4 + 2\\sqrt{7}"}
        ]
);
