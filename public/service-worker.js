// service-worker.js

window.self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/static/js/bundle.js',
        '/icon.png'
        // Ajoutez ici les fichiers que vous souhaitez mettre en cache
      ]);
    })
  );
});

window.self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
