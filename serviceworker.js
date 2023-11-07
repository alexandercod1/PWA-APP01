// service-worker.js
// Perform install steps
// serviceworker.js

const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'style/styles.css',
    'main.js'
];

// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(function (cache) {
//             console.log('Cache öppnad');
//             return cache.addAll(urlsToCache);
//         })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             return response || fetch(event.request);
//         })
//     );
// });


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1')
            .then(cache => {
                cache.addAll([
                    './',
                    './style/styles.css',
                    './main.js'
                ]);
                console.log('Assets cached')
                
            })
            .catch(err => console.log('could not cache assets')) 
    )  
})