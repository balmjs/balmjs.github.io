# Custom Task API

- Environment
  - [`env`](environment.html#mix-env)
- HTML
  - [`mix.html(input, output)`](html.html#mix-html)
- Stylesheets
  - `mix.css(input, output)`
  - `mix.sass(input, output, options?)`
  - `mix.less(input, output, options?)`
  - `mix.url(input, output)`
  - `mix.sprite(input, output, spriteOptions?)`
- JavaScript
  - `mix.js(input, output, webpackOptions?)`
  - `mix.jsmin(input, output, options?)`
- Files & Directories
  - `mix.copy(input, output, options?)`
  - `mix.remove(paths)`
- Cache
  - `mix.version(input, output, assetsOptions?)`
- Server
  - `mix.serve(handler)`
- Assets
  - `mix.publish(input, output, renameOptions?)`
  - `mix.zip(input?, output?, filename?)`
  - `mix.ftp(localFiles, options?)`
- PWA
  - `mix.generateSW(pwaOptions)`
  - `mix.injectManifest(pwaOptions)`
- Others
  - `mix.modernizr()`

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  // Custom Task API
});
```

> `balm.config` refer to [BalmJS Configuration](../config/)
