import { BaseLevel } from './BaseLevel.js';

// Easy (1–2 steps): ∫ f'(x)/f(x) dx. About half the questions have a numerator
// that is EXACTLY the derivative of the denominator (answer ln|f(x)|); the other
// half need a single constant-factor adjustment (numerator = k·f'(x), answer
// k·ln|f(x)|). Polynomial denominators only — mixed-function cases (e^x, trig,
// ln) belong to the Medium level. Indefinite only.
export default new BaseLevel('rationalRCREasy', 'Rational Reverse Chain Rule — Easy', [
  // ── Exact derivative: answer is ln|f(x)| ──────────────────────────────────
  { problem: '\\int\\frac{6x}{3x^2+1}\\,dx', answer: '\\ln|3x^2+1|+C' },
  { problem: '\\int\\frac{2x+1}{x^2+x-3}\\,dx', answer: '\\ln|x^2+x-3|+C' },
  { problem: '\\int\\frac{2x+3}{x^2+3x+1}\\,dx', answer: '\\ln|x^2+3x+1|+C' },
  { problem: '\\int\\frac{2x-5}{x^2-5x+2}\\,dx', answer: '\\ln|x^2-5x+2|+C' },
  { problem: '\\int\\frac{2x+6}{x^2+6x+10}\\,dx', answer: '\\ln|x^2+6x+10|+C' },
  { problem: '\\int\\frac{2x-7}{x^2-7x+1}\\,dx', answer: '\\ln|x^2-7x+1|+C' },
  { problem: '\\int\\frac{2x+1}{x^2+x+1}\\,dx', answer: '\\ln|x^2+x+1|+C' },
  { problem: '\\int\\frac{2x-2}{x^2-2x+5}\\,dx', answer: '\\ln|x^2-2x+5|+C' },
  { problem: '\\int\\frac{5-6x}{2+5x-3x^2}\\,dx', answer: '\\ln|2+5x-3x^2|+C' },
  { problem: '\\int\\frac{1-2x}{4+x-x^2}\\,dx', answer: '\\ln|4+x-x^2|+C' },
  { problem: '\\int\\frac{3x^2}{x^3-5}\\,dx', answer: '\\ln|x^3-5|+C' },
  { problem: '\\int\\frac{3x^2+2}{x^3+2x-4}\\,dx', answer: '\\ln|x^3+2x-4|+C' },
  { problem: '\\int\\frac{3x^2-1}{x^3-x+5}\\,dx', answer: '\\ln|x^3-x+5|+C' },
  { problem: '\\int\\frac{4x^3+1}{x^4+x-5}\\,dx', answer: '\\ln|x^4+x-5|+C' },
  { problem: '\\int\\frac{5x^4+1}{x^5+x-2}\\,dx', answer: '\\ln|x^5+x-2|+C' },
  { problem: '\\int\\frac{2x-7}{x^2-7x+12}\\,dx', answer: '\\ln|x^2-7x+12|+C' },

  // ── Constant-factor adjustment: numerator = k·f'(x), answer k·ln|f(x)| ─────
  { problem: '\\int\\frac{x}{x^2+1}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+1|+C' },
  { problem: '\\int\\frac{x}{x^2-9}\\,dx', answer: '\\frac{1}{2}\\ln|x^2-9|+C' },
  { problem: '\\int\\frac{x}{x^2+4}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+4|+C' },
  { problem: '\\int\\frac{x+1}{x^2+2x-5}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+2x-5|+C' },
  { problem: '\\int\\frac{x+2}{x^2+4x-3}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+4x-3|+C' },
  { problem: '\\int\\frac{x^2}{x^3+5}\\,dx', answer: '\\frac{1}{3}\\ln|x^3+5|+C' },
  { problem: '\\int\\frac{x^2}{x^3-7}\\,dx', answer: '\\frac{1}{3}\\ln|x^3-7|+C' },
  { problem: '\\int\\frac{x^2}{x^3+1}\\,dx', answer: '\\frac{1}{3}\\ln|x^3+1|+C' },
  { problem: '\\int\\frac{x^3}{x^4+1}\\,dx', answer: '\\frac{1}{4}\\ln|x^4+1|+C' },
  { problem: '\\int\\frac{x^4}{x^5-2}\\,dx', answer: '\\frac{1}{5}\\ln|x^5-2|+C' },
  { problem: '\\int\\frac{x}{2x^2+1}\\,dx', answer: '\\frac{1}{4}\\ln|2x^2+1|+C' },
  { problem: '\\int\\frac{x}{3x^2-2}\\,dx', answer: '\\frac{1}{6}\\ln|3x^2-2|+C' },
  { problem: '\\int\\frac{3x^2}{2x^3+5}\\,dx', answer: '\\frac{1}{2}\\ln|2x^3+5|+C' },
  { problem: '\\int\\frac{2x^3}{x^4-3}\\,dx', answer: '\\frac{1}{2}\\ln|x^4-3|+C' },
  { problem: '\\int\\frac{6x}{x^2-2}\\,dx', answer: '3\\ln|x^2-2|+C' },
  { problem: '\\int\\frac{6x^2}{x^3-4}\\,dx', answer: '2\\ln|x^3-4|+C' },
], { mode: 'integral', toleranceDp: 2 });
