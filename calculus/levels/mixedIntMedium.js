import { BaseLevel } from './BaseLevel.js';
import polynomialIntMedium from './polynomialIntMedium.js';
import exponentialIntMedium from './exponentialIntMedium.js';
import rationalIntMedium from './rationalIntMedium.js';
import trigIntMedium from './trigIntMedium.js';

export default new BaseLevel('mixedIntMedium', 'Mixed Integration — Medium', [
    ...polynomialIntMedium.questions,
    ...exponentialIntMedium.questions,
    ...rationalIntMedium.questions,
    ...trigIntMedium.questions,
], { mode: 'integral', toleranceDp: 2 });
