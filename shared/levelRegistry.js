/**
 * Level registry — single source of truth for level metadata across all apps.
 *
 * Loaded as a classic script (must run BEFORE any app's ES module config.js
 * and BEFORE shared/hubLeaderboard.js). Exposes window.LevelRegistry.
 *
 * Each app's config.js consumes window.LevelRegistry[app].LEVEL_GROUPS instead
 * of duplicating the level structure. shared/hubLeaderboard.js derives its
 * HUB_LEVELS from the same source. The algebra dynamic script loader uses
 * the keys here to inject <script src="levels/{key}.js"> tags.
 *
 * Adding a new level: add one entry here and create the level file.
 */
window.LevelRegistry = {
    algebra: {
        appLabel: 'Algebra Skills',
        LEVEL_GROUPS: {
            "Foundational Skills": [
                { key: 'addSubtractTermsEasy', name: 'Add Subtract Terms<br>🥉', value: 'liketerms-easy' },
                { key: 'addSubtractTermsMedium', name: 'Add Subtract Terms<br>🥈', value: 'liketerms-medium' },
                { key: 'addSubtractTermsHard', name: 'Add Subtract Terms<br>🥇', value: 'liketerms-hard' },
                { key: 'multiplyTermsEasy', name: 'Multiply Terms<br>🥉', value: 'multiply-easy' },
                { key: 'multiplyTermsMedium', name: 'Multiply Terms<br>🥈', value: 'multiply-medium' },
                { key: 'multiplyTermsHard', name: 'Multiply Terms<br>🥇', value: 'multiply-hard' },
                { key: 'divideTermsEasy', name: 'Divide Terms<br>🥉', value: 'cancelling-easy' },
                { key: 'divideTermsMedium', name: 'Divide Terms<br>🥈', value: 'cancelling-medium' },
                { key: 'divideTermsHard', name: 'Divide Terms<br>🥇', value: 'cancelling-hard' },
                { key: 'mixedSimplificationEasy', name: 'Mixed Simplification<br>🥉', value: 'mixedalgsimp-easy' },
                { key: 'mixedSimplificationMedium', name: 'Mixed Simplification<br>🥈', value: 'mixedalgsimp-medium' },
                { key: 'mixedSimplificationHard', name: 'Mixed Simplification<br>🥇', value: 'mixedalgsimp-hard' },
                { key: 'expandSingleBracketsEasy', name: 'Expand Single Brackets<br>🥉', value: 'expansion-easy' },
                { key: 'expandSingleBracketsMedium', name: 'Expand Single Brackets<br>🥈', value: 'expansion-medium' },
                { key: 'expandSingleBracketsHard', name: 'Expand Single Brackets<br>🥇', value: 'expansion-hard' },
                { key: 'multiplicationIndexLawEasy', name: 'Multiplication Index Law<br>🥉', value: 'indexlaw-easy' },
                { key: 'multiplicationIndexLawMedium', name: 'Multiplication Index Law<br>🥈', value: 'indexlaw-medium' },
                { key: 'multiplicationIndexLawHard', name: 'Multiplication Index Law<br>🥇', value: 'indexlaw-hard' },
                { key: 'divisionIndexLawEasy', name: 'Division Index Law<br>🥉', value: 'indexlawdivision-easy' },
                { key: 'divisionIndexLawMedium', name: 'Division Index Law<br>🥈', value: 'indexlawdivision-medium' },
                { key: 'divisionIndexLawHard', name: 'Division Index Law<br>🥇', value: 'indexlawdivision-hard' },
                { key: 'powerOfPowerAndZeroPowerEasy', name: 'Power of Power & Zero Power<br>🥉', value: 'indexlawpower-easy' },
                { key: 'powerOfPowerAndZeroPowerMedium', name: 'Power of Power & Zero Power<br>🥈', value: 'indexlawpower-medium' },
                { key: 'powerOfPowerAndZeroPowerHard', name: 'Power of Power & Zero Power<br>🥇', value: 'indexlawpower-hard' },
                { key: 'mixedIndexLawsEasy', name: 'Mixed Index Laws<br>🥉', value: 'mixedindexlaws-easy' },
                { key: 'mixedIndexLawsMedium', name: 'Mixed Index Laws<br>🥈', value: 'mixedindexlaws-medium' },
                { key: 'mixedIndexLawsHard', name: 'Mixed Index Laws<br>🥇', value: 'mixedindexlaws-hard' },
                { key: 'orderOfOperationsEasy', name: 'Order of Operations<br>🥉', value: 'order-operations-easy' },
                { key: 'orderOfOperationsMedium', name: 'Order of Operations<br>🥈', value: 'order-operations-medium' },
                { key: 'orderOfOperationsHard', name: 'Order of Operations<br>🥇', value: 'order-operations-hard' },
                { key: 'factoriseIntoSingleBracketsEasy', name: 'Factorise into Single Brackets<br>🥉', value: 'factorising-easy' },
                { key: 'factoriseIntoSingleBracketsMedium', name: 'Factorise into Single Brackets<br>🥈', value: 'factorising-medium' },
                { key: 'factoriseIntoSingleBracketsHard', name: 'Factorise into Single Brackets<br>🥇', value: 'factorising-hard' },
            ],

            "Intermediate Skills": [
                { key: 'expandAndSimplifyEasy', name: 'Expand & Simplify<br>🥉', value: 'expanding-simplifying-easy' },
                { key: 'expandAndSimplifyMedium', name: 'Expand & Simplify<br>🥈', value: 'expanding-simplifying-medium' },
                { key: 'expandAndSimplifyHard', name: 'Expand & Simplify<br>🥇', value: 'expanding-simplifying-hard' },
                { key: 'expandBinomialProductsEasy', name: 'Expand Binomial Products<br>🥉', value: 'expanding-double-brackets-easy' },
                { key: 'expandBinomialProductsMedium', name: 'Expand Binomial Products<br>🥈', value: 'expanding-double-brackets-medium' },
                { key: 'expandBinomialProductsHard', name: 'Expand Binomial Products<br>🥇', value: 'expanding-double-brackets-hard' },
                { key: 'powerOfProductsAndQuotientsEasy', name: 'Power of Products and Quotients<br>🥉', value: 'power-product-quotient-easy' },
                { key: 'powerOfProductsAndQuotientsMedium', name: 'Power of Products and Quotients<br>🥈', value: 'power-product-quotient-medium' },
                { key: 'powerOfProductsAndQuotientsHard', name: 'Power of Products and Quotients<br>🥇', value: 'power-product-quotient-hard' },
                { key: 'addSubtractAlgebraicFractionsEasy', name: 'Add Subtract Algebraic Fractions<br>🥉', value: 'add-subtract-algebraic-fractions-easy' },
                { key: 'addSubtractAlgebraicFractionsMedium', name: 'Add Subtract Algebraic Fractions<br>🥈', value: 'add-subtract-algebraic-fractions-medium' },
                { key: 'addSubtractAlgebraicFractionsHard', name: 'Add Subtract Algebraic Fractions<br>🥇', value: 'add-subtract-algebraic-fractions-hard' },
                { key: 'multiplyDivideAlgebraicFractionsEasy', name: 'Multiply Divide Algebraic Fractions<br>🥉', value: 'multiply-divide-algebraic-fractions-easy' },
                { key: 'multiplyDivideAlgebraicFractionsMedium', name: 'Multiply Divide Algebraic Fractions<br>🥈', value: 'multiply-divide-algebraic-fractions-medium' },
                { key: 'multiplyDivideAlgebraicFractionsHard', name: 'Multiply Divide Algebraic Fractions<br>🥇', value: 'multiply-divide-algebraic-fractions-hard' },
                { key: 'negativeIndicesEasy', name: 'Negative Indices<br>🥉', value: 'negative-indices-easy' },
                { key: 'negativeIndicesMedium', name: 'Negative Indices<br>🥈', value: 'negative-indices-medium' },
                { key: 'negativeIndicesHard', name: 'Negative Indices<br>🥇', value: 'negative-indices-hard' },
                { key: 'factoriseMonicQuadraticTrinomialsEasy', name: 'Factorise Monic Quadratic Trinomials<br>🥉', value: 'factorising-monic-quadratic-trinomials-easy' },
                { key: 'factoriseMonicQuadraticTrinomialsMedium', name: 'Factorise Monic Quadratic Trinomials<br>🥈', value: 'factorising-monic-quadratic-trinomials-medium' },
                { key: 'factoriseMonicQuadraticTrinomialsHard', name: 'Factorise Monic Quadratic Trinomials<br>🥇', value: 'factorising-monic-quadratic-trinomials-hard' },
            ],

            "Advanced Skills": [
                { key: 'addSubtractFractionsWithBinomialNumeratorEasy', name: 'Add Subtract Fractions with Binomial Numerator<br>🥉', value: 'add-subtract-fractions-binomial-easy' },
                { key: 'addSubtractFractionsWithBinomialNumeratorMedium', name: 'Add Subtract Fractions with Binomial Numerator<br>🥈', value: 'add-subtract-fractions-binomial-medium' },
                { key: 'addSubtractFractionsWithBinomialNumeratorHard', name: 'Add Subtract Fractions with Binomial Numerator<br>🥇', value: 'add-subtract-fractions-binomial-hard' },
                { key: 'expandPerfectSquaresEasy', name: 'Expand Perfect Squares<br>🥉', value: 'expanding-perfect-squares-easy' },
                { key: 'expandPerfectSquaresMedium', name: 'Expand Perfect Squares<br>🥈', value: 'expanding-perfect-squares-medium' },
                { key: 'expandPerfectSquaresHard', name: 'Expand Perfect Squares<br>🥇', value: 'expanding-perfect-squares-hard' },
                { key: 'expandDifferenceOfTwoSquaresEasy', name: 'Expand Difference of Two Squares<br>🥉', value: 'expanding-difference-of-two-squares-easy' },
                { key: 'expandDifferenceOfTwoSquaresMedium', name: 'Expand Difference of Two Squares<br>🥈', value: 'expanding-difference-of-two-squares-medium' },
                { key: 'expandDifferenceOfTwoSquaresHard', name: 'Expand Difference of Two Squares<br>🥇', value: 'expanding-difference-of-two-squares-hard' },
                { key: 'mixedExpansionEasy', name: 'Mixed Expansion<br>🥉', value: 'mixed-expansion-easy' },
                { key: 'mixedExpansionMedium', name: 'Mixed Expansion<br>🥈', value: 'mixed-expansion-medium' },
                { key: 'mixedExpansionHard', name: 'Mixed Expansion<br>🥇', value: 'mixed-expansion-hard' },
                { key: 'factorisePerfectSquaresEasy', name: 'Factorise Perfect Squares<br>🥉', value: 'perfect-square-factorisation-easy' },
                { key: 'factorisePerfectSquaresMedium', name: 'Factorise Perfect Squares<br>🥈', value: 'perfect-square-factorisation-medium' },
                { key: 'factorisePerfectSquaresHard', name: 'Factorise Perfect Squares<br>🥇', value: 'perfect-square-factorisation-hard' },
                { key: 'factoriseDifferenceOfTwoSquaresEasy', name: 'Factorise Difference of Two Squares<br>🥉', value: 'difference-of-two-squares-easy' },
                { key: 'factoriseDifferenceOfTwoSquaresMedium', name: 'Factorise Difference of Two Squares<br>🥈', value: 'difference-of-two-squares-medium' },
                { key: 'factoriseDifferenceOfTwoSquaresHard', name: 'Factorise Difference of Two Squares<br>🥇', value: 'difference-of-two-squares-hard' },
                { key: 'noticeBinomialFactorsEasy', name: 'Notice Binomial Factors<br>🥉', value: 'binomial-factors-easy' },
                { key: 'noticeBinomialFactorsMedium', name: 'Notice Binomial Factors<br>🥈', value: 'binomial-factors-medium' },
                { key: 'noticeBinomialFactorsHard', name: 'Notice Binomial Factors<br>🥇', value: 'binomial-factors-hard' },
                { key: 'groupInPairsEasy', name: 'Group in Pairs<br>🥉', value: 'grouping-pairs-easy' },
                { key: 'groupInPairsMedium', name: 'Group in Pairs<br>🥈', value: 'grouping-pairs-medium' },
                { key: 'groupInPairsHard', name: 'Group in Pairs<br>🥇', value: 'grouping-pairs-hard' },
                { key: 'factoriseNonMonicQuadraticTrinomialsEasy', name: 'Factorise Non-monic Quadratic Trinomials<br>🥉', value: 'factorising-non-monic-quadratic-trinomials-easy' },
                { key: 'factoriseNonMonicQuadraticTrinomialsMedium', name: 'Factorise Non-monic Quadratic Trinomials<br>🥈', value: 'factorising-non-monic-quadratic-trinomials-medium' },
                { key: 'factoriseNonMonicQuadraticTrinomialsHard', name: 'Factorise Non-monic Quadratic Trinomials<br>🥇', value: 'factorising-non-monic-quadratic-trinomials-hard' },
                { key: 'mixedFactorisationEasy', name: 'Mixed Factorisation<br>🥉', value: 'mixed-factorisation-easy' },
                { key: 'mixedFactorisationMedium', name: 'Mixed Factorisation<br>🥈', value: 'mixed-factorisation-medium' },
                { key: 'mixedFactorisationHard', name: 'Mixed Factorisation<br>🥇', value: 'mixed-factorisation-hard' },
                { key: 'finishFactorisingEasy', name: 'Finish Factorising<br>🥉', value: 'finish-factorising-easy' },
                { key: 'finishFactorisingMedium', name: 'Finish Factorising<br>🥈', value: 'finish-factorising-medium' },
                { key: 'finishFactorisingHard', name: 'Finish Factorising<br>🥇', value: 'finish-factorising-hard' },
                { key: 'simplifyAlgebraicFractionsByFactorisingEasy', name: 'Simplify Algebraic Fractions by Factorising<br>🥉', value: 'simplify-algebraic-fractions-easy' },
                { key: 'simplifyAlgebraicFractionsByFactorisingMedium', name: 'Simplify Algebraic Fractions by Factorising<br>🥈', value: 'simplify-algebraic-fractions-medium' },
                { key: 'simplifyAlgebraicFractionsByFactorisingHard', name: 'Simplify Algebraic Fractions by Factorising<br>🥇', value: 'simplify-algebraic-fractions-hard' },
                { key: 'multiplyDivideAlgebraicFractionsByFactorisingEasy', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥉', value: 'multiply-divide-algebraic-fractions-by-factorising-easy' },
                { key: 'multiplyDivideAlgebraicFractionsByFactorisingMedium', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥈', value: 'multiply-divide-algebraic-fractions-by-factorising-medium' },
                { key: 'multiplyDivideAlgebraicFractionsByFactorisingHard', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥇', value: 'multiply-divide-algebraic-fractions-by-factorising-hard' },
                { key: 'addSubtractFractionsByFactorisingDenominatorEasy', name: 'Add Subtract Fractions by Factorising Denominator<br>🥉', value: 'add-subtract-fractions-factorising-easy' },
                { key: 'addSubtractFractionsByFactorisingDenominatorMedium', name: 'Add Subtract Fractions by Factorising Denominator<br>🥈', value: 'add-subtract-fractions-factorising-medium' },
                { key: 'addSubtractFractionsByFactorisingDenominatorHard', name: 'Add Subtract Fractions by Factorising Denominator<br>🥇', value: 'add-subtract-fractions-factorising-hard' },
                { key: 'compoundFractionsEasy', name: 'Compound Fractions<br>🥉', value: 'compound-fractions-easy' },
                { key: 'compoundFractionsMedium', name: 'Compound Fractions<br>🥈', value: 'compound-fractions-medium' },
                { key: 'compoundFractionsHard', name: 'Compound Fractions<br>🥇', value: 'compound-fractions-hard' },
                { key: 'simplifySurdsEasy', name: 'Simplify Surds<br>🥉', value: 'surd-simplification-easy' },
                { key: 'simplifySurdsMedium', name: 'Simplify Surds<br>🥈', value: 'surd-simplification-medium' },
                { key: 'simplifySurdsHard', name: 'Simplify Surds<br>🥇', value: 'surd-simplification-hard' },
                { key: 'addSubtractSurdsEasy', name: 'Add Subtract Surds<br>🥉', value: 'adding-subtracting-surds-easy' },
                { key: 'addSubtractSurdsMedium', name: 'Add Subtract Surds<br>🥈', value: 'adding-subtracting-surds-medium' },
                { key: 'addSubtractSurdsHard', name: 'Add Subtract Surds<br>🥇', value: 'adding-subtracting-surds-hard' },
                { key: 'multiplyDivideSurdsEasy', name: 'Multiply Divide Surds<br>🥉', value: 'multiplying-dividing-surds-easy' },
                { key: 'multiplyDivideSurdsMedium', name: 'Multiply Divide Surds<br>🥈', value: 'multiplying-dividing-surds-medium' },
                { key: 'multiplyDivideSurdsHard', name: 'Multiply Divide Surds<br>🥇', value: 'multiplying-dividing-surds-hard' },
                { key: 'expandBracketsWithSurdsEasy', name: 'Expand Brackets with Surds<br>🥉', value: 'expanding-surds-easy' },
                { key: 'expandBracketsWithSurdsMedium', name: 'Expand Brackets with Surds<br>🥈', value: 'expanding-surds-medium' },
                { key: 'expandBracketsWithSurdsHard', name: 'Expand Brackets with Surds<br>🥇', value: 'expanding-surds-hard' },
                { key: 'rationaliseTheDenominatorEasy', name: 'Rationalise the Denominator<br>🥉', value: 'rationalising-denominator-easy' },
                { key: 'rationaliseTheDenominatorMedium', name: 'Rationalise the Denominator<br>🥈', value: 'rationalising-denominator-medium' },
                { key: 'rationaliseTheDenominatorHard', name: 'Rationalise the Denominator<br>🥇', value: 'rationalising-denominator-hard' },
                { key: 'rationaliseBinomialDenominatorEasy', name: 'Rationalise Binomial Denominator<br>🥉', value: 'further-rationalising-denominator-easy' },
                { key: 'rationaliseBinomialDenominatorMedium', name: 'Rationalise Binomial Denominator<br>🥈', value: 'further-rationalising-denominator-medium' },
                { key: 'rationaliseBinomialDenominatorHard', name: 'Rationalise Binomial Denominator<br>🥇', value: 'further-rationalising-denominator-hard' },
                { key: 'evaluateFractionalIndicesEasy', name: 'Evaluate Fractional Indices<br>🥉', value: 'evaluating-fractional-indices-easy' },
                { key: 'evaluateFractionalIndicesMedium', name: 'Evaluate Fractional Indices<br>🥈', value: 'evaluating-fractional-indices-medium' },
                { key: 'evaluateFractionalIndicesHard', name: 'Evaluate Fractional Indices<br>🥇', value: 'evaluating-fractional-indices-hard' },
                { key: 'surdFormToIndexFormEasy', name: 'Surd Form to Index Form<br>🥉', value: 'surd-to-index-easy' },
                { key: 'surdFormToIndexFormMedium', name: 'Surd Form to Index Form<br>🥈', value: 'surd-to-index-medium' },
                { key: 'surdFormToIndexFormHard', name: 'Surd Form to Index Form<br>🥇', value: 'surd-to-index-hard' },
                { key: 'indexFormToSurdFormEasy', name: 'Index Form to Surd Form<br>🥉', value: 'index-form-to-surd-form-easy' },
                { key: 'indexFormToSurdFormMedium', name: 'Index Form to Surd Form<br>🥈', value: 'index-form-to-surd-form-medium' },
                { key: 'indexFormToSurdFormHard', name: 'Index Form to Surd Form<br>🥇', value: 'index-form-to-surd-form-hard' },
            ]
        }
    },

    mathsfacts: {
        appLabel: 'Number Skills',
        LEVEL_GROUPS: {
            "Number Bonds": [
                { key: 'bonds10', name: 'Bonds to 10', value: 10 },
                { key: 'bonds20', name: 'Bonds to 20', value: 20 },
                { key: 'mixed10-20', name: 'Mixed Bonds 10-20', customMixedRange: [10, 20] },
                { key: 'bonds100', name: 'Bonds to 100', value: 100 },
                { key: 'bonds-10', name: 'Bonds to -10', value: -10 },
                { key: 'bonds-20', name: 'Bonds to -20', value: -20 },
            ],
            "Multiplication & Division": [
                { key: 'group245', name: '× 2 4 5 10' },
                { key: 'group369', name: '× 3 6 9' },
                { key: 'multall', name: '× 2 to 12' },
                { key: 'mixed-negative-mult', name: '× Negatives' },
                { key: 'integerOperations', name: 'Integer Operations' },
                { key: 'multiplyDivideBy100', name: '×÷ 100' },
                { key: 'powersOf10', name: '×÷ Powers of 10' },
                { key: 'double100', name: 'Doubling' },
                { key: 'squares', name: 'Perfect Squares' },
                { key: 'unitConversions', name: 'Unit Conversions' },
            ],
            "Fractions Decimals Percentages": [
                { key: 'hcf', name: 'HCF' },
                { key: 'lcm', name: 'LCM' },
                { key: 'equivFractions', name: 'Equivalent Fractions' },
                { key: 'simplifyFractions', name: 'Simplifying Fractions' },
                { key: 'fdpConversions', name: 'Common FDP Equivalences' },
                { key: 'fdpConversionsMultiples', name: 'FDP Conversions' },
                { key: 'roundingDecimals', name: 'Rounding Decimals' },
                { key: 'fractionOfQuantity', name: 'Fraction of a Quantity' },
                { key: 'percentageOfQuantity', name: 'Percentage of a Quantity' },
                { key: 'increaseDecreasePercentage', name: 'Increase Decrease by Percentage' },
            ]
        }
    },

    trigfacts: {
        appLabel: 'Trig Skills',
        LEVEL_GROUPS: {
            "Working in Degrees": [
                { key: 'exact_deg_mixed', name: 'Exact Values', type: 'exact', unit: 'deg' },
                { key: 'reference_angles', name: 'Reference Angles', type: 'reference_angles' },
                { key: 'equiv_deg', name: 'Equivalent Ratios', type: 'equivalent', unit: 'deg' },
                { key: 'quad_deg', name: 'Exact Values in all Quadrants', type: 'quadrant', unit: 'deg' },
            ],
            "Degree and Radian Conversion": [
                { key: 'simplify_fractions', name: 'Simplify Fractions<br>over 180', type: 'simplify_fractions' },
                { key: 'deg_to_rad', name: 'Degrees to Radians', type: 'conversion', direction: 'd2r' },
                { key: 'rad_to_deg', name: 'Radians to Degrees', type: 'conversion', direction: 'r2d' },
                { key: 'conv_mixed', name: 'Mixed Conversion', type: 'conversion', direction: 'mixed' },
            ],
            "Working in Radians": [
                { key: 'exact_rad_mixed', name: 'Exact Values', type: 'exact', unit: 'rad' },
                { key: 'reference_angles_rad', name: 'Reference Angles', type: 'reference_angles_rad' },
                { key: 'equiv_rad', name: 'Equivalent Ratios', type: 'equivalent', unit: 'rad' },
                { key: 'quad_rad', name: 'Exact Values in all Quadrants', type: 'quadrant', unit: 'rad' },
            ],
        }
    },

    equations: {
        appLabel: 'Equation Solving',
        LEVEL_GROUPS: {
            "Linear Equations": [
                { key: 'linearTwoStepEasy', name: 'Two-Step Linear<br>🥉', value: 'linear-easy' },
            ],
            "Quadratic Equations": [
                { key: 'quadraticFactorisableEasy', name: 'Factorisable Quadratic<br>🥉', value: 'quadratic-easy' },
            ],
            "Simultaneous Equations": [
                { key: 'simultaneousLinearEasy', name: 'Simultaneous Linear<br>🥉', value: 'simultaneous-easy' },
            ],
        }
    }
};
