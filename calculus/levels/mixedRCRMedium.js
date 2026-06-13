import { BaseLevel } from './BaseLevel.js';
import polynomialRCRMedium from './polynomialRCRMedium.js';
import exponentialRCRMedium from './exponentialRCRMedium.js';
import rationalRCRMedium from './rationalRCRMedium.js';
import trigRCRMedium from './trigRCRMedium.js';

export default new BaseLevel('mixedRCRMedium', 'Mixed Reverse Chain Rule — Medium', [
    ...polynomialRCRMedium.questions,
    ...exponentialRCRMedium.questions,
    ...rationalRCRMedium.questions,
    ...trigRCRMedium.questions,
], { mode: 'integral', toleranceDp: 2 });
