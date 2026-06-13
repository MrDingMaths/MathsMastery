import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialRCRHard', 'Exponential Reverse Chain Rule — Hard', [
  { problem: '\\int\\frac{e^{3x}}{(2+e^{3x})^5}\\,dx', answer: '-\\frac{1}{12(e^{3x}+2)^4}+C' },
  { problem: '\\int\\frac{e^{2x}}{(3+e^{2x})^3}\\,dx', answer: '-\\frac{1}{4(e^{2x}+3)^2}+C' },
  { problem: '\\int x^{-2}e^{x^{-1}}\\,dx', answer: '-e^{x^{-1}}+C' },
  { problem: '\\int(-\\sqrt{x})e^{-x\\sqrt{x}}\\,dx', answer: '\\frac{2}{3}e^{-x\\sqrt{x}}+C' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x\\cdot e^{\\sin x}\\,dx', answer: 'e-1' },
], { mode: 'integral', toleranceDp: 2 });
