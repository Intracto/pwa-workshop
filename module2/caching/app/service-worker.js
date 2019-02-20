let cacheName = 'todo-cache-v1';
//TODO: create shell cache array

self.addEventListener('install', event => {
  console.log('Service worker installing...');
  event.waitUntil(
    //TODO: voeg app shell toe in cache
    // vergeet niet de wait te stoppen en verder te gaan naar activatie
  );
});


self.addEventListener('activate', event => {
  console.log('Service worker activating...');
  event.waitUntil(
    //TODO: zorg ervoor dat alle caches met een verouderde cache key verwijderd worden
  );
  console.log('Old cache cleaned...');
  return self.clients.claim();
});


self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    //TODO: voeg de cache-first, network second functionaliteit toe 
  );
});
