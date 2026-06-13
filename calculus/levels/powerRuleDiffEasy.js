import { BaseLevel } from './BaseLevel.js';

// Differentiation — power rule, Easy: positive integer powers, small coefficients.
export default new BaseLevel(
    'powerRuleDiffEasy',
    'Power Rule — Differentiation (Easy)',
    [
        { problem: "\\frac{d}{dx}\\left(x^2\\right)", answer: "2x" },
        { problem: "\\frac{d}{dx}\\left(x^3\\right)", answer: "3x^2" },
        { problem: "\\frac{d}{dx}\\left(x^4\\right)", answer: "4x^3" },
        { problem: "\\frac{d}{dx}\\left(x^5\\right)", answer: "5x^4" },
        { problem: "\\frac{d}{dx}\\left(3x^2\\right)", answer: "6x" },
        { problem: "\\frac{d}{dx}\\left(2x^3\\right)", answer: "6x^2" },
        { problem: "\\frac{d}{dx}\\left(5x\\right)", answer: "5" },
        { problem: "\\frac{d}{dx}\\left(x^2 + x\\right)", answer: "2x + 1" },
        { problem: "\\frac{d}{dx}\\left(x^3 + 2x\\right)", answer: "3x^2 + 2" },
        { problem: "\\frac{d}{dx}\\left(x^2 + 5x\\right)", answer: "2x + 5" },
        { problem: "\\frac{d}{dx}\\left(x^3 + x^2\\right)", answer: "3x^2 + 2x" },
        { problem: "\\frac{d}{dx}\\left(x^2 + 3x + 1\\right)", answer: "2x + 3" },
        { problem: "\\frac{d}{dx}\\left(x^4 + x\\right)", answer: "4x^3 + 1" },
        { problem: "\\frac{d}{dx}\\left(2x^2 + x\\right)", answer: "4x + 1" },
        { problem: "\\frac{d}{dx}\\left(x^3 + 4\\right)", answer: "3x^2" },
    ],
    { mode: 'derivative' }
);
