import { BaseLevel } from './BaseLevel.js';
import polynomialIntMedium from './polynomialIntMedium.js';
import exponentialIntMedium from './exponentialIntMedium.js';
import rationalIntMedium from './rationalIntMedium.js';
import trigIntMedium from './trigIntMedium.js';
import mixedIntMedium from './mixedIntMedium.js';
import polynomialRCRMedium from './polynomialRCRMedium.js';
import exponentialRCRMedium from './exponentialRCRMedium.js';
import rationalRCRMedium from './rationalRCRMedium.js';
import trigRCRMedium from './trigRCRMedium.js';
import mixedRCRMedium from './mixedRCRMedium.js';
import inverseTrigIntMedium from './inverseTrigIntMedium.js';
import integrationBySubstitutionMedium from './integrationBySubstitutionMedium.js';
import sinCosSquaredIntMedium from './sinCosSquaredIntMedium.js';

export default new BaseLevel('extensionMixedIntMedium', 'Mixed Integration Extension — Medium', [
    ...polynomialIntMedium.questions,
    ...exponentialIntMedium.questions,
    ...rationalIntMedium.questions,
    ...trigIntMedium.questions,
    ...mixedIntMedium.questions,
    ...polynomialRCRMedium.questions,
    ...exponentialRCRMedium.questions,
    ...rationalRCRMedium.questions,
    ...trigRCRMedium.questions,
    ...mixedRCRMedium.questions,
    ...inverseTrigIntMedium.questions,
    ...integrationBySubstitutionMedium.questions,
    ...sinCosSquaredIntMedium.questions,
], { mode: 'integral', toleranceDp: 4 });
