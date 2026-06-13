import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('sinCosSquaredIntMedium', 'sin and cos Squared Integration — Medium', [
  { problem: '\\int\\sin^2\\left(\\frac{x}{4}\\right)\\,dx', answer: '\\frac{x}{2}-\\sin\\left(\\frac{x}{2}\\right)+C' },
  { problem: '\\int\\cos^2\\left(\\frac{x}{2}\\right)\\,dx', answer: '\\frac{x}{2}+\\frac{\\sin x}{2}+C' },
  { problem: '\\int_0^{\\pi}\\sin^2 x\\,dx', answer: '\\frac{\\pi}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\cos^2 x\\,dx', answer: '\\frac{\\pi+2}{8}' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}\\cos^2 x\\,dx', answer: '\\frac{\\pi}{6}+\\frac{\\sqrt{3}}{8}' },
], { mode: 'integral', toleranceDp: 4 });
