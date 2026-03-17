/**
 * DarkMode - manages dark/light theme toggling, persistence, and system preference detection.
 * Must be loaded in <head> without defer to prevent flash of wrong theme.
 */
const DarkMode = (() => {
    const KEY = 'mathsmastery-theme';

    function getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.querySelectorAll('.dark-mode-toggle-icon').forEach(el => {
            el.textContent = theme === 'dark' ? '☀️' : '🌙';
        });
        localStorage.setItem(KEY, theme);
    }

    function toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        apply(current === 'dark' ? 'light' : 'dark');
    }

    function init() {
        const saved = localStorage.getItem(KEY);
        apply(saved || getSystemPreference());

        // Track system preference changes only when user hasn't set an explicit preference
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem(KEY)) {
                apply(e.matches ? 'dark' : 'light');
            }
        });
    }

    return { init, toggle };
})();

DarkMode.init();
