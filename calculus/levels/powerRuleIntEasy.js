import { BaseLevel } from './BaseLevel.js';

// Integration — power rule, Easy. Model answers include "+ C" (the checker is
// lenient about whether the student writes it, and reminds them if omitted).
export default new BaseLevel(
    'powerRuleIntEasy',
    'Power Rule — Integration (Easy)',
    [
        { problem: "\\int 2x\\,dx", answer: "x^2 + C" },
        { problem: "\\int x\\,dx", answer: "\\frac{x^2}{2} + C" },
        { problem: "\\int 3x^2\\,dx", answer: "x^3 + C" },
        { problem: "\\int 4x^3\\,dx", answer: "x^4 + C" },
        { problem: "\\int x^2\\,dx", answer: "\\frac{x^3}{3} + C" },
        { problem: "\\int 5\\,dx", answer: "5x + C" },
        { problem: "\\int 8x\\,dx", answer: "4x^2 + C" },
        { problem: "\\int 6x^2\\,dx", answer: "2x^3 + C" },
        { problem: "\\int \\left(2x + 1\\right)\\,dx", answer: "x^2 + x + C" },
        { problem: "\\int \\left(3x^2 + 1\\right)\\,dx", answer: "x^3 + x + C" },
        { problem: "\\int \\left(2x + 3\\right)\\,dx", answer: "x^2 + 3x + C" },
        { problem: "\\int \\left(2x - 1\\right)\\,dx", answer: "x^2 - x + C" },
        { problem: "\\int \\left(x + 4\\right)\\,dx", answer: "\\frac{x^2}{2} + 4x + C" },
        { problem: "\\int \\left(4x + 2\\right)\\,dx", answer: "2x^2 + 2x + C" },
    ],
    { mode: 'integral' }
);
