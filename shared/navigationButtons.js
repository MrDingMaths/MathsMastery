/**
 * Site Header + Footer
 * Injects the shared suite header (brand, topic links, auth, theme toggle, app switcher),
 * the shared footer, and the mobile bottom nav.
 */

/* ---- Suite data (shared by header switcher and footer) ---- */
const SUITE_APPS = [
    { id: 'mrdingmaths', name: 'MrDingMaths', desc: 'Teaching notes, research and booklets', href: 'https://mrdingmaths.com', glyph: null },
    { id: 'mathsmap', name: 'MathsMap', desc: 'NSW skills and their prerequisites', href: 'https://mathsmap.mrdingmaths.com', glyph: 'map' },
    { id: 'mathsbase', name: 'MathsBase', desc: 'HSC questions and worksheets', href: 'https://mathsbase.mrdingmaths.com', glyph: 'base' },
    { id: 'mathsmastery', name: 'MathsMastery', desc: 'Timed drills for core skills', href: 'https://mathsmastery.mrdingmaths.com', glyph: 'mastery' },
];

const SUITE_GLYPHS = {
    map: '<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M8 24V9l8 8 8-8v15"/><circle cx="8" cy="9" r="2.6" fill="#F87171"/><circle cx="24" cy="9" r="2.6" fill="#F87171"/><circle cx="16" cy="17" r="3" fill="#fff"/><circle cx="8" cy="24" r="2.6" fill="#F87171"/><circle cx="24" cy="24" r="2.6" fill="#F87171"/></svg>',
    base: '<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><rect x="10" y="5" width="16" height="12" rx="2.5" stroke-opacity=".55"/><rect x="8" y="10" width="16" height="12" rx="2.5" fill="#F87171" stroke-opacity=".8"/><rect x="6" y="15" width="16" height="12" rx="2.5" fill="#F87171"/></svg>',
    mastery: '<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-linecap="round" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke-opacity=".35" stroke-width="2.4"/><circle cx="16" cy="16" r="12" stroke-width="2.4" stroke-dasharray="58 76" transform="rotate(-90 16 16)"/><path d="M11.5 12.2c1.6-.6 2.6.2 3.1 1.6l1.9 5.4c.5 1.4 1.5 2.2 3.1 1.6M20.4 12.4l-8.6 8.4" stroke-width="2.2"/></svg>',
};

const SUITE_ABOUT = {
    mrdingmaths: 'Research, curriculum maps and classroom resources for NSW mathematics teachers.',
    mathsmap: 'See how every NSW maths skill connects.',
    mathsbase: 'Free HSC practice questions and worksheets. Not affiliated with NESA.',
    mathsmastery: 'Timed drills for the most important skills in mathematics.',
};

const SUITE_CURRENT = 'mathsmastery';

function suiteTile(app, size, base) {
    // MrDingMaths uses its favicon image with no tile behind it; the rest are coral tiles
    if (app.id === 'mrdingmaths') {
        return `<span class="suite-tile suite-tile-ding ${size}"><img src="${base}shared/mrdingmaths-icon.png" alt="" width="40" height="40"></span>`;
    }
    return `<span class="suite-tile ${size}">${SUITE_GLYPHS[app.glyph]}</span>`;
}

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
        if (pathname.includes('/calculus/')) return 'calculus';
        return 'hub';
    }

    isSubpage() {
        // Pages are either at root (/) or one level deep (/algebra/, /mathsfacts/, /trigfacts/, /equations/, /calculus/)
        return /\/(algebra|mathsfacts|trigfacts|equations|calculus)\//.test(window.location.pathname);
    }

    getBasePath() {
        return this.isSubpage() ? '../' : './';
    }

    init() {
        const activePage = this.getActivePage();
        const base = this.getBasePath();

        const header = document.createElement('header');
        header.className = 'site-header';
        const inner = document.createElement('div');
        inner.className = 'site-header-inner';
        header.appendChild(inner);

        // Brand link -> hub (logo SVG and ring animation unchanged)
        const brand = document.createElement('a');
        brand.href = base;
        brand.className = 'site-header-brand';
        brand.innerHTML = `<svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false"><circle class="brand-ring-track" cx="24" cy="24" r="20" stroke-width="4.5"/><circle class="brand-ring" cx="24" cy="24" r="20" stroke="#E8443A" stroke-width="5" stroke-linecap="round" stroke-dasharray="103 130" transform="rotate(-90 24 24)"/><text class="brand-m" x="24" y="21" text-anchor="middle" dominant-baseline="central" font-family="serif" font-size="32">𝑥</text></svg><span class="site-header-brand-text">Maths<span class="site-header-brand-accent">Mastery</span></span>`;

        // Play the ring-fill animation on page load
        const ring = brand.querySelector('.brand-ring');
        if (ring) ring.classList.add('animate');

        // Nav links: plain text, blue underline on the active one
        const nav = document.createElement('nav');
        nav.className = 'site-header-nav';
        nav.setAttribute('aria-label', 'Topics');

        const links = [
            { href: base + 'mathsfacts/', label: 'Number', active: activePage === 'mathsfacts' },
            { href: base + 'algebra/', label: 'Algebra', active: activePage === 'algebra' },
            { href: base + 'equations/', label: 'Equations', active: activePage === 'equations' },
            { href: base + 'trigfacts/', label: 'Trigonometry', active: activePage === 'trig' },
            { href: base + 'calculus/', label: 'Calculus', active: activePage === 'calculus' },
        ];

        links.forEach(({ href, label, active }) => {
            const a = document.createElement('a');
            a.href = href;
            a.className = 'site-nav-link' + (active ? ' active' : '');
            if (active) a.setAttribute('aria-current', 'page');
            a.textContent = label;
            nav.appendChild(a);
        });

        // Theme toggle (icon button; icon/label set by DarkMode.apply)
        const themeBtn = document.createElement('button');
        themeBtn.type = 'button';
        themeBtn.className = 'icon-btn theme-toggle';
        themeBtn.addEventListener('click', () => DarkMode.toggle());

        // Auth: header button (hidden until supabase-auth-change fires) + mobile bottom-nav item
        const authContainer = document.createElement('div');
        authContainer.className = 'site-header-auth';
        authContainer.style.display = 'none';

        const bottomNav = document.createElement('nav');
        bottomNav.className = 'site-bottom-nav';
        bottomNav.setAttribute('aria-label', 'MathsMastery mobile');
        const iconTarget = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/></svg>';
        const iconChart = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>';
        const iconUser = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/></svg>';
        bottomNav.innerHTML =
            `<a href="${base}" aria-current="page">${iconTarget}<span>Drills</span></a>` +
            `<a href="${base}#panel-hof">${iconChart}<span>Hall of Fame</span></a>` +
            `<button type="button" class="site-bottom-signin">${iconUser}<span class="site-bottom-signin-label">Sign in</span></button>`;
        const bottomSignIn = bottomNav.querySelector('.site-bottom-signin');
        const bottomLabel = bottomNav.querySelector('.site-bottom-signin-label');
        let currentUser = null;

        const signIn = () => {
            if (window.supabaseClient) {
                window.supabaseClient.auth.signInWithOAuth({
                    provider: 'google',
                    options: { redirectTo: window.location.origin + window.location.pathname }
                });
            }
        };
        bottomSignIn.addEventListener('click', () => {
            if (currentUser) {
                if (window.confirm('Sign out?') && window.supabaseClient) window.supabaseClient.auth.signOut();
            } else {
                signIn();
            }
        });

        const updateAuthButton = ({ user }) => {
            currentUser = user || null;
            authContainer.style.display = '';
            authContainer.innerHTML = '';
            if (user) {
                const firstName = (user.user_metadata?.full_name || user.user_metadata?.name || '').split(' ')[0] || 'Account';
                bottomLabel.textContent = firstName;
                const pill = document.createElement('button');
                pill.className = 'auth-user-pill';
                pill.setAttribute('aria-label', 'Account menu');
                pill.setAttribute('aria-haspopup', 'true');
                const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
                pill.innerHTML = avatarUrl
                    ? `<img class="auth-avatar" src="${_escapeAttr(avatarUrl)}" alt="${_escapeAttr(firstName)}">`
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
                bottomLabel.textContent = 'Sign in';
                const btn = document.createElement('button');
                btn.className = 'auth-sign-in-btn';
                btn.textContent = 'Sign in';
                btn.addEventListener('click', signIn);
                authContainer.appendChild(btn);
            }
        };

        document.addEventListener('supabase-auth-change', (e) => updateAuthButton(e.detail));
        // If supabase-auth-change already fired before this listener registered, call directly
        if (typeof window.supabaseUser !== 'undefined') {
            updateAuthButton({ user: window.supabaseUser });
        }

        // App switcher: grid button + popover listing the four suite sites
        const switcher = document.createElement('div');
        switcher.className = 'suite-switcher';
        const switchBtn = document.createElement('button');
        switchBtn.type = 'button';
        switchBtn.className = 'icon-btn suite-switcher-btn';
        switchBtn.setAttribute('aria-label', 'Switch app');
        switchBtn.setAttribute('aria-haspopup', 'true');
        switchBtn.setAttribute('aria-expanded', 'false');
        switchBtn.setAttribute('aria-controls', 'suite-popover');
        switchBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>';
        const popover = document.createElement('div');
        popover.className = 'suite-popover';
        popover.id = 'suite-popover';
        popover.hidden = true;
        popover.innerHTML = '<p class="suite-eyebrow">MrDingMaths sites</p>' + SUITE_APPS.map(a =>
            `<a class="suite-app-row" href="${a.href}"${a.id === SUITE_CURRENT ? ' aria-current="true"' : ''}>${suiteTile(a, '', base)}<span><span class="suite-app-name">${a.name}</span><br><span class="suite-app-desc">${a.desc}</span></span>${a.id === SUITE_CURRENT ? '<span class="suite-here">You are here</span>' : ''}</a>`
        ).join('');
        switcher.appendChild(switchBtn);
        switcher.appendChild(popover);

        const setSwitcher = (open) => {
            switchBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            popover.hidden = !open;
        };
        switchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            setSwitcher(switchBtn.getAttribute('aria-expanded') !== 'true');
        });
        document.addEventListener('click', (e) => {
            if (!switcher.contains(e.target)) setSwitcher(false);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && switchBtn.getAttribute('aria-expanded') === 'true') {
                setSwitcher(false);
                switchBtn.focus();
            }
        });

        const right = document.createElement('div');
        right.className = 'site-header-right';
        right.appendChild(authContainer);
        right.appendChild(themeBtn);
        right.appendChild(switcher);

        inner.appendChild(brand);
        inner.appendChild(nav);
        inner.appendChild(right);

        document.body.insertBefore(header, document.body.firstChild);
        document.body.appendChild(this.buildFooter(base));
        document.body.appendChild(bottomNav);
        DarkMode.apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);

        // Push body content below the fixed header; footer sits below content
        document.body.classList.add('has-suite');
        document.body.style.paddingTop = this.isSubpage() ? '76px' : '60px';
    }

    buildFooter(base) {
        const me = SUITE_APPS.find(a => a.id === SUITE_CURRENT);
        const footer = document.createElement('footer');
        footer.className = 'site-footer';
        footer.innerHTML =
            `<div class="site-footer-inner">` +
            `<div class="site-footer-about">${suiteTile(me, 'sm', base)}<div><b>${me.name}</b>${SUITE_ABOUT[me.id]}</div></div>` +
            `<div><p class="suite-eyebrow">Other sites</p><div class="site-footer-others">` +
            SUITE_APPS.filter(a => a.id !== me.id).map(a => `<a href="${a.href}">${suiteTile(a, 'xs', base)}${a.name}</a>`).join('') +
            `</div></div>` +
            `<div class="site-footer-meta"><span>Questions or corrections:</span><span class="site-footer-email">admin@mrdingmaths.com</span><a href="${base}privacy-policy.html">Privacy policy</a></div>` +
            `</div>`;
        return footer;
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
