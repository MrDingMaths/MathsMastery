import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('inverseTrigDiffMedium', 'Differentiating Inverse Trig — Medium', [
  { problem: '\\frac{d}{dx}(\\sin^{-1}(3x+1))', answer: '\\frac{3}{\\sqrt{1-(3x+1)^2}}' },
  { problem: '\\frac{d}{dx}\\left(\\cos^{-1}\\left(\\frac{x}{7}\\right)\\right)', answer: '-\\frac{1}{\\sqrt{49-x^2}}' },
  { problem: '\\frac{d}{dx}(\\sin^{-1}(x^2))', answer: '\\frac{2x}{\\sqrt{1-x^4}}' },
  { problem: '\\frac{d}{dx}(\\tan^{-1}(x^3))', answer: '\\frac{3x^2}{1+x^6}' },
  { problem: '\\frac{d}{dx}(\\tan^{-1}(x+2))', answer: '\\frac{1}{x^2+4x+5}' },
  { problem: '\\frac{d}{dx}(\\cos^{-1}(1-x))', answer: '\\frac{1}{\\sqrt{2x-x^2}}' },
  { problem: '\\frac{d}{dx}(x\\sin^{-1}x)', answer: '\\sin^{-1}x+\\frac{x}{\\sqrt{1-x^2}}' },
  { problem: '\\frac{d}{dx}((1+x^2)\\tan^{-1}x)', answer: '2x\\tan^{-1}x+1' },
  { problem: '\\frac{d}{dx}\\left(\\tan^{-1}\\left(\\frac{1}{x}\\right)\\right)', answer: '-\\frac{1}{1+x^2}' },
  { problem: '\\frac{d}{dx}(\\sin^{-1}(x^3))', answer: '\\frac{3x^2}{\\sqrt{1-x^6}}' },
], { mode: 'derivative', toleranceDp: 4 });
