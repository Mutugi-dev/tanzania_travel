const CACHE_NAME = "tanzania-travel-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/visa-checker",
  "/places-to-go",
  "/things-to-do",
  "/be-inspired",
  "/globals.css",
  "/favicon.ico"
];

// Install Event - Caching Assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching offline assets");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event - Cleaning old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network First with Cache Fallback
self.addEventListener("fetch", (event) => {
  // Only handle GET requests and local domains to prevent CORS errors on Unsplash/External resources
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone response and update cache dynamically
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Fall back to cache if offline
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Return a mock offline response if asset isn't cached
          return new Response(
            "<h1>You are currently offline</h1><p>The Tanzania Tourism Portal cached pages are loading. Connect to the internet to query live widgets or report sightings.</p>",
            {
              headers: { "Content-Type": "text/html" }
            }
          );
        });
      })
  );
});
