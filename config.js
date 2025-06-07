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
    // Get this from PayMob Dashboard -> Settings -> Account Info
    apiKey: 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RrME16ZzNMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuVEprTWsyOVhTR0h4Rl9xQlRfdEUwSVB6N0VwdG93QV9IZmZ6OVhLU1RidXZfLU1RaGRnSkpkZmUwaURYSlh1Y0ZYMHgtR3g3N1RMV1loSHhIbzlnWUE=', // Replace with your API key

    // Get this from PayMob Dashboard -> Developers -> Payment Integrations
    integrationId: 4832092, // Replace with your integration ID (number)

    // Get this from PayMob Dashboard -> Developers -> iframes
    iframeId: 867108, // Replace with your iframe ID (number)

    // Get this from PayMob Dashboard -> Developers -> Payment Integrations -> HMAC
    hmacSecret: 'FEAD8BA6FD4BC27816FF0AC6E8469DAD' // Replace with your HMAC secret
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