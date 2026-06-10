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
        { maxAvg: 1.5, name: "Maths Queen", key: "true-mastery" },
        { maxAvg: 2.5, name: "Mastery", key: "mastery" },
        { maxAvg: 3.5, name: "Expert", key: "expert" },
        { maxAvg: 5, name: "Developing", key: "developing" },
        { maxAvg: Infinity, name: "Beginner", key: "beginner" }
    ],
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        // Foundational Skills - Add Subtract Terms
        'addSubtractTermsEasy': 1.8,
        'addSubtractTermsMedium': 2.6,
        'addSubtractTermsHard': 4.2,

        // Foundational Skills - Multiply Terms
        'multiplyTermsEasy': 1.5,
        'multiplyTermsMedium': 2.2,
        'multiplyTermsHard': 4.0,

        // Foundational Skills - Divide Terms
        'divideTermsEasy': 1.8,
        'divideTermsMedium': 3,
        'divideTermsHard': 4.2,

        // Foundational Skills - Mixed Simplification
        'mixedSimplificationEasy': 1.5,
        'mixedSimplificationMedium': 2,
        'mixedSimplificationHard': 4,

        // Foundational Skills - Expand Single Brackets
        'expandSingleBracketsEasy': 1.8,
        'expandSingleBracketsMedium': 2.4,
        'expandSingleBracketsHard': 5,

        // Foundational Skills - Multiplication Index Law
        'multiplicationIndexLawEasy': 2,
        'multiplicationIndexLawMedium': 3.4,
        'multiplicationIndexLawHard': 5.5,

        // Foundational Skills - Division Index Law
        'divisionIndexLawEasy': 2,
        'divisionIndexLawMedium': 4,
        'divisionIndexLawHard': 4.5,

        // Foundational Skills - Power of Power & Zero Power
        'powerOfPowerAndZeroPowerEasy': 1.5,
        'powerOfPowerAndZeroPowerMedium': 2.5,
        'powerOfPowerAndZeroPowerHard': 6,

        // Foundational Skills - Mixed Index Laws
        'mixedIndexLawsEasy': 1.8,
        'mixedIndexLawsMedium': 3,
        'mixedIndexLawsHard': 11,

        // Foundational Skills - Order of Operations
        'orderOfOperationsEasy': 2,
        'orderOfOperationsMedium': 3.8,
        'orderOfOperationsHard': 8.3,

        // Foundational Skills - Factorise into Single Brackets
        'factoriseIntoSingleBracketsEasy': 2.5,
        'factoriseIntoSingleBracketsMedium': 5,
        'factoriseIntoSingleBracketsHard': 6,

        // Intermediate Skills - Expand & Simplify
        'expandAndSimplifyEasy': 3,
        'expandAndSimplifyMedium': 4,
        'expandAndSimplifyHard': 6,

        // Intermediate Skills - Expand Binomial Products
        'expandBinomialProductsEasy': 3,
        'expandBinomialProductsMedium': 7,
        'expandBinomialProductsHard': 24,

        // Intermediate Skills - Power of Products and Quotients
        'powerOfProductsAndQuotientsEasy': 2.5,
        'powerOfProductsAndQuotientsMedium': 4,
        'powerOfProductsAndQuotientsHard': 15,

        // Intermediate Skills - Add Subtract Algebraic Fractions
        'addSubtractAlgebraicFractionsEasy': 2,
        'addSubtractAlgebraicFractionsMedium': 7,
        'addSubtractAlgebraicFractionsHard': 10,

        // Intermediate Skills - Multiply Divide Algebraic Fractions
        'multiplyDivideAlgebraicFractionsEasy': 4,
        'multiplyDivideAlgebraicFractionsMedium': 8,
        'multiplyDivideAlgebraicFractionsHard': 24,

        // Intermediate Skills - Negative Indices
        'negativeIndicesEasy': 2,
        'negativeIndicesMedium': 4.0,
        'negativeIndicesHard': 20,

        // Intermediate Skills - Factorise Monic Quadratic Trinomials
        'factoriseMonicQuadraticTrinomialsEasy': 3,
        'factoriseMonicQuadraticTrinomialsMedium': 5,
        'factoriseMonicQuadraticTrinomialsHard': 8,


        // Advanced Skills - Add Subtract Fractions with Binomial Numerator
        'addSubtractFractionsWithBinomialNumeratorEasy': 10,
        'addSubtractFractionsWithBinomialNumeratorMedium': 20,
        'addSubtractFractionsWithBinomialNumeratorHard': 25,

        // Advanced Skills - Expand Perfect Squares
        'expandPerfectSquaresEasy': 3,
        'expandPerfectSquaresMedium': 5,
        'expandPerfectSquaresHard': 8,

        // Advanced Skills - Expand Difference of Two Squares
        'expandDifferenceOfTwoSquaresEasy': 2,
        'expandDifferenceOfTwoSquaresMedium': 3,
        'expandDifferenceOfTwoSquaresHard': 5,

        // Advanced Skills - Factorise Difference of Two Squares
        'factoriseDifferenceOfTwoSquaresEasy': 4,
        'factoriseDifferenceOfTwoSquaresMedium': 7,
        'factoriseDifferenceOfTwoSquaresHard': 12,

        // Advanced Skills - Factorise Perfect Squares
        'factorisePerfectSquaresEasy': 2,
        'factorisePerfectSquaresMedium': 4,
        'factorisePerfectSquaresHard': 6,

        // Advanced Skills - Mixed Expansion
        'mixedExpansionEasy': 3,
        'mixedExpansionMedium': 8,
        'mixedExpansionHard': 8,

        // Advanced Skills - Notice Binomial Factors
        'noticeBinomialFactorsEasy': 3,
        'noticeBinomialFactorsMedium': 4,
        'noticeBinomialFactorsHard': 33,

        // Advanced Skills - Group in Pairs
        'groupInPairsEasy': 8,
        'groupInPairsMedium': 10,
        'groupInPairsHard': 20,

        // Advanced Skills - Factorise Non-monic Quadratic Trinomials
        'factoriseNonMonicQuadraticTrinomialsEasy': 10,
        'factoriseNonMonicQuadraticTrinomialsMedium': 24,
        'factoriseNonMonicQuadraticTrinomialsHard': 40,

        // Advanced Skills - Mixed Factorisation
        'mixedFactorisationEasy': 5,
        'mixedFactorisationMedium': 20,
        'mixedFactorisationHard': 38,

        // Advanced Skills - Finish Factorising
        'finishFactorisingEasy': 4,
        'finishFactorisingMedium': 6,
        'finishFactorisingHard': 10,

        // Advanced Skills - Simplify Algebraic Fractions by Factorising
        'simplifyAlgebraicFractionsByFactorisingEasy': 4,
        'simplifyAlgebraicFractionsByFactorisingMedium': 6,
        'simplifyAlgebraicFractionsByFactorisingHard': 12,

        // Advanced Skills - Multiply Divide Algebraic Fractions by Factorising
        'multiplyDivideAlgebraicFractionsByFactorisingEasy': 5,
        'multiplyDivideAlgebraicFractionsByFactorisingMedium': 17,
        'multiplyDivideAlgebraicFractionsByFactorisingHard': 37,

        // Advanced Skills - Add Subtract Fractions by Factorising Denominator
        'addSubtractFractionsByFactorisingDenominatorEasy': 15,
        'addSubtractFractionsByFactorisingDenominatorMedium': 18,
        'addSubtractFractionsByFactorisingDenominatorHard': 30,

        // Advanced Skills - Compound Fractions
        'compoundFractionsEasy': 5,
        'compoundFractionsMedium': 8,
        'compoundFractionsHard': 30,

        // Advanced Skills - Simplify Surds
        'simplifySurdsEasy': 3,
        'simplifySurdsMedium': 5,
        'simplifySurdsHard': 6,

        // Advanced Skills - Add Subtract Surds
        'addSubtractSurdsEasy': 4,
        'addSubtractSurdsMedium': 10,
        'addSubtractSurdsHard': 13,

        // Advanced Skills - Multiply Divide Surds
        'multiplyDivideSurdsEasy': 4,
        'multiplyDivideSurdsMedium': 8,
        'multiplyDivideSurdsHard': 34,

        // Advanced Skills - Expand Brackets with Surds
        'expandBracketsWithSurdsEasy': 4,
        'expandBracketsWithSurdsMedium': 10,
        'expandBracketsWithSurdsHard': 22,

        // Advanced Skills - Rationalise the Denominator
        'rationaliseTheDenominatorEasy': 5,
        'rationaliseTheDenominatorMedium': 12,
        'rationaliseTheDenominatorHard': 18,

        // Advanced Skills - Rationalise Binomial Denominator
        'rationaliseBinomialDenominatorEasy': 19,
        'rationaliseBinomialDenominatorMedium': 28,
        'rationaliseBinomialDenominatorHard': 46,

        // Advanced Skills - Evaluate Fractional Indices
        'evaluateFractionalIndicesEasy': 1.5,
        'evaluateFractionalIndicesMedium': 4,
        'evaluateFractionalIndicesHard': 6,

        // Advanced Skills - Surd Form to Index Form
        'surdFormToIndexFormEasy': 3,
        'surdFormToIndexFormMedium': 4,
        'surdFormToIndexFormHard': 12,

        // Advanced Skills - Index Form to Surd Form
        'indexFormToSurdFormEasy': 4,
        'indexFormToSurdFormMedium': 8,
        'indexFormToSurdFormHard': 15,

        // Advanced Skills - Complete the Square
        'completeTheSquareEasy': 5,
        'completeTheSquareMedium': 10,
        'completeTheSquareHard': 20,

        // Advanced Skills - Factorise with Indices
        'factoriseWithIndicesEasy': 5,
        'factoriseWithIndicesMedium': 10,
        'factoriseWithIndicesHard': 20,

        // Advanced Skills - Splitting the Numerator
        'splittingTheNumeratorEasy': 4,
        'splittingTheNumeratorMedium': 8,
        'splittingTheNumeratorHard': 16,
    },
    STORAGE_PREFIX: 'algebra_bestTime_v1_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};
