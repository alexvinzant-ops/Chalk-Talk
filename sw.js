// Keeps Chalk Talk working with a weak gym signal: always try the network first, fall back to the last copy saved.
const CACHE = "chalk-talk-v1";
const FILES = ["./", "index.html", "plays.json", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))) });
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)) } return r })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
