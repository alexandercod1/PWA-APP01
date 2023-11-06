// service-worker.js
// Perform install steps
let CACHE_NAME = 'my-cache';
let urlsToCache = [
    'style/styles.css',    
    'main.js'
 
    ];
 
self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});

