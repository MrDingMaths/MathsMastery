import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialDiffRulesHard', 'Exponential with Rules — Hard', [
  { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x}}{\\ln x}\\right)', answer: '\\frac{e^{2x}(2x\\ln x-1)}{x(\\ln x)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x}}{\\tan 7x}\\right)', answer: '\\frac{e^{2x}(2\\tan 7x-7\\sec^2 7x)}{\\tan^2 7x}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{e^{3x}}{x^2}\\right)', answer: '\\frac{e^{3x}(3x-2)}{x^3}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x+1}}{2x+5}\\right)', answer: '\\frac{4e^{2x+1}(x+2)}{(2x+5)^2}' },
  { problem: '\\frac{d}{dx}(x^2\\cdot 4^x)', answer: '4^x(2x+x^2\\ln 4)' },
  { problem: '\\frac{d}{dx}(e^{3x}\\cos 2x)', answer: 'e^{3x}(3\\cos 2x-2\\sin 2x)' },
], { mode: 'derivative', toleranceDp: 2 });
