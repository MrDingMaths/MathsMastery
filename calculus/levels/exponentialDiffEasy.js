import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialDiffEasy', 'Exponential Functions — Easy', [
  { problem: '\\frac{d}{dx}(e^{7x})', answer: '7e^{7x}' },
  { problem: '\\frac{d}{dx}(e^{-x})', answer: '-e^{-x}' },
  { problem: '\\frac{d}{dx}(e^{6x-2})', answer: '6e^{6x-2}' },
  { problem: '\\frac{d}{dx}(e^{-2x})', answer: '-2e^{-2x}' },
  { problem: '\\frac{d}{dx}(e^{10x})', answer: '10e^{10x}' },
  { problem: '\\frac{d}{dx}(e^{5x})', answer: '5e^{5x}' },
  { problem: '\\frac{d}{dx}(e^{2x}+x)', answer: '2e^{2x}+1' },
], { mode: 'derivative' });
