import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('inverseTrigDiffEasy', 'Differentiating Inverse Trig — Easy', [
  { problem: '\\frac{d}{dx}(\\cos^{-1}x)', answer: '-\\frac{1}{\\sqrt{1-x^2}}' },
  { problem: '\\frac{d}{dx}(\\tan^{-1}x)', answer: '\\frac{1}{1+x^2}' },
  { problem: '\\frac{d}{dx}(\\sin^{-1}(2x))', answer: '\\frac{2}{\\sqrt{1-4x^2}}' },
  { problem: '\\frac{d}{dx}(\\tan^{-1}(3x))', answer: '\\frac{3}{1+9x^2}' },
  { problem: '\\frac{d}{dx}(\\cos^{-1}(5x))', answer: '-\\frac{5}{\\sqrt{1-25x^2}}' },
  { problem: '\\frac{d}{dx}(\\sin^{-1}(-x))', answer: '-\\frac{1}{\\sqrt{1-x^2}}' },
  { problem: '\\frac{d}{dx}\\left(\\sin^{-1}\\left(\\frac{x}{5}\\right)\\right)', answer: '\\frac{1}{\\sqrt{25-x^2}}' },
  { problem: '\\frac{d}{dx}\\left(\\tan^{-1}\\left(\\frac{x}{4}\\right)\\right)', answer: '\\frac{4}{16+x^2}' },
  { problem: '\\frac{d}{dx}(2\\tan^{-1}x)', answer: '\\frac{2}{1+x^2}' },
  { problem: '\\frac{d}{dx}\\left(\\sqrt{3}\\sin^{-1}x\\right)', answer: '\\frac{\\sqrt{3}}{\\sqrt{1-x^2}}' },
  { problem: '\\frac{d}{dx}(\\tan^{-1}(2x))', answer: '\\frac{2}{1+4x^2}' },
  { problem: '\\frac{d}{dx}\\left(\\cos^{-1}\\left(\\frac{x}{2}\\right)\\right)', answer: '-\\frac{1}{\\sqrt{4-x^2}}' },
], { mode: 'derivative', toleranceDp: 4 });
