import { BaseLevel } from './BaseLevel.js';

// Easy (1–2 steps): ∫ f'(x)·trig(f(x)) dx where f' is already present (up to a
// constant) and f is a simple monomial expression. Indefinite only.
export default new BaseLevel('trigRCREasy', 'Trig Reverse Chain Rule — Easy', [
  // Inner x²  (f' = 2x)
  { problem: '\\int 2x\\cos(x^2)\\,dx', answer: '\\sin(x^2)+C' },
  { problem: '\\int x\\cos(x^2)\\,dx', answer: '\\frac{1}{2}\\sin(x^2)+C' },
  { problem: '\\int 2x\\sin(x^2)\\,dx', answer: '-\\cos(x^2)+C' },
  { problem: '\\int x\\sin(x^2)\\,dx', answer: '-\\frac{1}{2}\\cos(x^2)+C' },
  { problem: '\\int 2x\\cos(x^2-1)\\,dx', answer: '\\sin(x^2-1)+C' },
  { problem: '\\int x\\cos(x^2-2)\\,dx', answer: '\\frac{1}{2}\\sin(x^2-2)+C' },
  { problem: '\\int x\\cos(x^2+1)\\,dx', answer: '\\frac{1}{2}\\sin(x^2+1)+C' },
  { problem: '\\int 2x\\sin(x^2+3)\\,dx', answer: '-\\cos(x^2+3)+C' },
  { problem: '\\int x\\sin(1-x^2)\\,dx', answer: '\\frac{1}{2}\\cos(1-x^2)+C' },
  { problem: '\\int 2x\\sec^2(x^2)\\,dx', answer: '\\tan(x^2)+C' },
  { problem: '\\int x\\sec^2(x^2)\\,dx', answer: '\\frac{1}{2}\\tan(x^2)+C' },
  // Inner kx²  (f' = 2kx)
  { problem: '\\int x\\cos(3x^2)\\,dx', answer: '\\frac{1}{6}\\sin(3x^2)+C' },
  { problem: '\\int x\\sin(2x^2)\\,dx', answer: '-\\frac{1}{4}\\cos(2x^2)+C' },
  // Inner x³  (f' = 3x²)
  { problem: '\\int 3x^2\\cos(x^3)\\,dx', answer: '\\sin(x^3)+C' },
  { problem: '\\int 3x^2\\sin(x^3)\\,dx', answer: '-\\cos(x^3)+C' },
  { problem: '\\int x^2\\cos(x^3)\\,dx', answer: '\\frac{1}{3}\\sin(x^3)+C' },
  { problem: '\\int x^2\\sin(x^3)\\,dx', answer: '-\\frac{1}{3}\\cos(x^3)+C' },
  { problem: '\\int 3x^2\\cos(x^3+2)\\,dx', answer: '\\sin(x^3+2)+C' },
  { problem: '\\int 3x^2\\sin(x^3-1)\\,dx', answer: '-\\cos(x^3-1)+C' },
  { problem: '\\int x^2\\sin(x^3+1)\\,dx', answer: '-\\frac{1}{3}\\cos(x^3+1)+C' },
  { problem: '\\int x^2\\sec^2(x^3)\\,dx', answer: '\\frac{1}{3}\\tan(x^3)+C' },
  { problem: '\\int 3x^2\\sec^2(x^3)\\,dx', answer: '\\tan(x^3)+C' },
  { problem: '\\int x^2\\sec^2(x^3-1)\\,dx', answer: '\\frac{1}{3}\\tan(x^3-1)+C' },
  { problem: '\\int 6x^2\\cos(2x^3)\\,dx', answer: '\\sin(2x^3)+C' },
  // Inner x⁴  (f' = 4x³)
  { problem: '\\int 4x^3\\cos(x^4)\\,dx', answer: '\\sin(x^4)+C' },
  { problem: '\\int x^3\\cos(x^4)\\,dx', answer: '\\frac{1}{4}\\sin(x^4)+C' },
  { problem: '\\int 4x^3\\sin(x^4)\\,dx', answer: '-\\cos(x^4)+C' },
  { problem: '\\int x^3\\sin(x^4-1)\\,dx', answer: '-\\frac{1}{4}\\cos(x^4-1)+C' },
  { problem: '\\int x^3\\sin(x^4+2)\\,dx', answer: '-\\frac{1}{4}\\cos(x^4+2)+C' },
  { problem: '\\int x^3\\sec^2(x^4-1)\\,dx', answer: '\\frac{1}{4}\\tan(x^4-1)+C' },
], { mode: 'integral', toleranceDp: 2 });
