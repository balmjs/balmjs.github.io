# Environment

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

Balm workflow environment variable in Node.js.

- standard
  - `env.isDev` is `true` when running `balm`
  - `env.isProd` is `true` when running `balm -p` or `balm --production`
  - `env.isTest` is `true` when running `balm -t` or `balm --test`
- plus
  - `env.inSSR` is `true` when running `balm -ssr` or `balm --server`
  - `env.isMP` is `true` when running `balm -mp` or `balm --miniprogram`
  - `env.inDesktopApp` is `true` when running `balm -electron` or `balm --desktop-app`

## workspace

`workspace: string = process.cwd()`

(**Absolute path**) Make sure any symlinks in the project folder are resolved.

:chestnut: For example:

```js
// File: /path/to/workspace/balm.config.js
const path = require('path');
const workspace = path.resolve(__dirname);

module.exports = {
  workspace
  // Other Options...
};
```

> **Tips:** Usually no need to set.

## inFrontend

`inFrontend: boolean = true`

Set project type.

- `true` for a static HTML project
- `false` for a dynamic language project (e.g. PHP framework)

:chestnut: For example:

```js
module.exports = {
  inFrontend: true
  // Other Options...
};
```

## useDefaults

`useDefaults: boolean = true`

Enable balm default tasks.

:chestnut: For example:

```js
const config = {
  useDefaults: false // Don't start balm default tasks
  // Other Options...
};

const api = (mix) => {
  // Custom tasks by API
};

module.exports = (balm) => {
  return {
    config,
    api
  };
};
```

> :page_with_curl: Refer to [Custom Task API](../api/)
