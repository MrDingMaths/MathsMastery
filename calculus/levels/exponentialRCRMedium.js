import { BaseLevel } from './BaseLevel.js';

// Medium (2–3 steps): coefficient adjustment, trinomial inner, mixed-function
// inner (e.g. cos x·e^{sin x}), e^x·(e^x+c)^n, or a basic definite integral.
export default new BaseLevel('exponentialRCRMedium', 'Exponential Reverse Chain Rule — Medium', [
  // Trinomial / linear-derivative inner (f' present, maybe ×½)
  { problem: '\\int(x-1)e^{x^2-2x+3}\\,dx', answer: '\\frac{1}{2}e^{x^2-2x+3}+C' },
  { problem: '\\int(3x+2)e^{3x^2+4x+1}\\,dx', answer: '\\frac{1}{2}e^{3x^2+4x+1}+C' },
  { problem: '\\int(x^2-2x)e^{x^3-3x^2}\\,dx', answer: '\\frac{1}{3}e^{x^3-3x^2}+C' },
  { problem: '\\int(x+1)e^{x^2+2x}\\,dx', answer: '\\frac{1}{2}e^{x^2+2x}+C' },
  { problem: '\\int(2x-3)e^{x^2-3x}\\,dx', answer: 'e^{x^2-3x}+C' },
  { problem: '\\int(x-2)e^{x^2-4x+1}\\,dx', answer: '\\frac{1}{2}e^{x^2-4x+1}+C' },
  { problem: '\\int(4x+1)e^{2x^2+x}\\,dx', answer: 'e^{2x^2+x}+C' },
  { problem: '\\int(6x-1)e^{3x^2-x}\\,dx', answer: 'e^{3x^2-x}+C' },
  { problem: '\\int(x+3)e^{x^2+6x}\\,dx', answer: '\\frac{1}{2}e^{x^2+6x}+C' },
  { problem: '\\int 2xe^{1-x^2}\\,dx', answer: '-e^{1-x^2}+C' },
  // Mixed-function inner (trig in the exponent)
  { problem: '\\int\\cos x\\cdot e^{\\sin x}\\,dx', answer: 'e^{\\sin x}+C' },
  { problem: '\\int\\sec^2 x\\cdot e^{\\tan x}\\,dx', answer: 'e^{\\tan x}+C' },
  { problem: '\\int\\sin x\\cdot e^{\\cos x}\\,dx', answer: '-e^{\\cos x}+C' },
  { problem: '\\int\\cos x\\cdot e^{2\\sin x}\\,dx', answer: '\\frac{1}{2}e^{2\\sin x}+C' },
  { problem: '\\int 2\\cos x\\cdot e^{\\sin x}\\,dx', answer: '2e^{\\sin x}+C' },
  { problem: '\\int(-\\sin x)e^{\\cos x}\\,dx', answer: 'e^{\\cos x}+C' },
  { problem: '\\int\\sec^2 x\\cdot e^{2\\tan x}\\,dx', answer: '\\frac{1}{2}e^{2\\tan x}+C' },
  { problem: '\\int\\cos x\\cdot e^{3+\\sin x}\\,dx', answer: 'e^{3+\\sin x}+C' },
  { problem: '\\int\\sin x\\cdot e^{3\\cos x}\\,dx', answer: '-\\frac{1}{3}e^{3\\cos x}+C' },
  // e^x as the inner function's derivative
  { problem: '\\int e^x(e^x+1)^6\\,dx', answer: '\\frac{(e^x+1)^7}{7}+C' },
  { problem: '\\int e^x(e^x+2)^3\\,dx', answer: '\\frac{(e^x+2)^4}{4}+C' },
  { problem: '\\int e^x(e^x-1)^4\\,dx', answer: '\\frac{(e^x-1)^5}{5}+C' },
  { problem: '\\int e^{2x}(e^{2x}+1)^3\\,dx', answer: '\\frac{(e^{2x}+1)^4}{8}+C' },
  { problem: '\\int e^x e^{e^x}\\,dx', answer: 'e^{e^x}+C' },
  // Basic definite integrals
  { problem: '\\int_{-1}^0 x^2 e^{x^3}\\,dx', answer: '\\frac{1}{3}(1-e^{-1})' },
  { problem: '\\int_0^1 2xe^{x^2}\\,dx', answer: 'e-1' },
  { problem: '\\int_0^1 x^2 e^{x^3}\\,dx', answer: '\\frac{e-1}{3}' },
  { problem: '\\int_0^1 xe^{x^2}\\,dx', answer: '\\frac{e-1}{2}' },
  { problem: '\\int_0^2 xe^{x^2}\\,dx', answer: '\\frac{1}{2}(e^4-1)' },
  { problem: '\\int_{-1}^1 xe^{x^2}\\,dx', answer: '0' },
], { mode: 'integral', toleranceDp: 2 });
