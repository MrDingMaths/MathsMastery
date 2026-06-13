import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('integrationBySubstitutionHard', 'Integration by Substitution — Hard', [
  { problem: '\\int\\frac{1}{\\sqrt{x}(1+\\sqrt{x})^3}\\,dx', answer: '-\\frac{1}{(1+\\sqrt{x})^2}+C' },
  { problem: '\\int x^2\\sqrt{1-x}\\,dx', answer: '-\\frac{2}{7}(1-x)^{\\frac{7}{2}}+\\frac{4}{5}(1-x)^{\\frac{5}{2}}-\\frac{2}{3}(1-x)^{\\frac{3}{2}}+C' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\frac{\\cos x}{1+\\sin^2 x}\\,dx', answer: '\\frac{\\pi}{4}' },
  { problem: '\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}}\\frac{\\cos^3 x}{\\sin^4 x}\\,dx', answer: '\\frac{4}{3}' },
  { problem: '\\int\\frac{\\tan x}{\\ln(\\cos x)}\\,dx', answer: '-\\ln(-\\ln(\\cos x))+C' },
  { problem: '\\int\\tan^3 x\\sec^4 x\\,dx', answer: '\\frac{1}{4}\\tan^4 x+\\frac{1}{6}\\tan^6 x+C' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}2^{\\sec x}\\sec x\\tan x\\,dx', answer: '\\frac{2}{\\ln 2}' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^5 x\\tan x\\,dx', answer: '\\frac{4\\sqrt{2}-1}{5}' },
  { problem: '\\int_1^e\\frac{\\ln x+1}{(x\\ln x+1)^2}\\,dx', answer: '\\frac{e}{e+1}' },
  { problem: '\\int\\frac{1}{2x\\sqrt{x-1}}\\,dx', answer: '\\tan^{-1}\\sqrt{x-1}+C' },
  { problem: '\\int 3x\\sqrt{4x-5}\\,dx', answer: '\\frac{3}{40}(4x-5)^{\\frac{5}{2}}+\\frac{5}{8}(4x-5)^{\\frac{3}{2}}+C' },
  { problem: '\\int\\frac{1}{1+\\sqrt{x}}\\,dx', answer: '2(1+\\sqrt{x})-2\\ln(1+\\sqrt{x})+C' },
  { problem: '\\int_0^4 x\\sqrt{4-x}\\,dx', answer: '\\frac{128}{15}' },
  { problem: '\\int_1^5\\frac{x}{(2x-1)^{\\frac{3}{2}}}\\,dx', answer: '\\frac{4}{3}' },
], { mode: 'integral', toleranceDp: 4 });
