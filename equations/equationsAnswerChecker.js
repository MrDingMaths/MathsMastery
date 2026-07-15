// equationsAnswerChecker.js
// Compares a student's answer (object keyed by variable) against the expected
// answer descriptor produced by a level. Reuses AlgebraEngine for scalar
// expression equivalence so 5/2 ≡ 2.5 ≡ √2 ≡ 2^{1/2} etc.

// --- Inequality parsing helpers ---

// Normalise LaTeX operator tokens to plain strings: '>', '<', '>=', '<='
function _normaliseOp(raw) {
    const s = raw.trim();
    if (s === '\\geq' || s === '\\ge' || s === '≥' || s === '>=') return '>=';
    if (s === '\\leq' || s === '\\le' || s === '≤' || s === '<=') return '<=';
    if (s === '>') return '>';
    if (s === '<') return '<';
    return null;
}

// Regex to match an inequality operator (order matters: two-char variants first)
const OP_RE = /\\geq|\\leq|\\ge|\\le|>=|<=|[><]/;

// Parse a linear inequality LaTeX string like "x>2", "x \geq -3", "x\\leq\frac{1}{2}"
// Returns { op: '>'|'<'|'>='|'<=', rhs: latexString } or null on failure.
function _parseLinearIneq(latex) {
    const s = latex.replace(/\s+/g, '');
    const m = s.match(new RegExp('^x(' + OP_RE.source + ')(.+)$'));
    if (!m) return null;
    const op = _normaliseOp(m[1]);
    if (!op) return null;
    return { op, rhs: m[2] };
}

// Parse a bounded compound inequality like "2<x<5", "-3\leq x<7"
// Returns { lo, hi, loStrict, hiStrict } or null on failure.
function _parseBoundedIneq(latex) {
    const s = latex.replace(/\s+/g, '');
    // Match: <lo><op1>x<op2><hi>
    const m = s.match(new RegExp('^(.+?)(' + OP_RE.source + ')x(' + OP_RE.source + ')(.+)$'));
    if (!m) return null;
    const loOp = _normaliseOp(m[2]);
    const hiOp = _normaliseOp(m[3]);
    if (!loOp || !hiOp) return null;
    // lo<x< means lo is lower bound; direction: lo </<= x </<= hi
    return {
        lo: m[1],
        hi: m[4],
        loStrict: loOp === '<',
        hiStrict: hiOp === '<',
    };
}

export class EquationsAnswerChecker {
    constructor() {
        this.engine = new AlgebraEngine();
    }

    // userAnswer:   { x: latex }  OR  { x: latex, y: latex }
    // expected:     { x: scalar } OR  { x: [scalar, ...] } OR { x: scalar, y: scalar }
    //               OR { x: { ineq: '>'|'<'|'>='|'<=', rhs } }
    //               OR { x: { ineq: 'union', parts: [{ineq, rhs}, ...] } }
    //               OR { x: { ineq: 'between', lo, hi, loStrict, hiStrict } }
    check(userAnswer, expected) {
        const toleranceDp = (typeof expected.toleranceDp === 'number') ? expected.toleranceDp : null;
        const tolerance = (toleranceDp !== null) ? (0.5 * Math.pow(10, -toleranceDp)) : null;

        const expectedKeys = Object.keys(expected).filter(k => k !== 'toleranceDp');

        // Paired multi-solution case (simultaneous equations): two or more
        // variables each given as positional arrays, e.g. { x: ['5','10'], y: ['10','5'] }.
        // These must be validated together so the i-th x stays paired with the i-th y,
        // rather than treating each variable as an independent unordered set.
        const arrayKeys = expectedKeys.filter(k => Array.isArray(expected[k]));
        if (arrayKeys.length >= 2) {
            if (!this._pairedMultiCheck(userAnswer, expected, arrayKeys, tolerance)) return false;
        }

        for (const key of expectedKeys) {
            if (arrayKeys.length >= 2 && arrayKeys.includes(key)) continue; // handled above
            const userLatex = userAnswer?.[key];
            if (userLatex == null || String(userLatex).trim() === '') return false;
            const exp = expected[key];
            if (exp && typeof exp === 'object' && !Array.isArray(exp) && exp.ineq) {
                if (!this._inequalityCheck(userLatex, exp, tolerance)) return false;
            } else if (Array.isArray(exp)) {
                if (!this._multiRootCheck(userLatex, exp, tolerance)) return false;
            } else {
                if (!this._scalarEqual(userLatex, exp, tolerance)) return false;
            }
        }
        return true;
    }

    // Validates two-or-more paired solution variables together. Each variable's
    // expected value is a positional array; index i across all keys forms one
    // solution. Solutions may be entered in any order, but within a solution the
    // variables must correspond (e.g. (x=5, y=10) and (x=10, y=5), not (x=5, y=5)).
    _pairedMultiCheck(userAnswer, expected, arrayKeys, tolerance = null) {
        const N = expected[arrayKeys[0]].length;

        // Every expected array must share the same length.
        if (arrayKeys.some(k => expected[k].length !== N)) return false;

        // Expand each user variable into positional pieces; all must yield N values.
        const userPieces = {};
        for (const key of arrayKeys) {
            const userLatex = userAnswer?.[key];
            if (userLatex == null || String(userLatex).trim() === '') return false;
            const pieces = this._expandUserLatex(userLatex);
            if (pieces.length !== N) return false;
            userPieces[key] = pieces;
        }

        // Greedy multiset match of user pairs against expected pairs. A user pair
        // matches only when every variable compares equal.
        const remaining = [];
        for (let i = 0; i < N; i++) remaining.push(i);
        for (let u = 0; u < N; u++) {
            const idx = remaining.findIndex(e =>
                arrayKeys.every(k => this._scalarEqual(userPieces[k][u], expected[k][e], tolerance))
            );
            if (idx === -1) return false;
            remaining.splice(idx, 1);
        }
        return remaining.length === 0;
    }

    // --- Inequality checking ---

    _inequalityCheck(userLatex, expected, tolerance = null) {
        try {
            if (expected.ineq === 'union') return this._unionIneqCheck(userLatex, expected, tolerance);
            if (expected.ineq === 'between') return this._betweenIneqCheck(userLatex, expected, tolerance);
            return this._linearIneqCheck(userLatex, expected, tolerance);
        } catch (e) {
            return false;
        }
    }

    _linearIneqCheck(userLatex, expected, tolerance = null) {
        const parsed = _parseLinearIneq(userLatex);
        if (!parsed) return false;
        if (parsed.op !== expected.ineq) return false;
        return this._scalarEqual(parsed.rhs, expected.rhs, tolerance);
    }

    _unionIneqCheck(userLatex, expected, tolerance = null) {
        const pieces = this._splitTopLevelCommas(userLatex)
            .map(s => s.trim()).filter(Boolean);
        if (pieces.length !== expected.parts.length) return false;
        const parsed = pieces.map(p => _parseLinearIneq(p));
        if (parsed.some(p => p === null)) return false;

        // Unordered match against expected.parts
        const remaining = [...expected.parts];
        for (const userPart of parsed) {
            const idx = remaining.findIndex(
                ep => userPart.op === ep.ineq && this._scalarEqual(userPart.rhs, ep.rhs, tolerance)
            );
            if (idx === -1) return false;
            remaining.splice(idx, 1);
        }
        return remaining.length === 0;
    }

    _betweenIneqCheck(userLatex, expected, tolerance = null) {
        const parsed = _parseBoundedIneq(userLatex);
        if (!parsed) return false;
        if (parsed.loStrict !== expected.loStrict) return false;
        if (parsed.hiStrict !== expected.hiStrict) return false;
        return this._scalarEqual(parsed.lo, expected.lo, tolerance) &&
               this._scalarEqual(parsed.hi, expected.hi, tolerance);
    }

    // --- Scalar / multi-root checking ---

    _scalarEqual(userLatex, expectedLatex, tolerance = null) {
        try {
            const symbolic = this.engine.compareExpressions(userLatex, expectedLatex);
            if (symbolic) return true;
            if (tolerance === null) {
                return false;
            }
            const userVal = this.engine.evaluateNumeric(userLatex);
            const expectedVal = this.engine.evaluateNumeric(expectedLatex);
            if (userVal === null || expectedVal === null) return false;
            return Math.abs(userVal - expectedVal) < tolerance;
        } catch (e) {
            return false;
        }
    }

    _multiRootCheck(userLatex, expectedRoots, tolerance = null) {
        const userPieces = this._expandUserLatex(userLatex);
        if (userPieces.length === 0) return false;

        // Allow shorthand: single value entered for a repeated root.
        // e.g. expected ['2','2'] and user '2' both ok.
        const allExpectedSame = expectedRoots.every(r => this._scalarEqual(r, expectedRoots[0], tolerance));
        if (allExpectedSame && userPieces.length === 1) {
            return this._scalarEqual(userPieces[0], expectedRoots[0], tolerance);
        }

        if (userPieces.length !== expectedRoots.length) return false;

        // Multiset equality via greedy match.
        const remaining = [...expectedRoots];
        for (const u of userPieces) {
            const idx = remaining.findIndex(r => this._scalarEqual(u, r, tolerance));
            if (idx === -1) return false;
            remaining.splice(idx, 1);
        }
        return remaining.length === 0;
    }

    // Splits a MathLive latex string on top-level commas and expands \pm
    // into the two implied scalar expressions.
    _expandUserLatex(latex) {
        const pieces = this._splitTopLevelCommas(latex);
        const out = [];
        for (const piece of pieces) {
            const trimmed = piece.trim();
            if (!trimmed) continue;
            if (/\\pm|±/.test(trimmed)) {
                out.push(trimmed.replace(/\\pm|±/g, '+').replace(/^\+/, ''));
                out.push(trimmed.replace(/\\pm|±/g, '-'));
            } else {
                out.push(trimmed);
            }
        }
        return out;
    }

    _splitTopLevelCommas(latex) {
        const pieces = [];
        let depth = 0;
        let buf = '';
        for (let i = 0; i < latex.length; i++) {
            const ch = latex[i];
            if (ch === '{' || ch === '(' || ch === '[') depth++;
            else if (ch === '}' || ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
            if (ch === ',' && depth === 0) {
                pieces.push(buf);
                buf = '';
            } else {
                buf += ch;
            }
        }
        if (buf.length) pieces.push(buf);
        return pieces;
    }
}

// Expose as global for parity with AlgebraEngine.
window.EquationsAnswerChecker = EquationsAnswerChecker;
