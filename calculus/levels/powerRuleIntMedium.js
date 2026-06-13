import { BaseLevel } from './BaseLevel.js';

// Integration — power rule, Medium: multi-term integrands with coefficients.
export default new BaseLevel(
    'powerRuleIntMedium',
    'Power Rule — Integration (Medium)',
    [
        { problem: "\\int \\left(6x^2 - 4x + 5\\right)\\,dx", answer: "2x^3 - 2x^2 + 5x + C" },
        { problem: "\\int \\left(3x^2 + 2x - 1\\right)\\,dx", answer: "x^3 + x^2 - x + C" },
        { problem: "\\int \\left(4x^3 - 6x\\right)\\,dx", answer: "x^4 - 3x^2 + C" },
        { problem: "\\int \\left(5x^4 + 2x\\right)\\,dx", answer: "x^5 + x^2 + C" },
        { problem: "\\int \\left(8x^3 - 3x^2 + 2\\right)\\,dx", answer: "2x^4 - x^3 + 2x + C" },
        { problem: "\\int \\left(9x^2 - 4x + 7\\right)\\,dx", answer: "3x^3 - 2x^2 + 7x + C" },
        { problem: "\\int \\left(10x - 6\\right)\\,dx", answer: "5x^2 - 6x + C" },
        { problem: "\\int \\left(3x^2 - 8x + 1\\right)\\,dx", answer: "x^3 - 4x^2 + x + C" },
        { problem: "\\int \\left(12x^3 + 4x\\right)\\,dx", answer: "3x^4 + 2x^2 + C" },
        { problem: "\\int \\left(5x^4 - 3x^2\\right)\\,dx", answer: "x^5 - x^3 + C" },
        { problem: "\\int 7x^6\\,dx", answer: "x^7 + C" },
        { problem: "\\int \\left(6x^5 - 2x\\right)\\,dx", answer: "x^6 - x^2 + C" },
    ],
    { mode: 'integral' }
);
