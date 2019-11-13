# Templates

## `mix.html()`

- Usage

```js
const balm = require('balm');

balm.config = {
  roots: {
    source: 'app',
    target: 'dist'
  },
  // Your project more config
};

balm.go(mix => {
  if (balm.config.isProd) {
    mix.html();
  }
});
```
