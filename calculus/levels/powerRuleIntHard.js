import { BaseLevel } from './BaseLevel.js';

// Integration — power rule, Hard: fractional & negative powers (n ≠ -1).
// toleranceDp:2 lets equivalent decimal/surd/index forms match.
export default new BaseLevel(
    'powerRuleIntHard',
    'Power Rule — Integration (Hard)',
    [
        { problem: "\\int \\sqrt{x}\\,dx", answer: "\\frac{2}{3}x^{\\frac{3}{2}} + C" },
        { problem: "\\int \\frac{1}{\\sqrt{x}}\\,dx", answer: "2\\sqrt{x} + C" },
        { problem: "\\int 2\\sqrt{x}\\,dx", answer: "\\frac{4}{3}x^{\\frac{3}{2}} + C" },
        { problem: "\\int 6\\sqrt{x}\\,dx", answer: "4x^{\\frac{3}{2}} + C" },
        { problem: "\\int x^{\\frac{3}{2}}\\,dx", answer: "\\frac{2}{5}x^{\\frac{5}{2}} + C" },
        { problem: "\\int x^{-2}\\,dx", answer: "-\\frac{1}{x} + C" },
        { problem: "\\int x^{-3}\\,dx", answer: "-\\frac{1}{2x^2} + C" },
        { problem: "\\int x^{-4}\\,dx", answer: "-\\frac{1}{3x^3} + C" },
        { problem: "\\int \\frac{1}{x^2}\\,dx", answer: "-\\frac{1}{x} + C" },
        { problem: "\\int \\frac{1}{x^3}\\,dx", answer: "-\\frac{1}{2x^2} + C" },
        { problem: "\\int \\frac{2}{x^2}\\,dx", answer: "-\\frac{2}{x} + C" },
        { problem: "\\int \\frac{3}{x^2}\\,dx", answer: "-\\frac{3}{x} + C" },
    ],
    { mode: 'integral', toleranceDp: 2 }
);
