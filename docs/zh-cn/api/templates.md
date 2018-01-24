# 模板

## `mix.html()`

- 用法

```js
var balm = require('balm');

balm.config = {
  roots: {
    source: 'app',
    target: 'dist'
  },
  // 项目的更多配置项
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.html();
  }
});
```
