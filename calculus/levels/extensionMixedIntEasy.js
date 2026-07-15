import { BaseLevel } from './BaseLevel.js';
import polynomialIntEasy from './polynomialIntEasy.js';
import exponentialIntEasy from './exponentialIntEasy.js';
import rationalIntEasy from './rationalIntEasy.js';
import trigIntEasy from './trigIntEasy.js';
import mixedIntEasy from './mixedIntEasy.js';
import polynomialRCREasy from './polynomialRCREasy.js';
import exponentialRCREasy from './exponentialRCREasy.js';
import rationalRCREasy from './rationalRCREasy.js';
import trigRCREasy from './trigRCREasy.js';
import mixedRCREasy from './mixedRCREasy.js';
import inverseTrigIntEasy from './inverseTrigIntEasy.js';
import integrationBySubstitutionEasy from './integrationBySubstitutionEasy.js';
import sinCosSquaredIntEasy from './sinCosSquaredIntEasy.js';

export default new BaseLevel('extensionMixedIntEasy', 'Mixed Integration Extension — Easy', [
    ...polynomialIntEasy.questions,
    ...exponentialIntEasy.questions,
    ...rationalIntEasy.questions,
    ...trigIntEasy.questions,
    ...mixedIntEasy.questions,
    ...polynomialRCREasy.questions,
    ...exponentialRCREasy.questions,
    ...rationalRCREasy.questions,
    ...trigRCREasy.questions,
    ...mixedRCREasy.questions,
    ...inverseTrigIntEasy.questions,
    ...integrationBySubstitutionEasy.questions,
    ...sinCosSquaredIntEasy.questions,
], { mode: 'integral', toleranceDp: 4 });
