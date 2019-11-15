# Environment

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

Balm workflow environment variable.

- `env.isDev` is `true` when running `gulp`
- `env.isProd` is `true` when running `gulp -p` or `gulp --production`
- `env.isTest` is `true` when running `gulp -t` or `gulp --test`
- `env.inSSR` is `true` when running `gulp -ssr` or `gulp --server`

## workspace

`workspace: string = process.cwd()`

Make sure any symlinks in the project folder are resolved.

🌰 For example:

```js
// File: /path/to/workspace/config/balmrc.js
const path = require('path');
const workspace = path.resolve(__dirname, '..');

balm.config = {
  workspace
  // Other Options...
};
```

> Tips: Usually no need to set.

## inFrontend

`inFrontend: boolean = true`

Set project type.

- `true` for a static HTML project
- `false` for a dynamic language project (e.g. PHP framework)

🌰 For example:

```js
balm.config = {
  inFrontend: true
  // Other Options...
};
```

## useDefaults

`useDefaults: boolean = true`

Use balm default tasks.

🌰 For example:

```js
const balm = require('balm');

balm.config = {
  useDefaults: false // Don't start balm default tasks
  // Other Options...
};

balm.go(mix => {
  // Use custom task API
});
```

> Refer to [Custom Task API](../api/)
