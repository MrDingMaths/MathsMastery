import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel('equatingCoefficientsHard', 'Equating Coefficients (Hard)', [
    // existing
    { problem: '(x+b)^2=x^2+cx+49',       inputs: { vars: ['b', 'c'], multi: true }, answer: { b: ['7', '-7'],   c: ['14', '-14']  } },
    { problem: '(x+2c)(x+c)=x^2+dx+50',   inputs: { vars: ['c', 'd'], multi: true }, answer: { c: ['5', '-5'],   d: ['15', '-15']  } },
    // Pattern A: (x+a)²=x²+bx+k  →  a²=k, a=±√k, b=2a=±2√k
    { problem: '(x+a)^2=x^2+bx+36',       inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['6', '-6'],   b: ['12', '-12']  } },
    { problem: '(x+a)^2=x^2+bx+25',       inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['5', '-5'],   b: ['10', '-10']  } },
    { problem: '(x+a)^2=x^2+bx+64',       inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['8', '-8'],   b: ['16', '-16']  } },
    { problem: '(x+a)^2=x^2+bx+16',       inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['4', '-4'],   b: ['8', '-8']    } },
    { problem: '(x+a)^2=x^2+bx+4',        inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['2', '-2'],   b: ['4', '-4']    } },
    // Pattern B: (x+pa)(x+qa)=x²+bx+k  →  pqa²=k, two values each
    { problem: '(x+a)(x+2a)=x^2+bx+8',    inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['2', '-2'],   b: ['6', '-6']    } },
    { problem: '(x+a)(x+2a)=x^2+bx+18',   inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['3', '-3'],   b: ['9', '-9']    } },
    { problem: '(x+a)(x+2a)=x^2+bx+32',   inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['4', '-4'],   b: ['12', '-12']  } },
    { problem: '(x+2a)(x+3a)=x^2+bx+24',  inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['2', '-2'],   b: ['10', '-10']  } },
    { problem: '(x+2a)(x+3a)=x^2+bx+54',  inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['3', '-3'],   b: ['15', '-15']  } },
    { problem: '(x+a)(x+3a)=x^2+bx+27',   inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['3', '-3'],   b: ['12', '-12']  } },
    { problem: '(x+a)(x+3a)=x^2+bx+75',   inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['5', '-5'],   b: ['20', '-20']  } },
    { problem: '(x+3a)(x+a)=x^2+bx+48',   inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['4', '-4'],   b: ['16', '-16']  } },
    { problem: '(x+2a)(x+5a)=x^2+bx+40',  inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['2', '-2'],   b: ['14', '-14']  } },
    { problem: '(x+3a)(x+2a)=x^2+bx+96',  inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['4', '-4'],   b: ['20', '-20']  } },
    { problem: '(x+a)(x+4a)=x^2+bx+36',   inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['3', '-3'],   b: ['15', '-15']  } },
    { problem: '(x+a)(x+4a)=x^2+bx+64',   inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['4', '-4'],   b: ['20', '-20']  } },
    { problem: '(x+2a)(x+4a)=x^2+bx+72',  inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['3', '-3'],   b: ['18', '-18']  } },
    { problem: '(x+3a)(x+4a)=x^2+bx+48',  inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['2', '-2'],   b: ['14', '-14']  } },
    // Pattern C: (x+a)²+px=x²+bx+k  →  a=±√k, b=2a+p (two distinct b values)
    { problem: '(x+a)^2+3x=x^2+bx+16',    inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['4', '-4'],   b: ['11', '-5']   } },
    { problem: '(x+a)^2-2x=x^2+bx+9',     inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['3', '-3'],   b: ['4', '-8']    } },
    { problem: '(x+a)^2+5x=x^2+bx+25',    inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['5', '-5'],   b: ['15', '-5']   } },
    { problem: '(x+a)^2-4x=x^2+bx+36',    inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['6', '-6'],   b: ['8', '-16']   } },
    { problem: '(x+a)^2+x=x^2+bx+49',     inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['7', '-7'],   b: ['15', '-13']  } },
    // Pattern D: (ax+c)²=kx²+bx+c²  →  a=±√k, b=2ac (paired solutions)
    { problem: '(ax+3)^2=4x^2+bx+9',       inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['2', '-2'],   b: ['12', '-12']  } },
    { problem: '(ax+2)^2=9x^2+bx+4',       inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['3', '-3'],   b: ['12', '-12']  } },
    { problem: '(ax+1)^2=16x^2+bx+1',      inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['4', '-4'],   b: ['8', '-8']    } },
    { problem: '(ax-1)^2=4x^2+bx+1',       inputs: { vars: ['a', 'b'], multi: true }, answer: { a: ['2', '-2'],   b: ['-4', '4']    } },
    // ---- Partial fractions: with fractions (full rational identity) ----
    { problem: '\\frac{11x-5}{(2x+1)(x-3)}=\\frac{A}{2x+1}+\\frac{B}{x-3}', inputs: { vars: ['A', 'B'] }, answer: { A: '3', B: '4' } },
    { problem: '\\frac{17x-8}{(3x-2)(x+1)}=\\frac{A}{3x-2}+\\frac{B}{x+1}', inputs: { vars: ['A', 'B'] }, answer: { A: '2', B: '5' } },
    { problem: '\\frac{6x-1}{(2x+3)(x-1)}=\\frac{A}{2x+3}+\\frac{B}{x-1}',  inputs: { vars: ['A', 'B'] }, answer: { A: '4', B: '1' } },
    { problem: '\\frac{17x-1}{(x+2)(3x-1)}=\\frac{A}{x+2}+\\frac{B}{3x-1}', inputs: { vars: ['A', 'B'] }, answer: { A: '5', B: '2' } },
    { problem: '\\frac{10x+7}{(2x-1)(2x+3)}=\\frac{A}{2x-1}+\\frac{B}{2x+3}', inputs: { vars: ['A', 'B'] }, answer: { A: '3', B: '2' } },
    // ---- Partial fractions: split the numerator (numerator identity) ----
    { problem: '19x+4=A(x-2)+B(3x+1)',  inputs: { vars: ['A', 'B'] }, answer: { A: '1',  B: '6'  } },
    { problem: '18x-5=A(3x-2)+B(2x+1)', inputs: { vars: ['A', 'B'] }, answer: { A: '4',  B: '3'  } },
    { problem: '3x+13=A(2x+5)+B(x-3)',  inputs: { vars: ['A', 'B'] }, answer: { A: '2',  B: '-1' } },
    { problem: '13x-13=A(x+4)+B(3x-1)', inputs: { vars: ['A', 'B'] }, answer: { A: '-2', B: '5'  } },
    { problem: '4x-17=A(x-2)+B(2x+5)',  inputs: { vars: ['A', 'B'] }, answer: { A: '6',  B: '-1' } },
    // ---- Partial fractions: decomposition given (unfactored denominator) ----
    { problem: '\\frac{11x+5}{6x^2+x-2}=\\frac{A}{3x+2}+\\frac{B}{2x-1}',  inputs: { vars: ['A', 'B'] }, answer: { A: '1', B: '3'  } },
    { problem: '\\frac{11x-3}{4x^2+x-3}=\\frac{A}{x+1}+\\frac{B}{4x-3}',   inputs: { vars: ['A', 'B'] }, answer: { A: '2', B: '3'  } },
    { problem: '\\frac{11x+11}{6x^2-7x-3}=\\frac{A}{2x-3}+\\frac{B}{3x+1}', inputs: { vars: ['A', 'B'] }, answer: { A: '5', B: '-2' } },
    { problem: '\\frac{30x+3}{4x^2-7x-2}=\\frac{A}{4x+1}+\\frac{B}{x-2}',  inputs: { vars: ['A', 'B'] }, answer: { A: '2', B: '7'  } },
    { problem: '\\frac{11x+10}{6x^2+5x-6}=\\frac{A}{3x-2}+\\frac{B}{2x+3}', inputs: { vars: ['A', 'B'] }, answer: { A: '4', B: '1'  } },
]);
