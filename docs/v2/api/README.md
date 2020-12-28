# Custom Task API

- Environment
  - [`env`](environment.html#mix-env)
- Template
  - [`mix.html()`](template.html#mix-html)
- Stylesheets
  - [`mix.css()`](styles.html#mix-css)
  - [`mix.sass()`](styles.html#mix-sass)
  - [`mix.less()`](styles.html#mix-less)
  - [`mix.url()`](styles.html#mix-url)
  - [`mix.sprite()`](styles.html#mix-sprite)
- JavaScript
  - [`mix.webpack()`](scripts.html#mix-webpack)
  - [`mix.esbuild()`](scripts.html#mix-esbuild)
  - [`mix.rollup()`](scripts.html#mix-rollup)
  - [`mix.jsmin()`](scripts.html#mix-jsmin)
- Files & Directories
  - [`mix.copy()`](files.html#mix-copy)
  - [`mix.remove()`](files.html#mix-remove)
  - [`mix.replace()`](files.html#mix-replace)
- Cache
  - [`mix.version()`](cache.html#mix-version)
- Server
  - [`mix.serve()`](server.html#mix-serve)
- Deployment
  - [`mix.publish()`](deployment.html#mix-publish)
  - [`mix.zip()`](deployment.html#mix-zip)
  - [`mix.ftp()`](deployment.html#mix-ftp)
- Others
  - [`mix.generateSW()`](others.html#mix-generatesw)
  - [`mix.injectManifest()`](others.html#mix-injectmanifest)
  - [`mix.modernizr()`](others.html#mix-modernizr)

```js
const api = (mix) => {
  // Custom tasks by API
};

module.exports = (balm) => {
  return {
    config: {}, // Your project config
    api
  };
};
```

> `balm.config` refer to [BalmJS Configuration](../config/)
