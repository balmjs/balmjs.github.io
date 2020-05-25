# PWA

## pwa.enabled

`pwa.enabled: boolean = false`

打包时启用 PWA。

## pwa.manifest

`pwa.manifest: string = 'manifest.json'`

Manifest 文件：`manifest.json` 或 `manifest.webmanifest`。

## pwa.workboxSw

`pwa.workboxSw: string = 'node_modules/workbox-sw/build/workbox-sw.js'`

设置 `workbox-sw.js` 源文件。

## pwa.mode

`pwa.mode: string = 'generateSW'`

[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) 的 [**两种主要模式**](https://developers.google.com/web/tools/workbox/modules/workbox-build#which_mode_to_use)

- `generateSW`
- `injectManifest`

## pwa.options

`pwa.options: object = {}`

PWA 配置。

- `generateSW` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config).
- `injectManifest` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_injectmanifest_config).

## pwa.swSrcFilename

`pwa.swSrcFilename: string = 'service-worker.js'`

## pwa.swDestFilename

`pwa.swDestFilename: string = 'sw.js'`

## pwa.version

`pwa.version: string = ''`

> New in 2.15.0

PWA 缓存版本号。

```js
// `service-worker.js`
importScripts('workbox-sw.js');

var PROJECT_NAME = ''; // 你的项目名
var PROJECT_VERSION = '{{ version }}'; // 版本号占位符
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
