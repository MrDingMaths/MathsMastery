/**
 * DarkMode - manages light/dark theme toggling and persistence.
 * Light is the default. Dark applies only when the visitor picks it with the header toggle.
 * Must be loaded in <head> without defer to prevent flash of wrong theme
 * (each page also sets data-theme from an inline head script before paint).
 */
const DarkMode = (() => {
    const KEY = 'mathsmastery-theme';

    const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
    const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>';

    function read() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }

    function apply(theme, persist = false) {
        document.documentElement.setAttribute('data-theme', theme);
        // Header toggle: shows the theme you would switch TO
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.innerHTML = theme === 'dark' ? SUN : MOON;
            btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
        });
        if (persist) {
            try { localStorage.setItem(KEY, theme); } catch (e) { /* storage blocked */ }
        }
    }

    function toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        apply(current === 'dark' ? 'light' : 'dark', true);
    }

    function init() {
        apply(read() === 'dark' ? 'dark' : 'light', false);
    }

    return { init, toggle, apply };
})();

DarkMode.init();
