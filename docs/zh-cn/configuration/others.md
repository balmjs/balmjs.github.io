# Others

### `useDefault`

`boolean`

开启 `balm` 的默认任务。默认值为：`true`。

🌰 例如：

```js
var balm = require('balm');

balm.config = {
  useDefault: false, // 关闭 balm 的默认任务
  ...                // 你的项目配置项
};

balm.go(function(mix) {
  // 使用 API 自定义任务
});
```

> 请参考 [API 文档](../api/toc.md)
