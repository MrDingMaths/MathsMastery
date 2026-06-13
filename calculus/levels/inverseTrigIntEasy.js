import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('inverseTrigIntEasy', 'Integrating Inverse Trig — Easy', [
  { problem: '\\int\\frac{3}{\\sqrt{1-x^2}}\\,dx', answer: '3\\sin^{-1}x+C' },
  { problem: '\\int\\frac{1}{3+3x^2}\\,dx', answer: '\\frac{1}{3}\\tan^{-1}x+C' },
  { problem: '\\int\\frac{-1}{\\sqrt{1-x^2}}\\,dx', answer: '\\cos^{-1}x+C' },
  { problem: '\\int\\frac{1}{\\sqrt{4-x^2}}\\,dx', answer: '\\sin^{-1}\\left(\\frac{x}{2}\\right)+C' },
  { problem: '\\int\\frac{1}{9+x^2}\\,dx', answer: '\\frac{1}{3}\\tan^{-1}\\left(\\frac{x}{3}\\right)+C' },
  { problem: '\\int_0^3\\frac{1}{\\sqrt{9-x^2}}\\,dx', answer: '\\frac{\\pi}{2}' },
  { problem: '\\int_0^2\\frac{1}{4+x^2}\\,dx', answer: '\\frac{\\pi}{8}' },
], { mode: 'integral', toleranceDp: 4 });
