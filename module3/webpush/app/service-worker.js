var cacheName = 'tv-gids-cache-v1';
var filesToCache = ['/', '/index.html', '/styles/main.css', '/js/main.js'];


self.addEventListener('install', event => {
  console.log('Service worker installing...');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    }).then(() => {
      console.log('Files cached...');
      return self.skipWaiting();
    })
  );
});


self.addEventListener('activate', event => {
  console.log('Service worker activating...');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName) return caches.delete(key);
      }));
    }));
  console.log('Old cache cleaned...');
  return self.clients.claim();
});


self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }).catch(function () {
      console.log('offline')
    })
  );
});

// Catch the push event, and show the notification
self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon
  });
});