// levels/addSubtractSurdsHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'addSubtractSurdsHard',
    'Adding/Subtracting Surds (Hard)',
    [
            // Fractional coefficients with variable radicands
            {problem: "\\frac{\\sqrt{8x}}{3} - \\frac{\\sqrt{2x}}{5}", answer: "\\frac{7\\sqrt{2x}}{15}"},
            {problem: "\\frac{\\sqrt{12a}}{4} + \\frac{\\sqrt{3a}}{6}", answer: "\\frac{2\\sqrt{3a}}{3}"},
            {problem: "\\frac{3\\sqrt{5x}}{4} - \\frac{\\sqrt{20x}}{3}", answer: "\\frac{\\sqrt{5x}}{12}"},
            {problem: "\\frac{\\sqrt{98x}}{4} - \\frac{5\\sqrt{2x}}{2}", answer: "-\\frac{3\\sqrt{2x}}{4}"},
            {problem: "\\frac{2\\sqrt{75a}}{5} - \\frac{3\\sqrt{3a}}{2}", answer: "\\frac{\\sqrt{3a}}{2}"},
            {problem: "\\frac{2\\sqrt{18x}}{3} - \\frac{\\sqrt{72x}}{2}", answer: "-\\sqrt{2x}"},
            {problem: "\\frac{\\sqrt{27a}}{5} - \\frac{\\sqrt{108a}}{10}", answer: "0"},
            {problem: "\\frac{\\sqrt{32y}}{6} + \\frac{3\\sqrt{2y}}{4}", answer: "\\frac{17\\sqrt{2y}}{12}"},
            {problem: "\\frac{2\\sqrt{50x}}{7} - \\frac{\\sqrt{18x}}{3}", answer: "\\frac{3\\sqrt{2x}}{7}"},
            {problem: "\\frac{4\\sqrt{27a}}{9} + \\frac{\\sqrt{12a}}{6}", answer: "\\frac{5\\sqrt{3a}}{3}"},
            // Mixed integer and fractional coefficients
            {problem: "2\\sqrt{3x} + \\frac{\\sqrt{12x}}{3}", answer: "\\frac{8\\sqrt{3x}}{3}"},
            {problem: "\\frac{\\sqrt{18x}}{2} - 3\\sqrt{2x}", answer: "-\\frac{3\\sqrt{2x}}{2}"},
            {problem: "\\sqrt{x} + \\frac{2\\sqrt{9x}}{3}", answer: "3\\sqrt{x}"},
            {problem: "\\frac{3\\sqrt{8a}}{4} - \\sqrt{2a}", answer: "\\frac{\\sqrt{2a}}{2}"},
            // Combined surds over a single denominator
            {problem: "\\frac{\\sqrt{12x} + \\sqrt{48x}}{2}", answer: "3\\sqrt{3x}"},
            {problem: "\\frac{\\sqrt{50a} - \\sqrt{8a}}{2}", answer: "\\frac{3\\sqrt{2a}}{2}"},
            {problem: "\\frac{2\\sqrt{72x} - \\sqrt{32x}}{4}", answer: "2\\sqrt{2x}"},
            // Coefficient-variable fractional surds
            {problem: "\\frac{x\\sqrt{8}}{4} - x\\sqrt{2}", answer: "-\\frac{x\\sqrt{2}}{2}"},
            {problem: "\\frac{a\\sqrt{27}}{3} + a\\sqrt{3}", answer: "2a\\sqrt{3}"},
            // Three-term fractional combinations
            {problem: "\\frac{\\sqrt{12x}}{3} + \\frac{2\\sqrt{27x}}{9} - \\frac{\\sqrt{3x}}{6}", answer: "\\frac{7\\sqrt{3x}}{6}"},
            {problem: "\\frac{2\\sqrt{18a}}{5} - \\frac{\\sqrt{8a}}{4} + \\frac{3\\sqrt{2a}}{10}", answer: "\\sqrt{2a}"},
            // Algebraic identities (perfect-square variable factors)
            {problem: "\\frac{\\sqrt{a^2 \\times 3}}{a} + \\frac{2\\sqrt{3a^2}}{3a}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\frac{\\sqrt{x^2}}{2} + \\frac{\\sqrt{4x^2}}{2}", answer: "\\frac{3x}{2}"},
            {problem: "\\frac{\\sqrt{9x^2}}{3} + \\frac{\\sqrt{16x^2}}{2}", answer: "3x"},
            // Zero results with variable radicands
            {problem: "\\frac{\\sqrt{48x}}{6} - \\frac{2\\sqrt{3x}}{3}", answer: "0"},
            {problem: "\\frac{3\\sqrt{32a}}{8} - \\frac{3\\sqrt{2a}}{2}", answer: "0"},
            {problem: "\\frac{\\sqrt{75x}}{5} - \\frac{\\sqrt{27x}}{3}", answer: "0"},
            // Two unlike variable surds with fractional coefficients
            {problem: "\\frac{\\sqrt{8x}}{2} + \\frac{\\sqrt{18y}}{3}", answer: "\\sqrt{2x} + \\sqrt{2y}"},
            // A few numeric questions for fluency
            {problem: "\\frac{\\sqrt{8}}{3} - \\frac{\\sqrt{2}}{5}", answer: "\\frac{7\\sqrt{2}}{15}"},
            {problem: "\\frac{\\sqrt{12}}{4} + \\frac{\\sqrt{3}}{6}", answer: "\\frac{2\\sqrt{3}}{3}"},
            {problem: "\\frac{\\sqrt{150} + \\sqrt{54}}{6}", answer: "\\frac{4\\sqrt{6}}{3}"},
            {problem: "\\frac{\\sqrt{75}}{5} - \\frac{\\sqrt{27}}{3}", answer: "0"}
        ]
);
