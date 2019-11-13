# 项目类型和模式

### `isProd` (`1.0.0`中重命名)

`boolean`

> Rename `production` to `isProd` in 1.0.0

为生产构建启用许多优化。默认值为 `false`。

🌰 例如：

```js
if (balm.config.isProd) {
  // 生产模式
} else {
  // 开发模式
}
```

### `static`

`boolean`

设置项目类型。默认值为 `true`。

- `static: true`  - 用于纯前端项目
- `static: false` - 用于后端项目（如 PHP框架）

🌰 例如：

```js
balm.config = {
  static: true,
  ... // 其他配置项
};
```

### `workspace`

`string`

项目根目录，确保解析项目文件夹中的所有符号链接。默认值为 `process.cwd()`。

🌰 例如：

```js
// 文件：config/balmrc.js
const path = require('path');
const root = path.resolve(__dirname, '..');
const workspace = path.join(root, 'my-workspace');

balm.config = {
  workspace,
  ... // 其他配置项
};
```
