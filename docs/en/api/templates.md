# Templates

## `mix.html()`

- Usage

```js
var balm = require('balm');

balm.config = {
  roots: {
    source: 'app',
    target: 'dist'
  },
  // Your project more config
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.html();
  }
});
```
