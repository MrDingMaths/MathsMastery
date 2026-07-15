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
    // ── Migrated cross-family mixes (formerly in single-family levels) ──
    { problem: '\\frac{d}{dx}(e^x+\\ln x)', answer: 'e^x+\\frac{1}{x}' },
    { problem: '\\frac{d}{dx}(e^x-\\ln x)', answer: 'e^x-\\frac{1}{x}' },
    { problem: '\\frac{d}{dx}(e^x+\\sin x)', answer: 'e^x+\\cos x' },
    { problem: '\\frac{d}{dx}(e^x+\\cos x)', answer: 'e^x-\\sin x' },
    { problem: '\\frac{d}{dx}(2e^x+3\\sin x)', answer: '2e^x+3\\cos x' },
    { problem: '\\frac{d}{dx}(\\ln(1+e^x))', answer: '\\frac{e^x}{1+e^x}' },
    { problem: '\\frac{d}{dx}(\\ln(e^x-2))', answer: '\\frac{e^x}{e^x-2}' },
    { problem: '\\frac{d}{dx}(\\ln(2^x))', answer: '\\ln 2' },
    { problem: '\\frac{d}{dx}(\\ln(\\sin x))', answer: '\\cot x' },
    { problem: '\\frac{d}{dx}(e^x\\ln x)', answer: 'e^x\\left(\\ln x+\\frac{1}{x}\\right)' },
    { problem: '\\frac{d}{dx}(e^{-x}\\ln x)', answer: 'e^{-x}\\left(\\frac{1}{x}-\\ln x\\right)' },
    { problem: '\\frac{d}{dx}(e^x\\ln(x+1))', answer: 'e^x\\left(\\ln(x+1)+\\frac{1}{x+1}\\right)' },
    { problem: '\\frac{d}{dx}(e^x\\ln(2x+1))', answer: 'e^x\\left(\\ln(2x+1)+\\frac{2}{2x+1}\\right)' },
    { problem: '\\frac{d}{dx}\\left(\\frac{\\tan x}{51}+3e^x\\right)', answer: '\\frac{1}{51}\\sec^2 x+3e^x' },
    { problem: '\\frac{d}{dx}(e^x-\\cos 2x)', answer: 'e^x+2\\sin 2x' },
    { problem: '\\frac{d}{dx}(\\sin(1-\\ln x))', answer: '-\\frac{1}{x}\\cos(1-\\ln x)' },
    { problem: '\\frac{d}{dx}(\\sin(e^x+x))', answer: '(e^x+1)\\cos(e^x+x)' },
], { mode: 'derivative', toleranceDp: 2 });
