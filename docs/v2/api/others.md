# Others

## mix.generateSW()

`mix.generateSW(pwaOptions: object)`

## mix.injectManifest()

`mix.injectManifest(pwaOptions: object)`

:chestnut: For example:

```js
const balm = require('balm');

const workboxSw = 'node_modules/workbox-sw/build/workbox-sw.js';

balm.config = {
  pwa: {
    enabled: true, // NOTE: Just for production
    workboxSw
  }
  // Other Options...
};

balm.go(mix => {
  if (!balm.config.env.isProd) {
    mix.copy(workboxSw, balm.config.roots.tmp);
    // PWA test
    mix.generateSW();
    // mix.injectManifest();
  }
});
```

## mix.modernizr()

Manual generate a modernizr script by [`modernizr.json`](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for development.
