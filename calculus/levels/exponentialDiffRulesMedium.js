import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialDiffRulesMedium', 'Exponential with Rules — Medium', [
  { problem: '\\frac{d}{dx}(xe^{2x})', answer: 'e^{2x}(2x+1)' },
  { problem: '\\frac{d}{dx}(x^3e^{5x})', answer: 'x^2e^{5x}(5x+3)' },
], { mode: 'derivative', toleranceDp: 2 });
