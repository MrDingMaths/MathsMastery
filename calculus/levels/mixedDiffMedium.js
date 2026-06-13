import { BaseLevel } from './BaseLevel.js';
import polynomialDiffMedium from './polynomialDiffMedium.js';
import polynomialChainRuleMedium from './polynomialChainRuleMedium.js';
import polynomialProductRuleMedium from './polynomialProductRuleMedium.js';
import polynomialQuotientRuleMedium from './polynomialQuotientRuleMedium.js';
import exponentialDiffMedium from './exponentialDiffMedium.js';
import exponentialDiffRulesMedium from './exponentialDiffRulesMedium.js';
import logarithmicDiffMedium from './logarithmicDiffMedium.js';
import logarithmicDiffRulesMedium from './logarithmicDiffRulesMedium.js';
import trigDiffMedium from './trigDiffMedium.js';
import trigDiffRulesMedium from './trigDiffRulesMedium.js';

export default new BaseLevel('mixedDiffMedium', 'Mixed Differentiation — Medium', [
    ...polynomialDiffMedium.questions,
    ...polynomialChainRuleMedium.questions,
    ...polynomialProductRuleMedium.questions,
    ...polynomialQuotientRuleMedium.questions,
    ...exponentialDiffMedium.questions,
    ...exponentialDiffRulesMedium.questions,
    ...logarithmicDiffMedium.questions,
    ...logarithmicDiffRulesMedium.questions,
    ...trigDiffMedium.questions,
    ...trigDiffRulesMedium.questions,
], { mode: 'derivative', toleranceDp: 2 });
