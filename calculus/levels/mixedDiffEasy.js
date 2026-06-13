import { BaseLevel } from './BaseLevel.js';
import polynomialDiffEasy from './polynomialDiffEasy.js';
import polynomialChainRuleEasy from './polynomialChainRuleEasy.js';
import polynomialProductRuleEasy from './polynomialProductRuleEasy.js';
import polynomialQuotientRuleEasy from './polynomialQuotientRuleEasy.js';
import exponentialDiffEasy from './exponentialDiffEasy.js';
import exponentialDiffRulesEasy from './exponentialDiffRulesEasy.js';
import logarithmicDiffEasy from './logarithmicDiffEasy.js';
import logarithmicDiffRulesEasy from './logarithmicDiffRulesEasy.js';
import trigDiffEasy from './trigDiffEasy.js';
import trigDiffRulesEasy from './trigDiffRulesEasy.js';

export default new BaseLevel('mixedDiffEasy', 'Mixed Differentiation — Easy', [
    ...polynomialDiffEasy.questions,
    ...polynomialChainRuleEasy.questions,
    ...polynomialProductRuleEasy.questions,
    ...polynomialQuotientRuleEasy.questions,
    ...exponentialDiffEasy.questions,
    ...exponentialDiffRulesEasy.questions,
    ...logarithmicDiffEasy.questions,
    ...logarithmicDiffRulesEasy.questions,
    ...trigDiffEasy.questions,
    ...trigDiffRulesEasy.questions,
], { mode: 'derivative', toleranceDp: 2 });
