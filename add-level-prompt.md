# Adding a New Level

All five apps read their level metadata from **`shared/levelRegistry.js`**. That file is the entry point regardless of which app you're adding to. After registering metadata there, the per-app work differs because each app sources questions differently:

- **Algebra** — one new file per level under `algebra/levels/` (static question bank, optionally a custom `generateQuestion()`), wired into `algebra/levels/index.js`.
- **MathsFacts** — questions are produced by generator functions in `mathsfacts/levels/*.js`; you add (or reuse) a generator and map the level key to it in `mathsfacts/gameController.js`.
- **TrigFacts** — fully driven by a `type` field on the registry entry, dispatched in `trigfacts/questions/trigQuestionGenerator.js`.
- **Equations** — same per-level file pattern as Algebra: one `BaseLevel` file in `equations/levels/`, re-exported from `equations/levels/index.js`.
- **Calculus** — identical pattern to Equations: one `BaseLevel` file in `calculus/levels/`, re-exported from `calculus/levels/index.js`.

---

## Step 1 — Register the level (all apps)

Edit `shared/levelRegistry.js`. Add an entry inside the appropriate `LEVEL_GROUPS` array for your app.

The `key` is the canonical identifier — it appears in localStorage progress data, the Supabase `leaderboard_entries.level_key` column, and (for algebra) maps to the level filename. **Once shipped, never rename a key** — users' progress and leaderboard rows are bound to it.

```js
// Algebra entry
{ key: 'myNewSkillEasy', name: 'My New Skill<br>Easy', value: 'my-new-skill-easy' }
// difficulty label after <br> is one of: Easy / Med / Hard

// MathsFacts entry
{ key: 'myNewFact', name: 'My New Fact' }
// or with a numeric payload the generator can read:
{ key: 'bonds50', name: 'Bonds to 50', value: 50 }

// TrigFacts entry — `type` is the dispatch discriminator
{ key: 'my_new_trig', name: 'My New Trig', type: 'exact', unit: 'deg' }
```

Group placement controls which section the tile appears under on the level-select grid and where it appears in the hub leaderboard modal.

---

## Step 2 — Algebra

### 2a. Create the level file

`algebra/levels/{key}.js` — filename must match the registry `key` exactly (case-sensitive).

Simple static question bank:

```js
// levels/myNewSkillEasy.js
import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel(
    'myNewSkillEasy',
    'My New Skill (Easy)',
    [
        { problem: '2x + 3x', answer: '5x' },
        { problem: '4y - y',  answer: '3y' },
        // …more
    ]
);
```

`BaseLevel.generateQuestion()` already cycles through the array without repeats per session.

For custom generation, extend `BaseLevel` and override `generateQuestion()` — return `{ problem, answer }` where both are strings using the project's notation conventions (see `CLAUDE.md` Math Notation Guide: `^()` for multi-term powers, `(num)/(den)` for compound fractions, `log_5` for log bases, etc.).

### 2b. Re-export from the barrel

Add a line to `algebra/levels/index.js`:

```js
export { default as myNewSkillEasy } from './myNewSkillEasy.js';
```

`algebra/questionGenerator.js` does `import * as Levels from './levels/index.js'` and dispatches with `Levels[levelKey].generateQuestion()`, so the registry key, filename, and the named export here must all match.

### 2c. Add a difficulty multiplier

Edit `algebra/config.js` → `CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS`. The multiplier scales the rating thresholds for this level (higher = more forgiving on time). Pick a value by analogy with similar existing levels:

```js
'myNewSkillEasy': 2.0,
```

Without an entry, rating calculation falls through to a default and ratings will be inconsistent with neighbouring levels.

---

## Step 3 — MathsFacts

### 3a. Generator function

Either reuse an existing generator in `mathsfacts/levels/*.js` (most "bonds" / "group facts" levels just parameterise an existing one), or add a new one. Export it from its module and add it to the re-exports in `mathsfacts/levels/index.js`.

Generator signature: `(inputPlaceholder) => ({ question, answer, … })`. The placeholder is substituted for `<input>` fields in the rendered HTML.

If your generator needs a wrapper, add a method to `mathsfacts/questionGenerator.js`:

```js
generateMyNewFact() {
    return levels.generateMyNewFact(this.inputPlaceholder);
}
```

### 3b. Wire the key to the generator

In `mathsfacts/gameController.js`, `initializeQuestionGenerators()` builds `this.generatorMap`. Add an entry keyed by your registry `key`:

```js
'myNewFact': () => this.questionGen.generateMyNewFact(),
```

If the level has special UI handling (custom input form like `unitConversions` or `fdpConversions`), also branch on the key in `mathsfacts/gameController.js` around lines 193–204 and/or in `mathsfacts/ui.js`.

### 3c. Skill-path abbreviation

Add an entry to `CONFIG.LEVEL_ABBREVIATIONS` in `mathsfacts/config.js` so the level shows a compact label in the skill-path visualisation. Use `{ text, useKaTeX }` — set `useKaTeX: true` when the label is a LaTeX expression.

### 3d. Difficulty multiplier

Same idea as algebra: add a key to `CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS` in `mathsfacts/config.js`.

---

## Step 4 — Equations

Equations uses the same `BaseLevel` file pattern as Algebra.

### 4a. Create the level file

`equations/levels/{key}.js` — filename must match the registry `key` exactly.

```js
import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel(
    'myNewLevelEasy',
    'My New Level (Easy)',
    [
        { problem: 'x + 3 = 7', answer: { x: '4' } },
        // …more
    ]
);
```

For levels with irrational answers (e.g. quadratic formula, cube roots), pass `{ toleranceDp: 2 }` as the fourth argument to `BaseLevel`. This stamps `toleranceDp: 2` on every generated question so the checker accepts a decimal answer correct to 2 d.p. as an alternative to the exact form.

```js
export default new BaseLevel('myIrrationalLevel', 'My Level', [...], { toleranceDp: 2 });
```

### 4b. Re-export from the barrel

Add a line to `equations/levels/index.js`:

```js
export { default as myNewLevelEasy } from './myNewLevelEasy.js';
```

### 4c. Add a difficulty multiplier

Edit `equations/config.js` → `CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS`:

```js
'myNewLevelEasy': 2.0,
```

---

## Step 5 — Calculus

Calculus is identical in structure to Equations.

### 5a. Create the level file

`calculus/levels/{key}.js` — filename must match the registry `key` exactly.

```js
import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel(
    'myCalculusLevel',
    'My Calculus Level',
    [
        { problem: 'Differentiate x³', answer: '3x²' },
        // …more
    ]
);
```

Use `{ toleranceDp: 2 }` for levels where exact symbolic answers can't be expected (e.g. answers involving e or ln).

### 5b. Re-export from the barrel

Add a line to `calculus/levels/index.js`:

```js
export { default as myCalculusLevel } from './myCalculusLevel.js';
```

### 5c. Add a difficulty multiplier

Edit `calculus/config.js` → `CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS`:

```js
'myCalculusLevel': 2.0,
```

---

## Step 6 — TrigFacts

TrigFacts doesn't have per-level files. The dispatcher in `trigfacts/questions/trigQuestionGenerator.js` switches on the entry's `type`:

```
exact | quadrant | equivalent | conversion | simplify_fractions
| reference_angles | reference_angles_rad
```

- **Reusing an existing type**: pick the right `type` plus auxiliary fields (`unit: 'deg' | 'rad'`, `direction: 'd2r' | 'r2d' | 'mixed'`, etc.) in the registry entry — no code change needed.
- **Brand-new question shape**: add a `case 'my_type':` to the switch, implement a `generateMyType(level)` method on the class, and set `type: 'my_type'` in the registry entry. The method must return `{ question, answer, … }` matching what `trigUI.js` expects.

Add a multiplier to `CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS` in `trigfacts/config.js`.

---

## Step 7 — Verify end-to-end

The app has no build step, so a hard refresh is enough.

1. Open the relevant `{app}/index.html` in a browser (or run a local static server from the project root).
2. Hard reload (Ctrl+Shift+R) to dodge cached scripts.
3. Confirm the new tile renders in the correct group on the level-select screen.
4. Start the level — confirm a question renders and `{ problem, answer }` (or `{ question, answer }`) shapes are correct.
5. Run a full streak of 10 correct answers and check:
   - Rating is shown and matches what the difficulty multiplier should produce.
   - Best time is persisted (visible on second visit to the tile).
6. While signed in, confirm a `leaderboard_entries` row appears for the new `level_key` after a personal best. The hub leaderboard modal on the landing page should also list the new level (it auto-derives from `window.LevelRegistry`).
7. Sign out and confirm gameplay still works (offline-first invariant).

---

## Checklist

- [ ] Registry entry added in `shared/levelRegistry.js` under the correct group
- [ ] **Algebra**: level file in `algebra/levels/{key}.js` + barrel export in `algebra/levels/index.js` + multiplier in `algebra/config.js`
- [ ] **MathsFacts**: generator (new or reused) + `generatorMap` entry in `mathsfacts/gameController.js` + abbreviation + multiplier in `mathsfacts/config.js`
- [ ] **TrigFacts**: registry `type` covers it (reuse), otherwise new case in `trigQuestionGenerator.js` + multiplier in `trigfacts/config.js`
- [ ] **Equations**: level file in `equations/levels/{key}.js` + barrel export in `equations/levels/index.js` + multiplier in `equations/config.js` (add `{ toleranceDp: 2 }` if irrational answers)
- [ ] **Calculus**: level file in `calculus/levels/{key}.js` + barrel export in `calculus/levels/index.js` + multiplier in `calculus/config.js` (add `{ toleranceDp: 2 }` if irrational answers)
- [ ] Notation follows the project's LaTeX conventions (see `CLAUDE.md` Math Notation Guide)
- [ ] Verified in browser: tile renders, streak completes, rating displays, best time persists, leaderboard accepts the new key
