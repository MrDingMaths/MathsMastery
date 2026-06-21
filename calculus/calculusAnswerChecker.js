// calculusAnswerChecker.js
// Checks a student's calculus answer against a model answer by NUMERIC sampling.
//
// Why numeric (not symbolic): a correct derivative/integral can be written in
// many equivalent forms, and an indefinite integral is only defined up to an
// additive constant (+C). Comparing the two expressions at several x-values
// transparently accepts every equivalent form.
//
//   - derivative mode: correct iff student ≈ model at every jointly-valid point.
//   - integral  mode: correct iff (student − model) is CONSTANT across points,
//                      i.e. they differ only by a constant of integration.
//
// Reuses AlgebraEngine.latexToMathJS() (the MathLive-LaTeX → Math.js parser) and
// the bundled Math.js (window.math) for parsing + evaluation. Never throws.

export class CalculusAnswerChecker {
    constructor() {
        this.engine = new AlgebraEngine();   // for latexToMathJS()
        this.math = this.engine.math;        // bundled Math.js (window.math)
        // Spread, non-integer sample points. Mostly away from x=0 so poles do
        // not blow up; negatives are included but get dropped automatically for
        // expressions undefined there (e.g. √x). Several points lie inside the
        // open interval (-1, 1) so domain-restricted answers — e.g. the
        // d/dx(arcsin x) = 1/√(1-x²) family, defined only on (-1, 1) — still get
        // the ≥4 jointly-valid points needed to verify. Order is irrelevant.
        this.samplePoints = [-2.05, -1.42, -0.85, -0.63, -0.37, 0.21, 0.53, 0.78, 1.13, 1.87, 2.71, 3.33, 4.09];
        this.MIN_VALID_POINTS = 4;
        this.MAX_MAGNITUDE = 1e6; // drop near-asymptote blow-ups
    }

    // expected = { answer: <latex>, mode: 'derivative'|'integral', toleranceDp?: number }
    // Returns { correct: boolean, missingC?: boolean }
    check(userLatex, expected) {
        try {
            if (userLatex == null || String(userLatex).trim() === '') return { correct: false };

            const mode = (expected && expected.mode) || 'derivative';
            const toleranceDp = (expected && typeof expected.toleranceDp === 'number') ? expected.toleranceDp : 6;
            const tol = 0.5 * Math.pow(10, -toleranceDp);

            const user = this._parse(userLatex);
            const model = this._parse(expected.answer);
            console.log(`[CalcChecker] mode=${mode} user="${userLatex}" model="${expected.answer}"`);
            if (!user || !model) {
                console.log('[CalcChecker] parse failed → reject');
                return { correct: false };
            }

            // Evaluate both at the sample points, keeping only jointly-valid ones.
            const fu = [], fc = [];
            for (const x of this.samplePoints) {
                const u = this._evalAt(user.node, x);
                const c = this._evalAt(model.node, x);
                if (u === null || c === null) continue;
                if (Math.abs(u) > this.MAX_MAGNITUDE || Math.abs(c) > this.MAX_MAGNITUDE) continue;
                fu.push(u);
                fc.push(c);
            }

            if (fu.length < this.MIN_VALID_POINTS) {
                console.log(`[CalcChecker] only ${fu.length} valid points (<${this.MIN_VALID_POINTS}) → cannot verify`);
                return { correct: false };
            }

            if (mode === 'integral') {
                // A constant model answer (no x) is a DEFINITE integral: the answer
                // is a fixed number, so require an exact numeric match. The lenient
                // differ-by-constant test below would otherwise pass any answer,
                // because a constant evaluates identically at every sample point.
                if (!this._referencesX(model.node)) {
                    // A literal decimal model answer is rounded to the precision it
                    // displays. Honour that even when the level has a stricter
                    // toleranceDp stamped on every question.
                    const decimalTol = this._literalDecimalTolerance(expected.answer);
                    let effectiveTol = decimalTol == null ? tol : Math.max(tol, decimalTol);
                    if (decimalTol == null && !(expected && typeof expected.toleranceDp === 'number')) {
                        const dpMatch = String(expected.answer).match(/\.(\d+)$/);
                        const modelDp = dpMatch ? dpMatch[1].length : 0;
                        effectiveTol = 0.5 * Math.pow(10, -modelDp);
                    }
                    for (let i = 0; i < fu.length; i++) {
                        const allowed = decimalTol == null ? effectiveTol * (1 + Math.abs(fc[i])) : effectiveTol;
                        if (Math.abs(fu[i] - fc[i]) > allowed) {
                            console.log(`[CalcChecker] definite integral: mismatch at point ${i} (${fu[i]} vs ${fc[i]}) → reject`);
                            return { correct: false };
                        }
                    }
                    return { correct: true };
                }

                // Indefinite integral: student − model must be the SAME constant at
                // every point (they may differ only by the constant of integration).
                const d0 = fu[0] - fc[0];
                for (let i = 1; i < fu.length; i++) {
                    const di = fu[i] - fc[i];
                    const allowed = tol * (1 + Math.abs(fu[i]) + Math.abs(fc[i]));
                    if (Math.abs(di - d0) > allowed) {
                        console.log(`[CalcChecker] integral: non-constant difference (${d0} vs ${di}) → reject`);
                        return { correct: false };
                    }
                }
                return { correct: true, missingC: !user.hadC };
            }

            // derivative: must match (within tolerance) at every point.
            for (let i = 0; i < fu.length; i++) {
                const allowed = tol * (1 + Math.abs(fc[i]));
                if (Math.abs(fu[i] - fc[i]) > allowed) {
                    console.log(`[CalcChecker] derivative: mismatch at point ${i} (${fu[i]} vs ${fc[i]}) → reject`);
                    return { correct: false };
                }
            }
            return { correct: true };
        } catch (e) {
            console.log('[CalcChecker] error:', e);
            return { correct: false };
        }
    }

    // Normalise the LaTeX, strip integration noise (dx, +C), record whether a
    // constant-of-integration token was present, then parse to a Math.js node.
    // Returns { node, hadC } or null on failure.
    _parse(latex) {
        try {
            let s = String(latex);
            // Unicode minus → ASCII so Math.js can parse it.
            s = s.replace(/−/g, '-');

            // Did the student include a constant of integration (+C / +c / +k)?
            const hadC = /[+\-]\s*\\?\s*[Cck](?![a-zA-Z{])/.test(s);

            // Calculus-specific LaTeX normalisation so equivalent function forms
            // parse + evaluate under Math.js. Done here (not in the shared engine)
            // to keep algebra/equations answer semantics untouched.
            s = this._normalizeCalcLatex(s);

            // Strip the differential (\,dx, dx) and the constant term so the rest
            // is a pure function of x that Math.js can evaluate numerically.
            s = s.replace(/\\,/g, '');
            s = s.replace(/\bd\s*x\b/g, '');
            s = s.replace(/[+\-]\s*\\?\s*[Cck](?![a-zA-Z{])/g, '');
            s = s.trim();
            if (s === '') return null;

            const mathExpr = this.engine.latexToMathJS(s);
            const node = this.math.parse(mathExpr);
            if (!node) return null;
            return { node, hadC };
        } catch (e) {
            return null;
        }
    }

    // Rewrite calculus function notations into a Math.js-friendly LaTeX form.
    // Order matters; each step is documented inline.
    _normalizeCalcLatex(s) {
        // 1. Drop \left / \right wrappers so arguments are bare parens — needed by
        //    the juxtaposition and function-power regexes below. (latexToMathJS
        //    also strips these later; doing it here is harmless.)
        s = s.replace(/\\left|\\right|\\mleft|\\mright/g, '');

        // MathLive can leave empty placeholder scripts while the student is
        // editing, e.g. x^{} or x+_{}5. They carry no mathematical value.
        s = s.replace(/\s*[\^_]\s*\{\s*\}/g, '');

        // 1b. Absolute-value bars → abs(). Lets the parser read the common ln|…|
        //     antiderivative form (and any student who types it); abs keeps the
        //     argument real for negative values so ln|f| verifies across the whole
        //     sample range. Assumes non-nested bars (true for our levels).
        s = s.replace(/\|([^|]*)\|/g, '(abs($1))');

        // Convert Euler exponentials before the shared parser sees nested
        // exponent braces, e.g. e^{e^{x}} -> \exp(\exp(x)).
        s = this._rewriteEulerExponentials(s);

        // 1c. Wrap a BARE argument after a trig/ln function (with optional power)
        //     in parentheses: \sin x → \sin(x), \cos 2x → \cos(2x), \sec^2 x →
        //     \sec^2(x), \ln 5 → \ln(5). Parenthesised/\frac arguments are left
        //     untouched. This is what lets standard hand-written notation parse.
        s = s.replace(
            /(\\(?:sin|cos|tan|sec|csc|cot|sinh|cosh|tanh|ln|log))(\s*\^\s*(?:\{[^{}]*\}|-?\d+))?\s*(\d+x|\d+\.\d+|\d+|x)\b/g,
            (_m, fn, pow, arg) => `${fn}${pow || ''}(${arg})`
        );

        const FN = 'sin|cos|tan|sec|csc|cot|sinh|cosh|tanh|arcsin|arccos|arctan|ln|log|exp|sqrt';

        // 2. Insert explicit '*' between a value/closing-bracket and a following
        //    function command, so e.g. x\cos(x) → x*\cos(x) instead of merging
        //    into one letter run ("xcos") that the engine would split letter-wise.
        s = s.replace(new RegExp(`([0-9A-Za-z\\)\\}])(\\\\(?:${FN}))`, 'g'), '$1*$2');

        // 3. Inverse trig → Math.js names (asin/acos/atan). Covers both
        //    \arcsin and the \sin^{-1} / \sin^-1 / \sin ^ {-1} notations.
        s = s.replace(/\\arcsin/g, 'asin')
             .replace(/\\arccos/g, 'acos')
             .replace(/\\arctan/g, 'atan');
        s = s.replace(/\\(sin|cos|tan)\s*\^\s*\{?\s*-\s*1\s*\}?/g, (_m, f) => 'a' + f);

        // 4. \ln → log  (Math.js `log` IS the natural logarithm; it has no `ln`).
        //    Note: Math.js `\log` is also natural log; calculus levels here do not
        //    use base-10 \log, so no base handling is required.
        s = s.replace(/\\ln\b/g, 'log');

        // 5. Function powers: move the exponent past the argument so the name sits
        //    immediately before '(' and is protected from letter-splitting, e.g.
        //    \sec^2(x) → \sec(x)^2, \cos^{2}(x) → \cos(x)^{2}. (Inverse \sin^{-1}
        //    is already gone by step 3, so a leftover ^{-1} here only affects
        //    out-of-scope notations like \sec^{-1}.)
        s = s.replace(
            /(\\?(?:sin|cos|tan|sec|csc|cot|sinh|cosh|tanh|asin|acos|atan|log|exp))\s*\^\s*(\{[^{}]*\}|-?\d+)\s*(\([^()]*\))/g,
            (_m, fn, pow, arg) => `${fn}${arg}^${pow}`
        );

        return s;
    }

    _rewriteEulerExponentials(s) {
        let out = '';
        let i = 0;
        while (i < s.length) {
            if (s[i] === 'e' && s[i + 1] === '^') {
                const exp = this._consumeExponentAtom(s, i + 2);
                if (exp.raw) {
                    out += `\\exp(${this._rewriteEulerExponentials(exp.inner)})`;
                    i = exp.nextPos;
                    continue;
                }
            }
            out += s[i];
            i++;
        }
        return out;
    }

    _consumeExponentAtom(s, pos) {
        while (pos < s.length && /\s/.test(s[pos])) pos++;
        if (pos >= s.length) return { raw: '', inner: '', nextPos: pos };

        if (s[pos] === '{') return this._consumeBalanced(s, pos, '{', '}');
        if (s[pos] === '(') return this._consumeBalanced(s, pos, '(', ')');

        let sign = '';
        if (s[pos] === '+' || s[pos] === '-') {
            sign = s[pos];
            pos++;
            while (pos < s.length && /\s/.test(s[pos])) pos++;
        }

        if (s[pos] === '{') {
            const group = this._consumeBalanced(s, pos, '{', '}');
            return {
                raw: sign + group.raw,
                inner: sign + group.inner,
                nextPos: group.nextPos,
            };
        }

        if (s[pos] === '\\') {
            let end = pos + 1;
            while (end < s.length && /[a-zA-Z]/.test(s[end])) end++;
            if (s[end] === '{' || s[end] === '(') {
                const group = this._consumeBalanced(s, end, s[end], s[end] === '{' ? '}' : ')');
                return {
                    raw: sign + s.slice(pos, group.nextPos),
                    inner: sign + s.slice(pos, group.nextPos),
                    nextPos: group.nextPos,
                };
            }
            return {
                raw: sign + s.slice(pos, end),
                inner: sign + s.slice(pos, end),
                nextPos: end,
            };
        }

        const run = s.slice(pos).match(/^\d+(?:\.\d+)?|^[a-zA-Z]/);
        if (!run) return { raw: sign, inner: sign, nextPos: pos };
        return {
            raw: sign + run[0],
            inner: sign + run[0],
            nextPos: pos + run[0].length,
        };
    }

    _consumeBalanced(s, pos, open, close) {
        let depth = 1;
        let i = pos + 1;
        while (i < s.length) {
            const ch = s[i];
            if (ch === '\\') {
                i += 2;
                continue;
            }
            if (ch === open) depth++;
            if (ch === close) {
                depth--;
                if (depth === 0) {
                    return {
                        raw: s.slice(pos, i + 1),
                        inner: s.slice(pos + 1, i),
                        nextPos: i + 1,
                    };
                }
            }
            i++;
        }
        return {
            raw: s.slice(pos),
            inner: s.slice(pos + 1),
            nextPos: s.length,
        };
    }

    // True if the parsed expression contains the variable x (vs. a pure constant
    // like ln 5, π/4, e−1 — i.e. a definite-integral answer). Math constants
    // (e, pi) are not SymbolNode 'x', so they correctly read as constant.
    _referencesX(node) {
        try {
            return node.filter(n => n.isSymbolNode && n.name === 'x').length > 0;
        } catch (e) {
            return true; // on any doubt, treat as a function (safer / stricter path)
        }
    }

    _literalDecimalTolerance(answer) {
        const match = String(answer).trim().match(/^[+-]?\d+\.(\d+)$/);
        return match ? 0.5 * Math.pow(10, -match[1].length) : null;
    }

    _evalAt(node, x) {
        try {
            const v = node.evaluate({ x });
            if (typeof v !== 'number' || !isFinite(v)) return null;
            return v;
        } catch (e) {
            return null;
        }
    }
}

// Expose as global for parity with AlgebraEngine / EquationsAnswerChecker.
if (typeof window !== 'undefined') window.CalculusAnswerChecker = CalculusAnswerChecker;
