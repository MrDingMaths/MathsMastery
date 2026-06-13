import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigDiffRulesEasy', 'Trigonometric with Rules — Easy', [
  { problem: '\\frac{d}{dx}(x\\sin x)', answer: 'x\\cos x+\\sin x' },
  { problem: '\\frac{d}{dx}(\\sin x\\cos x)', answer: '\\cos^2 x-\\sin^2 x' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sin x}{x}\\right)', answer: '\\frac{x\\cos x-\\sin x}{x^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\cos x}{x}\\right)', answer: '\\frac{-x\\sin x-\\cos x}{x^2}' },
], { mode: 'derivative', toleranceDp: 2 });
