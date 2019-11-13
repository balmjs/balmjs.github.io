# 安装

### 0. 安装需求

在开始工作之前，我们必须设置好开发环境。

如果你的机器上还没有 [Node.js® and npm](https://nodejs.org/en/download/) 环境，请先安装它们。

> 请先在终端/控制台窗口中运行命令 `node -v` 和 `npm -v`，**来验证一下你正在运行 `node 8.x.x` 和 `npm 5.x.x` 以上的版本**。 更老的版本可能会出现错误，更新的版本则没问题。

BalmJS 工作流采用 [gulp](https://gulpjs.com/) 进行构建构成，所以你需要全局安装 `gulp-cli`。

```sh
$ npm install --global gulp-cli

# 验证
$ gulp -v
# 输出：CLI version 2.0.0
```

### 1. 安装 **`balm`**

使用 npm 安装：

```sh
$ npm install --save-dev gulp balm
```

使用 [yarn](https://yarnpkg.com/en/docs/install) 安装：

```sh
$ yarn add --dev gulp balm
```

### 2. 配置

在你的项目根目录下，新建一个名叫 `gulpfile.js` 的配置文件：

```js
// 1. 导入 balm
const balm = require('balm');

// 2. 配置 balm
balm.config = {
  // 你的项目配置项
};

// 3. 运行 balm
balm.go();
```

请参照 [我们的配置文档](../configuration/toc.md) 来学习更多 **`balm`** 配置项。

### 3. 用法

在你的项目根目录下运行命令：

```sh
# 开发模式
$ gulp

# 生产模式
$ gulp --production
```
