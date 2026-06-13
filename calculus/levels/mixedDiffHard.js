import { BaseLevel } from './BaseLevel.js';
import polynomialDiffHard from './polynomialDiffHard.js';
import polynomialChainRuleHard from './polynomialChainRuleHard.js';
import polynomialProductRuleHard from './polynomialProductRuleHard.js';
import polynomialQuotientRuleHard from './polynomialQuotientRuleHard.js';
import exponentialDiffHard from './exponentialDiffHard.js';
import exponentialDiffRulesHard from './exponentialDiffRulesHard.js';
import logarithmicDiffHard from './logarithmicDiffHard.js';
import logarithmicDiffRulesHard from './logarithmicDiffRulesHard.js';
import trigDiffHard from './trigDiffHard.js';
import trigDiffRulesHard from './trigDiffRulesHard.js';

export default new BaseLevel('mixedDiffHard', 'Mixed Differentiation — Hard', [
    ...polynomialDiffHard.questions,
    ...polynomialChainRuleHard.questions,
    ...polynomialProductRuleHard.questions,
    ...polynomialQuotientRuleHard.questions,
    ...exponentialDiffHard.questions,
    ...exponentialDiffRulesHard.questions,
    ...logarithmicDiffHard.questions,
    ...logarithmicDiffRulesHard.questions,
    ...trigDiffHard.questions,
    ...trigDiffRulesHard.questions,
], { mode: 'derivative', toleranceDp: 2 });
