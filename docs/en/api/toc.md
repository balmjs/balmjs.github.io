# Custom Task API

- Stylesheets
  - `mix.css(input, output)`
  - `mix.sass(input, output)`
  - `mix.less(input, output)`
  - `mix.buildStyle()`
  - `mix.cssmin(input, output, renameOptions = {suffix: '.min'})`
- JavaScript
  - `mix.js(input, output)`
  - `mix.jsmin(input, output, renameOptions = {suffix: '.min'})`
- Files
  - `mix.copy(from, to, renameOptions = {})`
  - `mix.remove(src)`
- Cache
  - `mix.version(input, output, renameOptions = {})`
- Server
  - `mix.server()`
- Assets
  - `mix.zip(input = '', output = '')`
  - `mix.ftp(input)`
  - `mix.publish(input = '', output = '', renameOptions = {})`

```js
var balm = require('balm');

balm.config = {
  useDefault: false, // Don't start balm default tasks
  // Your project config
};

balm.go(function(mix) {
  // Custom Task API
});
```

> Refer to [BalmJS Configuration](../configuration/toc.md)
