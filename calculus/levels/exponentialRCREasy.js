import { BaseLevel } from './BaseLevel.js';

// Easy (1–2 steps): ∫ f'(x) e^{f(x)} dx where f' is already present (up to a
// constant factor) and f is a simple monomial expression. Answer is e^{f(x)}.
export default new BaseLevel('exponentialRCREasy', 'Exponential Reverse Chain Rule — Easy', [
  // Inner x²+c  (f' = 2x)
  { problem: '\\int 2xe^{x^2+3}\\,dx', answer: 'e^{x^2+3}+C' },
  { problem: '\\int xe^{x^2}\\,dx', answer: '\\frac{1}{2}e^{x^2}+C' },
  { problem: '\\int 4xe^{x^2-7}\\,dx', answer: '2e^{x^2-7}+C' },
  { problem: '\\int xe^{x^2+1}\\,dx', answer: '\\frac{1}{2}e^{x^2+1}+C' },
  { problem: '\\int 6xe^{x^2}\\,dx', answer: '3e^{x^2}+C' },
  { problem: '\\int 2xe^{x^2-1}\\,dx', answer: 'e^{x^2-1}+C' },
  { problem: '\\int 2xe^{x^2+2}\\,dx', answer: 'e^{x^2+2}+C' },
  { problem: '\\int 10xe^{x^2}\\,dx', answer: '5e^{x^2}+C' },
  // Inner with negative leading sign  (f' = -2x)
  { problem: '\\int xe^{1-x^2}\\,dx', answer: '-\\frac{1}{2}e^{1-x^2}+C' },
  { problem: '\\int 3xe^{2-x^2}\\,dx', answer: '-\\frac{3}{2}e^{2-x^2}+C' },
  { problem: '\\int 4xe^{1-x^2}\\,dx', answer: '-2e^{1-x^2}+C' },
  // Inner -x²  (bounded integrand)
  { problem: '\\int xe^{-x^2}\\,dx', answer: '-\\frac{1}{2}e^{-x^2}+C' },
  { problem: '\\int 2xe^{-x^2}\\,dx', answer: '-e^{-x^2}+C' },
  { problem: '\\int 5xe^{-x^2}\\,dx', answer: '-\\frac{5}{2}e^{-x^2}+C' },
  // Inner kx²  (f' = 2kx)
  { problem: '\\int xe^{2x^2}\\,dx', answer: '\\frac{1}{4}e^{2x^2}+C' },
  { problem: '\\int xe^{3x^2}\\,dx', answer: '\\frac{1}{6}e^{3x^2}+C' },
  { problem: '\\int xe^{5x^2}\\,dx', answer: '\\frac{1}{10}e^{5x^2}+C' },
  // Inner x³+c  (f' = 3x²)
  { problem: '\\int x^2 e^{x^3+1}\\,dx', answer: '\\frac{e^{x^3+1}}{3}+C' },
  { problem: '\\int 3x^2 e^{x^3}\\,dx', answer: 'e^{x^3}+C' },
  { problem: '\\int x^2 e^{x^3}\\,dx', answer: '\\frac{e^{x^3}}{3}+C' },
  { problem: '\\int x^2 e^{x^3-2}\\,dx', answer: '\\frac{e^{x^3-2}}{3}+C' },
  { problem: '\\int 6x^2 e^{x^3+1}\\,dx', answer: '2e^{x^3+1}+C' },
  { problem: '\\int 9x^2 e^{x^3}\\,dx', answer: '3e^{x^3}+C' },
  { problem: '\\int 3x^2 e^{x^3-1}\\,dx', answer: 'e^{x^3-1}+C' },
  { problem: '\\int x^2 e^{1-x^3}\\,dx', answer: '-\\frac{e^{1-x^3}}{3}+C' },
  { problem: '\\int x^2 e^{2x^3}\\,dx', answer: '\\frac{1}{6}e^{2x^3}+C' },
  // Inner x⁴+c  (f' = 4x³)
  { problem: '\\int x^3 e^{x^4}\\,dx', answer: '\\frac{e^{x^4}}{4}+C' },
  { problem: '\\int 4x^3 e^{x^4+1}\\,dx', answer: 'e^{x^4+1}+C' },
  { problem: '\\int x^3 e^{x^4-2}\\,dx', answer: '\\frac{e^{x^4-2}}{4}+C' },
  { problem: '\\int 2x^3 e^{x^4}\\,dx', answer: '\\frac{1}{2}e^{x^4}+C' },
], { mode: 'integral', toleranceDp: 2 });
