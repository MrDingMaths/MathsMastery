import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('logarithmicDiffRulesEasy', 'Logarithmic with Rules — Easy', [
  { problem: '\\frac{d}{dx}(x^3\\ln x)', answer: 'x^2(3\\ln x+1)' },
  { problem: '\\frac{d}{dx}(x^4\\ln x)', answer: 'x^3(4\\ln x+1)' },
  { problem: '\\frac{d}{dx}(x\\ln x)', answer: '1+\\ln x' },
  { problem: '\\frac{d}{dx}((2x+1)\\ln x)', answer: '2\\ln x+\\frac{2x+1}{x}' },
  { problem: '\\frac{d}{dx}((x+3)\\ln(x+3))', answer: '\\ln(x+3)+1' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln x}{x}\\right)', answer: '\\frac{1-\\ln x}{x^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln x}{x^2}\\right)', answer: '\\frac{1-2\\ln x}{x^3}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{\\ln x}\\right)', answer: '\\frac{\\ln x-1}{(\\ln x)^2}' },
  { problem: '\\frac{d}{dx}(x\\ln x-x)', answer: '\\ln x' },
  { problem: '\\frac{d}{dx}(x^2\\ln x)', answer: 'x(1+2\\ln x)' },
], { mode: 'derivative', toleranceDp: 2 });
