# 环境

## env

```ts
interface BalmEnvObject {
  isProd: boolean;
  isTest: boolean;
  isDev: boolean;
  inSSR: boolean;
  isMP: boolean; // New in 2.9.0
  inDesktopApp: boolean; // New in 3.1.0
}
```

`env: BalmEnvObject`

Node.js 中 Balm 工作流的环境变量。

- 标准环境
  - 运行 `balm` 时 `env.isDev` 为 `true`
  - 运行 `balm -p` 或 `balm --production` 时 `env.isProd` 为 `true`
  - 运行 `balm -t` 或 `balm --test`时 `env.isTest` 为 `true`
- 扩展环境
  - 运行 `balm -ssr` 或 `balm --server`时 `env.inSSR` 为 `true`
  - 运行 `balm -mp` 或 `balm --miniprogram` 时 `env.isMP` 为 `true`
  - 运行 `balm -electron` 或 `balm --desktop-app` 时 `env.inDesktopApp` 为 `true`

## workspace

`workspace: string = process.cwd()`

（**绝对路径**）项目根目录，确保解析项目文件夹中的所有符号链接。

:chestnut: 举个栗子：

```js
// 文件：/path/to/workspace/balm.config.js
const path = require('path');
const workspace = path.resolve(__dirname);

module.exports = {
  workspace
  // 其他配置项...
};
```

> **提示：** 通常情况下无需设置。

## inFrontend

`inFrontend: boolean = true`

设置项目类型。

- 设置 `true` 用于纯前端项目
- 设置 `false` 用于后端项目（如 PHP 框架）

:chestnut: 举个栗子：

```js
module.exports = {
  inFrontend: true
  // 其他配置项...
};
```

## useDefaults

`useDefaults: boolean = true`

开启 `balm` 的默认任务。

:chestnut: 举个栗子：

```js
const config = {
  useDefaults: false // 关闭 balm 的默认任务
  // 其他配置项...
};

const api = (mix) => {
  // 使用API自定义任务
};

module.exports = (balm) => {
  return {
    config,
    api
  };
};
```

> :page_with_curl: 请参考 [自定义任务 API 文档](../api/)
