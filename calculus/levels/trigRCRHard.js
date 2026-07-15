import { BaseLevel } from './BaseLevel.js';

// Hard (3+ steps): definite trig reverse-chain-rule integrals with exact-value
// bounds (multiples of π/6, π/4, π/3, π/2) — evaluate the antiderivative and
// substitute, often producing surd results.
export default new BaseLevel('trigRCRHard', 'Trig Reverse Chain Rule — Hard', [
  // ∫ sinⁿx·cos x  and  ∫ cosⁿx·sin x
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\sin x\\cos^2 x\\,dx', answer: '\\frac{1}{3}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x\\sin^2 x\\,dx', answer: '\\frac{1}{3}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\sin x\\cos x\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x\\sin^3 x\\,dx', answer: '\\frac{1}{4}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\sin x\\cos^3 x\\,dx', answer: '\\frac{1}{4}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\sin x\\cos^4 x\\,dx', answer: '\\frac{1}{5}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x\\sin^4 x\\,dx', answer: '\\frac{1}{5}' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}\\sin x\\cos^2 x\\,dx', answer: '\\frac{7}{24}' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}\\cos x\\sin^2 x\\,dx', answer: '\\frac{\\sqrt{3}}{8}' },
  { problem: '\\int_0^{\\frac{\\pi}{6}}\\cos x\\sin^2 x\\,dx', answer: '\\frac{1}{24}' },
  { problem: '\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}}\\cos x\\sin^2 x\\,dx', answer: '\\frac{7}{24}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}3\\sin^2 x\\cos x\\,dx', answer: '1' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}2\\sin x\\cos x\\,dx', answer: '1' },
  // ∫ sec²x·tanⁿx
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^2 x\\tan x\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^2 x\\tan^2 x\\,dx', answer: '\\frac{1}{3}' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^2 x\\tan^3 x\\,dx', answer: '\\frac{1}{4}' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}\\sec^2 x\\tan x\\,dx', answer: '\\frac{3}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{6}}\\sec^2 x\\tan x\\,dx', answer: '\\frac{1}{6}' },
  // (1 ± trig)^n with its derivative
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^2 x(1+\\tan x)^3\\,dx', answer: '\\frac{15}{4}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x(1+\\sin x)^3\\,dx', answer: '\\frac{15}{4}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x(2+\\sin x)^4\\,dx', answer: '\\frac{211}{5}' },
  // Surd outer (surd results)
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\frac{\\cos x}{\\sqrt{1+\\sin x}}\\,dx', answer: '2\\sqrt{2}-2' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\sin x\\sqrt{1+\\cos x}\\,dx', answer: '\\frac{2}{3}(2\\sqrt{2}-1)' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^2 x\\sqrt{\\tan x}\\,dx', answer: '\\frac{2}{3}' },
  // sin x / cosⁿx  and  cos x / sinⁿx
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\frac{\\sin x}{\\cos^2 x}\\,dx', answer: '\\sqrt{2}-1' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}\\frac{\\sin x}{\\cos^2 x}\\,dx', answer: '1' },
  { problem: '\\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}}\\frac{\\cos x}{\\sin^2 x}\\,dx', answer: '\\sqrt{2}-1' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^2 x\\tan^4 x\\,dx', answer: '\\frac{1}{5}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos x\\sqrt{1+\\sin x}\\,dx', answer: '\\frac{2}{3}(2\\sqrt{2}-1)' },
  { problem: '\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sec^2 x\\tan x\\,dx', answer: '\\frac{4}{3}' },
], { mode: 'integral', toleranceDp: 2 });
