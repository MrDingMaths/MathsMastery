# MathQuill → MathLive Migration

Record of the work that replaced the Desmos MathQuill fork with [MathLive](https://mathlive.io) across the three math-input apps (algebra, equations, trigfacts) plus shared infrastructure.

## Why

- MathQuill (Desmos fork `0.10.1-desmos`) is effectively unmaintained.
- Hard dependency on jQuery just to load it.
- Mobile UX required a hand-rolled 2-page virtual keyboard (`algebra/mobile-keyboard/`) with a `substituteTextarea` hack to suppress the native iOS/Android keyboard.
- MathLive ships its own virtual keyboard, inline shortcuts (`sqrt` → √, `pi` → π), proper accessibility, and active maintenance.

## What was NOT used

MathsEditor (`MrDingMaths/MathsEditor`). It's a document editor — mixed text+maths islands with a symbol palette — built for composing notes, not racing through quiz answers. Wrong tool for a single-expression input.

## Decisions

| Decision | Choice |
|---|---|
| Distribution | Vendored locally at `shared/lib/mathlive/` (v0.109.2). No CDN at runtime. |
| Mobile keyboard | Use MathLive's built-in virtual keyboard. Custom `algebra/mobile-keyboard/` deleted. |
| Enter event | Renamed `mathquill-enter` → `math-enter` everywhere. |
| Element name | Renamed to neutral identifiers: id `math-field-input` (trigfacts), class `math-field-answer` (algebra/equations), class `math-static` (level-select example tiles). Method `initializeMathInputs()`. |

## Vendored assets

Under `shared/lib/mathlive/`:

| File | Purpose | Size |
|---|---|---|
| `mathlive.min.js` | UMD bundle; registers `<math-field>` and `<math-mfe>` custom elements, exposes `window.MathLive` and `window.MathfieldElement`. | ~844 KB |
| `mathlive-static.css` | Styles for static-rendered math markup (`convertLatexToMarkup` output). | ~13 KB |
| `mathlive-fonts.css` | `@font-face` for the 20 KaTeX fonts, sets `--ML__static-fonts: true` so MathLive doesn't try to load fonts via JS. | ~3 KB |
| `fonts/KaTeX_*.woff2` | 20 KaTeX font files. | ~260 KB |

Sounds are disabled at runtime (`MathfieldElement.soundsDirectory = null`), so no `sounds/` directory was vendored.

## Per-app changes

### Trigfacts (Phase 1 — first spike)

- [trigfacts/index.html](trigfacts/index.html) — MathQuill+jQuery `<script>` tags replaced with `<script defer>` MathLive + CSS links. `<div id="mathquill-input">` → `<math-field id="mathquill-input">`.
- [trigfacts/trigUI.js](trigfacts/trigUI.js) — `MQ.MathField` / `MQ.StaticMath` / `.latex()` / `.config()` / `.revert()` replaced by the `<math-field>` element directly. Static rendering uses `MathLive.convertLatexToMarkup(latex)`. Inline shortcuts for `pi`/`theta`/`alpha`/`beta`/`gamma`/etc. Click-anywhere-to-focus via `pointerdown` listener. `enableInput()` re-focuses (otherwise the second-chance retry leaves focus elsewhere).
- [trigfacts/trig-style/trig-style.css](trigfacts/trig-style/trig-style.css) — `.mq-*` rules removed; `math-field.mathquill-input` host styles with `--primary`, `--caret-color`, `--contains-highlight-background-color`, `--selection-background-color` CSS vars and `::part(virtual-keyboard-toggle)` / `::part(menu-toggle)` hidden.

### Algebra (Phase 2)

- [algebra/index.html](algebra/index.html) — MathQuill+jQuery removed, MathLive loaded, custom mobile-keyboard `<script>`/`<link>` removed.
- [algebra/ui.js](algebra/ui.js) — All `MQ.MathField`/`MQ.StaticMath` replaced. `MobileDetection` import deleted. Custom keyboard wiring (`mobileKeyboard.show/hide`, `substituteTextarea`, `isMobile` branches) entirely removed. Static math examples on the level-select screen (`power-example`, `fraction-example`, `sqrt-example`, `nthroot-example`) render via `convertLatexToMarkup`. The math-field's `pointerdown` handler fixes the click-anywhere-to-focus behaviour and `enableInput`/auto-refocus pattern matches trigfacts.
- [algebra/gameController.js](algebra/gameController.js) — Listener renamed `mathquill-enter` → `math-enter`.
- [algebra/algebra-style.css](algebra/algebra-style.css) — All `.mq-*`, `.mathquill-editable.mq-focused`, `sup`/`sub`/`mq-nthroot` overrides removed. `math-field.mathquill-editable` host styles with `--primary` etc. The virtual-keyboard toggle is **kept visible** (MathLive's native icon, pinned right via absolute positioning + `padding-right: 52px` reservation). `::part(menu-toggle)` is hidden so students can't open the LaTeX/copy menu. Sizing: `min-width: 220px; max-width: 100%` — the input has a comfortable baseline width and grows with content (replaces the old `width: 100%` which caused inconsistent sizing inside the flex row).
- [algebra/algebraEngine.js](algebra/algebraEngine.js) `latexToMathJS()` — extended to handle MathLive output:
  - Strip `\mleft` / `\mright` alongside `\left` / `\right`.
  - Strip `\placeholder{...}` tokens (and bare `\placeholder`).
  - **`normalizeFracBraces()`** — MathLive emits the TeX shorthand `\frac12` (no braces) for single-token args. Without normalisation the brace-matching regex couldn't match and the `while (expr.includes('\\frac'))` loop spun forever. The new `consumeTexArg()` + `normalizeFracBraces()` helpers walk the string and rewrite `\frac12` → `\frac{1}{2}`, `\frac\pi2` → `\frac{\pi}{2}`, `\frac1{2x}` → `\frac{1}{2x}`, recursing into braced groups for nested fractions.
  - Per-stage `console.log` instrumentation added during debugging — still present, see follow-ups.
- Deleted [algebra/mobile-keyboard/](algebra/mobile-keyboard/) directory entirely (mobileKeyboard.js, mobileKeyboard.css, assets).

### Equations (Phase 3)

- [equations/index.html](equations/index.html) — MathQuill+jQuery → MathLive.
- [equations/ui.js](equations/ui.js) — Multi-field pattern preserved (one `<math-field>` per variable in `inputs.vars`). Enter on a non-last field advances focus; Enter on the last field dispatches `math-enter`. Inline shortcuts include `pm` (for `±`). Same click-anywhere-to-focus + virtual-keyboard-toggle pinned-right pattern as algebra.
- [equations/gameController.js](equations/gameController.js) — Listener renamed `mathquill-enter` → `math-enter`.
- [equations/equations-style.css](equations/equations-style.css) — All `.mq-*` rules removed; `math-field.mathquill-editable` host styles match the algebra pattern. `.equations-multi-input` width bump preserved.

### Shared infrastructure

- [shared/progressUI.js](shared/progressUI.js) — `this.MQ = MathQuill.getInterface(2)` removed. New helper `_renderStaticLatex(element, latex)` uses `MathLive.convertLatexToMarkup`. `renderMistakesMath()` uses the helper. (Mid-migration the helper had a MathQuill fallback for equations, removed once equations migrated.)
- [shared/common.css](shared/common.css) — `.feedback .mq-root-block, .feedback .mq-math-mode` → `.feedback math-field, .feedback .ML__base, .feedback .ML__mathit, .feedback .ML__cmr` for feedback colour inheritance.
- [shared/darkMode.css](shared/darkMode.css) — Legacy `.mathquill-input`/`.mathquill-editable`/`.mq-editable-field` dark-mode rules deleted. `math-field.mathquill-input, math-field.mathquill-editable` dark-mode rule covers both apps. `.math-display .mq-math-mode/.mq-root-block` → `.math-display math-field, .math-display .ML__base`.
- Deleted `shared/lib/mathquill/` directory entirely.

### Debug tool

- [algebra/debug-algebra-engine.html](algebra/debug-algebra-engine.html) — 6 `<div class="mathquill-input">` → `<math-field class="mathquill-input">`. 80-line init block replaced by a 20-line helper that grabs the elements and applies inline shortcuts. All `.latex()` getters → `.value`, setters → `.value = x`. jQuery `$(document).ready` → `customElements.whenDefined('math-field').then(initMathFields)` (waiting for `DOMContentLoaded` is too early because the deferred MathLive script hasn't registered the element yet). CSS selector `.mathquill-input` → `math-field.mathquill-input`.

## API translation reference

| MathQuill | MathLive |
|---|---|
| `MQ.MathField(el, cfg)` | `<math-field>` element |
| `MQ.StaticMath(el)` | `<math-field read-only>` or `MathLive.convertLatexToMarkup(latex)` |
| `field.latex()` (get) | `field.value` |
| `field.latex(s)` (set) | `field.value = s` |
| `field.focus()` / `.blur()` | same |
| `field.write('x')` | `field.executeCommand(['insert', 'x'])` |
| `field.cmd('\\sqrt')` | `field.executeCommand(['insert', '\\sqrt{#?}'])` |
| `field.keystroke('Backspace')` | `field.executeCommand('deleteBackward')` |
| `field.config({ disabled: true })` | `field.disabled = true` |
| `field.revert()` | not needed — set `field.value = ''` |
| `handlers.enter` | `addEventListener('keydown', e => e.key === 'Enter')` |
| `handlers.edit` | `addEventListener('input', …)` |
| `autoCommands: 'pi sqrt'` | `field.inlineShortcuts = { pi: '\\pi', sqrt: '\\sqrt{#?}' }` |
| `substituteTextarea` | unneeded — set `field.mathVirtualKeyboardPolicy = 'manual'` |
| MQ class hooks (`.mq-editable-field`, `.mq-focused`) | host pseudo-classes (`:focus`, `:focus-within`) and `::part(container)`, `::part(virtual-keyboard-toggle)`, `::part(menu-toggle)` |

## Gotchas learnt the hard way

1. **Don't fight MathLive's internal layout.** Setting `::part(container) { width: 100%; height: 100%; display: flex; ... }` breaks centring. Use the host `display: inline-flex; align-items: center; justify-content: center` and trust MathLive's shadow DOM to render its content sensibly.
2. **Click-anywhere-to-focus** doesn't come for free. MathLive only treats the inner content area as a click target; clicks on the host's padding/edge don't focus. Fix with a `pointerdown` listener on the host: `if (e.target === field) field.focus()`.
3. **Auto-refocus on retry.** After `disabled = true` then `disabled = false`, focus is gone. `enableInput()` must explicitly call `field.focus()`.
4. **Selection / "contains-highlight" backgrounds** default to dark grey, looks heavy on a white card. Override with `--selection-background-color` and `--contains-highlight-background-color` for both themes.
5. **Custom element timing.** With `<script defer src="mathlive.min.js">` in the `<head>` and an inline init script in the body, the inline script runs **before** MathLive registers `<math-field>`. Anything you set on the elements is ignored until upgrade. Always gate init on `customElements.whenDefined('math-field')`.
6. **Sizing inside a flex row.** `width: 100%` on a math-field that is a flex child is treated as flex-basis: 100% of the row, then competes with siblings via flex-shrink. Result: the input width changes per question depending on what other content is in the row. Use `min-width: <baseline>; max-width: 100%` and let the field size to its intrinsic content.
7. **Native keyboard toggle placement.** MathLive's `::part(virtual-keyboard-toggle)` is rendered inline immediately after the content. To pin it at the right edge of the input box: set `position: relative` on the host, `position: absolute; right: <px>; top: 50%; transform: translateY(-50%)` on the part, and reserve space with `padding-right` on the host.
8. **MathLive emits TeX shorthand.** The single biggest engine surprise: MathLive output for a simple `1/2` fraction is `\frac12`, not `\frac{1}{2}`. The existing brace-matching `\frac` regex doesn't match shorthand and the conversion loop spins forever. Normalise to always-braced form before regex work — see `normalizeFracBraces()` in `algebraEngine.js`.
9. **\mleft / \mright and \placeholder.** MathLive sometimes emits `\mleft(` / `\mright)` (a context-aware variant of `\left(`/`\right)`) and `\placeholder{⬚}` tokens for empty arguments. Strip both before LaTeX → math.js conversion.

## Follow-ups

- **`algebraEngine.js` console logging** — `latexToMathJS()` currently has detailed `console.log` at every stage and per-iteration `\frac` trace. Helpful during the migration; strip once happy with stability.
- **jQuery removal sweep** — algebra/equations/trigfacts no longer reference `$`. The hub page (`index.html`) and shared scripts (`leaderboard.js`, `hubLeaderboard.js`, `progressUI.js`) should be audited; the global jQuery `<script>` tags can probably go.
- **Static math example renderers** — done: extracted into `shared/mathRenderer.js` (`window.MathRenderer.renderStaticLatex(element, latex)`, `configureMathLiveGlobals()`).
- **MathLive virtual keyboard layout** — currently using MathLive's defaults. The old custom 2-page algebra keyboard was tuned for the algebra question set; configure `window.mathVirtualKeyboard.layouts` if students find the default layout slows them down.

## Version pin

MathLive **0.109.2** (downloaded from `https://unpkg.com/mathlive@0.109.2/`). Bump by replacing the files in `shared/lib/mathlive/` and re-testing inline shortcuts, virtual keyboard, and the algebra engine's LaTeX → math.js parser (MathLive occasionally tweaks emitted LaTeX).
