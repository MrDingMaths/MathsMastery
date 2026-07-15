import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialIntHard', 'Polynomials — Hard', [
  // Indefinite surd expressions (expand then integrate fractional power)
  { problem: '\\int(2\\sqrt{x}-1)^2\\,dx', answer: '2x^2-\\frac{8}{3}x^{\\frac{3}{2}}+x+C' },
  { problem: '\\int\\sqrt{x}(3\\sqrt{x}-x)\\,dx', answer: '\\frac{3x^2}{2}-\\frac{2}{5}x^{\\frac{5}{2}}+C' },
  { problem: '\\int(\\sqrt{x}+1)^2\\,dx', answer: '\\frac{x^2}{2}+\\frac{4}{3}x^{\\frac{3}{2}}+x+C' },
  { problem: '\\int(3-\\sqrt{x})^2\\,dx', answer: '9x-4x^{\\frac{3}{2}}+\\frac{x^2}{2}+C' },
  { problem: '\\int(x+\\sqrt{x})(x-\\sqrt{x})\\,dx', answer: '\\frac{x^3}{3}-\\frac{x^2}{2}+C' },
  { problem: '\\int\\frac{x+1}{\\sqrt{x}}\\,dx', answer: '\\frac{2}{3}x^{\\frac{3}{2}}+2x^{\\frac{1}{2}}+C' },
  { problem: '\\int\\frac{x^2-1}{\\sqrt{x}}\\,dx', answer: '\\frac{2}{5}x^{\\frac{5}{2}}-2x^{\\frac{1}{2}}+C' },
  { problem: '\\int\\sqrt{x}(x^2+x)\\,dx', answer: '\\frac{2}{7}x^{\\frac{7}{2}}+\\frac{2}{5}x^{\\frac{5}{2}}+C' },
  { problem: '\\int\\frac{(x-1)^2}{\\sqrt{x}}\\,dx', answer: '\\frac{2}{5}x^{\\frac{5}{2}}-\\frac{4}{3}x^{\\frac{3}{2}}+2x^{\\frac{1}{2}}+C' },
  // Definite integrals with negative exponents
  { problem: '\\int_1^5\\frac{1}{x^2}\\,dx', answer: '\\frac{4}{5}' },
  { problem: '\\int_1^2\\frac{3}{x^2}\\,dx', answer: '\\frac{3}{2}' },
  { problem: '\\int_2^4\\frac{2}{x^3}\\,dx', answer: '\\frac{3}{16}' },
  { problem: '\\int_1^3\\left(x^2+\\frac{1}{x^2}\\right)\\,dx', answer: '\\frac{28}{3}' },
  // Definite integrals requiring bracket expansion
  { problem: '\\int_1^2(x-1)^2\\,dx', answer: '\\frac{1}{3}' },
  { problem: '\\int_1^3 x(x-2)\\,dx', answer: '\\frac{2}{3}' },
  { problem: '\\int_0^2 x^2(x+1)\\,dx', answer: '\\frac{20}{3}' },
  { problem: '\\int_{-1}^1(x+1)^2\\,dx', answer: '\\frac{8}{3}' },
  { problem: '\\int_2^5(x-2)(x-3)\\,dx', answer: '\\frac{9}{2}' },
  { problem: '\\int_0^2(3x^2-4x+1)\\,dx', answer: '2' },
  { problem: '\\int_1^2\\frac{x^2-1}{x^2}\\,dx', answer: '\\frac{1}{2}' },
  // Definite integrals with fractional/surd powers
  { problem: '\\int_0^4\\sqrt{x}\\,dx', answer: '\\frac{16}{3}' },
  { problem: '\\int_1^9 x\\sqrt{x}\\,dx', answer: '\\frac{484}{5}' },
  { problem: '\\int_1^9\\frac{1}{\\sqrt{x}}\\,dx', answer: '4' },
  { problem: '\\int_2^4(2-\\sqrt{x})(2+\\sqrt{x})\\,dx', answer: '2' },
  { problem: '\\int_0^1\\sqrt{x}(\\sqrt{x}-4)\\,dx', answer: '-\\frac{13}{6}' },
  { problem: '\\int_4^9(\\sqrt{x}-1)^2\\,dx', answer: '\\frac{73}{6}' },
  { problem: '\\int_0^8 x^{\\frac{1}{3}}\\,dx', answer: '12' },
  { problem: '\\int_1^4(1+\\sqrt{x})^2\\,dx', answer: '\\frac{119}{6}' },
  { problem: '\\int_1^4\\frac{x-\\sqrt{x}}{\\sqrt{x}}\\,dx', answer: '\\frac{5}{3}' },
  { problem: '\\int_1^8\\left(x+x^{\\frac{1}{3}}\\right)\\,dx', answer: '\\frac{171}{4}' },
], { mode: 'integral' });
