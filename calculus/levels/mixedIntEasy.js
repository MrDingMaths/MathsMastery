import { BaseLevel } from './BaseLevel.js';
import polynomialIntEasy from './polynomialIntEasy.js';
import exponentialIntEasy from './exponentialIntEasy.js';
import rationalIntEasy from './rationalIntEasy.js';
import trigIntEasy from './trigIntEasy.js';

export default new BaseLevel('mixedIntEasy', 'Mixed Integration — Easy', [
    ...polynomialIntEasy.questions,
    ...exponentialIntEasy.questions,
    ...rationalIntEasy.questions,
    ...trigIntEasy.questions,
], { mode: 'integral', toleranceDp: 2 });
