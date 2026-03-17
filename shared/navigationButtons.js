/**
 * Site Header
 * Injects a fixed top navigation header with links to all three apps.
 */

class SiteHeader {
    constructor() {
        this.init();
    }

    getActivePage() {
        const pathname = window.location.pathname;

        if (pathname.includes('/algebra/')) return 'algebra';
        if (pathname.includes('/trigfacts/')) return 'trig';
        if (pathname.includes('/mathsfacts/')) return 'mathsfacts';
        return 'hub';
    }

    getBasePath() {
        // Pages are either at root (/) or one level deep (/algebra/, /mathsfacts/, /trigfacts/)
        const isSubpage = /\/(algebra|mathsfacts|trigfacts)\//.test(window.location.pathname);
        return isSubpage ? '../' : './';
    }

    init() {
        const activePage = this.getActivePage();
        const base = this.getBasePath();

        const header = document.createElement('header');
        header.className = 'site-header';

        // Brand link → hub
        const brand = document.createElement('a');
        brand.href = base;
        brand.className = 'site-header-brand';
        brand.textContent = "Maths Mastery";

        // Nav links
        const nav = document.createElement('nav');
        nav.className = 'site-header-nav';

        const links = [
            {
                href: base + 'mathsfacts/',
                color: 'green',
                icon: '±',
                label: 'Number',
                active: activePage === 'mathsfacts',
            },
            {
                href: base + 'algebra/',
                color: 'blue',
                icon: '𝑥',
                label: 'Algebra',
                active: activePage === 'algebra',
            },
            {
                href: base + 'trigfacts/',
                color: 'red',
                icon: 'θ',
                label: 'Trig',
                active: activePage === 'trig',
            },
        ];

        links.forEach(({ href, color, icon, label, active }) => {
            const a = document.createElement('a');
            a.href = href;
            a.className = `site-nav-link site-nav-link-${color}${active ? ' active' : ''}`;
            a.innerHTML = `<span class="site-nav-link-icon">${icon}</span><span class="site-nav-link-label">${label}</span>`;
            nav.appendChild(a);
        });

        // Dark mode toggle button
        const darkToggle = document.createElement('button');
        darkToggle.className = 'dark-mode-toggle';
        darkToggle.setAttribute('aria-label', 'Toggle dark mode');
        darkToggle.innerHTML = '<span class="dark-mode-toggle-icon">🌙</span>';
        darkToggle.addEventListener('click', () => DarkMode.toggle());

        header.appendChild(brand);
        header.appendChild(nav);
        header.appendChild(darkToggle);

        document.body.insertBefore(header, document.body.firstChild);

        // Push body content below the fixed header
        document.body.style.paddingTop = '56px';
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new SiteHeader());
} else {
    new SiteHeader();
}
