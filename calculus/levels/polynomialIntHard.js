import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialIntHard', 'Polynomials — Hard', [
  // Expand surd expressions first (two decisions: expand, then integrate fractional powers)
  { problem: '\\int(2\\sqrt{x}-1)^2\\,dx', answer: '2x^2-\\frac{8}{3}x^{\\frac{3}{2}}+x+C' },
  { problem: '\\int\\sqrt{x}(3\\sqrt{x}-x)\\,dx', answer: '\\frac{3x^2}{2}-\\frac{2}{5}x^{\\frac{5}{2}}+C' },
  // Definite integrals with √x
  { problem: '\\int_0^4\\sqrt{x}\\,dx', answer: '\\frac{16}{3}' },
  { problem: '\\int_1^9 x\\sqrt{x}\\,dx', answer: '\\frac{484}{5}' },
  { problem: '\\int_1^9\\frac{1}{\\sqrt{x}}\\,dx', answer: '4' },
  { problem: '\\int_2^4(2-\\sqrt{x})(2+\\sqrt{x})\\,dx', answer: '2' },
  { problem: '\\int_0^1\\sqrt{x}(\\sqrt{x}-4)\\,dx', answer: '-\\frac{13}{6}' },
  { problem: '\\int_4^9(\\sqrt{x}-1)^2\\,dx', answer: '\\frac{73}{6}' },
], { mode: 'integral' });
