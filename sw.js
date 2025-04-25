const sw = "uuid-gen";
const assets = [
  "/uuid-gen/",
  "/uuid-gen/index.html",
  "/uuid-gen/style.css",
  "/uuid-gen/main.js",
  "/uuid-gen/assets/background.webp",
  "/uuid-gen/assets/apple-touch-icon.png",
  "/uuid-gen/assets/favicon-96x96.png",
  "/uuid-gen/assets/favicon.svg",
  "/uuid-gen/assets/favicon.ico",
  "/uuid-gen/assets/pwa-192x192.png",
  "/uuid-gen/assets/pwa-512x512.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(sw).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});