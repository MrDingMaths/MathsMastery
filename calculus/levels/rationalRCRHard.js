import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('rationalRCRHard', 'Rational Reverse Chain Rule — Hard', [
  { problem: '\\int_2^3\\frac{3x^2-1}{x^3-x}\\,dx', answer: '2\\ln 2' },
  { problem: '\\int_e^{2e}\\frac{2x+2}{x^2+2x}\\,dx', answer: '\\ln\\frac{4(e+1)}{e+2}' },
  { problem: '\\int_1^7\\frac{x^2}{x^3+2}\\,dx', answer: '\\frac{1}{3}\\ln 115' },
  { problem: '\\int_0^3\\frac{4x+1}{2x^2+x+1}\\,dx', answer: '\\ln 22' },
], { mode: 'integral', toleranceDp: 2 });
