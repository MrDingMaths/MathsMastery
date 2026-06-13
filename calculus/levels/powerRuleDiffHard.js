import { BaseLevel } from './BaseLevel.js';

// Differentiation — power rule, Hard: negative & fractional powers, roots and
// fraction forms. toleranceDp:2 lets equivalent decimal/surd/index forms match.
export default new BaseLevel(
    'powerRuleDiffHard',
    'Power Rule — Differentiation (Hard)',
    [
        { problem: "\\frac{d}{dx}\\left(x^{-2}\\right)", answer: "-2x^{-3}" },
        { problem: "\\frac{d}{dx}\\left(x^{-3}\\right)", answer: "-3x^{-4}" },
        { problem: "\\frac{d}{dx}\\left(x^{-4}\\right)", answer: "-4x^{-5}" },
        { problem: "\\frac{d}{dx}\\left(\\sqrt{x}\\right)", answer: "\\frac{1}{2\\sqrt{x}}" },
        { problem: "\\frac{d}{dx}\\left(4\\sqrt{x}\\right)", answer: "\\frac{2}{\\sqrt{x}}" },
        { problem: "\\frac{d}{dx}\\left(\\frac{1}{x}\\right)", answer: "-\\frac{1}{x^2}" },
        { problem: "\\frac{d}{dx}\\left(\\frac{2}{x}\\right)", answer: "-\\frac{2}{x^2}" },
        { problem: "\\frac{d}{dx}\\left(\\frac{3}{x^2}\\right)", answer: "-\\frac{6}{x^3}" },
        { problem: "\\frac{d}{dx}\\left(\\frac{1}{x^3}\\right)", answer: "-\\frac{3}{x^4}" },
        { problem: "\\frac{d}{dx}\\left(x^{\\frac{3}{2}}\\right)", answer: "\\frac{3}{2}\\sqrt{x}" },
        { problem: "\\frac{d}{dx}\\left(2x^{-1} + x\\right)", answer: "-2x^{-2} + 1" },
        { problem: "\\frac{d}{dx}\\left(x^{-2} + 3x\\right)", answer: "-2x^{-3} + 3" },
    ],
    { mode: 'derivative', toleranceDp: 2 }
);
