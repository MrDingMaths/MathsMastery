/**
 * Supabase client initialisation.
 * Plain script (not ES module) — sets window.supabaseClient and window.supabaseUser.
 * Dispatches 'supabase-auth-change' on document when auth state changes.
 */
(async () => {
    const SUPABASE_URL = 'https://gaolhotbierqivrvixdu.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhb2xob3RiaWVycWl2cnZpeGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyOTUxODksImV4cCI6MjA5MDg3MTE4OX0.ZEhsQkQImKCTd3bGqY2I2UN8RKnOM338VFPnpUguy4Y';

    let supabase;
    try {
        const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
        supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (e) {
        console.warn('Supabase failed to load — leaderboard and auth unavailable.', e);
        return;
    }

    window.supabaseClient = supabase;
    window.supabaseUser = null;

    supabase.auth.onAuthStateChange((event, session) => {
        window.supabaseUser = session?.user || null;
        document.dispatchEvent(new CustomEvent('supabase-auth-change', {
            detail: { event, session, user: window.supabaseUser }
        }));
        if (event === 'SIGNED_IN' && window.supabaseUser) {
            syncBestTimesOnFirstSignIn(window.supabaseUser);
        }
    });

    // Check for existing session on page load
    const { data: { session } } = await supabase.auth.getSession();
    window.supabaseUser = session?.user || null;
    document.dispatchEvent(new CustomEvent('supabase-auth-change', {
        detail: { event: 'INITIAL_SESSION', session, user: window.supabaseUser }
    }));
})();

/**
 * On first sign-in, upload existing localStorage best times for the current app
 * to the leaderboard so prior scores appear immediately.
 * Only runs once per user per app (tracked via localStorage flag).
 */
async function syncBestTimesOnFirstSignIn(user) {
    const syncKey = `leaderboard_synced_${user.id}`;
    if (localStorage.getItem(syncKey)) return;

    // Determine which app we're in and its localStorage key prefix
    const path = window.location.pathname;
    let app, prefix;
    if (path.includes('/algebra')) {
        app = 'algebra';
        prefix = 'algebra_bestTime_v1_';
    } else if (path.includes('/mathsfacts')) {
        app = 'mathsfacts';
        prefix = 'mf_bestTime_v5_';
    } else if (path.includes('/trigfacts')) {
        app = 'trigfacts';
        prefix = 'tf_bestTime_v5_';
    } else {
        return; // Landing page — nothing to sync
    }

    // Wait for app to finish initialising (RatingUtils and CONFIG are set by app scripts)
    await new Promise(resolve => {
        if (window.RatingUtils && window.CONFIG) return resolve();
        const interval = setInterval(() => {
            if (window.RatingUtils && window.CONFIG) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
        setTimeout(() => { clearInterval(interval); resolve(); }, 5000);
    });

    if (!window.supabaseClient || !window.RatingUtils || !window.CONFIG) return;

    const displayName = user.user_metadata?.full_name || user.user_metadata?.name || 'Anonymous';
    const entries = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith(prefix)) continue;
        const levelKey = key.slice(prefix.length);
        const bestTime = parseInt(localStorage.getItem(key), 10);
        if (isNaN(bestTime) || bestTime <= 0) continue;
        try {
            const rating = window.RatingUtils.getRating(bestTime, levelKey);
            entries.push({
                user_id: user.id,
                app,
                level_key: levelKey,
                best_time: bestTime,
                rating_key: rating.key,
                rating_name: rating.name,
                display_name: displayName,
                updated_at: new Date().toISOString()
            });
        } catch (_) {
            // Skip levels that can't be rated
        }
    }

    if (entries.length > 0) {
        try {
            await window.supabaseClient
                .from('leaderboard_entries')
                .upsert(entries, { onConflict: 'user_id,app,level_key' });
        } catch (err) {
            console.warn('First-sign-in sync failed:', err);
        }
    }

    localStorage.setItem(syncKey, Date.now().toString());
}
