# Others

### `useDefault`

`boolean`

开启 `balm` 的默认任务。默认值为：`true`。

🌰 例如：

```js
const balm = require('balm');

balm.config = {
  useDefault: false, // 关闭 balm 的默认任务
  ...                // 你的项目配置项
};

balm.go(mix => {
  // 使用自定义任务API
});
```

> 请参考 [自定义任务 API 文档](../api/toc.md)
