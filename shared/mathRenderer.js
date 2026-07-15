/**
 * MathRenderer — shared MathLive integration helpers.
 *
 * Sets one-time globals on MathfieldElement (no sounds, no font auto-loading
 * since mathlive-fonts.css already declares the @font-face rules), and renders
 * a LaTeX string into a container as static math markup using MathLive's
 * convertLatexToMarkup. Falls back to a read-only <math-field> if MathLive's
 * static renderer is not available.
 *
 * Used by all three apps (algebra, equations, trigfacts) and by shared/progressUI.js.
 */
(function () {
    let configured = false;

    function configureMathLiveGlobals() {
        if (configured) return;
        if (typeof window.MathfieldElement === 'undefined') return;
        window.MathfieldElement.soundsDirectory = null;
        window.MathfieldElement.fontsDirectory = null;
        configured = true;
    }

    function renderStaticLatex(container, latex) {
        if (!container) return;
        container.innerHTML = '';
        if (typeof window.MathLive !== 'undefined' && typeof window.MathLive.convertLatexToMarkup === 'function') {
            container.innerHTML = window.MathLive.convertLatexToMarkup(latex);
            return;
        }
        const field = document.createElement('math-field');
        field.setAttribute('read-only', '');
        field.style.border = 'none';
        field.style.background = 'transparent';
        field.value = latex;
        container.appendChild(field);
    }

    window.MathRenderer = {
        configureMathLiveGlobals,
        renderStaticLatex,
    };
})();
