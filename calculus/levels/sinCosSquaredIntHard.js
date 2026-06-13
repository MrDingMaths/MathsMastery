import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('sinCosSquaredIntHard', 'sin and cos Squared Integration — Hard', [
  { problem: '\\int\\sin(3x)\\cos(2x)\\,dx', answer: '-\\frac{\\cos(5x)}{10}-\\frac{\\cos x}{2}+C' },
  { problem: '\\int\\cos(3x)\\sin x\\,dx', answer: '-\\frac{\\cos(4x)}{8}+\\frac{\\cos(2x)}{4}+C' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}2\\cos(2x)\\cos x\\,dx', answer: '\\frac{2\\sqrt{2}}{3}' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}\\sin(5x)\\sin(2x)\\,dx', answer: '-\\frac{\\sqrt{3}}{28}' },
], { mode: 'integral', toleranceDp: 4 });
