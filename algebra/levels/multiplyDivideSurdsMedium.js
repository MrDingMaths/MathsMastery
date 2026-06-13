// levels/multiplyDivideSurdsMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'multiplyDivideSurdsMedium',
    'Multiplying Dividing Surds (Medium)',
    [
            // Coefficients with variable radicands (multiplication)
            {problem: "2\\sqrt{5x} \\times \\sqrt{15x}", answer: "10x\\sqrt{3}"},
            {problem: "3\\sqrt{2a} \\times \\sqrt{6a}", answer: "6a\\sqrt{3}"},
            {problem: "2\\sqrt{x} \\times 3\\sqrt{x}", answer: "6x"},
            {problem: "3\\sqrt{2x} \\times 2\\sqrt{8x}", answer: "24x"},
            {problem: "\\sqrt{12x} \\times \\sqrt{3x}", answer: "6x"},
            {problem: "2\\sqrt{3a} \\times 3\\sqrt{6a}", answer: "18a\\sqrt{2}"},
            {problem: "\\sqrt{8x} \\times \\sqrt{6x}", answer: "4x\\sqrt{3}"},
            {problem: "\\sqrt{2x} \\times \\sqrt{2x^3}", answer: "2x^2"},
            {problem: "\\sqrt{x^3} \\times \\sqrt{4x}", answer: "2x^2"},
            {problem: "-5\\sqrt{2x} \\times \\sqrt{8x}", answer: "-20x"},
            {problem: "4\\sqrt{3a} \\times \\sqrt{3a}", answer: "12a"},
            // Squaring surds
            {problem: "(2\\sqrt{x})^2", answer: "4x"},
            {problem: "(3\\sqrt{a})^2", answer: "9a"},
            {problem: "(2\\sqrt{3x})^2", answer: "12x"},
            {problem: "(4\\sqrt{2a})^2", answer: "32a"},
            // Cubes and higher powers
            {problem: "(2\\sqrt{a})^3", answer: "8a\\sqrt{a}"},
            {problem: "(3\\sqrt{x})^3", answer: "27x\\sqrt{x}"},
            {problem: "(\\sqrt{x})^4", answer: "x^2"},
            {problem: "(2\\sqrt{x})^4", answer: "16x^2"},
            // Dividing surds with coefficients and variables
            {problem: "\\frac{6\\sqrt{14x}}{3\\sqrt{7x}}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{15\\sqrt{12x}}{5\\sqrt{2x}}", answer: "3\\sqrt{6}"},
            {problem: "\\frac{4\\sqrt{30a}}{8\\sqrt{6a}}", answer: "\\frac{\\sqrt{5}}{2}"},
            {problem: "\\frac{12\\sqrt{70x}}{18\\sqrt{14x}}", answer: "\\frac{2\\sqrt{5}}{3}"},
            {problem: "\\frac{5\\sqrt{27a}}{\\sqrt{3a}}", answer: "15"},
            {problem: "\\frac{\\sqrt{50x^3}}{\\sqrt{2x}}", answer: "5x"},
            {problem: "\\frac{\\sqrt{18a^3}}{\\sqrt{2a}}", answer: "3a"},
            // Multiply then divide
            {problem: "\\frac{2\\sqrt{6x} \\times \\sqrt{5}}{\\sqrt{10x}}", answer: "2\\sqrt{3}"},
            {problem: "\\frac{\\sqrt{15x} \\times \\sqrt{20x}}{\\sqrt{12x}}", answer: "5\\sqrt{x}"},
            // Square roots of fractions with variables
            {problem: "\\sqrt{\\frac{x^2}{9}}", answer: "\\frac{x}{3}"},
            {problem: "\\sqrt{\\frac{8x^2}{9}}", answer: "\\frac{2x\\sqrt{2}}{3}"},
            {problem: "\\sqrt{\\frac{12a^2}{49}}", answer: "\\frac{2a\\sqrt{3}}{7}"},
            {problem: "\\sqrt{\\frac{18x^2}{25}}", answer: "\\frac{3x\\sqrt{2}}{5}"},
            // A handful of numeric questions for fluency
            {problem: "2\\sqrt{5} \\times \\sqrt{15}", answer: "10\\sqrt{3}"},
            {problem: "\\sqrt{24} \\times \\sqrt{20}", answer: "4\\sqrt{30}"},
            {problem: "(3\\sqrt{2})^3", answer: "54\\sqrt{2}"},
            {problem: "(\\sqrt{5})^4", answer: "25"},
            {problem: "2\\sqrt{2} \\times \\sqrt{3}", answer: "2\\sqrt{6}"},
            {problem: "\\sqrt{6} \\times 2\\sqrt{3}", answer: "6\\sqrt{2}"},
            {problem: "\\sqrt{\\frac{8}{9}}", answer: "\\frac{2\\sqrt{2}}{3}"}
        ]
);
