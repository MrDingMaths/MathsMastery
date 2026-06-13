// levels/multiplyDivideSurdsEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'multiplyDivideSurdsEasy',
    'Multiplying Dividing Surds (Easy)',
    [
            // Multiplying surds with variable radicands
            {problem: "\\sqrt{x} \\times \\sqrt{x}", answer: "x"},
            {problem: "\\sqrt{a} \\times \\sqrt{a}", answer: "a"},
            {problem: "\\sqrt{x} \\times \\sqrt{y}", answer: "\\sqrt{xy}"},
            {problem: "\\sqrt{a} \\times \\sqrt{b}", answer: "\\sqrt{ab}"},
            {problem: "\\sqrt{2x} \\times \\sqrt{2x}", answer: "2x"},
            {problem: "\\sqrt{3a} \\times \\sqrt{3a}", answer: "3a"},
            {problem: "\\sqrt{5x} \\times \\sqrt{5x}", answer: "5x"},
            {problem: "\\sqrt{x} \\times \\sqrt{4x}", answer: "2x"},
            {problem: "\\sqrt{a} \\times \\sqrt{9a}", answer: "3a"},
            {problem: "\\sqrt{x} \\times \\sqrt{16x}", answer: "4x"},
            {problem: "\\sqrt{2x} \\times \\sqrt{8x}", answer: "4x"},
            {problem: "\\sqrt{3x} \\times \\sqrt{12x}", answer: "6x"},
            {problem: "\\sqrt{2a} \\times \\sqrt{18a}", answer: "6a"},
            {problem: "\\sqrt{2x} \\times \\sqrt{50x}", answer: "10x"},
            {problem: "\\sqrt{3} \\times \\sqrt{3x}", answer: "3\\sqrt{x}"},
            {problem: "\\sqrt{2} \\times \\sqrt{8x}", answer: "4\\sqrt{x}"},
            // Negatives
            {problem: "-\\sqrt{2x} \\times \\sqrt{8x}", answer: "-4x"},
            {problem: "\\sqrt{a} \\times (-\\sqrt{9a})", answer: "-3a"},
            // Dividing surds with variable radicands
            {problem: "\\frac{\\sqrt{6x}}{\\sqrt{2x}}", answer: "\\sqrt{3}"},
            {problem: "\\frac{\\sqrt{12a}}{\\sqrt{3a}}", answer: "2"},
            {problem: "\\frac{\\sqrt{20x}}{\\sqrt{5x}}", answer: "2"},
            {problem: "\\frac{\\sqrt{8x}}{\\sqrt{2x}}", answer: "2"},
            {problem: "\\frac{\\sqrt{50a}}{\\sqrt{2a}}", answer: "5"},
            {problem: "\\frac{\\sqrt{18x}}{\\sqrt{2x}}", answer: "3"},
            {problem: "\\frac{\\sqrt{45a}}{\\sqrt{5a}}", answer: "3"},
            {problem: "\\frac{\\sqrt{48x}}{\\sqrt{3x}}", answer: "4"},
            {problem: "\\frac{\\sqrt{15x}}{\\sqrt{3x}}", answer: "\\sqrt{5}"},
            {problem: "\\frac{\\sqrt{x^3}}{\\sqrt{x}}", answer: "x"},
            {problem: "\\frac{\\sqrt{a^5}}{\\sqrt{a^3}}", answer: "a"},
            {problem: "\\sqrt{x^3} \\times \\sqrt{x}", answer: "x^2"},
            {problem: "\\frac{\\sqrt{x^5}}{\\sqrt{x^3}}", answer: "x"},
            // A handful of numeric questions for fluency
            {problem: "\\sqrt{2} \\times \\sqrt{3}", answer: "\\sqrt{6}"},
            {problem: "\\sqrt{5} \\times \\sqrt{3}", answer: "\\sqrt{15}"},
            {problem: "\\sqrt{6} \\times \\sqrt{3}", answer: "3\\sqrt{2}"},
            {problem: "\\sqrt{10} \\times \\sqrt{5}", answer: "5\\sqrt{2}"},
            {problem: "\\sqrt{2} \\times \\sqrt{8}", answer: "4"},
            {problem: "\\sqrt{6} \\times \\sqrt{6}", answer: "6"},
            {problem: "\\frac{\\sqrt{20}}{\\sqrt{5}}", answer: "2"},
            {problem: "\\frac{\\sqrt{12}}{\\sqrt{3}}", answer: "2"},
            {problem: "\\frac{\\sqrt{50}}{\\sqrt{2}}", answer: "5"},
            {problem: "\\frac{\\sqrt{45}}{\\sqrt{5}}", answer: "3"}
        ]
);
