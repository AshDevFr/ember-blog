self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);

  if (url.pathname.indexOf('/api') === 0) {
    event.respondWith(handleAPIRequest(event));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return response || fetch(event.request);
      })
      .catch(function() {
        console.log('GENERIC FETCH ERROR');
      })
  );
});

function handleAPIRequest(event) {
  const url = new URL(event.request.url);


  return fetchAndCache(event.request)
    .then(function(response) {
      if (url.pathname === '/api/posts') {
        var r = response.clone();
        r.json().then(function(posts) {
          posts.posts.forEach(function(post) {
            fetchAndCache(event.request.url + '/' + post.slug);
          });
        });
      }
      return response;
    })
    .catch(function() {
      console.log('API FETCH ERROR');
      //OFFLINE
      return caches.match(event.request);
    });
}


function fetchAndCache(request) {
  return fetch(request)
    .then(function(response) {
      const respClone = response.clone();
      caches.open(CACHE_VERSION).then(function(cache) {
        cache.put(request, respClone);
      });
      return response;
    });
}