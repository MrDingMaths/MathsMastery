import { BaseLevel } from './BaseLevel.js';
import polynomialRCRHard from './polynomialRCRHard.js';
import exponentialRCRHard from './exponentialRCRHard.js';
import rationalRCRHard from './rationalRCRHard.js';
import trigRCRHard from './trigRCRHard.js';

export default new BaseLevel('mixedRCRHard', 'Mixed Reverse Chain Rule — Hard', [
    ...polynomialRCRHard.questions,
    ...exponentialRCRHard.questions,
    ...rationalRCRHard.questions,
    ...trigRCRHard.questions,
], { mode: 'integral', toleranceDp: 2 });
