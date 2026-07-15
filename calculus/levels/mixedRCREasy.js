import { BaseLevel } from './BaseLevel.js';
import polynomialRCREasy from './polynomialRCREasy.js';
import exponentialRCREasy from './exponentialRCREasy.js';
import rationalRCREasy from './rationalRCREasy.js';
import trigRCREasy from './trigRCREasy.js';

export default new BaseLevel('mixedRCREasy', 'Mixed Reverse Chain Rule — Easy', [
    ...polynomialRCREasy.questions,
    ...exponentialRCREasy.questions,
    ...rationalRCREasy.questions,
    ...trigRCREasy.questions,
], { mode: 'integral', toleranceDp: 2 });
