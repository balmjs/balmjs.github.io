importScripts('workbox-sw.js');

workbox.core.setCacheNameDetails({
  prefix: 'balm-app',
  suffix: 'v1'
});

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  new workbox.strategies.CacheFirst({
    cacheName: 'my-image-cache'
  })
);

workbox.googleAnalytics.initialize();
