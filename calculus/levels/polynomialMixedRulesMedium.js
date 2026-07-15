import { BaseLevel } from './BaseLevel.js';
import polynomialDiffMedium from './polynomialDiffMedium.js';
import polynomialChainRuleMedium from './polynomialChainRuleMedium.js';
import polynomialProductRuleMedium from './polynomialProductRuleMedium.js';
import polynomialQuotientRuleMedium from './polynomialQuotientRuleMedium.js';

export default new BaseLevel('polynomialMixedRulesMedium', 'Polynomial Mixed — Medium', [
    ...polynomialDiffMedium.questions,
    ...polynomialChainRuleMedium.questions,
    ...polynomialProductRuleMedium.questions,
    ...polynomialQuotientRuleMedium.questions,
], { mode: 'derivative', toleranceDp: 2 });
