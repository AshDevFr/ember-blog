this.addEventListener('fetch', function(event) {
  if (event.request.url.match(/\/posts$/)) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(function(response) {
          var r = response.clone();
          r.json().then(function(posts) {
            posts.posts.forEach(function(post) {
              fetch(event.request.url + '/' + post.slug);
            });
          });

          return response;
        }).catch(function(error) {
          console.error('Fetching failed:', error);
          throw error;
        });
      })
    );
  }
});
