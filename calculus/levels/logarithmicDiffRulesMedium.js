import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('logarithmicDiffRulesMedium', 'Logarithmic with Rules — Medium', [
  { problem: '\\frac{d}{dx}(x\\ln(2x+1))', answer: '\\ln(2x+1)+\\frac{2x}{2x+1}' },
  { problem: '\\frac{d}{dx}((x-1)\\ln(2x+7))', answer: '\\ln(2x+7)+\\frac{2(x-1)}{2x+7}' },
  { problem: '\\frac{d}{dx}(e^x\\ln x)', answer: 'e^x\\left(\\ln x+\\frac{1}{x}\\right)' },
  { problem: '\\frac{d}{dx}(e^{-x}\\ln x)', answer: 'e^{-x}\\left(\\frac{1}{x}-\\ln x\\right)' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{\\ln x}\\right)', answer: '\\frac{x(2\\ln x-1)}{(\\ln x)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln(2x)}{x^3}\\right)', answer: '\\frac{1-3\\ln(2x)}{x^4}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x}{\\ln x}\\right)', answer: '\\frac{3(\\ln x-1)}{(\\ln x)^2}' },
  { problem: '\\frac{d}{dx}(\\ln(x^x))', answer: '1+\\ln x' },
  { problem: '\\frac{d}{dx}(x\\ln x)', answer: '1+\\ln x' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln x}{x}\\right)', answer: '\\frac{1-\\ln x}{x^2}' },
  { problem: '\\frac{d}{dx}((2x+1)\\ln x)', answer: '\\frac{2x\\ln x+2x+1}{x}' },
], { mode: 'derivative', toleranceDp: 2 });
