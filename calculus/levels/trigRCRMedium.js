import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigRCRMedium', 'Trig Reverse Chain Rule — Medium', [
  { problem: '\\int\\sin x\\cos^2 x\\,dx', answer: '-\\frac{\\cos^3 x}{3}+C' },
  { problem: '\\int\\cos x(\\sin x)^3\\,dx', answer: '\\frac{\\sin^4 x}{4}+C' },
  { problem: '\\int\\sec^2 x\\tan^3 x\\,dx', answer: '\\frac{\\tan^4 x}{4}+C' },
  { problem: '\\int\\cos x(1+\\sin x)^{-2}\\,dx', answer: '-\\frac{1}{1+\\sin x}+C' },
  { problem: '\\int\\frac{\\sin x}{\\cos^3 x}\\,dx', answer: '\\frac{\\sec^2 x}{2}+C' },
], { mode: 'integral', toleranceDp: 2 });
