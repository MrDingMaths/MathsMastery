import { BaseLevel } from './BaseLevel.js';
import polynomialDiffHard from './polynomialDiffHard.js';
import polynomialChainRuleHard from './polynomialChainRuleHard.js';
import polynomialProductRuleHard from './polynomialProductRuleHard.js';
import polynomialQuotientRuleHard from './polynomialQuotientRuleHard.js';

export default new BaseLevel('polynomialMixedRulesHard', 'Polynomial Mixed — Hard', [
    ...polynomialDiffHard.questions,
    ...polynomialChainRuleHard.questions,
    ...polynomialProductRuleHard.questions,
    ...polynomialQuotientRuleHard.questions,
], { mode: 'derivative', toleranceDp: 2 });
