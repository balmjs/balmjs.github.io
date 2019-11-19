# 缓存

## mix.version

`mix.version(input: string | string[], output: string, assetsOptions?: object)`

:chestnut: For example:

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  mix.version('app/**/*', 'dist', {
    // Assets options: 覆盖 `balm.config.assets.options` 配置
  });
});
```
