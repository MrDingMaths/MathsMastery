/**
 * Integer operations question generator.
 *
 * Mixed mental-arithmetic with directed numbers: add/subtract, multiply/divide,
 * powers with implicit vs explicit negation, and order of operations
 * (including bracketed expressions). Answers are constrained to small
 * integers so each question is doable without a calculator.
 */

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randIntNonZero = (min, max) => {
    let v;
    do { v = randInt(min, max); } while (v === 0);
    return v;
};
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
// LaTeX literal: parenthesise negatives so they read unambiguously after an operator.
const lit = (n) => n < 0 ? `(${n})` : `${n}`;

function addSub(inputPlaceholder) {
    let a, b, op, ans;
    for (let i = 0; i < 20; i++) {
        a = randIntNonZero(-12, 12);
        b = randIntNonZero(-12, 12);
        op = pick(['+', '-']);
        ans = op === '+' ? a + b : a - b;
        if (ans >= -20 && ans <= 20) break;
    }
    return {
        format: `${a} ${op} ${lit(b)} = ${inputPlaceholder}`,
        answer: ans,
    };
}

function mulDiv(inputPlaceholder) {
    if (Math.random() < 0.5) {
        let a, b;
        do {
            a = randIntNonZero(-9, 9);
            b = randIntNonZero(-9, 9);
        } while (a > 0 && b > 0);
        return {
            format: `${lit(a)} \\times ${lit(b)} = ${inputPlaceholder}`,
            answer: a * b,
        };
    }
    let divisor, result;
    do {
        divisor = randIntNonZero(-9, 9);
        result = randIntNonZero(-9, 9);
    } while ((divisor === 1 || divisor === -1) || (divisor > 0 && result > 0));
    const dividend = divisor * result;
    return {
        format: `${lit(dividend)} \\div ${lit(divisor)} = ${inputPlaceholder}`,
        answer: result,
    };
}

function powerImplicit(inputPlaceholder) {
    const base = randInt(2, 5);
    const exp = pick([2, 3]);
    return {
        format: `-${base}^${exp} = ${inputPlaceholder}`,
        answer: -(base ** exp),
    };
}

function powerExplicit(inputPlaceholder) {
    const base = randInt(2, 5);
    const exp = pick([2, 3]);
    return {
        format: `(-${base})^${exp} = ${inputPlaceholder}`,
        answer: (-base) ** exp,
    };
}

function orderOfOps(inputPlaceholder) {
    let a, b, c, op1, mulDivOp, term, ans;
    for (let i = 0; i < 30; i++) {
        a = randIntNonZero(-12, 12);
        op1 = pick(['+', '-']);
        if (Math.random() < 0.5) {
            b = randIntNonZero(-5, 5);
            c = randIntNonZero(-5, 5);
            term = b * c;
            mulDivOp = '\\times';
        } else {
            const divisor = randIntNonZero(-5, 5);
            if (divisor === 1 || divisor === -1) continue;
            const result = randIntNonZero(-5, 5);
            b = result * divisor;
            c = divisor;
            term = result;
            mulDivOp = '\\div';
        }
        ans = op1 === '+' ? a + term : a - term;
        if (ans >= -20 && ans <= 20) break;
    }
    return {
        format: `${a} ${op1} ${lit(b)} ${mulDivOp} ${lit(c)} = ${inputPlaceholder}`,
        answer: ans,
    };
}

function bracketed(inputPlaceholder) {
    let k, m, n, inner, ans;
    for (let i = 0; i < 30; i++) {
        k = randIntNonZero(-5, 5);
        m = randInt(-6, 6);
        n = randIntNonZero(-6, 6);
        inner = m - n;
        if (inner === 0) continue;
        if (Math.abs(inner) > 6) continue;
        ans = k * inner;
        if (ans >= -20 && ans <= 20) break;
    }
    const bracket = `(${m} - ${lit(n)})`;
    if (Math.random() < 0.5) {
        return {
            format: `${lit(k)} \\times ${bracket} = ${inputPlaceholder}`,
            answer: ans,
        };
    }
    return {
        format: `${bracket} \\times ${lit(k)} = ${inputPlaceholder}`,
        answer: ans,
    };
}

const SHAPES = [addSub, mulDiv, powerImplicit, powerExplicit, orderOfOps, bracketed];

export function generateIntegerOperations(inputPlaceholder) {
    return pick(SHAPES)(inputPlaceholder);
}
