# PWA

## pwa.enabled

`pwa.enabled: boolean = false`

Enable PWA for building.

## pwa.manifest

`pwa.manifest: string = 'manifest.json'`

Web App Manifest: `manifest.json` or `manifest.webmanifest`.

## pwa.workboxSw

`pwa.workboxSw: string = 'node_modules/workbox-sw/build/workbox-sw.js'`

Set `workbox-sw.js` source.

## pwa.mode

`pwa.mode: string = 'generateSW'`

Cache assets and take full advantage of features used to build [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/).

[**Two Primary Mode**](https://developers.google.com/web/tools/workbox/modules/workbox-build#which_mode_to_use)

- `generateSW`: The generateSW mode creates a service worker file for you, and writes it out to disk.
- `injectManifest`: The injectManifest mode will generate a list of URLs to precache, and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.

## pwa.options

`pwa.options: object = {}`

The config of the building PWA.

- `generateSW` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config).
- `injectManifest` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_injectmanifest_config).

## pwa.swSrcFilename

`pwa.swSrcFilename: string = 'service-worker.js'`

## pwa.swDestFilename

`pwa.swDestFilename: string = 'sw.js'`

## pwa.version

`pwa.version: string = ''`

> New in 2.15.0

The cache version of the PWA.

```js
// `service-worker.js`
importScripts('workbox-sw.js');

var PROJECT_NAME = ''; // Your project name
var PROJECT_VERSION = '{{ version }}'; // Version placeholder
var CACHE_NAMES = [
  PROJECT_NAME + '-' + 'precache' + '-' + PROJECT_VERSION,
  PROJECT_NAME + '-' + 'runtime' + '-' + PROJECT_VERSION,
  PROJECT_NAME + '-' + 'ga' + '-' + PROJECT_VERSION,
  'google-fonts',
  'images'
];

workbox.core.setCacheNameDetails({
  prefix: PROJECT_NAME,
  suffix: PROJECT_VERSION,
  precache: 'precache',
  runtime: 'runtime',
  googleAnalytics: 'ga'
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Cache Google Fonts
workbox.routing.registerRoute(
  function (context) {
    return (
      context.url.origin === 'https://fonts.googleapis.com' ||
      context.url.origin === 'https://fonts.gstatic.com'
    );
  },
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts',
    plugins: [new workbox.expiration.ExpirationPlugin({ maxEntries: 20 })]
  })
);

// Cache JavaScript and CSS
workbox.routing.registerRoute(function (context) {
  return (
    context.request.destination === 'script' ||
    context.request.destination === 'style'
  );
}, new workbox.strategies.StaleWhileRevalidate());

// Cache Images
workbox.routing.registerRoute(
  function (context) {
    return context.request.destination === 'image';
  },
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Offline Google Analytics
workbox.googleAnalytics.initialize();

// Cleanup Outdated Caches
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheList) {
        return Promise.all(
          cacheList.map(function (cacheName) {
            if (CACHE_NAMES.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(function () {
        self.clients.claim();
      })
  );
});
```
