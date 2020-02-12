importScripts('workbox-sw.js');

// Configure Cache Names
workbox.core.setCacheNameDetails({
  prefix: 'balm',
  suffix: 'v20200212-1',
  precache: 'app-cache',
  runtime: 'app-runtime'
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'balm-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache CSS and JavaScript Files
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'balm-static-resources'
  })
);

// Cache Resources from a Specific Subdirectory
workbox.routing.registerRoute(
  new RegExp('/docs/'),
  new workbox.strategies.StaleWhileRevalidate()
);

// Cache Others
workbox.routing.registerRoute(
  /\.(?:ico|webmanifest)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

// Enable Offline Google Analytics
workbox.googleAnalytics.initialize();
