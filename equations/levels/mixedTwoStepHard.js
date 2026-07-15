import { BaseLevel } from './BaseLevel.js';
import twoStepHard from './twoStepHard.js';
import twoStepNegCoeffHard from './twoStepNegCoeffHard.js';
import twoStepGroupingHard from './twoStepGroupingHard.js';
export default new BaseLevel('mixedTwoStepHard', 'Mixed Two Step (Hard)', [
    ...twoStepHard.questions,
    ...twoStepNegCoeffHard.questions,
    ...twoStepGroupingHard.questions,
]);
