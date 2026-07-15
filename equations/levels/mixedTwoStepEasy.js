import { BaseLevel } from './BaseLevel.js';
import twoStepEasy from './twoStepEasy.js';
import twoStepNegCoeffEasy from './twoStepNegCoeffEasy.js';
import twoStepGroupingEasy from './twoStepGroupingEasy.js';
export default new BaseLevel('mixedTwoStepEasy', 'Mixed Two Step (Easy)', [
    ...twoStepEasy.questions,
    ...twoStepNegCoeffEasy.questions,
    ...twoStepGroupingEasy.questions,
]);
