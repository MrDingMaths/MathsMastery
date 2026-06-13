import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('sinCosSquaredIntEasy', 'sin and cos Squared Integration — Easy', [
  { problem: '\\int\\sin^2 x\\,dx', answer: '\\frac{x}{2}-\\frac{\\sin(2x)}{4}+C' },
  { problem: '\\int\\sin^2(2x)\\,dx', answer: '\\frac{x}{2}-\\frac{\\sin(4x)}{8}+C' },
  { problem: '\\int\\sin^2(5x)\\,dx', answer: '\\frac{x}{2}-\\frac{\\sin(10x)}{20}+C' },
  { problem: '\\int\\sin^2(3x)\\,dx', answer: '\\frac{x}{2}-\\frac{\\sin(6x)}{12}+C' },
  { problem: '\\int\\cos^2 x\\,dx', answer: '\\frac{x}{2}+\\frac{\\sin(2x)}{4}+C' },
  { problem: '\\int\\cos^2(6x)\\,dx', answer: '\\frac{x}{2}+\\frac{\\sin(12x)}{24}+C' },
  { problem: '\\int\\cos^2(10x)\\,dx', answer: '\\frac{x}{2}+\\frac{\\sin(20x)}{40}+C' },
], { mode: 'integral', toleranceDp: 4 });
