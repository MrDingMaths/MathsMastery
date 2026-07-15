// levels/simplifySurdsMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'simplifySurdsMedium',
    'Surd Simplification (Medium)',
    [
            // Non-square coefficient + perfect-square variable
            {problem: "\\sqrt{8x^2}", answer: "2x\\sqrt{2}"},
            {problem: "\\sqrt{12a^2}", answer: "2a\\sqrt{3}"},
            {problem: "\\sqrt{18x^2}", answer: "3x\\sqrt{2}"},
            {problem: "\\sqrt{50a^2}", answer: "5a\\sqrt{2}"},
            {problem: "\\sqrt{20y^2}", answer: "2y\\sqrt{5}"},
            {problem: "\\sqrt{45x^2}", answer: "3x\\sqrt{5}"},
            {problem: "\\sqrt{75a^2}", answer: "5a\\sqrt{3}"},
            {problem: "\\sqrt{32x^2}", answer: "4x\\sqrt{2}"},
            // Odd powers: variable also stays partly under the root
            {problem: "\\sqrt{8x^3}", answer: "2x\\sqrt{2x}"},
            {problem: "\\sqrt{12x^3}", answer: "2x\\sqrt{3x}"},
            {problem: "\\sqrt{18a^3}", answer: "3a\\sqrt{2a}"},
            {problem: "\\sqrt{20x^3}", answer: "2x\\sqrt{5x}"},
            {problem: "\\sqrt{x^5}", answer: "x^2\\sqrt{x}"},
            {problem: "\\sqrt{x^2y^3}", answer: "xy\\sqrt{y}"},
            {problem: "\\sqrt{a^3b^2}", answer: "ab\\sqrt{a}"},
            {problem: "\\sqrt{x^4y^3}", answer: "x^2y\\sqrt{y}"},
            // Two variables, coefficient simplifies, one variable stays
            {problem: "\\sqrt{50x^2y}", answer: "5x\\sqrt{2y}"},
            {problem: "\\sqrt{12x^2y}", answer: "2x\\sqrt{3y}"},
            {problem: "\\sqrt{27a^2b}", answer: "3a\\sqrt{3b}"},
            {problem: "\\sqrt{8x^4y}", answer: "2x^2\\sqrt{2y}"},
            {problem: "\\sqrt{45x^2y^2}", answer: "3xy\\sqrt{5}"},
            {problem: "\\sqrt{48a^2b^2}", answer: "4ab\\sqrt{3}"},
            {problem: "\\sqrt{75x^4}", answer: "5x^2\\sqrt{3}"},
            {problem: "\\sqrt{32x^5}", answer: "4x^2\\sqrt{2x}"},
            {problem: "\\sqrt{98a^3}", answer: "7a\\sqrt{2a}"},
            // Coefficient outside the root
            {problem: "3\\sqrt{8x^2}", answer: "6x\\sqrt{2}"},
            {problem: "2\\sqrt{18a^2}", answer: "6a\\sqrt{2}"},
            {problem: "5\\sqrt{12x^2}", answer: "10x\\sqrt{3}"},
            // Squaring surds with coefficients
            {problem: "(2\\sqrt{x})^2", answer: "4x"},
            {problem: "(3\\sqrt{a})^2", answer: "9a"},
            {problem: "(5\\sqrt{x})^2", answer: "25x"},
            {problem: "(2\\sqrt{3x})^2", answer: "12x"},
            {problem: "(4\\sqrt{2a})^2", answer: "32a"},
            // Cube roots
            {problem: "\\sqrt[3]{x^6}", answer: "x^2"},
            {problem: "\\sqrt[3]{8x^3}", answer: "2x"},
            {problem: "\\sqrt[3]{27a^6}", answer: "3a^2"},
            {problem: "\\sqrt[3]{x^7}", answer: "x^2\\sqrt[3]{x}"},
            {problem: "\\sqrt[3]{a^6b^3}", answer: "a^2b"},
            // A handful of numeric questions for fluency
            {problem: "\\sqrt{48}", answer: "4\\sqrt{3}"},
            {problem: "\\sqrt{75}", answer: "5\\sqrt{3}"},
            {problem: "\\sqrt{98}", answer: "7\\sqrt{2}"},
            {problem: "\\sqrt{128}", answer: "8\\sqrt{2}"},
            {problem: "\\sqrt{200}", answer: "10\\sqrt{2}"},
            {problem: "(2\\sqrt{3})^2", answer: "12"},
            {problem: "(3\\sqrt{2})^2", answer: "18"},
            {problem: "\\sqrt{45}", answer: "3\\sqrt{5}"}
        ]
);
