# MathsMastery Codebase Guide

## Project Overview

Educational maths practice web app with three independent sub-apps. Pure vanilla JavaScript (ES6 modules), no framework, no build step, no backend, no auth. All state persisted in browser localStorage.

**Tech stack:** Tailwind CSS (CDN), KaTeX (CDN), Chart.js (CDN), jQuery (CDN), MathQuill (local), Math.js v15 (local bundle), Inter font (Google Fonts).

## Directory Structure

```
index.html                  Landing page — links to all three apps
algebra/                    Algebra Skills app (expand, simplify, factorise)
mathsfacts/                 Number Skills app (bonds, multiplication, fractions)
trigfacts/                  Trig Skills app (exact values, radians/degrees)
shared/                     Shared base classes, utilities, CSS
```

## Architecture Pattern (same across all three apps)

```
config.js → questionGenerator.js → gameState.js → gameController.js → ui.js
```

- **Streak-based completion:** 10 consecutive correct answers = level complete
- **Ratings:** Calculated from average time per question × difficulty multiplier
  - Thresholds: Beginner → Developing → Expert → Mastery → Queen
- **Global window objects used for cross-module access:**
  - `window.gameController`, `window.CONFIG`, `window.StorageManager`
  - `window.progressTracker`, `window.progressUI`, `window.RatingUtils`

## Shared Infrastructure (`shared/`)

| File | Purpose |
|------|---------|
| `baseGameState.js` | Base class: streak, level, answer, questionsAttempted |
| `baseUI.js` | Base class: level grid rendering, screen transitions |
| `storageManager.js` | localStorage wrapper with prefix isolation |
| `progressTracker.js` | v4 schema: session history, drill attempts, migration |
| `ratingUtils.js` | Authoritative rating calculation (shared across all apps) |
| `timer.js` | Game timer with pause/resume |
| `darkMode.js` | Theme toggle; persists to localStorage; `data-theme` attribute |
| `confetti.js` | Canvas confetti (40 particles correct, 150 level complete) |
| `navigationButtons.js` | Shared back/home navigation UI |
| `progressChart.js` | Chart.js wrapper for progress visualisation |
| `progressUI.js` | Progress modal UI components |
| `progressShare.js` | Export/share progress summary |
| `createEl.js` | Tiny DOM element factory helper |
| `common.css` | Design tokens (CSS vars), shared component styles |
| `darkMode.css` | Dark mode styles via `[data-theme="dark"]` selectors |
| `progressStyles.css` | Progress modal/chart styles |
| `lib/math.js` | Bundled Math.js library |
| `lib/mathquill/` | MathQuill library (Desmos fork) |

**CSS design tokens:**
```css
--color-primary: #3b82f6
--color-success: #10b981
--color-error: #ef4444
```

## Per-App Key Files

### Algebra (`algebra/`)
| File | Purpose |
|------|---------|
| `index.html` | Entry HTML; loads KaTeX, MathQuill, jQuery |
| `algebra-modules/config.js` | 60+ levels in 3 groups (Foundational/Intermediate/Advanced) |
| `algebra-modules/gameController.js` | Main orchestrator |
| `algebra-modules/gameState.js` | Extends BaseGameState |
| `algebra-modules/ui.js` | MathQuill input management |
| `algebra-modules/questionGenerator.js` | Pulls from `levels/*.js`, prevents repeats |
| `algebra-modules/algebraEngine.js` | Expression comparison engine (see below) |
| `algebra-modules/algebraMasteryTracker.js` | Topic-based mastery tracking |
| `levels/BaseLevel.js` | Level template class |
| `levels/*.js` | 115+ individual level files |
| `mobile-keyboard/` | Custom on-screen keyboard for algebra input |

### MathsFacts (`mathsfacts/`)
| File | Purpose |
|------|---------|
| `index.html` | Entry HTML |
| `config.js` | 25+ levels in 3 groups (Number Bonds / Multiplication / FDP) |
| `main.js` | Entry module |
| `gameController.js` | Main orchestrator |
| `questionGenerator.js` | Dynamic generation for each level type |
| `masteryTracker.js` | Skill-group mastery (Number Bonds, Multiplication, Fractions) |
| `levels/*.js` | Question banks: bonds, multiplication, fractionDecimals, percentages, powers, unitConversions |

### TrigFacts (`trigfacts/`)
| File | Purpose |
|------|---------|
| `index.html` | Entry HTML |
| `trig-modules/config.js` | 12 levels in 3 groups (Degrees / Conversion / Radians) |
| `trig-modules/trigGameController.js` | Main orchestrator |
| `trig-modules/trigGameState.js` | Extends BaseGameState |
| `trig-modules/trigAnswerChecker.js` | Custom trig answer validation |
| `trig-modules/quadrantDiagramRenderer.js` | SVG unit-circle quadrant diagram |
| `trig-modules/questions/trigQuestionGenerator.js` | Trig question generation |

## Algebra Engine (`algebra/algebra-modules/algebraEngine.js`)

The most sophisticated component (~90KB). Compares student LaTeX answers algebraically.

**Pipeline:**
1. **LaTeX Parser** — MathQuill output → Math.js syntax (handles `\frac`, `\sqrt`, unicode superscripts)
2. **AST Utilities** — Math.js expression tree traversal
3. **Simplification Validator** — Rejects unsimplified forms (e.g. `2+2` instead of `4`)
4. **Binary Difference Canonicalization** — `(a−x)` ≡ `−(x−a)`
5. **AST Canonicalization** — Normalises to canonical form
6. **Factor Comparison** — Commutative factor matching with sign handling
7. **Final Comparison** — Orchestrates full comparison
8. **Main Orchestrator** — Full pipeline with optional logging

Handles: commutativity, sign equivalences, surds, algebraic fractions, nested parentheses.

## localStorage Key Patterns

```
algebra_bestTime_v1_{levelKey}
mf_bestTime_v5_{levelKey}
mf_progress_v4                    (MathsFacts full progress, schema v4)
tf_bestTime_v5_{levelKey}
mf_darkMode / tf_darkMode / algebra_darkMode
```

Progress schema v4 shape: `{ version, sessions[], drillHistory{}, mistakes{} }`

## Math Notation Guide

Full notation rules are in `C:\Users\james\OneDrive\Admin\CLAUDE.md`.
Key rules for this codebase (LaTeX strings in config/level files):
- Powers multi-term: `^()` e.g. `2^(k+1)`
- Fractions compound: `(num)/(den)` e.g. `(2x+3)/(3y-1)`
- Logs: underscore base e.g. `log_5`
- Special symbols: Unicode θ, °, π
- No square brackets for nested parens — use double round `(())`
