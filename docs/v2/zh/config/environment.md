# 环境

## env

```ts
interface BalmEnvObject {
  isProd: boolean;
  isTest: boolean;
  isDev: boolean;
  inSSR: boolean;
}
```

`env: BalmEnvObject`

Node.js 中 Balm 工作流的环境变量。

- 运行 `gulp` 时 `env.isDev` 为 `true`
- 运行 `gulp -p` 或 `gulp --production` 时 `env.isProd` 为 `true`
- 运行 `gulp -t` 或 `gulp --test`时 `env.isTest` 为 `true`
- 运行 `gulp -ssr` 或 `gulp --server`时 `env.inSSR` 为 `true`

## workspace

`workspace: string = process.cwd()`

（**绝对路径**）项目根目录，确保解析项目文件夹中的所有符号链接。

:chestnut: 举个栗子：

```js
// 文件：/path/to/workspace/config/balmrc.js
const path = require('path');
const workspace = path.resolve(__dirname, '..');

balm.config = {
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
balm.config = {
  inFrontend: true
  // 其他配置项...
};
```

## useDefaults

`useDefaults: boolean = true`

开启 `balm` 的默认任务。

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  useDefaults: false // 关闭 balm 的默认任务
  // 其他配置项...
};

balm.go(mix => {
  // 使用自定义任务API
});
```

> :page_with_curl: 请参考 [自定义任务 API 文档](../api/)
