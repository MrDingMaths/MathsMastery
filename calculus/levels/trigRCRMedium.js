import { BaseLevel } from './BaseLevel.js';

// Medium (2–3 steps): trig-power patterns (sinⁿx·cos x, sec²x·tanⁿx, sin x/cosⁿx),
// trig RCR with a trig inner, and surd/coefficient adjustments. Indefinite only.
export default new BaseLevel('trigRCRMedium', 'Trig Reverse Chain Rule — Medium', [
  // [trig]^n · (its derivative)
  { problem: '\\int\\sin x\\cos^2 x\\,dx', answer: '-\\frac{\\cos^3 x}{3}+C' },
  { problem: '\\int\\cos x(\\sin x)^3\\,dx', answer: '\\frac{\\sin^4 x}{4}+C' },
  { problem: '\\int\\cos x\\sin^2 x\\,dx', answer: '\\frac{\\sin^3 x}{3}+C' },
  { problem: '\\int\\sin x\\cos^3 x\\,dx', answer: '-\\frac{\\cos^4 x}{4}+C' },
  { problem: '\\int\\cos x\\sin^4 x\\,dx', answer: '\\frac{\\sin^5 x}{5}+C' },
  { problem: '\\int\\sin x\\cos^4 x\\,dx', answer: '-\\frac{\\cos^5 x}{5}+C' },
  { problem: '\\int\\sin x\\cos x\\,dx', answer: '\\frac{\\sin^2 x}{2}+C' },
  { problem: '\\int 2\\sin x\\cos x\\,dx', answer: '\\sin^2 x+C' },
  { problem: '\\int 3\\sin^2 x\\cos x\\,dx', answer: '\\sin^3 x+C' },
  { problem: '\\int 4\\cos^3 x\\sin x\\,dx', answer: '-\\cos^4 x+C' },
  // sec²x · tanⁿx
  { problem: '\\int\\sec^2 x\\tan^3 x\\,dx', answer: '\\frac{\\tan^4 x}{4}+C' },
  { problem: '\\int\\sec^2 x\\tan x\\,dx', answer: '\\frac{\\tan^2 x}{2}+C' },
  { problem: '\\int\\sec^2 x\\tan^2 x\\,dx', answer: '\\frac{\\tan^3 x}{3}+C' },
  { problem: '\\int\\sec^2 x\\tan^4 x\\,dx', answer: '\\frac{\\tan^5 x}{5}+C' },
  // (1 ± trig)^n with its derivative
  { problem: '\\int\\cos x(1+\\sin x)^{-2}\\,dx', answer: '-\\frac{1}{1+\\sin x}+C' },
  { problem: '\\int\\cos x(1+\\sin x)^3\\,dx', answer: '\\frac{(1+\\sin x)^4}{4}+C' },
  { problem: '\\int\\cos x(2+\\sin x)^4\\,dx', answer: '\\frac{(2+\\sin x)^5}{5}+C' },
  { problem: '\\int\\sin x(1+\\cos x)^2\\,dx', answer: '-\\frac{(1+\\cos x)^3}{3}+C' },
  { problem: '\\int\\sec^2 x(1+\\tan x)^3\\,dx', answer: '\\frac{(1+\\tan x)^4}{4}+C' },
  // sin x / cosⁿx  and  cos x / sinⁿx
  { problem: '\\int\\frac{\\sin x}{\\cos^3 x}\\,dx', answer: '\\frac{\\sec^2 x}{2}+C' },
  { problem: '\\int\\frac{\\sin x}{\\cos^2 x}\\,dx', answer: '\\frac{1}{\\cos x}+C' },
  { problem: '\\int\\frac{\\sin x}{\\cos^4 x}\\,dx', answer: '\\frac{1}{3\\cos^3 x}+C' },
  { problem: '\\int\\frac{\\cos x}{\\sin^2 x}\\,dx', answer: '-\\frac{1}{\\sin x}+C' },
  { problem: '\\int\\frac{\\cos x}{\\sin^3 x}\\,dx', answer: '-\\frac{1}{2\\sin^2 x}+C' },
  // Surd outer over a trig inner
  { problem: '\\int\\sec^2 x\\sqrt{\\tan x}\\,dx', answer: '\\frac{2}{3}(\\tan x)^{\\frac{3}{2}}+C' },
  { problem: '\\int\\frac{\\cos x}{\\sqrt{\\sin x}}\\,dx', answer: '2\\sqrt{\\sin x}+C' },
  { problem: '\\int\\sin x\\sqrt{1+\\cos x}\\,dx', answer: '-\\frac{2}{3}(1+\\cos x)^{\\frac{3}{2}}+C' },
  { problem: '\\int\\frac{\\sec^2 x}{\\sqrt{1+\\tan x}}\\,dx', answer: '2\\sqrt{1+\\tan x}+C' },
  { problem: '\\int\\frac{\\cos x}{\\sqrt{2+\\sin x}}\\,dx', answer: '2\\sqrt{2+\\sin x}+C' },
  { problem: '\\int\\cos x\\sqrt{1+\\sin x}\\,dx', answer: '\\frac{2}{3}(1+\\sin x)^{\\frac{3}{2}}+C' },
], { mode: 'integral', toleranceDp: 2 });
