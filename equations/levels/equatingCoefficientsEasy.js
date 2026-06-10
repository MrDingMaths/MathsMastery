import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel('equatingCoefficientsEasy', 'Equating Coefficients (Easy)', [
    // existing
    { problem: '(x+4)(x-6)+ax+b=x^2+8x-25',      inputs: { vars: ['a', 'b'] }, answer: { a: '10',  b: '-1'  } },
    { problem: '(2x-5)(2x-7)+ax^2+b=3x^2-24x+12', inputs: { vars: ['a', 'b'] }, answer: { a: '-1',  b: '-23' } },
    // Pattern A: (x+p)(x+q)+ax+b=known  —  a from x-coeff, b from const, independently
    { problem: '(x+3)(x-5)+ax+b=x^2+7x-6',        inputs: { vars: ['a', 'b'] }, answer: { a: '9',   b: '9'   } },
    { problem: '(x-1)(x+8)+ax+b=x^2+3x+14',       inputs: { vars: ['a', 'b'] }, answer: { a: '-4',  b: '22'  } },
    { problem: '(x+2)(x-3)+ax+b=x^2-4x+5',        inputs: { vars: ['a', 'b'] }, answer: { a: '-3',  b: '11'  } },
    { problem: '(x+5)(x+1)+ax+b=x^2+9x-2',        inputs: { vars: ['a', 'b'] }, answer: { a: '3',   b: '-7'  } },
    { problem: '(x-4)(x-2)+ax+b=x^2-2x+1',        inputs: { vars: ['a', 'b'] }, answer: { a: '4',   b: '-7'  } },
    { problem: '(x+6)(x-2)+ax+b=x^2+x+3',         inputs: { vars: ['a', 'b'] }, answer: { a: '-3',  b: '15'  } },
    { problem: '(x-7)(x+3)+ax+b=x^2+2x-10',       inputs: { vars: ['a', 'b'] }, answer: { a: '6',   b: '11'  } },
    { problem: '(x+4)(x+5)+ax+b=x^2+6x+14',       inputs: { vars: ['a', 'b'] }, answer: { a: '-3',  b: '-6'  } },
    { problem: '(x-3)(x-7)+ax+b=x^2-8x+4',        inputs: { vars: ['a', 'b'] }, answer: { a: '2',   b: '-17' } },
    { problem: '(x+2)(x+6)+ax+b=x^2+5x-3',        inputs: { vars: ['a', 'b'] }, answer: { a: '-3',  b: '-15' } },
    { problem: '(x+1)(x-9)+ax+b=x^2-3x-5',        inputs: { vars: ['a', 'b'] }, answer: { a: '5',   b: '4'   } },
    { problem: '(x-3)(x+6)+ax+b=x^2+4x+2',        inputs: { vars: ['a', 'b'] }, answer: { a: '1',   b: '20'  } },
    { problem: '(x-5)(x+4)+ax+b=x^2-5x-8',        inputs: { vars: ['a', 'b'] }, answer: { a: '-4',  b: '12'  } },
    // Pattern B: (mx+p)(nx+q)+ax^2+b=known  —  a from x²-coeff, b from const, independently
    { problem: '(2x+1)(x-3)+ax^2+b=3x^2-5x-7',    inputs: { vars: ['a', 'b'] }, answer: { a: '1',   b: '-4'  } },
    { problem: '(3x-2)(x+4)+ax^2+b=2x^2+10x+5',   inputs: { vars: ['a', 'b'] }, answer: { a: '-1',  b: '13'  } },
    { problem: '(2x+3)(2x-1)+ax^2+b=5x^2+4x-7',   inputs: { vars: ['a', 'b'] }, answer: { a: '1',   b: '-4'  } },
    { problem: '(3x+1)(x-2)+ax^2+b=x^2-5x+3',     inputs: { vars: ['a', 'b'] }, answer: { a: '-2',  b: '5'   } },
    { problem: '(x+4)(2x-3)+ax^2+b=4x^2+5x-8',    inputs: { vars: ['a', 'b'] }, answer: { a: '2',   b: '4'   } },
    { problem: '(2x-5)(x+3)+ax^2+b=4x^2+x-4',     inputs: { vars: ['a', 'b'] }, answer: { a: '2',   b: '11'  } },
    { problem: '(3x+2)(x+1)+ax^2+b=5x^2+5x+1',    inputs: { vars: ['a', 'b'] }, answer: { a: '2',   b: '-1'  } },
    { problem: '(2x-1)(2x+5)+ax^2+b=6x^2+8x-4',   inputs: { vars: ['a', 'b'] }, answer: { a: '2',   b: '1'   } },
    { problem: '(x+3)(3x-4)+ax^2+b=5x^2+5x-2',    inputs: { vars: ['a', 'b'] }, answer: { a: '2',   b: '10'  } },
    { problem: '(4x-3)(x+2)+ax^2+b=2x^2+5x-4',    inputs: { vars: ['a', 'b'] }, answer: { a: '-2',  b: '2'   } },
    { problem: '(2x+3)(3x-1)+ax^2+b=4x^2+7x-4',   inputs: { vars: ['a', 'b'] }, answer: { a: '-2',  b: '-1'  } },
    // Pattern C: (x+p)²+ax+b=known or (x+p)²+ax²+b=known  —  still independent
    { problem: '(x+3)^2+ax+b=x^2+5x+1',           inputs: { vars: ['a', 'b'] }, answer: { a: '-1',  b: '-8'  } },
    { problem: '(x-4)^2+ax+b=x^2-2x+3',           inputs: { vars: ['a', 'b'] }, answer: { a: '6',   b: '-13' } },
    { problem: '(2x+1)^2+ax+b=4x^2+9x-4',         inputs: { vars: ['a', 'b'] }, answer: { a: '5',   b: '-5'  } },
    { problem: '(2x-3)^2+ax+b=4x^2-8x+1',         inputs: { vars: ['a', 'b'] }, answer: { a: '4',   b: '-8'  } },
    { problem: '(3x+1)^2+ax^2+b=5x^2+6x+3',       inputs: { vars: ['a', 'b'] }, answer: { a: '-4',  b: '2'   } },
    { problem: '(3x-2)^2+ax^2+b=7x^2-12x+5',      inputs: { vars: ['a', 'b'] }, answer: { a: '-2',  b: '1'   } },
]);
