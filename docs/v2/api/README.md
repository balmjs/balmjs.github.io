# Custom Task API

- Environment
  - [`env`](environment.html#mix-env)
- HTML
  - [`mix.html(input, output)`](template.html#mix-html)
- Stylesheets
  - [`mix.css(input, output)`](styles.html#mix-css)
  - [`mix.sass(input, output, options?)`](styles.html#mix-sass)
  - [`mix.less(input, output, options?)`](styles.html#mix-less)
  - [`mix.url(input, output)`](styles.html#mix-url)
  - [`mix.sprite(input, output, spriteOptions?)`](styles.html#mix-sprite)
- JavaScript
  - [`mix.js(input, output, webpackOptions?)`](scripts.html#mix-js)
  - [`mix.jsmin(input, output, options?)`](scripts.html#mix-jsmin)
- Files & Directories
  - [`mix.copy(input, output, options?)`](files.html#mix-copy)
  - [`mix.remove(paths)`](files.html#mix-remove)
  - [`mix.replace(substr, replacement)`](files.html#mix-replace)
- Cache
  - [`mix.version(input, output, assetsOptions?)`](cache.html#mix-version)
- Server
  - [`mix.serve(handler)`](server.html#mix-serve)
- Deployment
  - [`mix.publish(input, output, renameOptions?)`](deployment.html#mix-publish)
  - [`mix.zip(input?, output?, filename?)`](deployment.html#mix-zip)
  - [`mix.ftp(localFiles, options?)`](deployment.html#mix-ftp)
- Others
  - [`mix.generateSW(pwaOptions)`](others.html#mix-generatesw)
  - [`mix.injectManifest(pwaOptions)`](others.html#mix-injectmanifest)
  - [`mix.modernizr()`](others.html#mix-modernizr)

```js
const api = (mix) => {
  // Custom Task API
};

module.exports = (balm) => {
  return {
    config: {}, // Your project config
    api
  };
};
```

> `balm.config` refer to [BalmJS Configuration](../config/)
