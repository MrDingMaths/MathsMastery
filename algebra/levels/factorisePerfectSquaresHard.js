// levels/factorisePerfectSquaresHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'factorisePerfectSquaresHard',
    'Perfect Square Factorisation (Hard)',
    [
            {problem: "25a^4 - 10a^2 + 1", answer: "(5a^2-1)^2"},
            {problem: "16x^4 + 24x^2 + 9", answer: "(4x^2+3)^2"},
            {problem: "49x^6 - 14x^3 + 1", answer: "(7x^3-1)^2"},
            {problem: "49x^6 + 28x^3 + 4", answer: "(7x^3+2)^2"},
            {problem: "x^2 + x + \\frac{1}{4}", answer: "(x+\\frac{1}{2})^2"},
            {problem: "x^2 - \\frac{4x}{3} + \\frac{4}{9}", answer: "(x-\\frac{2}{3})^2"},
            {problem: "9y^2 + \\frac{6y}{5} + \\frac{1}{25}", answer: "(3y+\\frac{1}{5})^2"},
            {problem: "x^2 + 2 + \\frac{1}{x^2}", answer: "(x+\\frac{1}{x})^2"},
            {problem: "25x^2 - 20 + \\frac{4}{x^2}", answer: "(5x-\\frac{2}{x})^2"},
            
            // Additional questions for variety
            {problem: "9x^4 + 6x^2 + 1", answer: "(3x^2+1)^2"},
            {problem: "64x^6 - 16x^3 + 1", answer: "(8x^3-1)^2"},
            {problem: "100y^8 + 20y^4 + 1", answer: "(10y^4+1)^2"},
            {problem: "121a^4 - 22a^2 + 1", answer: "(11a^2-1)^2"},
            {problem: "169b^6 + 26b^3 + 1", answer: "(13b^3+1)^2"},
            {problem: "196x^4 - 28x^2 + 1", answer: "(14x^2-1)^2"},
            {problem: "225x^8 + 30x^4 + 1", answer: "(15x^4+1)^2"},
            {problem: "256x^6 - 32x^3 + 1", answer: "(16x^3-1)^2"},
            {problem: "289x^4 + 34x^2 + 1", answer: "(17x^2+1)^2"},
            {problem: "324x^6 - 36x^3 + 1", answer: "(18x^3-1)^2"},
            {problem: "361x^4 + 38x^2 + 1", answer: "(19x^2+1)^2"},
            {problem: "400x^8 - 40x^4 + 1", answer: "(20x^4-1)^2"},
            {problem: "x^2 - \\frac{2x}{3} + \\frac{1}{9}", answer: "(x-\\frac{1}{3})^2"},
            {problem: "4y^2 + \\frac{4y}{3} + \\frac{1}{9}", answer: "(2y+\\frac{1}{3})^2"},
            {problem: "9x^2 - \\frac{12x}{5} + \\frac{4}{25}", answer: "(3x-\\frac{2}{5})^2"},
            {problem: "16a^2 + \\frac{8a}{7} + \\frac{1}{49}", answer: "(4a+\\frac{1}{7})^2"},
            {problem: "25b^2 - \\frac{10b}{3} + \\frac{1}{9}", answer: "(5b-\\frac{1}{3})^2"},
            {problem: "36x^2 + \\frac{12x}{5} + \\frac{1}{25}", answer: "(6x+\\frac{1}{5})^2"},
            {problem: "49x^2 - \\frac{14x}{9} + \\frac{1}{81}", answer: "(7x-\\frac{1}{9})^2"},
            {problem: "64x^2 + \\frac{16x}{7} + \\frac{1}{49}", answer: "(8x+\\frac{1}{7})^2"}
        ]
);
