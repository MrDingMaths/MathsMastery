import { BaseLevel } from './BaseLevel.js';

// Differentiation — power rule, Medium: larger coefficients, constants,
// negative coefficients, 3–4 terms.
export default new BaseLevel(
    'powerRuleDiffMedium',
    'Power Rule — Differentiation (Medium)',
    [
        { problem: "\\frac{d}{dx}\\left(4x^3 - 2x^2 + 7x - 5\\right)", answer: "12x^2 - 4x + 7" },
        { problem: "\\frac{d}{dx}\\left(3x^4 + 2x^3 - x\\right)", answer: "12x^3 + 6x^2 - 1" },
        { problem: "\\frac{d}{dx}\\left(5x^3 - 4x^2 + 9\\right)", answer: "15x^2 - 8x" },
        { problem: "\\frac{d}{dx}\\left(2x^4 - 3x^2 + 6x\\right)", answer: "8x^3 - 6x + 6" },
        { problem: "\\frac{d}{dx}\\left(6x^2 - 7x + 2\\right)", answer: "12x - 7" },
        { problem: "\\frac{d}{dx}\\left(x^4 - x^3 + x^2 - x\\right)", answer: "4x^3 - 3x^2 + 2x - 1" },
        { problem: "\\frac{d}{dx}\\left(7x^3 + 3x\\right)", answer: "21x^2 + 3" },
        { problem: "\\frac{d}{dx}\\left(-2x^3 + 5x^2\\right)", answer: "-6x^2 + 10x" },
        { problem: "\\frac{d}{dx}\\left(3x^5 - 2x^2\\right)", answer: "15x^4 - 4x" },
        { problem: "\\frac{d}{dx}\\left(8x^2 - 5x - 11\\right)", answer: "16x - 5" },
        { problem: "\\frac{d}{dx}\\left(4x^4 + 2x\\right)", answer: "16x^3 + 2" },
        { problem: "\\frac{d}{dx}\\left(-x^3 + 6x^2 - 9x\\right)", answer: "-3x^2 + 12x - 9" },
    ],
    { mode: 'derivative' }
);
