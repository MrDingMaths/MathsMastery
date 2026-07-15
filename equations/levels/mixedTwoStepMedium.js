import { BaseLevel } from './BaseLevel.js';
import twoStepMedium from './twoStepMedium.js';
import twoStepNegCoeffMedium from './twoStepNegCoeffMedium.js';
import twoStepGroupingMedium from './twoStepGroupingMedium.js';
export default new BaseLevel('mixedTwoStepMedium', 'Mixed Two Step (Medium)', [
    ...twoStepMedium.questions,
    ...twoStepNegCoeffMedium.questions,
    ...twoStepGroupingMedium.questions,
]);
