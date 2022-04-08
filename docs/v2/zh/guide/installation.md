# 安装

## 0. 安装需求

在开始工作之前，我们必须设置好开发环境。

如果你的机器上还没有 [Node.js® and npm](https://nodejs.org/en/download/) 环境，请先安装它们。

> 请先在终端/控制台窗口中运行命令 `node -v` 和 `npm -v`，**来验证一下你正在运行 `node 10.13.0` 和 `npm 5.2.0` 以上的版本**。 更老的版本可能会出现错误，更新的版本则没问题。

你要在 [Balm 工作空间](./structure.md) 的上下文中开发应用。

创建一个新的工作空间和初始入门应用：

```sh
# /path/to/YOUR_WORKSPACE
mkdir -p my-project/src/{styles,scripts}
echo "Hello World" > my-project/src/index.html

cd my-project
npm init -y
```

## 1. 安装 **`balm`**

```sh
# v3
yarn global add balm-core
yarn add -D balm

# v4
yarn global add balm-core@next
yarn add -D balm@next
```

或

```sh
# v3
npm install -g balm-core
npm install -D balm

# v4
npm install -g balm-core@next # Not supported for now (npm bug)
npm install -D balm@next
```

> 当前我们推荐使用 [Yarn](https://yarnpkg.com/en/docs/install) 代替 npm。

## 2. 配置

在你的项目根目录下，新建一个名叫 `balm.config.js` 的配置文件：

```js
module.exports = {
  // 你的项目配置
};
```

:page_with_curl: 请参照 [配置文档](../config/) 来学习更多 **`balm`** 配置项。

## 3. 使用

编辑 `package.json`：

```json
{
  "scripts": {
    "dev": "balm",
    "prod": "balm -p"
  }
}
```

在你的项目根目录下运行命令：

```sh
# For development
npm run dev

# For production
npm run prod
```
