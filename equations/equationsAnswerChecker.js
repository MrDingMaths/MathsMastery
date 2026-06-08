// equationsAnswerChecker.js
// Compares a student's answer (object keyed by variable) against the expected
// answer descriptor produced by a level. Reuses AlgebraEngine for scalar
// expression equivalence so 5/2 ≡ 2.5 ≡ √2 ≡ 2^{1/2} etc.

export class EquationsAnswerChecker {
    constructor() {
        this.engine = new AlgebraEngine();
    }

    // userAnswer:   { x: latex }  OR  { x: latex, y: latex }
    // expected:     { x: scalar } OR  { x: [scalar, scalar, ...] } OR { x: scalar, y: scalar }
    check(userAnswer, expected) {
        const expectedKeys = Object.keys(expected);
        for (const key of expectedKeys) {
            const userLatex = userAnswer?.[key];
            if (userLatex == null || String(userLatex).trim() === '') return false;
            const exp = expected[key];
            if (Array.isArray(exp)) {
                if (!this._multiRootCheck(userLatex, exp)) return false;
            } else {
                if (!this._scalarEqual(userLatex, exp)) return false;
            }
        }
        return true;
    }

    _scalarEqual(userLatex, expectedLatex) {
        try {
            return this.engine.compareExpressions(userLatex, expectedLatex);
        } catch (e) {
            return false;
        }
    }

    _multiRootCheck(userLatex, expectedRoots) {
        const userPieces = this._expandUserLatex(userLatex);
        if (userPieces.length === 0) return false;

        // Allow shorthand: single value entered for a repeated root.
        // e.g. expected ['2','2'] and user '2' both ok.
        const allExpectedSame = expectedRoots.every(r => this._scalarEqual(r, expectedRoots[0]));
        if (allExpectedSame && userPieces.length === 1) {
            return this._scalarEqual(userPieces[0], expectedRoots[0]);
        }

        if (userPieces.length !== expectedRoots.length) return false;

        // Multiset equality via greedy match.
        const remaining = [...expectedRoots];
        for (const u of userPieces) {
            const idx = remaining.findIndex(r => this._scalarEqual(u, r));
            if (idx === -1) return false;
            remaining.splice(idx, 1);
        }
        return remaining.length === 0;
    }

    // Splits a MathQuill latex string on top-level commas and expands \pm
    // into the two implied scalar expressions.
    _expandUserLatex(latex) {
        const pieces = this._splitTopLevelCommas(latex);
        const out = [];
        for (const piece of pieces) {
            const trimmed = piece.trim();
            if (!trimmed) continue;
            if (/\\pm|±/.test(trimmed)) {
                out.push(trimmed.replace(/\\pm|±/g, '+'));
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
