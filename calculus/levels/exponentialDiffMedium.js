import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialDiffMedium', 'Exponential Functions — Medium', [
  { problem: '\\frac{d}{dx}(e^{x^2+1})', answer: '2xe^{x^2+1}' },
  { problem: '\\frac{d}{dx}(e^{x^3+5x+7})', answer: '(3x^2+5)e^{x^3+5x+7}' },
  { problem: '\\frac{d}{dx}(x^2+2x+e^{1-x})', answer: '2x+2-e^{1-x}' },
  { problem: '\\frac{d}{dx}(2^x)', answer: '2^x\\ln 2' },
  { problem: '\\frac{d}{dx}(e^x+3^x)', answer: 'e^x+3^x\\ln 3' },
], { mode: 'derivative' });
