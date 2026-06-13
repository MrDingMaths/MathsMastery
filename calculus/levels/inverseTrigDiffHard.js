import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('inverseTrigDiffHard', 'Differentiating Inverse Trig — Hard', [
  { problem: '\\frac{d}{dx}\\left(\\frac{\\tan^{-1}x}{x}\\right)', answer: '\\frac{\\frac{x}{1+x^2}-\\tan^{-1}x}{x^2}' },
  { problem: '\\frac{d}{dx}(x\\cos^{-1}x)', answer: '\\cos^{-1}x-\\frac{x}{\\sqrt{1-x^2}}' },
  { problem: '\\frac{d}{dx}(\\sin^{-1}(5x^3))', answer: '\\frac{15x^2}{\\sqrt{1-25x^6}}' },
  { problem: '\\frac{d}{dx}(\\tan^{-1}(e^{2x}))', answer: '\\frac{2e^{2x}}{1+e^{4x}}' },
  { problem: '\\frac{d}{dx}\\left(\\cos^{-1}\\sqrt{x}\\right)', answer: '-\\frac{1}{2\\sqrt{x}\\sqrt{1-x}}' },
  { problem: '\\frac{d}{dx}\\left(\\tan^{-1}\\sqrt{x}\\right)', answer: '\\frac{1}{2(1+x)\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(x\\cos^{-1}x-\\sqrt{1-x^2}\\right)', answer: '\\cos^{-1}x' },
  { problem: '\\frac{d}{dx}(\\sin^{-1}(e^{3x}))', answer: '\\frac{3e^{3x}}{\\sqrt{1-e^{6x}}}' },
  { problem: '\\frac{d}{dx}\\left(\\sin^{-1}\\left(\\frac{2x-3}{4}\\right)\\right)', answer: '\\frac{2}{\\sqrt{7+12x-4x^2}}' },
  { problem: '\\frac{d}{dx}\\left(\\tan^{-1}\\left(\\frac{1}{1-x}\\right)\\right)', answer: '\\frac{1}{x^2-2x+2}' },
  { problem: '\\frac{d}{dx}(\\sin^{-1}(e^x))', answer: '\\frac{e^x}{\\sqrt{1-e^{2x}}}' },
  { problem: '\\frac{d}{dx}\\left(\\ln\\sqrt{\\sin^{-1}x}\\right)', answer: '\\frac{1}{2\\sqrt{1-x^2}\\sin^{-1}x}' },
  { problem: '\\frac{d}{dx}\\left(\\sin^{-1}\\sqrt{\\ln x}\\right)', answer: '\\frac{1}{2x\\sqrt{\\ln x(1-\\ln x)}}' },
  { problem: '\\frac{d}{dx}\\left(\\sqrt{x}\\sin^{-1}\\sqrt{1-x}\\right)', answer: '\\frac{\\sin^{-1}\\sqrt{1-x}}{2\\sqrt{x}}-\\frac{1}{2\\sqrt{1-x}}' },
  { problem: '\\frac{d}{dx}\\left(\\tan^{-1}\\left(\\frac{x+2}{1-2x}\\right)\\right)', answer: '\\frac{1}{1+x^2}' },
  { problem: '\\frac{d}{dx}(\\tan^{-1}(e^{3x}))', answer: '\\frac{3e^{3x}}{1+e^{6x}}' },
  { problem: '\\frac{d}{dx}(\\cos^{-1}(\\ln x))', answer: '-\\frac{1}{x\\sqrt{1-(\\ln x)^2}}' },
], { mode: 'derivative', toleranceDp: 4 });
