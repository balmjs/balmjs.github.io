# Custom Task API

- Templates
  - `mix.html()`
- Stylesheets
  - `mix.css(input, output)`
  - `mix.sass(input, output)`
  - `mix.less(input, output)`
  - `mix.csspath()`
  - <del>`mix.cssmin(input, output, renameOptions)`</del>
- JavaScript
  - `mix.js(input, output)`
  - <del>`mix.jsmin(input, output, uglifyOptions, renameOptions)`</del>
- Files & Directories
  - `mix.copy(from, to, renameOptions)`
  - `mix.remove(src)`
- Cache
  - `mix.version(input, output, excludes)`
- Server
  - `mix.serve()`
- Assets
  - `mix.zip(input, output, filename)`
  - `mix.ftp(localFiles, options)`
  - `mix.publish(input, output, renameOptions)`

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  // Custom Task API
});
```

> `balm.config` refer to [BalmJS Configuration](../configuration/toc.md)
