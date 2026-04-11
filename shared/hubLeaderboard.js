/**
 * Hub Leaderboard — modal for browsing all-levels leaderboards from the main index page.
 * Plain script; depends on window.Leaderboard (shared/leaderboard.js) and window.supabaseUser.
 */

const HUB_LEVELS = {
    mathsfacts: {
        appLabel: 'Number Skills',
        groups: {
            'Number Bonds': [
                { key: 'bonds10',       name: 'Bonds to 10' },
                { key: 'bonds20',       name: 'Bonds to 20' },
                { key: 'mixed10-20',    name: 'Mixed Bonds 10–20' },
                { key: 'bonds100',      name: 'Bonds to 100' },
                { key: 'bonds-10',      name: 'Bonds to -10' },
                { key: 'bonds-20',      name: 'Bonds to -20' },
            ],
            'Multiplication & Division': [
                { key: 'group245',              name: '× 2 4 5 10' },
                { key: 'group369',              name: '× 3 6 9' },
                { key: 'multall',               name: '× 2 to 12' },
                { key: 'mixed-negative-mult',   name: '× Negatives' },
                { key: 'multiplyDivideBy100',   name: '×÷ 100' },
                { key: 'powersOf10',            name: '×÷ Powers of 10' },
                { key: 'double100',             name: 'Doubling' },
                { key: 'squares',               name: 'Perfect Squares' },
                { key: 'unitConversions',        name: 'Unit Conversions' },
            ],
            'Fractions Decimals Percentages': [
                { key: 'hcf',                           name: 'HCF' },
                { key: 'lcm',                           name: 'LCM' },
                { key: 'equivFractions',                name: 'Equivalent Fractions' },
                { key: 'simplifyFractions',             name: 'Simplifying Fractions' },
                { key: 'fdpConversions',                name: 'Common FDP Equivalences' },
                { key: 'fdpConversionsMultiples',       name: 'FDP Conversions' },
                { key: 'fractionOfQuantity',            name: 'Fraction of a Quantity' },
                { key: 'percentageOfQuantity',          name: 'Percentage of a Quantity' },
                { key: 'increaseDecreasePercentage',    name: 'Increase/Decrease by Percentage' },
            ],
        },
    },
    algebra: {
        appLabel: 'Algebra Skills',
        groups: {
            'Foundational Skills': [
                { key: 'addSubtractTermsEasy',              name: 'Add Subtract Terms 🥉' },
                { key: 'addSubtractTermsMedium',            name: 'Add Subtract Terms 🥈' },
                { key: 'addSubtractTermsHard',              name: 'Add Subtract Terms 🥇' },
                { key: 'multiplyTermsEasy',                 name: 'Multiply Terms 🥉' },
                { key: 'multiplyTermsMedium',               name: 'Multiply Terms 🥈' },
                { key: 'multiplyTermsHard',                 name: 'Multiply Terms 🥇' },
                { key: 'divideTermsEasy',                   name: 'Divide Terms 🥉' },
                { key: 'divideTermsMedium',                 name: 'Divide Terms 🥈' },
                { key: 'divideTermsHard',                   name: 'Divide Terms 🥇' },
                { key: 'mixedSimplificationEasy',           name: 'Mixed Simplification 🥉' },
                { key: 'mixedSimplificationMedium',         name: 'Mixed Simplification 🥈' },
                { key: 'mixedSimplificationHard',           name: 'Mixed Simplification 🥇' },
                { key: 'expandSingleBracketsEasy',          name: 'Expand Single Brackets 🥉' },
                { key: 'expandSingleBracketsMedium',        name: 'Expand Single Brackets 🥈' },
                { key: 'expandSingleBracketsHard',          name: 'Expand Single Brackets 🥇' },
                { key: 'multiplicationIndexLawEasy',        name: 'Multiplication Index Law 🥉' },
                { key: 'multiplicationIndexLawMedium',      name: 'Multiplication Index Law 🥈' },
                { key: 'multiplicationIndexLawHard',        name: 'Multiplication Index Law 🥇' },
                { key: 'divisionIndexLawEasy',              name: 'Division Index Law 🥉' },
                { key: 'divisionIndexLawMedium',            name: 'Division Index Law 🥈' },
                { key: 'divisionIndexLawHard',              name: 'Division Index Law 🥇' },
                { key: 'powerOfPowerAndZeroPowerEasy',      name: 'Power of Power & Zero Power 🥉' },
                { key: 'powerOfPowerAndZeroPowerMedium',    name: 'Power of Power & Zero Power 🥈' },
                { key: 'powerOfPowerAndZeroPowerHard',      name: 'Power of Power & Zero Power 🥇' },
                { key: 'mixedIndexLawsEasy',                name: 'Mixed Index Laws 🥉' },
                { key: 'mixedIndexLawsMedium',              name: 'Mixed Index Laws 🥈' },
                { key: 'mixedIndexLawsHard',                name: 'Mixed Index Laws 🥇' },
                { key: 'orderOfOperationsEasy',             name: 'Order of Operations 🥉' },
                { key: 'orderOfOperationsMedium',           name: 'Order of Operations 🥈' },
                { key: 'orderOfOperationsHard',             name: 'Order of Operations 🥇' },
                { key: 'factoriseIntoSingleBracketsEasy',   name: 'Factorise into Single Brackets 🥉' },
                { key: 'factoriseIntoSingleBracketsMedium', name: 'Factorise into Single Brackets 🥈' },
                { key: 'factoriseIntoSingleBracketsHard',   name: 'Factorise into Single Brackets 🥇' },
            ],
            'Intermediate Skills': [
                { key: 'expandAndSimplifyEasy',                         name: 'Expand & Simplify 🥉' },
                { key: 'expandAndSimplifyMedium',                       name: 'Expand & Simplify 🥈' },
                { key: 'expandAndSimplifyHard',                         name: 'Expand & Simplify 🥇' },
                { key: 'expandBinomialProductsEasy',                    name: 'Expand Binomial Products 🥉' },
                { key: 'expandBinomialProductsMedium',                  name: 'Expand Binomial Products 🥈' },
                { key: 'expandBinomialProductsHard',                    name: 'Expand Binomial Products 🥇' },
                { key: 'powerOfProductsAndQuotientsEasy',               name: 'Power of Products and Quotients 🥉' },
                { key: 'powerOfProductsAndQuotientsMedium',             name: 'Power of Products and Quotients 🥈' },
                { key: 'powerOfProductsAndQuotientsHard',               name: 'Power of Products and Quotients 🥇' },
                { key: 'addSubtractAlgebraicFractionsEasy',             name: 'Add Subtract Algebraic Fractions 🥉' },
                { key: 'addSubtractAlgebraicFractionsMedium',           name: 'Add Subtract Algebraic Fractions 🥈' },
                { key: 'addSubtractAlgebraicFractionsHard',             name: 'Add Subtract Algebraic Fractions 🥇' },
                { key: 'multiplyDivideAlgebraicFractionsEasy',          name: 'Multiply Divide Algebraic Fractions 🥉' },
                { key: 'multiplyDivideAlgebraicFractionsMedium',        name: 'Multiply Divide Algebraic Fractions 🥈' },
                { key: 'multiplyDivideAlgebraicFractionsHard',          name: 'Multiply Divide Algebraic Fractions 🥇' },
                { key: 'negativeIndicesEasy',                           name: 'Negative Indices 🥉' },
                { key: 'negativeIndicesMedium',                         name: 'Negative Indices 🥈' },
                { key: 'negativeIndicesHard',                           name: 'Negative Indices 🥇' },
                { key: 'factoriseMonicQuadraticTrinomialsEasy',         name: 'Factorise Monic Quadratic Trinomials 🥉' },
                { key: 'factoriseMonicQuadraticTrinomialsMedium',       name: 'Factorise Monic Quadratic Trinomials 🥈' },
                { key: 'factoriseMonicQuadraticTrinomialsHard',         name: 'Factorise Monic Quadratic Trinomials 🥇' },
            ],
            'Advanced Skills': [
                { key: 'addSubtractFractionsWithBinomialNumeratorEasy',         name: 'Add Subtract Fractions with Binomial Numerator 🥉' },
                { key: 'addSubtractFractionsWithBinomialNumeratorMedium',       name: 'Add Subtract Fractions with Binomial Numerator 🥈' },
                { key: 'addSubtractFractionsWithBinomialNumeratorHard',         name: 'Add Subtract Fractions with Binomial Numerator 🥇' },
                { key: 'expandPerfectSquaresEasy',                              name: 'Expand Perfect Squares 🥉' },
                { key: 'expandPerfectSquaresMedium',                            name: 'Expand Perfect Squares 🥈' },
                { key: 'expandPerfectSquaresHard',                              name: 'Expand Perfect Squares 🥇' },
                { key: 'expandDifferenceOfTwoSquaresEasy',                      name: 'Expand Difference of Two Squares 🥉' },
                { key: 'expandDifferenceOfTwoSquaresMedium',                    name: 'Expand Difference of Two Squares 🥈' },
                { key: 'expandDifferenceOfTwoSquaresHard',                      name: 'Expand Difference of Two Squares 🥇' },
                { key: 'mixedExpansionEasy',                                    name: 'Mixed Expansion 🥉' },
                { key: 'mixedExpansionMedium',                                  name: 'Mixed Expansion 🥈' },
                { key: 'mixedExpansionHard',                                    name: 'Mixed Expansion 🥇' },
                { key: 'factorisePerfectSquaresEasy',                           name: 'Factorise Perfect Squares 🥉' },
                { key: 'factorisePerfectSquaresMedium',                         name: 'Factorise Perfect Squares 🥈' },
                { key: 'factorisePerfectSquaresHard',                           name: 'Factorise Perfect Squares 🥇' },
                { key: 'factoriseDifferenceOfTwoSquaresEasy',                   name: 'Factorise Difference of Two Squares 🥉' },
                { key: 'factoriseDifferenceOfTwoSquaresMedium',                 name: 'Factorise Difference of Two Squares 🥈' },
                { key: 'factoriseDifferenceOfTwoSquaresHard',                   name: 'Factorise Difference of Two Squares 🥇' },
                { key: 'noticeBinomialFactorsEasy',                             name: 'Notice Binomial Factors 🥉' },
                { key: 'noticeBinomialFactorsMedium',                           name: 'Notice Binomial Factors 🥈' },
                { key: 'noticeBinomialFactorsHard',                             name: 'Notice Binomial Factors 🥇' },
                { key: 'groupInPairsEasy',                                      name: 'Group in Pairs 🥉' },
                { key: 'groupInPairsMedium',                                    name: 'Group in Pairs 🥈' },
                { key: 'groupInPairsHard',                                      name: 'Group in Pairs 🥇' },
                { key: 'factoriseNonMonicQuadraticTrinomialsEasy',              name: 'Factorise Non-monic Quadratic Trinomials 🥉' },
                { key: 'factoriseNonMonicQuadraticTrinomialsMedium',            name: 'Factorise Non-monic Quadratic Trinomials 🥈' },
                { key: 'factoriseNonMonicQuadraticTrinomialsHard',              name: 'Factorise Non-monic Quadratic Trinomials 🥇' },
                { key: 'mixedFactorisationEasy',                                name: 'Mixed Factorisation 🥉' },
                { key: 'mixedFactorisationMedium',                              name: 'Mixed Factorisation 🥈' },
                { key: 'mixedFactorisationHard',                                name: 'Mixed Factorisation 🥇' },
                { key: 'finishFactorisingEasy',                                 name: 'Finish Factorising 🥉' },
                { key: 'finishFactorisingMedium',                               name: 'Finish Factorising 🥈' },
                { key: 'finishFactorisingHard',                                 name: 'Finish Factorising 🥇' },
                { key: 'simplifyAlgebraicFractionsByFactorisingEasy',           name: 'Simplify Algebraic Fractions by Factorising 🥉' },
                { key: 'simplifyAlgebraicFractionsByFactorisingMedium',         name: 'Simplify Algebraic Fractions by Factorising 🥈' },
                { key: 'simplifyAlgebraicFractionsByFactorisingHard',           name: 'Simplify Algebraic Fractions by Factorising 🥇' },
                { key: 'multiplyDivideAlgebraicFractionsByFactorisingEasy',     name: 'Multiply Divide Algebraic Fractions by Factorising 🥉' },
                { key: 'multiplyDivideAlgebraicFractionsByFactorisingMedium',   name: 'Multiply Divide Algebraic Fractions by Factorising 🥈' },
                { key: 'multiplyDivideAlgebraicFractionsByFactorisingHard',     name: 'Multiply Divide Algebraic Fractions by Factorising 🥇' },
                { key: 'addSubtractFractionsByFactorisingDenominatorEasy',      name: 'Add Subtract Fractions by Factorising Denominator 🥉' },
                { key: 'addSubtractFractionsByFactorisingDenominatorMedium',    name: 'Add Subtract Fractions by Factorising Denominator 🥈' },
                { key: 'addSubtractFractionsByFactorisingDenominatorHard',      name: 'Add Subtract Fractions by Factorising Denominator 🥇' },
                { key: 'compoundFractionsEasy',                                 name: 'Compound Fractions 🥉' },
                { key: 'compoundFractionsMedium',                               name: 'Compound Fractions 🥈' },
                { key: 'compoundFractionsHard',                                 name: 'Compound Fractions 🥇' },
                { key: 'simplifySurdsEasy',                                     name: 'Simplify Surds 🥉' },
                { key: 'simplifySurdsMedium',                                   name: 'Simplify Surds 🥈' },
                { key: 'simplifySurdsHard',                                     name: 'Simplify Surds 🥇' },
                { key: 'addSubtractSurdsEasy',                                  name: 'Add Subtract Surds 🥉' },
                { key: 'addSubtractSurdsMedium',                                name: 'Add Subtract Surds 🥈' },
                { key: 'addSubtractSurdsHard',                                  name: 'Add Subtract Surds 🥇' },
                { key: 'multiplyDivideSurdsEasy',                               name: 'Multiply Divide Surds 🥉' },
                { key: 'multiplyDivideSurdsMedium',                             name: 'Multiply Divide Surds 🥈' },
                { key: 'multiplyDivideSurdsHard',                               name: 'Multiply Divide Surds 🥇' },
                { key: 'expandBracketsWithSurdsEasy',                           name: 'Expand Brackets with Surds 🥉' },
                { key: 'expandBracketsWithSurdsMedium',                         name: 'Expand Brackets with Surds 🥈' },
                { key: 'expandBracketsWithSurdsHard',                           name: 'Expand Brackets with Surds 🥇' },
                { key: 'rationaliseTheDenominatorEasy',                         name: 'Rationalise the Denominator 🥉' },
                { key: 'rationaliseTheDenominatorMedium',                       name: 'Rationalise the Denominator 🥈' },
                { key: 'rationaliseTheDenominatorHard',                         name: 'Rationalise the Denominator 🥇' },
                { key: 'rationaliseBinomialDenominatorEasy',                    name: 'Rationalise Binomial Denominator 🥉' },
                { key: 'rationaliseBinomialDenominatorMedium',                  name: 'Rationalise Binomial Denominator 🥈' },
                { key: 'rationaliseBinomialDenominatorHard',                    name: 'Rationalise Binomial Denominator 🥇' },
                { key: 'evaluateFractionalIndicesEasy',                         name: 'Evaluate Fractional Indices 🥉' },
                { key: 'evaluateFractionalIndicesMedium',                       name: 'Evaluate Fractional Indices 🥈' },
                { key: 'evaluateFractionalIndicesHard',                         name: 'Evaluate Fractional Indices 🥇' },
                { key: 'surdFormToIndexFormEasy',                               name: 'Surd Form to Index Form 🥉' },
                { key: 'surdFormToIndexFormMedium',                             name: 'Surd Form to Index Form 🥈' },
                { key: 'surdFormToIndexFormHard',                               name: 'Surd Form to Index Form 🥇' },
                { key: 'indexFormToSurdFormEasy',                               name: 'Index Form to Surd Form 🥉' },
                { key: 'indexFormToSurdFormMedium',                             name: 'Index Form to Surd Form 🥈' },
                { key: 'indexFormToSurdFormHard',                               name: 'Index Form to Surd Form 🥇' },
            ],
        },
    },
    trigfacts: {
        appLabel: 'Trig Skills',
        groups: {
            'Working in Degrees': [
                { key: 'exact_deg_mixed',   name: 'Exact Values' },
                { key: 'reference_angles',  name: 'Reference Angles' },
                { key: 'equiv_deg',         name: 'Equivalent Ratios' },
                { key: 'quad_deg',          name: 'Exact Values in all Quadrants' },
            ],
            'Degree and Radian Conversion': [
                { key: 'simplify_fractions', name: 'Simplify Fractions over 180' },
                { key: 'deg_to_rad',         name: 'Degrees to Radians' },
                { key: 'rad_to_deg',         name: 'Radians to Degrees' },
                { key: 'conv_mixed',         name: 'Mixed Conversion' },
            ],
            'Working in Radians': [
                { key: 'exact_rad_mixed',       name: 'Exact Values' },
                { key: 'reference_angles_rad',  name: 'Reference Angles' },
                { key: 'equiv_rad',             name: 'Equivalent Ratios' },
                { key: 'quad_rad',              name: 'Exact Values in all Quadrants' },
            ],
        },
    },
};

const RATING_EMOJIS = {
    'true-mastery': '💖',
    'mastery': '🏆',
    'expert': '⭐',
    'developing': '🎯',
    'beginner': '🌱',
};

class HubLeaderboard {
    constructor() {
        this._activeApp = 'mathsfacts';
        this._openLevelKey = null;
        this._overlay = document.getElementById('hub-lb-overlay');
        this._content = document.getElementById('hub-lb-content');
    }

    open() {
        this._overlay.classList.remove('hub-lb-hidden');
        document.body.style.overflow = 'hidden';
        this._renderLevels(this._activeApp);
    }

    close() {
        this._overlay.classList.add('hub-lb-hidden');
        document.body.style.overflow = '';
        this._openLevelKey = null;
    }

    switchTab(app) {
        this._activeApp = app;
        this._openLevelKey = null;
        document.querySelectorAll('.hub-lb-tab').forEach(btn => {
            btn.classList.toggle('hub-lb-tab-active', btn.dataset.app === app);
        });
        this._renderLevels(app);
    }

    _renderLevels(app) {
        const appData = HUB_LEVELS[app];
        let html = '';
        for (const [groupName, levels] of Object.entries(appData.groups)) {
            html += `<div class="hub-lb-group">
                <div class="hub-lb-group-name">${_hubEscape(groupName)}</div>`;
            for (const level of levels) {
                html += `<div class="hub-lb-level-row" data-app="${_hubEscape(app)}" data-key="${_hubEscape(level.key)}" role="button" tabindex="0" aria-expanded="false">
                    <span class="hub-lb-level-name">${_hubEscape(level.name)}</span>
                    <span class="hub-lb-chevron">›</span>
                </div>
                <div class="hub-lb-level-panel hub-lb-hidden" id="hub-lb-panel-${_hubEscape(level.key)}"></div>`;
            }
            html += '</div>';
        }
        this._content.innerHTML = html;

        this._content.querySelectorAll('.hub-lb-level-row').forEach(row => {
            const activate = () => this._toggleLevel(row.dataset.app, row.dataset.key, row);
            row.addEventListener('click', activate);
            row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
        });
    }

    async _toggleLevel(app, levelKey, rowEl) {
        const panel = document.getElementById(`hub-lb-panel-${levelKey}`);
        if (!panel) return;

        const isOpen = !panel.classList.contains('hub-lb-hidden');
        if (isOpen) {
            panel.classList.add('hub-lb-hidden');
            rowEl.classList.remove('hub-lb-level-row-open');
            rowEl.setAttribute('aria-expanded', 'false');
            this._openLevelKey = null;
            return;
        }

        // Close previously open panel
        if (this._openLevelKey) {
            const prev = document.getElementById(`hub-lb-panel-${this._openLevelKey}`);
            if (prev) prev.classList.add('hub-lb-hidden');
            const prevRow = this._content.querySelector(`[data-key="${this._openLevelKey}"]`);
            if (prevRow) {
                prevRow.classList.remove('hub-lb-level-row-open');
                prevRow.setAttribute('aria-expanded', 'false');
            }
        }

        this._openLevelKey = levelKey;
        panel.classList.remove('hub-lb-hidden');
        rowEl.classList.add('hub-lb-level-row-open');
        rowEl.setAttribute('aria-expanded', 'true');
        panel.innerHTML = '<div class="hub-lb-loading">Loading…</div>';

        const entries = await Leaderboard.fetchTop10(app, levelKey);
        panel.innerHTML = this._renderEntries(entries);
    }

    _renderEntries(entries) {
        if (entries.length === 0) {
            return '<p class="leaderboard-empty">No entries yet — be the first!</p>';
        }

        const currentUserId = window.supabaseUser?.id ?? null;
        let html = '<ol class="leaderboard-list">';
        entries.forEach((entry, i) => {
            const isYou = currentUserId && entry.user_id === currentUserId;
            const emoji = RATING_EMOJIS[entry.rating_key] || '📚';
            const time = _hubFormatTime(entry.best_time);
            const rank = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
            const youClass = isYou ? ' leaderboard-entry-you' : '';
            const youBadge = isYou ? ' <span class="leaderboard-you-badge">you</span>' : '';
            const avatarUrl = entry.profiles?.avatar_url;
            const avatarHtml = avatarUrl
                ? `<img class="leaderboard-avatar" src="${_hubEscape(avatarUrl)}" alt="" loading="lazy">`
                : `<span class="leaderboard-avatar leaderboard-avatar-fallback">${_hubEscape((entry.display_name || 'A')[0].toUpperCase())}</span>`;

            html += `<li class="leaderboard-entry${youClass}">
                <span class="leaderboard-rank">${rank}</span>
                ${avatarHtml}
                <span class="leaderboard-name">${_hubAbbreviateName(entry.display_name)}${youBadge}</span>
                <span class="leaderboard-time">${time}</span>
                <span class="leaderboard-rating-emoji">${emoji}</span>
            </li>`;
        });
        html += '</ol>';
        return html;
    }
}

function _hubFormatTime(ms) {
    if (!ms || ms < 0) ms = 0;
    const totalSeconds = Math.floor(ms / 1000);
    const tenths = Math.floor((ms % 1000) / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return minutes > 0
        ? `${minutes}:${secs}.${tenths}`
        : `${secs}.${tenths}s`;
}

function _hubAbbreviateName(name) {
    if (!name) return 'Anonymous';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return _hubEscape(parts[0]);
    return _hubEscape(parts[0]) + ' ' + _hubEscape(parts[parts.length - 1][0]);
}

function _hubEscape(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Initialise after DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const hub = new HubLeaderboard();

    document.getElementById('hub-lb-open-btn').addEventListener('click', () => hub.open());
    document.getElementById('hub-lb-close').addEventListener('click', () => hub.close());

    document.getElementById('hub-lb-overlay').addEventListener('click', e => {
        if (e.target === e.currentTarget) hub.close();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') hub.close();
    });

    document.querySelectorAll('.hub-lb-tab').forEach(btn => {
        btn.addEventListener('click', () => hub.switchTab(btn.dataset.app));
    });
});
