import { BaseLevel } from './BaseLevel.js';

// Easy (1–2 steps): linear inner (ax+b)^n — reverse power rule with the
// 1/(a(n+1)) factor, including leading constant multiples. Indefinite only.
export default new BaseLevel('polynomialRCREasy', 'Polynomial Reverse Chain Rule — Easy', [
  // Inner coefficient a = 1
  { problem: '\\int(x+1)^5\\,dx', answer: '\\frac{(x+1)^6}{6}+C' },
  { problem: '\\int(x+2)^3\\,dx', answer: '\\frac{(x+2)^4}{4}+C' },
  { problem: '\\int(x+3)^4\\,dx', answer: '\\frac{(x+3)^5}{5}+C' },
  { problem: '\\int(x-4)^6\\,dx', answer: '\\frac{(x-4)^7}{7}+C' },
  { problem: '\\int(x-1)^7\\,dx', answer: '\\frac{(x-1)^8}{8}+C' },
  { problem: '\\int(x+4)^2\\,dx', answer: '\\frac{(x+4)^3}{3}+C' },
  // Inner coefficient a > 1, positive
  { problem: '\\int(2x+7)^4\\,dx', answer: '\\frac{(2x+7)^5}{10}+C' },
  { problem: '\\int(3x+1)^4\\,dx', answer: '\\frac{(3x+1)^5}{15}+C' },
  { problem: '\\int(2x+5)^3\\,dx', answer: '\\frac{(2x+5)^4}{8}+C' },
  { problem: '\\int(2x-3)^5\\,dx', answer: '\\frac{(2x-3)^6}{12}+C' },
  { problem: '\\int(4x-3)^7\\,dx', answer: '\\frac{(4x-3)^8}{32}+C' },
  { problem: '\\int(3x+2)^5\\,dx', answer: '\\frac{(3x+2)^6}{18}+C' },
  { problem: '\\int(5x-4)^3\\,dx', answer: '\\frac{(5x-4)^4}{20}+C' },
  { problem: '\\int(2x+9)^3\\,dx', answer: '\\frac{(2x+9)^4}{8}+C' },
  { problem: '\\int(2x-7)^4\\,dx', answer: '\\frac{(2x-7)^5}{10}+C' },
  // Negative inner coefficient (sign flip)
  { problem: '\\int(4-x)^4\\,dx', answer: '-\\frac{(4-x)^5}{5}+C' },
  { problem: '\\int(3-x)^2\\,dx', answer: '-\\frac{(3-x)^3}{3}+C' },
  { problem: '\\int(2-x)^5\\,dx', answer: '-\\frac{(2-x)^6}{6}+C' },
  { problem: '\\int(5-2x)^6\\,dx', answer: '-\\frac{(5-2x)^7}{14}+C' },
  { problem: '\\int(1-5x)^7\\,dx', answer: '-\\frac{(1-5x)^8}{40}+C' },
  { problem: '\\int(4-3x)^6\\,dx', answer: '-\\frac{(4-3x)^7}{21}+C' },
  { problem: '\\int(7-2x)^3\\,dx', answer: '-\\frac{(7-2x)^4}{8}+C' },
  { problem: '\\int(6-5x)^4\\,dx', answer: '-\\frac{(6-5x)^5}{25}+C' },
  { problem: '\\int(1-2x)^4\\,dx', answer: '-\\frac{(1-2x)^5}{10}+C' },
  // Leading constant multiples
  { problem: '\\int 3(2x-1)^{10}\\,dx', answer: '\\frac{3(2x-1)^{11}}{22}+C' },
  { problem: '\\int 4(5x-4)^6\\,dx', answer: '\\frac{4(5x-4)^7}{35}+C' },
  { problem: '\\int 7(3-2x)^3\\,dx', answer: '-\\frac{7(3-2x)^4}{8}+C' },
  { problem: '\\int 2(x+5)^4\\,dx', answer: '\\frac{2(x+5)^5}{5}+C' },
  { problem: '\\int 5(2x+1)^3\\,dx', answer: '\\frac{5(2x+1)^4}{8}+C' },
  { problem: '\\int 6(1-x)^5\\,dx', answer: '-(1-x)^6+C' },
  { problem: '\\int 10(2x-3)^4\\,dx', answer: '(2x-3)^5+C' },
  { problem: '\\int 8(4x+1)^3\\,dx', answer: '\\frac{(4x+1)^4}{2}+C' },
  { problem: '\\int(-1)(3x+2)^3\\,dx', answer: '-\\frac{(3x+2)^4}{12}+C' },
], { mode: 'integral', toleranceDp: 2 });
