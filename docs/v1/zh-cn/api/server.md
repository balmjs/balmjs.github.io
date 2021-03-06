# Server

## `mix.serve()`

`mix.serve` 可以自动监视文件的变化，并将更改注入浏览器，而无需手动刷新。

- 用法

```js
const balm = require('balm');

balm.config = {
  useDefault: false,
  roots: {
    source: 'app'
  },
  // 项目的更多配置项
};

balm.go(mix => {
  if (!balm.config.isProd) {
    mix.serve();
  }
});
```

- `useDefault` 必须设置为 `false`。
- `roots.source` 必须设置。

> `balm.config` 请参照 [BalmJS 配置文档](../configuration/toc.md)
