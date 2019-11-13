# 常见问题

### 如何导入 `zepto` 模块？

首先，在你的项目目录下运行命令安装依赖：

```sh
npm i -D exports-loader script-loader

// 或使用yarn安装
yarn add -D exports-loader script-loader
```

然后，编辑 `balm` 配置：

```js
balm.config = {
  ...
  scripts: {
    ...
    loaders: [{
      test: /zepto\.js/,
      loader: 'exports-loader?window.Zepto!script-loader'
    }],
    alias: {
      zeptoSrc: 'zepto/src'
    }
  },
  ...
};
```

就下来，就可以在脚本（`/path/to/project/app/scripts/main.js`）中使用：

```js
import $ from 'zeptoSrc/zepto';
import 'zeptoSrc/event';

// Enjoy coding
```

### `npm@2.x.x` bug

Q1:

```sh
Error: Cannot find module 'babel-runtime/helpers/classCallCheck'
```

A1:

```sh
npm install babel-runtime
```

Q2:

```sh
Error: Cannot resolve module 'webpack-hot-middleware/client' in /path/to/your_project
```

A2:

```sh
npm install webpack-hot-middleware
```
