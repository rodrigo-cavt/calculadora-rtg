const CACHE_NAME = 'rtg-calc-v1';
const urlsToCache = [
  '/calculadora-rtg/',
  '/calculadora-rtg/index.html',
  '/calculadora-rtg/manifest.json',
  '/calculadora-rtg/icon-192.png',
  '/calculadora-rtg/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
