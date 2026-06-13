import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigRCREasy', 'Trig Reverse Chain Rule — Easy', [
  { problem: '\\int 3x^2\\cos(x^3)\\,dx', answer: '\\sin(x^3)+C' },
  { problem: '\\int x^3\\sec^2(x^4-1)\\,dx', answer: '\\frac{1}{4}\\tan(x^4-1)+C' },
  { problem: '\\int x^3\\sin(x^4-1)\\,dx', answer: '-\\frac{\\cos(x^4-1)}{4}+C' },
], { mode: 'integral', toleranceDp: 2 });
