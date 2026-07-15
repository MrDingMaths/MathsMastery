/**
 * Rounding decimals question generator.
 *
 * Displays a number with 5 decimal places followed by an ellipsis and asks
 * the student to round to the nearest whole, 1 d.p., 2 d.p., or 3 d.p.
 */

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const PRECISIONS = [
    { p: 0, label: 'the nearest whole number' },
    { p: 1, label: '1 d.p.' },
    { p: 2, label: '2 d.p.' },
    { p: 3, label: '3 d.p.' },
];

export function generateRoundingDecimals(inputPlaceholder) {
    let whole, digitsArr, p, label;

    // 10% of the time, force a cascading round-up (e.g. 9.99812 to 2 d.p. = 10.00).
    if (Math.random() < 0.10) {
        const choice = pick(PRECISIONS.filter(x => x.p >= 1));
        p = choice.p;
        label = choice.label;
        // 40% chance the whole part ends in 9 too, so the carry bumps the integer.
        whole = Math.random() < 0.4
            ? pick([9, 19, 29, 39, 49, 59, 69, 79, 89, 99])
            : randInt(1, 98);
        digitsArr = new Array(5);
        for (let i = 0; i < p; i++) digitsArr[i] = 9;        // all 9s up to the cut
        digitsArr[p] = randInt(5, 9);                         // forces round-up
        for (let i = p + 1; i < 5; i++) digitsArr[i] = randInt(0, 9);
    } else {
        whole = randInt(1, 99);
        digitsArr = Array.from({ length: 5 }, () => randInt(0, 9));
        const choice = pick(PRECISIONS);
        p = choice.p;
        label = choice.label;
    }

    const display = `${whole}.${digitsArr.join('')}`;
    const value = parseFloat(display);
    const factor = 10 ** p;
    const answer = Math.round(value * factor) / factor;

    return {
        format: `${display}\\ldots\n\\text{to ${label}}\n\\approx ${inputPlaceholder}`,
        answer,
    };
}
