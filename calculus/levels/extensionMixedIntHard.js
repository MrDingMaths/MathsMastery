import { BaseLevel } from './BaseLevel.js';
import polynomialIntHard from './polynomialIntHard.js';
import exponentialIntHard from './exponentialIntHard.js';
import rationalIntHard from './rationalIntHard.js';
import trigIntHard from './trigIntHard.js';
import mixedIntHard from './mixedIntHard.js';
import polynomialRCRHard from './polynomialRCRHard.js';
import exponentialRCRHard from './exponentialRCRHard.js';
import rationalRCRHard from './rationalRCRHard.js';
import trigRCRHard from './trigRCRHard.js';
import mixedRCRHard from './mixedRCRHard.js';
import inverseTrigIntHard from './inverseTrigIntHard.js';
import integrationBySubstitutionHard from './integrationBySubstitutionHard.js';
import sinCosSquaredIntHard from './sinCosSquaredIntHard.js';

export default new BaseLevel('extensionMixedIntHard', 'Mixed Integration Extension — Hard', [
    ...polynomialIntHard.questions,
    ...exponentialIntHard.questions,
    ...rationalIntHard.questions,
    ...trigIntHard.questions,
    ...mixedIntHard.questions,
    ...polynomialRCRHard.questions,
    ...exponentialRCRHard.questions,
    ...rationalRCRHard.questions,
    ...trigRCRHard.questions,
    ...mixedRCRHard.questions,
    ...inverseTrigIntHard.questions,
    ...integrationBySubstitutionHard.questions,
    ...sinCosSquaredIntHard.questions,
], { mode: 'integral', toleranceDp: 4 });
