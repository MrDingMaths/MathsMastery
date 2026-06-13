import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('logarithmicDiffRulesHard', 'Logarithmic with Rules — Hard', [
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln(1+x)}{x}\\right)', answer: '\\frac{x-(1+x)\\ln(1+x)}{x^2(1+x)}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln(1+x)}{1-x}\\right)', answer: '\\frac{\\frac{1-x}{1+x}+\\ln(1+x)}{(1-x)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln x}{e^x}\\right)', answer: '\\frac{1-x\\ln x}{xe^x}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{e^x}{\\ln x}\\right)', answer: '\\frac{e^x(x\\ln x-1)}{x(\\ln x)^2}' },
  { problem: '\\frac{d}{dx}((3x-1)\\ln(2x+4))', answer: '3\\ln(2x+4)+\\frac{3x-1}{x+2}' },
  { problem: '\\frac{d}{dx}(x^3\\ln(x+1))', answer: '3x^2\\ln(x+1)+\\frac{x^3}{x+1}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\ln x}{x-2}\\right)', answer: '\\frac{x-2-x\\ln x}{x(x-2)^2}' },
], { mode: 'derivative', toleranceDp: 2 });
