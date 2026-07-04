// config.js
// Level metadata lives in shared/levelRegistry.js (loaded as a classic script
// before this module). Edit it there to add or rename levels.
export const CONFIG = {
    LEVEL_GROUPS: window.LevelRegistry.algebra.LEVEL_GROUPS,
    REQUIRED_STREAK: 10,
    FEEDBACK_DELAY_CORRECT: 300,
    FEEDBACK_DELAY_INCORRECT: 1000,
    POSITIVE_FEEDBACK: ["Awesome!", "Great Job!", "You got it!", "Fantastic!", "Brilliant!", "Keep it up!", "Nice!", "Correct!"],
    SECOND_CHANCE_FEEDBACK: ["Try again", "Not quite right", "Have another go!", "Take another shot at it!"],
    RATING_THRESHOLDS: [
        { maxAvg: 2, name: "Maths Queen", key: "true-mastery" },
        { maxAvg: 3, name: "Mastery", key: "mastery" },
        { maxAvg: 4, name: "Expert", key: "expert" },
        { maxAvg: 5, name: "Developing", key: "developing" },
        { maxAvg: Infinity, name: "Beginner", key: "beginner" }
    ],
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        // Foundational Skills - Add Subtract Terms
        'addSubtractTermsEasy': 2.0,
        'addSubtractTermsMedium': 2.5,
        'addSubtractTermsHard': 4,

        // Foundational Skills - Multiply Terms
        'multiplyTermsEasy': 1.5,
        'multiplyTermsMedium': 2.0,
        'multiplyTermsHard': 4,

        // Foundational Skills - Divide Terms
        'divideTermsEasy': 2.0,
        'divideTermsMedium': 2.5,
        'divideTermsHard': 4,

        // Foundational Skills - Mixed Simplification
        'mixedSimplificationEasy': 1.5,
        'mixedSimplificationMedium': 2.0,
        'mixedSimplificationHard': 4,

        // Foundational Skills - Expand Single Brackets
        'expandSingleBracketsEasy': 2.0,
        'expandSingleBracketsMedium': 2.0,
        'expandSingleBracketsHard': 4.5,

        // Foundational Skills - Multiplication Index Law
        'multiplicationIndexLawEasy': 2.0,
        'multiplicationIndexLawMedium': 3.0,
        'multiplicationIndexLawHard': 5,

        // Foundational Skills - Division Index Law
        'divisionIndexLawEasy': 1.5,
        'divisionIndexLawMedium': 4,
        'divisionIndexLawHard': 4,

        // Foundational Skills - Power of Power & Zero Power
        'powerOfPowerAndZeroPowerEasy': 1.5,
        'powerOfPowerAndZeroPowerMedium': 2.0,
        'powerOfPowerAndZeroPowerHard': 5,

        // Foundational Skills - Mixed Index Laws
        'mixedIndexLawsEasy': 1.5,
        'mixedIndexLawsMedium': 2.0,
        'mixedIndexLawsHard': 9,

        // Foundational Skills - Order of Operations
        'orderOfOperationsEasy': 2.0,
        'orderOfOperationsMedium': 3.0,
        'orderOfOperationsHard': 7,

        // Foundational Skills - Factorise into Single Brackets
        'factoriseIntoSingleBracketsEasy': 2.0,
        'factoriseIntoSingleBracketsMedium': 5,
        'factoriseIntoSingleBracketsHard': 5,

        // Intermediate Skills - Expand & Simplify
        'expandAndSimplifyEasy': 2.5,
        'expandAndSimplifyMedium': 4,
        'expandAndSimplifyHard': 5,

        // Intermediate Skills - Expand Binomial Products
        'expandBinomialProductsEasy': 2.5,
        'expandBinomialProductsMedium': 6,
        'expandBinomialProductsHard': 20,

        // Intermediate Skills - Power of Products and Quotients
        'powerOfProductsAndQuotientsEasy': 2.0,
        'powerOfProductsAndQuotientsMedium': 3.0,
        'powerOfProductsAndQuotientsHard': 11,

        // Intermediate Skills - Add Subtract Algebraic Fractions
        'addSubtractAlgebraicFractionsEasy': 1.5,
        'addSubtractAlgebraicFractionsMedium': 6,
        'addSubtractAlgebraicFractionsHard': 8,

        // Intermediate Skills - Multiply Divide Algebraic Fractions
        'multiplyDivideAlgebraicFractionsEasy': 2.0,
        'multiplyDivideAlgebraicFractionsMedium': 7,
        'multiplyDivideAlgebraicFractionsHard': 20,

        // Intermediate Skills - Negative Indices
        'negativeIndicesEasy': 1.5,
        'negativeIndicesMedium': 2.5,
        'negativeIndicesHard': 15,

        // Intermediate Skills - Factorise Monic Quadratic Trinomials
        'factoriseMonicQuadraticTrinomialsEasy': 2.5,
        'factoriseMonicQuadraticTrinomialsMedium': 4,
        'factoriseMonicQuadraticTrinomialsHard': 7,

        // Advanced Skills - Add Subtract Fractions with Binomial Numerator
        'addSubtractFractionsWithBinomialNumeratorEasy': 8,
        'addSubtractFractionsWithBinomialNumeratorMedium': 13,
        'addSubtractFractionsWithBinomialNumeratorHard': 14,

        // Advanced Skills - Expand Perfect Squares
        'expandPerfectSquaresEasy': 2.5,
        'expandPerfectSquaresMedium': 4,
        'expandPerfectSquaresHard': 7,

        // Advanced Skills - Expand Difference of Two Squares
        'expandDifferenceOfTwoSquaresEasy': 2.0,
        'expandDifferenceOfTwoSquaresMedium': 2.0,
        'expandDifferenceOfTwoSquaresHard': 3.0,

        // Advanced Skills - Factorise Difference of Two Squares
        'factoriseDifferenceOfTwoSquaresEasy': 3.5,
        'factoriseDifferenceOfTwoSquaresMedium': 6,
        'factoriseDifferenceOfTwoSquaresHard': 10,

        // Advanced Skills - Factorise Perfect Squares
        'factorisePerfectSquaresEasy': 2.0,
        'factorisePerfectSquaresMedium': 2.5,
        'factorisePerfectSquaresHard': 4,

        // Advanced Skills - Mixed Expansion
        'mixedExpansionEasy': 2.0,
        'mixedExpansionMedium': 7,
        'mixedExpansionHard': 6,

        // Advanced Skills - Notice Binomial Factors
        'noticeBinomialFactorsEasy': 2.5,
        'noticeBinomialFactorsMedium': 4,
        'noticeBinomialFactorsHard': 27,

        // Advanced Skills - Group in Pairs
        'groupInPairsEasy': 4,
        'groupInPairsMedium': 7,
        'groupInPairsHard': 16,

        // Advanced Skills - Factorise Non-monic Quadratic Trinomials
        'factoriseNonMonicQuadraticTrinomialsEasy': 7,
        'factoriseNonMonicQuadraticTrinomialsMedium': 19,
        'factoriseNonMonicQuadraticTrinomialsHard': 24,

        // Advanced Skills - Mixed Factorisation
        'mixedFactorisationEasy': 3.0,
        'mixedFactorisationMedium': 15,
        'mixedFactorisationHard': 30,

        // Advanced Skills - Finish Factorising
        'finishFactorisingEasy': 3.0,
        'finishFactorisingMedium': 5,
        'finishFactorisingHard': 6,

        // Advanced Skills - Simplify Algebraic Fractions by Factorising
        'simplifyAlgebraicFractionsByFactorisingEasy': 2.0,
        'simplifyAlgebraicFractionsByFactorisingMedium': 4,
        'simplifyAlgebraicFractionsByFactorisingHard': 8,

        // Advanced Skills - Multiply Divide Algebraic Fractions by Factorising
        'multiplyDivideAlgebraicFractionsByFactorisingEasy': 3.0,
        'multiplyDivideAlgebraicFractionsByFactorisingMedium': 14,
        'multiplyDivideAlgebraicFractionsByFactorisingHard': 30,

        // Advanced Skills - Add Subtract Fractions by Factorising Denominator
        'addSubtractFractionsByFactorisingDenominatorEasy': 11,
        'addSubtractFractionsByFactorisingDenominatorMedium': 13,
        'addSubtractFractionsByFactorisingDenominatorHard': 23,

        // Advanced Skills - Compound Fractions
        'compoundFractionsEasy': 2.0,
        'compoundFractionsMedium': 5,
        'compoundFractionsHard': 22,

        // Advanced Skills - Simplify Surds
        'simplifySurdsEasy': 1.5,
        'simplifySurdsMedium': 4,
        'simplifySurdsHard': 4,

        // Advanced Skills - Add Subtract Surds
        'addSubtractSurdsEasy': 2.0,
        'addSubtractSurdsMedium': 7,
        'addSubtractSurdsHard': 11,

        // Advanced Skills - Multiply Divide Surds
        'multiplyDivideSurdsEasy': 2.0,
        'multiplyDivideSurdsMedium': 6,
        'multiplyDivideSurdsHard': 18,

        // Advanced Skills - Expand Brackets with Surds
        'expandBracketsWithSurdsEasy': 2.0,
        'expandBracketsWithSurdsMedium': 8,
        'expandBracketsWithSurdsHard': 16,

        // Advanced Skills - Rationalise the Denominator
        'rationaliseTheDenominatorEasy': 2.5,
        'rationaliseTheDenominatorMedium': 6,
        'rationaliseTheDenominatorHard': 9,

        // Advanced Skills - Rationalise Binomial Denominator
        'rationaliseBinomialDenominatorEasy': 5,
        'rationaliseBinomialDenominatorMedium': 8,
        'rationaliseBinomialDenominatorHard': 10,

        // Advanced Skills - Evaluate Fractional Indices
        'evaluateFractionalIndicesEasy': 1.0,
        'evaluateFractionalIndicesMedium': 2.5,
        'evaluateFractionalIndicesHard': 6,

        // Advanced Skills - Surd Form to Index Form
        'surdFormToIndexFormEasy': 2.0,
        'surdFormToIndexFormMedium': 3.0,
        'surdFormToIndexFormHard': 3.0,

        // Advanced Skills - Index Form to Surd Form
        'indexFormToSurdFormEasy': 2.0,
        'indexFormToSurdFormMedium': 4,
        'indexFormToSurdFormHard': 5,

        // Advanced Skills - Complete the Square
        'completeTheSquareEasy': 4,
        'completeTheSquareMedium': 11,
        'completeTheSquareHard': 21,

        // Advanced Skills - Factorise with Indices
        'factoriseWithIndicesEasy': 5,
        'factoriseWithIndicesMedium': 8,
        'factoriseWithIndicesHard': 7,

        // Advanced Skills - Splitting the Numerator
        'splittingTheNumeratorEasy': 2.5,
        'splittingTheNumeratorMedium': 6,
        'splittingTheNumeratorHard': 6,
    },
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};
