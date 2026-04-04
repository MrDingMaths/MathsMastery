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
    });

    // Check for existing session on page load
    const { data: { session } } = await supabase.auth.getSession();
    window.supabaseUser = session?.user || null;
    document.dispatchEvent(new CustomEvent('supabase-auth-change', {
        detail: { event: 'INITIAL_SESSION', session, user: window.supabaseUser }
    }));
})();
