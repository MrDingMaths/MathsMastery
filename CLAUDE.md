# MathsMastery Codebase Guide

## Project Overview

Educational maths practice web app with three independent sub-apps. Pure vanilla JavaScript (ES6 modules), no framework, no build step. Supabase backend for Google OAuth and leaderboards. Local progress still persisted in browser localStorage; Supabase is additive (app works fully offline).

**Tech stack:** Tailwind CSS (CDN), KaTeX (CDN), Chart.js (CDN), jQuery (CDN), MathQuill (local), Math.js v15 (local bundle), Inter font (Google Fonts), Supabase JS v2 (CDN via esm.sh).

## Directory Structure

```
index.html                  Landing page — links to all three apps, hub leaderboard
privacy-policy.html         Privacy policy
algebra/                    Algebra Skills app (expand, simplify, factorise)
mathsfacts/                 Number Skills app (bonds, multiplication, fractions)
trigfacts/                  Trig Skills app (exact values, radians/degrees)
shared/                     Shared base classes, utilities, CSS, level registry
```

Each app's modules sit directly at the app root (the old `algebra-modules/` and `trig-modules/` nesting was removed in the standardisation pass).

## Architecture Pattern (same across all three apps)

```
levelRegistry (global) → config.js → questionGenerator.js → gameState.js → gameController.js → ui.js
```

- **Streak-based completion:** 10 consecutive correct answers = level complete
- **Ratings:** Calculated from average time per question × difficulty multiplier
  - Thresholds: Beginner → Developing → Expert → Mastery → Queen
- **Level metadata** for all three apps lives in `shared/levelRegistry.js`. Each app's `config.js` reads `window.LevelRegistry[app].LEVEL_GROUPS` instead of duplicating level lists; `shared/hubLeaderboard.js` derives its hub level list from the same registry.
- **Global window objects used for cross-module access:**
  - `window.gameController`, `window.CONFIG`, `window.StorageManager`
  - `window.LevelRegistry`, `window.progressTracker`, `window.initProgressTracker`
  - `window.progressUI`, `window.RatingUtils`, `window.ProgressSync`
  - `window.supabaseClient`, `window.supabaseUser` (auth/leaderboard)

**Removed in the recent standardisation pass:** `topic_groups` tracking, `algebra/algebraMasteryTracker.js`, `mathsfacts/masteryTracker.js`, and the `algebra-modules/` / `trig-modules/` directory nesting. Ratings are still computed by `shared/ratingUtils.js` from session data inside the unified progressTracker — no parallel mastery store.

## Shared Infrastructure (`shared/`)

| File | Purpose |
|------|---------|
| `levelRegistry.js` | Single source of truth for level metadata across all three apps; classic script that sets `window.LevelRegistry` before any `config.js` runs |
| `baseGameState.js` | Base class: streak, level, answer, questionsAttempted |
| `baseUI.js` | Base class: level grid rendering, screen transitions |
| `progressTracker.js` | Factory (`window.initProgressTracker(app, opts)`) — v5 schema: sessions, drillHistory, mistakes, best times, migration from older versions |
| `progressSync.js` | Cloud backup + smart-merge sync for signed-in users; uses `{app}_progress_data_v5` keys (sets `window.ProgressSync`) |
| `ratingUtils.js` | Authoritative rating calculation (shared across all apps) |
| `timer.js` | Game timer with pause/resume |
| `darkMode.js` | Theme toggle; persists to `mathsmastery-theme` in localStorage; sets `data-theme` attribute on `<html>` |
| `confetti.js` | Canvas confetti (40 particles correct, 150 level complete) |
| `navigationButtons.js` | Shared site header (`SiteHeader` class): back/home nav + auth button (sign-in/user pill) |
| `supabaseClient.js` | Supabase init, auth state management, dispatches `supabase-auth-change` custom event |
| `leaderboard.js` | Leaderboard class: submit scores, fetch top 10, render on success screen |
| `hubLeaderboard.js` | Hub-page modal: browse leaderboards across all apps/levels (consumes `window.LevelRegistry`) |
| `leaderboard.css` | Leaderboard component styles (light + dark mode) |
| `levelSelect.css` | Level grid + tier badge styles |
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
| `index.html` | Entry HTML; loads KaTeX, MathQuill, jQuery, Chart.js |
| `main.js` | ES module entry; wires gameController to UI |
| `config.js` | Reads `window.LevelRegistry.algebra.LEVEL_GROUPS`; level group config |
| `gameController.js` | Main orchestrator |
| `gameState.js` | Extends `BaseGameState`; adds `currentQuestion`, `lastQuestionFormat` |
| `ui.js` | MathQuill input management + level grid rendering |
| `questionGenerator.js` | Pulls from `levels/*.js`, prevents repeats |
| `algebraEngine.js` | Expression comparison engine (~92KB, classic script — see below) |
| `storage.js` | Stub `StorageManager` delegating best-time/rating reads to `window.progressTracker` |
| `mobileDetection.js` | Touch/mobile UA + small-screen detection for mobile keyboard |
| `levels/BaseLevel.js` | Level template class |
| `levels/index.js` | Dynamic level loader (injects `<script src="levels/{key}.js">` per registry key) |
| `levels/*.js` | 128 individual level files |
| `mobile-keyboard/` | Custom on-screen keyboard for algebra input |
| `progress-tracking/progressTracker.js` | Thin wrapper: calls `window.initProgressTracker('algebra', { enableMistakes: true, oldVersionKeys: […] })` |
| `debug-algebra-engine.html`, `styleguide.md`, `package.json`, `node_modules/` | Dev tooling for the algebra engine (not shipped on the page) |

### MathsFacts (`mathsfacts/`)
| File | Purpose |
|------|---------|
| `index.html` | Entry HTML |
| `main.js` | ES module entry |
| `config.js` | Reads `window.LevelRegistry.mathsfacts.LEVEL_GROUPS`; also exports `LEVEL_ABBREVIATIONS` for compact skill-path labels |
| `gameController.js` | Main orchestrator |
| `gameState.js` | Extends `BaseGameState`; also re-exports `Timer` and a `StorageManager` stub |
| `ui.js` | Level grid + dynamic FDP-conversion form rendering |
| `questionGenerator.js` | Dynamic generation per level type |
| `effects.js` | One-line re-export of `shared/confetti.js` |
| `utils.js` | Small utilities |
| `levels/numberBonds.js` | Bonds to 10/20/100, negatives |
| `levels/multiplication.js` | Group facts (2-12), negatives, doubling, perfect squares |
| `levels/fractionDecimals.js` | FDP conversions, simplifying, equivalent fractions |
| `levels/percentages.js` | Percentage of quantity, increase/decrease |
| `levels/powers.js` | Powers of 10, fractional powers |
| `levels/factors.js` | HCF, LCM |
| `levels/unitConversions.js` | mm↔cm etc. |
| `levels/helpers.js` | Shared generator utilities |
| `levels/index.js` | Re-exports all generator modules |
| `progress-tracking/progressTracker.js` | Wrapper: `window.initProgressTracker('mathsfacts', …)` |

### TrigFacts (`trigfacts/`)
| File | Purpose |
|------|---------|
| `index.html` | Entry HTML |
| `main.js` | ES module entry |
| `config.js` | Reads `window.LevelRegistry.trigfacts.LEVEL_GROUPS` (12 levels in 3 groups: Degrees / Conversion / Radians) |
| `trigGameController.js` | Main orchestrator |
| `trigGameState.js` | Extends `BaseGameState`; adds `currentQuestion`, `isAnswering` |
| `trigUI.js` | Trig-specific UI (quadrant diagrams, degree/radian toggles) |
| `trigAnswerChecker.js` | Custom trig answer validation |
| `quadrantDiagramRenderer.js` | SVG unit-circle quadrant diagram |
| `storageManager.js` | Static API delegating to `window.progressTracker` |
| `questions/trigQuestionGenerator.js` | Trig question generation (exact values, conversion, quadrants) |
| `trig-style/trig-style.css` | Trig-specific styles |
| `progress-tracking/progressTracker.js` | Wrapper: `window.initProgressTracker('trigfacts', …)` |

## Algebra Engine (`algebra/algebraEngine.js`)

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
algebra_progress_data_v5          Algebra full progress (schema v5)
mf_progress_data_v5               MathsFacts full progress (schema v5)
tf_progress_data_v5               TrigFacts full progress (schema v5)
mathsmastery-theme                Global theme ('light' | 'dark')
leaderboard_synced_{userId}       One-time flag: localStorage uploaded to Supabase
{STORAGE_KEY}_backup_{timestamp}  Auto-backups taken before migrations
```

Progress schema v5 shape: `{ version, sessions[], drillHistory{}, mistakes{}, bestTimes{} }` — best times live inside the progress object (no separate `*_bestTime_*` keys).

Legacy keys still **read** for migration but no longer written: `*_progress_data_v4`/`v3`/`v2`/`v1`, `*_bestTime_v*_{levelKey}`, and the old per-app `*_darkMode` theme keys.

## Auth & Leaderboard (Supabase)

**Supabase project:** `gaolhotbierqivrvixdu` (hosted Supabase).

**Auth provider:** Google OAuth only, handled via `supabase.auth.signInWithOAuth()`. Redirects back to the same page after sign-in. Auth state communicated across modules via a custom `supabase-auth-change` DOM event on `document`.

**Offline-first design:** localStorage remains the primary store for all progress/history. Supabase is used only for leaderboards. The app functions identically when signed out or when Supabase is unavailable — all Supabase calls are wrapped in `.catch()` and never block gameplay.

### Script Loading Order

**Landing page (`index.html`):**
```
darkMode.js (head) → supabaseClient.js → leaderboard.js → levelRegistry.js → hubLeaderboard.js → navigationButtons.js
```

**Each app page (`{app}/index.html`):**
```
darkMode.js (head) → levelRegistry.js → main.js (ES module) →
supabaseClient.js → leaderboard.js → navigationButtons.js →
shared/progressTracker.js (factory) → progress-tracking/progressTracker.js (app wrapper) →
progressChart.js → progressShare.js → progressUI.js → progressSync.js
```

All non-module files load as plain scripts so they set globals. Order matters: `levelRegistry.js` must run before any `config.js`; the per-app progressTracker wrapper must run after the shared factory; `progressSync.js` loads last so it can attach to an initialised tracker.

### Auth Flow

1. `supabaseClient.js` initialises the Supabase client and sets `window.supabaseClient` / `window.supabaseUser`
2. `supabase.auth.onAuthStateChange()` dispatches `supabase-auth-change` custom event with `{ event, session, user }`
3. `navigationButtons.js` (`SiteHeader` class) listens for this event and toggles between "Sign in" button and avatar pill with sign-out dropdown
4. On sign-in, `shared/progressSync.js` (`window.ProgressSync`) performs a smart merge between the cloud snapshot and the local v5 progress object, then writes back to both. The first-time merge also seeds `leaderboard_entries` from existing best times.

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
