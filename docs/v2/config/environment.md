# Environment

## env

```ts
interface BalmEnvObject {
  isProd: boolean;
  isTest: boolean;
  isDev: boolean;
  inSSR: boolean;
  isMP: boolean; // New in 2.9.0
}
```

`env: BalmEnvObject`

Balm workflow environment variable in Node.js.

- `env.isDev` is `true` when running `balm`
- `env.isProd` is `true` when running `balm -p` or `balm --production`
- `env.isTest` is `true` when running `balm -t` or `balm --test`
- `env.inSSR` is `true` when running `balm -ssr` or `balm --server`
- `env.isMP` is `true` when running `balm -mp` or `balm --miniprogram`

## workspace

`workspace: string = process.cwd()`

(**Absolute path**) Make sure any symlinks in the project folder are resolved.

:chestnut: For example:

```js
// File: /path/to/workspace/config/balmrc.js
const path = require('path');
const workspace = path.resolve(__dirname, '..');

balm.config = {
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
balm.config = {
  inFrontend: true
  // Other Options...
};
```

## useDefaults

`useDefaults: boolean = true`

Enable balm default tasks.

:chestnut: For example:

```js
const balm = require('balm');

balm.config = {
  useDefaults: false // Don't start balm default tasks
  // Other Options...
};

balm.go((mix) => {
  // Use custom task API
});
```

> :page_with_curl: Refer to [Custom Task API](../api/)
