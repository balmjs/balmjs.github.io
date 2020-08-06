# Others

## mix.generateSW()

`mix.generateSW(pwaOptions: object)`

## mix.injectManifest()

`mix.injectManifest(pwaOptions: object)`

:chestnut: For example:

```js
const config = {
  pwa: {
    enabled: true // NOTE: Just for production
  }
  // Other Options...
};

module.exports = (balm) => {
  const api = (mix) => {
    if (!mix.env.isProd) {
      mix.copy(workboxSw, balm.config.roots.tmp);
      // PWA test
      mix.generateSW();
      // mix.injectManifest();
    }
  };

  return {
    config,
    api
  };
};
```

## mix.modernizr()

Manual generate a modernizr script by [`modernizr.json`](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) for development.
