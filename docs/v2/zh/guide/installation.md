# 安装

## 0. 安装需求

在开始工作之前，我们必须设置好开发环境。

如果你的机器上还没有 [Node.js® and npm](https://nodejs.org/en/download/) 环境，请先安装它们。

> 请先在终端/控制台窗口中运行命令 `node -v` 和 `npm -v`，**来验证一下你正在运行 `node 10.13.x` 和 `npm 5.2.x` 以上的版本**。 更老的版本可能会出现错误，更新的版本则没问题。

你要在 [Balm 工作空间](./structure.md) 的上下文中开发应用。

创建一个新的工作空间和初始入门应用：

```sh
# /path/to/YOUR_WORKSPACE
mkdir -p balm-project/src/{styles,scripts}
cd balm-project
npm init -y
```

:bell: BalmJS 工作流基于 [gulp](https://gulpjs.com/) 进行项目构建，所以你需要全局安装 `gulp-cli` 和本地安装 `gulp` 依赖包。

```sh
yarn global add gulp-cli
yarn add -D gulp
# OR
npm install -g gulp-cli
npm install -D gulp

# 验证
$ gulp -v
# 输出：
# CLI version: 2.2.0
# Local version: 4.0.0
```

## 1. 安装 **`balm`**

```sh
yarn add -D balm
# OR
npm install -D balm
```

> 当前我们推荐使用 [Yarn](https://yarnpkg.com/en/docs/install) 代替 npm。

## 2. 配置

在你的项目根目录下，新建一个名叫 `gulpfile.js` 的配置文件：

```js
// 1. 导入 balm
const balm = require('balm');

// 2. 配置 balm
balm.config = {
  // 你的项目配置
};

// 3. 运行
balm.go();
```

:page_with_curl: 请参照 [配置文档](../config/) 来学习更多 **`balm`** 配置项。

## 3. 使用

在你的项目根目录下运行命令：

```sh
# 开发模式
gulp

# 生产模式
gulp --production
# OR
gulp -p
```
