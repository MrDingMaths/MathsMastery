import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigDiffRulesMedium', 'Trigonometric with Rules — Medium', [
  { problem: '\\frac{d}{dx}(2x\\tan(2x))', answer: '2\\tan(2x)+4x\\sec^2(2x)' },
  { problem: '\\frac{d}{dx}(x^2\\cos(2x))', answer: '2x\\cos(2x)-2x^2\\sin(2x)' },
  { problem: '\\frac{d}{dx}(x^3\\sin(3x))', answer: '3x^2\\sin(3x)+3x^3\\cos(3x)' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{\\cos x}\\right)', answer: '\\frac{2x\\cos x+x^2\\sin x}{\\cos^2 x}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{1+\\sin x}\\right)', answer: '\\frac{1+\\sin x-x\\cos x}{(1+\\sin x)^2}' },
  { problem: '\\frac{d}{dx}(x\\tan x)', answer: 'x\\sec^2 x+\\tan x' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sin x}{2x}\\right)', answer: '\\frac{x\\cos x-\\sin x}{2x^2}' },
], { mode: 'derivative', toleranceDp: 2 });
