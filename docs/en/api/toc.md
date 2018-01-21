# Custom Task API

- Stylesheets
  - `mix.css(input, output)`
  - `mix.sass(input, output)`
  - `mix.less(input, output)`
  - `mix.cssmin(input, output, renameOptions = {suffix: '.min'})`
- JavaScript
  - `mix.js(input, output)`
  - `mix.jsmin(input, output, renameOptions = {suffix: '.min'})`
- Files & Directories
  - `mix.copy(from, to, renameOptions = {})`
  - `mix.remove(src)`
- Cache
  - `mix.version(input, output, excludes = [])`
- Server
  - `mix.serve()`
- Assets
  - `mix.zip(input = '', output = '')`
  - `mix.ftp(input)`
  - `mix.publish(input = '', output = '', renameOptions = {})`

```js
var balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(function(mix) {
  // Custom Task API
});
```

> `balm.config` refer to [BalmJS Configuration](../configuration/toc.md)