// Perform install steps
// serviceworker.js

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