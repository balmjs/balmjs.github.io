# PWA

> Building PWA for manual

## `mix.generateSW()`

`mix.generateSW` creates a service worker file for you, and writes it out to disk.

## `mix.injectManifest()`

`mix.injectManifest` will generate a list of URLs to precache, and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.

- Usage

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  // Required
  mix.copy(
    'node_modules/workbox-sw/build/workbox-sw.js',
    balm.config.isProd ? balm.config.roots.target : balm.config.roots.tmp
  );

  mix.generateSW();
  // OR
  mix.injectManifest();
});
```
