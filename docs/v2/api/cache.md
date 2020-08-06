# Cache

## mix.version

`mix.version(input: string | string[], output: string, assetsOptions?: object)`

:chestnut: For example:

```js
const api = (mix) => {
  mix.version('app/**/*', 'dist', {
    // Assets options: overwrite `balm.config.assets.options`
  });
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```
