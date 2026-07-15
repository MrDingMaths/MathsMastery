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
    // ── Migrated cross-family mixes (formerly in single-family levels) ──
    { problem: '\\frac{d}{dx}(e^{\\sin x})', answer: '\\cos x\\cdot e^{\\sin x}' },
    { problem: '\\frac{d}{dx}(e^{\\cos x})', answer: '-\\sin x\\cdot e^{\\cos x}' },
    { problem: '\\frac{d}{dx}(e^{\\tan x})', answer: '\\sec^2 x\\cdot e^{\\tan x}' },
    { problem: '\\frac{d}{dx}(\\tan(e^{2x}))', answer: '2e^{2x}\\sec^2(e^{2x})' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x}}{\\ln x}\\right)', answer: '\\frac{e^{2x}(2x\\ln x-1)}{x(\\ln x)^2}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x}}{\\tan 7x}\\right)', answer: '\\frac{e^{2x}(2\\tan 7x-7\\sec^2 7x)}{\\tan^2 7x}' },
    { problem: '\\frac{d}{dx}(e^{3x}\\cos 2x)', answer: 'e^{3x}(3\\cos 2x-2\\sin 2x)' },
    { problem: '\\frac{d}{dx}(e^{2x}\\sin x)', answer: 'e^{2x}(2\\sin x+\\cos x)' },
    { problem: '\\frac{d}{dx}(e^x\\sin 2x)', answer: 'e^x(\\sin 2x+2\\cos 2x)' },
    { problem: '\\frac{d}{dx}(e^{3x}\\sin 2x)', answer: 'e^{3x}(3\\sin 2x+2\\cos 2x)' },
    { problem: '\\frac{d}{dx}(e^x\\cos 3x)', answer: 'e^x(\\cos 3x-3\\sin 3x)' },
    { problem: '\\frac{d}{dx}(e^{-x}\\sin x)', answer: 'e^{-x}(\\cos x-\\sin x)' },
    { problem: '\\frac{d}{dx}(e^{2x}\\tan x)', answer: 'e^{2x}(2\\tan x+\\sec^2 x)' },
    { problem: '\\frac{d}{dx}(e^x\\tan 3x)', answer: 'e^x(\\tan 3x+3\\sec^2 3x)' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^x}{\\sin x}\\right)', answer: '\\frac{e^x(\\sin x-\\cos x)}{\\sin^2 x}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x}}{\\cos x}\\right)', answer: '\\frac{e^{2x}(2\\cos x+\\sin x)}{\\cos^2 x}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^x}{\\cos 2x}\\right)', answer: '\\frac{e^x(\\cos 2x+2\\sin 2x)}{\\cos^2 2x}' },
    { problem: '\\frac{d}{dx}(e^{2x}\\ln x)', answer: 'e^{2x}\\left(2\\ln x+\\frac{1}{x}\\right)' },
    { problem: '\\frac{d}{dx}(e^x\\ln(2x))', answer: 'e^x\\left(\\ln(2x)+\\frac{1}{x}\\right)' },
    { problem: '\\frac{d}{dx}(e^{3x}\\ln(2x))', answer: 'e^{3x}\\left(3\\ln(2x)+\\frac{1}{x}\\right)' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x}}{\\ln(3x)}\\right)', answer: '\\frac{e^{2x}(2x\\ln(3x)-1)}{x(\\ln(3x))^2}' },
    { problem: '\\frac{d}{dx}(e^{-2x}\\cos 3x)', answer: '-e^{-2x}(2\\cos 3x+3\\sin 3x)' },
    { problem: '\\frac{d}{dx}(e^{-x}\\tan 2x)', answer: 'e^{-x}(2\\sec^2 2x-\\tan 2x)' },
    { problem: '\\frac{d}{dx}(e^{3x}\\cos x)', answer: 'e^{3x}(3\\cos x-\\sin x)' },
    { problem: '\\frac{d}{dx}\\left(\\frac{\\sin x}{e^x}\\right)', answer: '\\frac{\\cos x-\\sin x}{e^x}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{\\cos x}{e^{2x}}\\right)', answer: '-\\frac{\\sin x+2\\cos x}{e^{2x}}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^{2x}}{\\ln(x+1)}\\right)', answer: '\\frac{e^{2x}(2(x+1)\\ln(x+1)-1)}{(x+1)(\\ln(x+1))^2}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^{3x}}{\\sin x}\\right)', answer: '\\frac{e^{3x}(3\\sin x-\\cos x)}{\\sin^2 x}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^{-x}}{\\tan x}\\right)', answer: '-\\frac{e^{-x}(\\tan x+\\sec^2 x)}{\\tan^2 x}' },
    { problem: '\\frac{d}{dx}(e^{2x}\\sin 3x)', answer: 'e^{2x}(2\\sin 3x+3\\cos 3x)' },
    { problem: '\\frac{d}{dx}(e^{4x}\\cos 3x)', answer: 'e^{4x}(4\\cos 3x-3\\sin 3x)' },
    { problem: '\\frac{d}{dx}\\left(\\frac{\\ln x}{e^x}\\right)', answer: '\\frac{1-x\\ln x}{xe^x}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^x}{\\ln x}\\right)', answer: '\\frac{e^x(x\\ln x-1)}{x(\\ln x)^2}' },
    { problem: '\\frac{d}{dx}(e^{2x}\\ln(x+1))', answer: 'e^{2x}\\left(2\\ln(x+1)+\\frac{1}{x+1}\\right)' },
    { problem: '\\frac{d}{dx}(e^{-x}\\ln(2x+1))', answer: 'e^{-x}\\left(\\frac{2}{2x+1}-\\ln(2x+1)\\right)' },
    { problem: '\\frac{d}{dx}(e^{3x}\\ln(x+2))', answer: 'e^{3x}\\left(3\\ln(x+2)+\\frac{1}{x+2}\\right)' },
    { problem: '\\frac{d}{dx}\\left(\\frac{\\ln(2x)}{e^{2x}}\\right)', answer: '\\frac{1-2x\\ln(2x)}{xe^{2x}}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{\\ln(x^2+1)}{e^x}\\right)', answer: '\\frac{\\frac{2x}{x^2+1}-\\ln(x^2+1)}{e^x}' },
    { problem: '\\frac{d}{dx}\\left(\\frac{e^x}{\\ln(x+1)}\\right)', answer: '\\frac{e^x((x+1)\\ln(x+1)-1)}{(x+1)(\\ln(x+1))^2}' },
], { mode: 'derivative', toleranceDp: 2 });
