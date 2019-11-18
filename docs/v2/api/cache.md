# Cache

## mix.version

`mix.version(input: string | string[], output: string, assetsOptions?: object)`

🌰 For example:

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  mix.version('app/**/*', 'dist', {
    // Assets options: overwrite `balm.config.assets.options`
  });
});
```
