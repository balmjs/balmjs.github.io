# 缓存

## mix.version

`mix.version(input: string | string[], output: string, assetsOptions?: object)`

:chestnut: For example:

```js
const api = (mix) => {
  mix.version('app/**/*', 'dist', {
    // Assets options: 覆盖 `balm.config.assets.options` 配置
  });
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```
