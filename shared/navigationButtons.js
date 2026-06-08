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
        if (pathname.includes('/equations/')) return 'equations';
        return 'hub';
    }

    getBasePath() {
        // Pages are either at root (/) or one level deep (/algebra/, /mathsfacts/, /trigfacts/, /equations/)
        const isSubpage = /\/(algebra|mathsfacts|trigfacts|equations)\//.test(window.location.pathname);
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
                href: base + 'equations/',
                color: 'teal',
                icon: '=',
                label: 'Equations',
                active: activePage === 'equations',
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

        // Auth button (hidden until supabase-auth-change fires)
        const authContainer = document.createElement('div');
        authContainer.className = 'site-header-auth';
        authContainer.style.display = 'none';

        const updateAuthButton = ({ user }) => {
            authContainer.style.display = '';
            authContainer.innerHTML = '';
            if (user) {
                const pill = document.createElement('button');
                pill.className = 'auth-user-pill';
                pill.setAttribute('aria-label', 'Account menu');
                const firstName = (user.user_metadata?.full_name || user.user_metadata?.name || '').split(' ')[0] || 'Account';
                const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
                pill.innerHTML = avatarUrl
                    ? `<img class="auth-avatar" src="${avatarUrl}" alt="${_escapeAttr(firstName)}">`
                    : `<span class="auth-avatar auth-avatar-initial">${_escapeAttr(firstName[0].toUpperCase())}</span>`;
                pill.innerHTML += `<span class="auth-user-name">${_escapeHtmlNav(firstName)}</span>`;

                let dropdownOpen = false;
                pill.addEventListener('click', (e) => {
                    e.stopPropagation();
                    dropdownOpen = !dropdownOpen;
                    let dropdown = authContainer.querySelector('.auth-dropdown');
                    if (dropdownOpen) {
                        if (!dropdown) {
                            dropdown = document.createElement('div');
                            dropdown.className = 'auth-dropdown';
                            dropdown.innerHTML = '<button class="auth-signout-btn">Sign out</button>';
                            dropdown.querySelector('.auth-signout-btn').addEventListener('click', () => {
                                if (window.supabaseClient) window.supabaseClient.auth.signOut();
                            });
                            authContainer.appendChild(dropdown);
                        }
                        dropdown.classList.add('open');
                    } else if (dropdown) {
                        dropdown.classList.remove('open');
                    }
                });
                document.addEventListener('click', () => {
                    dropdownOpen = false;
                    const dropdown = authContainer.querySelector('.auth-dropdown');
                    if (dropdown) dropdown.classList.remove('open');
                }, { once: true });

                authContainer.appendChild(pill);
            } else {
                const btn = document.createElement('button');
                btn.className = 'auth-sign-in-btn';
                btn.textContent = 'Sign in';
                btn.addEventListener('click', () => {
                    if (window.supabaseClient) {
                        window.supabaseClient.auth.signInWithOAuth({
                                provider: 'google',
                                options: { redirectTo: window.location.origin + window.location.pathname }
                            });
                    }
                });
                authContainer.appendChild(btn);
            }
        };

        document.addEventListener('supabase-auth-change', (e) => updateAuthButton(e.detail));
        // If supabase-auth-change already fired before this listener registered, call directly
        if (typeof window.supabaseUser !== 'undefined') {
            updateAuthButton({ user: window.supabaseUser });
        }

        const right = document.createElement('div');
        right.className = 'site-header-right';
        right.appendChild(darkToggle);
        right.appendChild(authContainer);

        header.appendChild(brand);
        header.appendChild(nav);
        header.appendChild(right);

        document.body.insertBefore(header, document.body.firstChild);

        // Push body content below the fixed header
        document.body.style.paddingTop = '56px';
    }
}

function _escapeHtmlNav(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}
function _escapeAttr(str) {
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new SiteHeader());
} else {
    new SiteHeader();
}
