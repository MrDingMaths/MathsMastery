import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialDiffHard', 'Exponential Functions — Hard', [
  { problem: '\\frac{d}{dx}((x+e^{4x})^5)', answer: '5(1+4e^{4x})(x+e^{4x})^4' },
], { mode: 'derivative' });
