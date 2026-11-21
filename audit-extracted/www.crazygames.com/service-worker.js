// Import the main Workbox script (makes 'workbox' global)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js');

// Check if workbox loaded (optional but good practice)
if (workbox) {
    workbox.setConfig({
        debug: false, // Set debug to true for development
    });

    console.log(`Workbox ${workbox.core.version} loaded successfully`);

    // --- Constants ---
    const OFFLINE_URL = 'offline.html';
    // Combine all files needed offline into the precache list
    const PRECACHE_FILES = [OFFLINE_URL, '/Nunito-latin.woff2'].map((url) => ({
        url,
        revision: 'v4'
    })); // Using manual revisioning to be able to force an update of the cached offline assets

    // --- Service Worker Lifecycle ---

    // Use workbox.precaching instead of imported functions
    workbox.precaching.precacheAndRoute(PRECACHE_FILES, {
        // Ignore all URL parameters.
        ignoreURLParametersMatching: [/.*/],
    });
    workbox.precaching.cleanupOutdatedCaches();

    // Use workbox.routing and workbox.strategies
    workbox.routing.registerRoute(
        ({
            request,
            url
        }) => request.mode === 'navigate' && url.origin === self.location.origin,
        new workbox.strategies.NetworkOnly(),
    );
    // Setup our own offline fallback handler, that uses the precache (with manual revisions) for the Offline page.
    const handler = async (options) => {
        const dest = options.request.destination;
        if (dest === 'document') {
            const match = await workbox.precaching.matchPrecache(OFFLINE_URL);
            return match || Response.error();
        }
        return Response.error();
    };
    workbox.routing.setCatchHandler(handler);

    self.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
            self.skipWaiting();
        }
    });

    console.log('Workbox Service Worker configured!');
} else {
    console.error('Workbox failed to load');
}

// --- SuprSend Service Worker stuff ---
importScripts('https://cdn.jsdelivr.net/npm/@suprsend/web-sdk@4.0.0/public/serviceworker.min.js');
const suprSendPublicKey = self.location.hostname.endsWith('crazygames.com') ?
    'SS.PUBK.EhTwWnm7G0ervPWfI7Ua9cE16VHHLM75Tsl7JeRk9v8' :
    'SS.PUBK.FseFryuFNVDCm0ZQKqvQ6kLL8nBF-rbuBJD7nH-FVHk';
initSuprSend(suprSendPublicKey);