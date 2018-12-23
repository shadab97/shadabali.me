  $(document).ready(function () {
      $('.button-collapse').sideNav();
      $('.tooltipped').tooltip();
      // Make sure sw are supported
      if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
              navigator.serviceWorker
                  .register('/shadab97.github.io/sw.js', {scope: '/shadab97.github.io/'})
                  .then(reg => console.log('Service Worker: Registered (Pages)'))
                  .catch(err => console.log(`Service Worker: Error: ${err}`));
          });
      } else {
          console.log("sw not supported");
      }
  });
