# 模板

## `mix.html()`

- 用法

```js
const balm = require('balm');

balm.config = {
  roots: {
    source: 'app',
    target: 'dist'
  },
  // 项目的更多配置项
};

balm.go(mix => {
  if (balm.config.isProd) {
    mix.html();
  }
});
```
