# Project Type & Mode

### `isProd` (Rename in `1.0.0`)

`boolean`

> Rename `production` to `isProd` in 1.0.0

Enable many optimizations for production builds. Defaults to `false`.

🌰 For example:

```js
if (balm.config.isProd) {
  // Mode: production
} else {
  // Mode: development
}
```

### `static`

`boolean`

Set project type. Defaults to `true`.

- `static: true` - for a static HTML project
- `static: false` - for a dynamic language project (e.g. PHP framework)

🌰 For example:

```js
balm.config = {
  static: true,
  ... // Other Options
};
```

### `workspace`

`string`

Make sure any symlinks in the project folder are resolved. Defaults to `process.cwd()`.

🌰 For example:

```js
// File: config/balmrc.js
const path = require('path');
const root = path.resolve(__dirname, '..');
const workspace = path.join(root, 'my-workspace');

balm.config = {
  workspace,
  ... // Other Options
};
```
