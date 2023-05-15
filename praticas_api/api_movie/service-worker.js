var cacheName = 'movie';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        'praticas_api/api_movie/index.html',

        './praticas_api/api_movie/img/background.png',
        './praticas_api/api_movie/img/favicon.png',
        './praticas_api/api_movie/img/logo.png',
        './praticas_api/api_movie/img/icon_128.png',
        './praticas_api/api_movie/img/icon_144.png',
        './praticas_api/api_movie/img/icon_152.png',
        './praticas_api/api_movie/img/icon_167.png',
        './praticas_api/api_movie/img/icon_180.png',
        './praticas_api/api_movie/img/icon_192.png',
        './praticas_api/api_movie/img/icon_256.png',
        './praticas_api/api_movie/img/icon_512.png',
        './praticas_api/api_movie/img/formulas.JPG',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});