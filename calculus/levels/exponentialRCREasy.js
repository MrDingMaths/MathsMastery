import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialRCREasy', 'Exponential Reverse Chain Rule — Easy', [
  { problem: '\\int 2xe^{x^2+3}\\,dx', answer: 'e^{x^2+3}+C' },
  { problem: '\\int x^2 e^{x^3+1}\\,dx', answer: '\\frac{e^{x^3+1}}{3}+C' },
  { problem: '\\int xe^{1-x^2}\\,dx', answer: '-\\frac{e^{1-x^2}}{2}+C' },
  { problem: '\\int xe^{x^2}\\,dx', answer: '\\frac{1}{2}e^{x^2}+C' },
  { problem: '\\int 4xe^{x^2-7}\\,dx', answer: '2e^{x^2-7}+C' },
], { mode: 'integral', toleranceDp: 2 });
