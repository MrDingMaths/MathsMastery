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

---

## Reverse Chain Rule integration families (RCR)

The unifying skill is recognising `∫ f'(x)·g(f(x)) dx` and writing the
antiderivative `G(f(x))`. Decision steps count the manipulations needed before a
standard antiderivative, plus any definite-integral evaluation.

### polynomialRCR — `∫(ax+b)ⁿ dx`, `∫f'·[f]ⁿ dx`, `√(ax+b)`, `1/(ax+b)ⁿ`
- **Easy (1–2 steps):** linear inner `(ax+b)ⁿ` (constant inner-derivative);
  reverse power rule with the `1/(a(n+1))` factor; leading constant multiples.
  Indefinite.
- **Medium (2–3 steps):** one rewrite/adjustment first — fractional-coefficient
  inner, reciprocal `1/(ax+b)ⁿ`, surd outer `√(ax+b)` / `1/√`, or a non-linear
  inner `f'·[f]ⁿ` where `f'` is already present (e.g. `x²(x³+5)³`). Indefinite.
- **Hard (3+ steps):** scalar-adjusted non-linear inner (numerator off by a
  constant), surds over quadratics, and/or **definite** evaluation.

### exponentialRCR — `∫f'·e^f dx`
- **Easy (1–2 steps):** `f'` exactly present, simple monomial inner
  (`2x e^{x²}`, `x² e^{x³+1}`). Answer is `e^{f}`. Indefinite.
- **Medium (2–3 steps):** coefficient adjustment, trinomial inner
  (`(x−1)e^{x²−2x+3}`), mixed-function inner (`cos x·e^{sin x}`),
  `e^x·(e^x+c)ⁿ`, or a basic **definite**.
- **Hard (3+ steps):** compound/nested `e^{kx}/(c+e^{kx})ⁿ`, awkward inners
  (`x^{−2}e^{1/x}`, `e^{√x}/√x`), surd inners, and/or **definite** evaluation.

### rationalRCR — `∫f'/f dx = ln|f|`
- **Easy (1–2 steps):** numerator is exactly `f'` (`3x²/(x³+5)`); write `ln|f|`.
  Indefinite.
- **Medium (2–3 steps):** numerator off by a constant factor (`x/(x²+4)`),
  mixed-function (`cos x/(2+sin x)`, `eˣ/(1+eˣ)`, `(ln x)²/x`, `tan x`), or
  denominator power-scaling. Indefinite.
- **Hard (3+ steps):** **definite** `f'/f` (logs of ratios), with exponential /
  trig / log inners and coefficient adjustment.

### trigRCR — `∫f'·trig(f) dx`, `∫sinⁿx·cos x dx`, etc.
- **Easy (1–2 steps):** `f'·trig(f)` with `f'` present and a monomial inner
  (`3x²cos(x³)`, `x³sec²(x⁴−1)`). Indefinite.
- **Medium (2–3 steps):** trig-power patterns (`sin x·cos²x`, `sec²x·tan³x`,
  `sin x/cos³x`), surd outer over a trig inner, coefficient adjustment.
  Indefinite.
- **Hard (3+ steps):** **definite** trig RCR with exact-value bounds
  (multiples of π/6, π/4, π/3, π/2), often producing surd results.

## Migrations applied (2026-06-14 RCR expansion to ≥30 questions/file)

- **polynomialRCR Easy:** removed `∫(2x+9)¹¹ dx` — its integrand exceeds the
  checker's 1e6 magnitude cap at every sample point, so it cannot be verified by
  `calculusAnswerChecker`. Replaced with lower-power linear-inner items.
- **polynomialRCR Hard:** replaced `∫x√(x²−5) dx` with `∫x√(x²+4) dx` — the
  original is real on too few sample points (<4 jointly-valid), which the live
  checker cannot verify; `x²+4` is positive everywhere.
- **Kept:** non-linear `f'·[f]ⁿ` items (`x²(x³+5)³`, `x√(1−x²)`) in
  polynomialRCR **Medium** — `f'` is already present, so they are one
  recognition step (Medium), not Hard.
- All other tiers were already consistent with the principles; the expansion
  added new questions for variety rather than re-tiering existing ones. Every
  answer was checked numerically (differentiate-and-compare for indefinite,
  numeric integration for definite) before committing.

### Checker fix (calculusAnswerChecker.js `_normalizeCalcLatex`)

While validating the RCR answers against the real checker, two notation forms
were found to be unparseable — which silently broke correct answers in these
levels **and** in shipped `*Int*` levels:

- **Absolute-value bars** `\ln|f|` → now rewritten to `\ln((abs(f)))` (the
  bundled Math.js `abs` keeps the argument real, so `ln|f|` verifies across the
  whole sample range, and a student typing the bars is accepted).
- **Bare function arguments** `\sin x`, `\sin 2x`, `\sec^2 x`, `\ln 5` → now
  wrapped to `\sin(x)`, `\sin(2x)`, `\sec^2(x)`, `\ln(5)` before parsing.

Both transforms are additive and regression-covered by category **K** in
`test/cases.cjs`; the original 79-case battery still passes (89/89 total).
