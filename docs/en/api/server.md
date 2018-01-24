# Server

## `mix.serve()`

`mix.serve` can automatically monitor your files for changes, and inject your changes into the browser without requiring a manual refresh.

- Usage

```js
var balm = require('balm');

balm.config = {
  useDefault: false,
  roots: {
    source: 'app'
  },
  // Your project more config
};

balm.go(function(mix) {
  if (!balm.config.production) {
    mix.serve();
  }
});
```

- `useDefault` must be set `false`.
- `roots.source` is required.

> `balm.config` Refer to [BalmJS Configuration](../configuration/toc.md)
