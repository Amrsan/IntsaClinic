// Supabase Configuration
// This file now contains CLIENT-SAFE credentials only

const SUPABASE_CONFIG = {
    url: 'https://djfbbxcvkwxwpkqqyjkr.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZmJieGN2a3d4d3BrcXF5amtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NjUzMDcsImV4cCI6MjA2MDU0MTMwN30.YYVIUX07RLhYhe7V-faBdN1n9jl7q7WnvSEFrxAboME'
};

// Export configuration for use in other files
window.SUPABASE_CONFIG = SUPABASE_CONFIG;

// PayMob Configuration - CLIENT-SAFE VALUES ONLY
// 🔒 SECURITY: API keys and HMAC secrets are now stored securely in Supabase Edge Functions
window.PAYMOB_CONFIG = {
    // Only include non-sensitive configuration that's safe to expose
    integrationId: '4832092',  // Safe to expose - not a secret
    iframeId: '867108',        // Safe to expose - not a secret
    
    // ✅ SECURITY IMPROVEMENT:
    // The following sensitive credentials have been moved to secure server environment:
    // - apiKey: Now stored in Supabase Edge Function environment variables
    // - hmacSecret: Now stored in Supabase Edge Function environment variables
    
    // Your PayMob API calls are now handled securely by Supabase Edge Functions
    // No sensitive data is exposed to client-side code
};

// PayMob Callback URLs Configuration
// These URLs will be used when redirecting from PayMob payment
// IMPORTANT: Set these EXACT URLs in your PayMob dashboard under Payment Integrations
window.PAYMOB_CALLBACK_URLS = {
    // Main callback handler - this should match what's configured in PayMob dashboard
    callbackUrl: window.location.origin + '/paymob-callback.html',
    
    // Where to redirect after processing
    successPageUrl: window.location.origin + '/success.html',
    failurePageUrl: window.location.origin + '/failure.html',
    
    // Alternative: You can set specific URLs if needed
    // callbackUrl: window.location.origin + '/paymob-callback.html?type=callback',
}; 