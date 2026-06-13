import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigDiffRulesHard', 'Trigonometric with Rules — Hard', [
  { problem: '\\frac{d}{dx}(\\sin(3x)\\cos(5x))', answer: '3\\cos(3x)\\cos(5x)-5\\sin(3x)\\sin(5x)' },
  { problem: '\\frac{d}{dx}(\\sin(2x)\\sin(4x))', answer: '2\\cos(2x)\\sin(4x)+4\\sin(2x)\\cos(4x)' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sin(2x)}{x}\\right)', answer: '\\frac{2x\\cos(2x)-\\sin(2x)}{x^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{1+\\sin x}\\right)', answer: '-\\frac{\\cos x}{(1+\\sin x)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sin x}{1+\\cos x}\\right)', answer: '\\frac{1}{1+\\cos x}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1-\\sin x}{\\cos x}\\right)', answer: '-\\frac{1}{1+\\sin x}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\cos x}{\\cos x+\\sin x}\\right)', answer: '-\\frac{1}{(\\cos x+\\sin x)^2}' },
  { problem: '\\frac{d}{dx}(\\sin 2x\\tan 3x)', answer: '3\\sin 2x\\sec^2 3x+2\\tan 3x\\cos 2x' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x+4}{\\sin 5x}\\right)', answer: '\\frac{3\\sin 5x-5(3x+4)\\cos 5x}{\\sin^2 5x}' },
], { mode: 'derivative', toleranceDp: 2 });
