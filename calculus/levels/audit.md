# Calculus Level Difficulty Rules

Difficulty tiers are defined by the **number of decision steps** needed to solve a
question — not by the answer's appearance. A "step" is a distinct manipulation a
student must choose to perform (rewrite, expand, apply a rule, simplify).

Answers are checked **numerically** by `calculusAnswerChecker.js` (sampling at 13
x-values), so any algebraically-equivalent answer form is accepted; only
mathematical correctness matters. Avoid questions whose derivative exceeds
magnitude 1e6 or is undefined at most sample points (the checker needs ≥4
jointly-valid points, mostly in roughly x ∈ [-2, 4]), or they cannot be verified.

---

## Polynomial Differentiation families

### polynomialDiff — direct power rule
- **Easy (1–2 steps):** apply the power rule term-by-term to an already-expanded
  polynomial. Positive integer powers, integer or simple-fraction coefficients
  (e.g. `x^7`, `3x²−5x`, `(1/3)x⁶`, quadratics/cubics).
- **Medium (2–3 steps):** one preliminary rewrite *before* the power rule — expand
  a bracket/product, divide-through a quotient to split terms, or rewrite
  negative-integer-power / `1/xⁿ` reciprocal forms.
- **Hard (3+ steps):** fractional / surd powers needing conversion to index form,
  splitting fractions containing surds, squaring reciprocal/surd brackets then
  differentiating, and re-expressing answers in surd form.

### polynomialChainRule
- **Easy (1–2 steps):** `(ax+b)ⁿ` with a **linear** inner function (constant
  inner-derivative), incl. leading constant multiples, fraction coefficients, and
  added constants.
- **Medium (2–3 steps):** **non-linear** inner function (quadratic / cubic /
  trinomial) whose derivative remains a factor; plus negative-integer-power and
  reciprocal-of-polynomial `1/(poly)` forms.
- **Hard (3+ steps):** fractional-power / surd outer (√ of linear or quadratic,
  cube roots, reciprocal-of-surd) — rewrite to index form, chain rule, re-express
  as a surd fraction.

### polynomialProductRule
- **Easy (2–3 steps):** monomial × single bracket-power, e.g. `xⁿ(ax+b)ᵐ` or
  `x(x²+c)ᵐ` — one factor trivial, the other one chain-rule step.
- **Medium (3–4 steps):** product of two bracket-powers `(x+a)ᵐ(x+b)ⁿ`, or
  monomial × trinomial-power; leading constants / coefficients; both factors need
  the chain rule.
- **Hard (4+ steps):** products involving surds `x·√(linear)`, or two
  bracket-powers with different linear coefficients `(2x−3)⁴(2x+3)⁵`; simplify to a
  single factored/fraction form.

### polynomialQuotientRule
- **Easy (2–3 steps):** simple top/bottom — monomial/linear, monomial/quadratic,
  linear/linear; trivial top & bottom derivatives.
- **Medium (3–4 steps):** quadratic/cubic numerator and/or denominator; both need
  the power rule; sign care.
- **Hard (4+ steps):** surds in numerator or denominator (`√x`, `√(x+1)`) —
  index-form rewrite + simplification.

---

## Migrations applied (2026-06-14 expansion to ≥30 questions/file)

- **polynomialChainRule Medium → Easy:** `d/dx(4+(x−5)⁶)` and `d/dx(24−7(x−5)²)`
  moved down — both have a **linear** inner function (`x−5`), so they are Easy-tier.
- **Kept (borderline):** `polynomialDiff` Medium negative-power singletons
  (`x⁻¹`, `x⁻⁵`) — technically 1-step, but the negative-exponent *structure* is the
  defining Medium feature here.
- **Kept:** `polynomialChainRule` Medium reciprocal-of-linear `1/(3+5x)` —
  introduces reciprocal rewriting, so Medium not Easy.

Scope of that pass: the four differentiation families above (Diff, ChainRule,
ProductRule, QuotientRule). Excluded: `polynomialMixedRules*` (mixed level) and the
integration families (`polynomialInt*`, `polynomialRCR*`).
