import { BaseLevel } from './BaseLevel.js';
import polynomialIntHard from './polynomialIntHard.js';
import exponentialIntHard from './exponentialIntHard.js';
import rationalIntHard from './rationalIntHard.js';
import trigIntHard from './trigIntHard.js';

export default new BaseLevel('mixedIntHard', 'Mixed Integration — Hard', [
    ...polynomialIntHard.questions,
    ...exponentialIntHard.questions,
    ...rationalIntHard.questions,
    ...trigIntHard.questions,
], { mode: 'integral', toleranceDp: 2 });
