import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialRCRMedium', 'Exponential Reverse Chain Rule — Medium', [
  { problem: '\\int(x-1)e^{x^2-2x+3}\\,dx', answer: '\\frac{1}{2}e^{x^2-2x+3}+C' },
  { problem: '\\int(3x+2)e^{3x^2+4x+1}\\,dx', answer: '\\frac{1}{2}e^{3x^2+4x+1}+C' },
  { problem: '\\int_{-1}^0 x^2 e^{x^3}\\,dx', answer: '\\frac{1}{3}(1-e^{-1})' },
  { problem: '\\int(x^2-2x)e^{x^3-3x^2}\\,dx', answer: '\\frac{1}{3}e^{x^3-3x^2}+C' },
  { problem: '\\int\\cos x\\cdot e^{\\sin x}\\,dx', answer: 'e^{\\sin x}+C' },
  { problem: '\\int\\sec^2 x\\cdot e^{\\tan x}\\,dx', answer: 'e^{\\tan x}+C' },
  { problem: '\\int e^x(e^x+1)^6\\,dx', answer: '\\frac{(e^x+1)^7}{7}+C' },
  { problem: '\\int 2xe^{1-x^2}\\,dx', answer: '-e^{1-x^2}+C' },
  { problem: '\\int\\sin x\\cdot e^{\\cos x}\\,dx', answer: '-e^{\\cos x}+C' },
  { problem: '\\int\\frac{1}{x}\\cdot e^{\\ln x}\\,dx', answer: 'x+C' },
], { mode: 'integral', toleranceDp: 2 });
