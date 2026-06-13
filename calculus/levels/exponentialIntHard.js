import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialIntHard', 'Exponentials — Hard', [
  // Definite integrals with fractional bounds
  { problem: '\\int_{-\\frac{1}{2}}^{\\frac{1}{2}} e^{3-2x}\\,dx', answer: '\\frac{e^2}{2}(e^2-1)' },
  { problem: '\\int_{-\\frac{1}{3}}^{\\frac{1}{3}} e^{2+3x}\\,dx', answer: '\\frac{e}{3}(e^2-1)' },
  { problem: '\\int_{-1}^3 4e^{\\frac{x}{5}}\\,dx', answer: '20\\left(e^{\\frac{3}{5}}-e^{-\\frac{1}{5}}\\right)' },
  // Complex definite integrals (expand brackets, then evaluate)
  { problem: '\\int_0^1 e^x(2e^x-1)\\,dx', answer: 'e^2-e' },
  { problem: '\\int_{-1}^1(e^x+2)^2\\,dx', answer: '\\frac{1}{2}(e^2-e^{-2})+4(e-e^{-1})+8' },
  { problem: '\\int_0^1(e^x-1)(e^{-x}+1)\\,dx', answer: 'e+e^{-1}-2' },
  { problem: '\\int_{-1}^1(e^{2x}+e^{-x})(e^{2x}-e^{-x})\\,dx', answer: '\\frac{1}{4}(e^4-e^{-4})+\\frac{1}{2}(e^{-2}-e^2)' },
  { problem: '\\int_0^1\\frac{e^{3x}+e^x}{e^{2x}}\\,dx', answer: 'e-e^{-1}' },
  { problem: '\\int_{-1}^1\\frac{e^x-1}{e^{2x}}\\,dx', answer: 'e-e^{-1}+\\frac{1}{2}(e^{-2}-e^2)' },
  // Integrating a^x (formula: a^x / ln a)
  { problem: '\\int 3^x\\,dx', answer: '\\frac{3^x}{\\ln 3}+C' },
  { problem: '\\int 3^{x+5}\\,dx', answer: '\\frac{3^{x+5}}{\\ln 3}+C' },
  { problem: '\\int 3^{2x+5}\\,dx', answer: '\\frac{3^{2x+5}}{2\\ln 3}+C' },
  { problem: '\\int 5^{2x+5}\\,dx', answer: '\\frac{5^{2x+5}}{2\\ln 5}+C' },
  { problem: '\\int 5^{5-2x}\\,dx', answer: '-\\frac{5^{5-2x}}{2\\ln 5}+C' },
  { problem: '\\int 7^{\\frac{x}{3}}\\,dx', answer: '\\frac{3\\cdot 7^{\\frac{x}{3}}}{\\ln 7}+C' },
  { problem: '\\int 2^x\\,dx', answer: '\\frac{2^x}{\\ln 2}+C' },
  { problem: '\\int 6^x\\,dx', answer: '\\frac{6^x}{\\ln 6}+C' },
  { problem: '\\int 7^x\\,dx', answer: '\\frac{7^x}{\\ln 7}+C' },
  { problem: '\\int 3^{5x}\\,dx', answer: '\\frac{3^{5x}}{5\\ln 3}+C' },
  { problem: '\\int 6^{2x+7}\\,dx', answer: '\\frac{6^{2x+7}}{2\\ln 6}+C' },
  { problem: '\\int 5\\cdot 7^{4-9x}\\,dx', answer: '-\\frac{5\\cdot 7^{4-9x}}{9\\ln 7}+C' },
  // Definite integrals of a^x (decimal answers)
  { problem: '\\int_0^1 2^x\\,dx', answer: '1.443' },
  { problem: '\\int_0^1 3^x\\,dx', answer: '1.820' },
  { problem: '\\int_{-1}^1 5^x\\,dx', answer: '2.982' },
  { problem: '\\int_0^2 4^x\\,dx', answer: '10.82' },
  // Definite integrals of a^x (exact form)
  { problem: '\\int_1^3 2^x\\,dx', answer: '\\frac{6}{\\ln 2}' },
  { problem: '\\int_{-1}^1(3^x+1)\\,dx', answer: '2+\\frac{8}{3\\ln 3}' },
  { problem: '\\int_0^2(10^x-10x)\\,dx', answer: '\\frac{99}{\\ln 10}-20' },
], { mode: 'integral', toleranceDp: 4 });
