import { BaseLevel } from './BaseLevel.js';
import polynomialDiffEasy from './polynomialDiffEasy.js';
import polynomialChainRuleEasy from './polynomialChainRuleEasy.js';
import polynomialProductRuleEasy from './polynomialProductRuleEasy.js';
import polynomialQuotientRuleEasy from './polynomialQuotientRuleEasy.js';

export default new BaseLevel('polynomialMixedRulesEasy', 'Polynomial Mixed — Easy', [
    ...polynomialDiffEasy.questions,
    ...polynomialChainRuleEasy.questions,
    ...polynomialProductRuleEasy.questions,
    ...polynomialQuotientRuleEasy.questions,
], { mode: 'derivative', toleranceDp: 2 });
