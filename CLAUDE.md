# MathsMastery Codebase Guide

## Project Overview

Educational maths practice web app with three independent sub-apps. Pure vanilla JavaScript (ES6 modules), no framework, no build step. Supabase backend for Google OAuth and leaderboards. Local progress still persisted in browser localStorage; Supabase is additive (app works fully offline).

**Tech stack:** Tailwind CSS (CDN), KaTeX (CDN), Chart.js (CDN), jQuery (CDN), MathQuill (local), Math.js v15 (local bundle), Inter font (Google Fonts), Supabase JS v2 (CDN via esm.sh).

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
  - `window.supabaseClient`, `window.supabaseUser` (auth/leaderboard)

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
| `navigationButtons.js` | Shared site header: back/home nav + auth button (sign-in/user pill) |
| `supabaseClient.js` | Supabase init, auth state management, first-sign-in best-time sync |
| `leaderboard.js` | Leaderboard class: submit scores, fetch top 10, render on success screen |
| `hubLeaderboard.js` | Hub-page modal: browse leaderboards across all apps/levels |
| `leaderboard.css` | Leaderboard component styles (light + dark mode) |
| `navigationButtons.css` | Header and auth button styles |
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

## Auth & Leaderboard (Supabase)

**Supabase project:** `gaolhotbierqivrvixdu` (hosted Supabase).

**Auth provider:** Google OAuth only, handled via `supabase.auth.signInWithOAuth()`. Redirects back to the same page after sign-in. Auth state communicated across modules via a custom `supabase-auth-change` DOM event on `document`.

**Offline-first design:** localStorage remains the primary store for all progress/history. Supabase is used only for leaderboards. The app functions identically when signed out or when Supabase is unavailable — all Supabase calls are wrapped in `.catch()` and never block gameplay.

### Script Loading Order (all pages)

```
supabaseClient.js → leaderboard.js → [hubLeaderboard.js on landing page only] → navigationButtons.js → app modules
```

All loaded as plain scripts (not ES modules) so they set globals. Order matters: each depends on the previous.

### Auth Flow

1. `supabaseClient.js` initialises the Supabase client and sets `window.supabaseClient` / `window.supabaseUser`
2. `supabase.auth.onAuthStateChange()` dispatches `supabase-auth-change` custom event with `{ event, session, user }`
3. `navigationButtons.js` (`SiteHeader` class) listens for this event and toggles between "Sign in" button and avatar pill with sign-out dropdown
4. On first sign-in per user, `syncBestTimesOnFirstSignIn()` uploads existing localStorage best times to `leaderboard_entries` (one-time, flagged by `leaderboard_synced_{userId}` in localStorage)

### Leaderboard Integration

Each app's `gameController.js` calls in `showSuccess()`:
- `Leaderboard.submitEntry(app, levelKey, bestTime, rating)` — only when signed in AND new personal best
- `Leaderboard.renderOnSuccessScreen(app, levelKey, userId)` — always (shows leaderboard between rating and replay button)

Both calls are fire-and-forget (non-blocking).

The landing page (`index.html`) has a hub leaderboard modal (`HubLeaderboard` class) for browsing top-10 leaderboards across all apps and levels.

### Database Schema

**Table: `profiles`** (RLS enabled)
| Column | Type | Notes |
|--------|------|-------|
| `user_id` | UUID PK | FK → `auth.users.id` |
| `display_name` | TEXT | From Google metadata |
| `avatar_url` | TEXT | Google profile picture URL |
| `created_at` | TIMESTAMPTZ | Default `now()` |
| `updated_at` | TIMESTAMPTZ | Default `now()` |

**Table: `leaderboard_entries`** (RLS enabled)
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | Default `gen_random_uuid()` |
| `user_id` | UUID | FK → `profiles.user_id` |
| `app` | TEXT | CHECK: `algebra`, `mathsfacts`, or `trigfacts` |
| `level_key` | TEXT | Matches config level keys |
| `best_time` | INTEGER | Seconds |
| `rating_key` | TEXT | e.g. `mastery`, `expert` |
| `rating_name` | TEXT | Display name for rating |
| `display_name` | TEXT | Denormalised from profile for fast reads |
| `updated_at` | TIMESTAMPTZ | Default `now()` |

**Unique constraint:** `(user_id, app, level_key)` — upsert on conflict.
**Performance index:** `(app, level_key, best_time)` — powers top-10 queries.

**RLS policies (both tables):** Public SELECT; INSERT/UPDATE restricted to `auth.uid() = user_id`.

**Trigger:** `on_auth_user_created` on `auth.users` INSERT → calls `handle_new_user()` which auto-creates a `profiles` row from Google metadata (`full_name`, `avatar_url`).

## Math Notation Guide

Full notation rules are in `C:\Users\james\OneDrive\Admin\CLAUDE.md`.
Key rules for this codebase (LaTeX strings in config/level files):
- Powers multi-term: `^()` e.g. `2^(k+1)`
- Fractions compound: `(num)/(den)` e.g. `(2x+3)/(3y-1)`
- Logs: underscore base e.g. `log_5`
- Special symbols: Unicode θ, °, π
- No square brackets for nested parens — use double round `(())`
