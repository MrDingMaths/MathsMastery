import { BaseLevel } from './BaseLevel.js';

// Hard (3+ steps): compound/nested e^{kx}/(c+e^{kx})^n, surd or awkward inners
// (x^{-2}e^{1/x}, e^{√x}/√x), scalar adjustment, and/or definite evaluation.
export default new BaseLevel('exponentialRCRHard', 'Exponential Reverse Chain Rule — Hard', [
  // Nested: e^{kx} over a power of (c + e^{kx})
  { problem: '\\int\\frac{e^{3x}}{(2+e^{3x})^5}\\,dx', answer: '-\\frac{1}{12(e^{3x}+2)^4}+C' },
  { problem: '\\int\\frac{e^{2x}}{(3+e^{2x})^3}\\,dx', answer: '-\\frac{1}{4(e^{2x}+3)^2}+C' },
  { problem: '\\int\\frac{e^x}{(e^x+1)^2}\\,dx', answer: '-\\frac{1}{e^x+1}+C' },
  { problem: '\\int\\frac{e^{2x}}{(e^{2x}+4)^2}\\,dx', answer: '-\\frac{1}{2(e^{2x}+4)}+C' },
  { problem: '\\int\\frac{e^{4x}}{(1+e^{4x})^3}\\,dx', answer: '-\\frac{1}{8(1+e^{4x})^2}+C' },
  { problem: '\\int\\frac{e^{3x}}{(e^{3x}+1)^2}\\,dx', answer: '-\\frac{1}{3(e^{3x}+1)}+C' },
  { problem: '\\int\\frac{e^x}{(e^x+2)^3}\\,dx', answer: '-\\frac{1}{2(e^x+2)^2}+C' },
  // Surd outer over (c + e^{kx})
  { problem: '\\int\\frac{e^x}{\\sqrt{e^x+1}}\\,dx', answer: '2\\sqrt{e^x+1}+C' },
  { problem: '\\int\\frac{e^{2x}}{\\sqrt{e^{2x}+3}}\\,dx', answer: '\\sqrt{e^{2x}+3}+C' },
  { problem: '\\int\\frac{e^x}{\\sqrt{2+e^x}}\\,dx', answer: '2\\sqrt{2+e^x}+C' },
  { problem: '\\int e^x\\sqrt{e^x+1}\\,dx', answer: '\\frac{2}{3}(e^x+1)^{\\frac{3}{2}}+C' },
  { problem: '\\int 2e^{2x}(e^{2x}+1)^4\\,dx', answer: '\\frac{(e^{2x}+1)^5}{5}+C' },
  // Awkward inner functions
  { problem: '\\int x^{-2}e^{x^{-1}}\\,dx', answer: '-e^{\\frac{1}{x}}+C' },
  { problem: '\\int(-2x^{-3})e^{x^{-2}}\\,dx', answer: 'e^{\\frac{1}{x^2}}+C' },
  { problem: '\\int\\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx', answer: '2e^{\\sqrt{x}}+C' },
  { problem: '\\int(-\\sqrt{x})e^{-x\\sqrt{x}}\\,dx', answer: '\\frac{2}{3}e^{-x\\sqrt{x}}+C' },
  { problem: '\\int\\sqrt{x}\\,e^{x\\sqrt{x}}\\,dx', answer: '\\frac{2}{3}e^{x\\sqrt{x}}+C' },
  { problem: '\\int e^x e^{2e^x}\\,dx', answer: '\\frac{1}{2}e^{2e^x}+C' },
  // Definite integrals
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x\\cdot e^{\\sin x}\\,dx', answer: 'e-1' },
  { problem: '\\int_0^1\\frac{e^x}{(e^x+1)^2}\\,dx', answer: '\\frac{1}{2}-\\frac{1}{e+1}' },
  { problem: '\\int_0^1 e^x(e^x+1)^3\\,dx', answer: '\\frac{(e+1)^4-16}{4}' },
  { problem: '\\int_1^2 xe^{x^2}\\,dx', answer: '\\frac{1}{2}(e^4-e)' },
  { problem: '\\int_{-1}^0(x+1)e^{x^2+2x}\\,dx', answer: '\\frac{1}{2}(1-e^{-1})' },
  { problem: '\\int_0^2(x-1)e^{x^2-2x}\\,dx', answer: '0' },
  { problem: '\\int_0^1(2x+2)e^{x^2+2x}\\,dx', answer: 'e^3-1' },
  { problem: '\\int_0^1\\frac{e^x}{\\sqrt{e^x+1}}\\,dx', answer: '2\\sqrt{e+1}-2\\sqrt{2}' },
  { problem: '\\int_0^1 e^x\\sqrt{e^x+1}\\,dx', answer: '\\frac{2}{3}\\left((e+1)^{\\frac{3}{2}}-2\\sqrt{2}\\right)' },
  { problem: '\\int_{-2}^{-1} x^{-2}e^{x^{-1}}\\,dx', answer: 'e^{-\\frac{1}{2}}-e^{-1}' },
  { problem: '\\int_0^1 2e^{2x}(e^{2x}+1)^4\\,dx', answer: '\\frac{(e^2+1)^5-32}{5}' },
  { problem: '\\int_1^4\\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx', answer: '2(e^2-e)' },
], { mode: 'integral', toleranceDp: 2 });
