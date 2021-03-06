# JavaScript

## Entry

### `scripts.entry`

`object`

The entry point for the bundle. Defaults to `null`.

1.  `key(string): value(string)`: Bundle one entry point per HTML page.
2.  `key(string): value(array)`: Creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points.

🌰 For example:

```js
scripts: {
  entry: {
    'lib': ['vue', 'vue-router', 'vuex'],
    'ui': ['balm-ui-lite'],
    'home-page': './app/scripts/main.js',
    'sub-page': './app/scripts/subpage.js'
  }
}
```

Then, your HTML templates:

```html
<!-- Page One -->
<script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>
<script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>
<script src="%PUBLIC_URL%/scripts/home-page.js"></script>
```

```html
<!-- Page Two -->
<script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>
<script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>
<script src="%PUBLIC_URL%/scripts/sub-page.js"></script>
```

## Output

### `scripts.library`

`string`

> New in 0.8.4

The name of the exported library. Defaults to `''`.

### `scripts.libraryTarget`

`string`

> New in 0.8.4

The type of the exported library. Defaults to `'var'`.

Supported options: `var`, `this`, `window`, `global`, `commonjs`, `commonjs2`, `amd`, `umd`.

### `scripts.umdNamedDefine`

`string`

> New in 0.9.0

When using `libraryTarget: 'umd'`, setting:

```js
umdNamedDefine: true;
```

## Loaders

### `scripts.loaders`

`array`

An array of automatically applied loaders. Defaults to `[]`.

Each item can have these properties:

- `test`: A condition that must be met
- `exclude`: A condition that must not be met
- `include`: A condition that must be met
- `loader`: A string of “!” separated loaders
- `loaders`: An array of loaders as string

**BalmJS** default loaders:

- [`html`](https://github.com/webpack/html-loader)
- [`style`](https://github.com/webpack/style-loader)
- [`css`](https://github.com/webpack/css-loader)
- [`postcss`](https://github.com/postcss/postcss-loader)
- [`babel`](https://github.com/babel/babel-loader)
- [`url`](https://github.com/webpack/url-loader)
- [`file`](https://github.com/webpack/file-loader)

> [List of loaders](https://webpack.js.org/loaders/)

🌰 For example:

First, install some loader:

```sh
$ npm i -D vue-loader

# OR install with yarn
$ yarn add -D vue-loader
```

Then, use it:

```js
import VueLoaderPlugin from 'vue-loader/lib/plugin';

// ...

scripts: {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ],
  plugins: [new VueLoaderPlugin()]
}
```

### `scripts.extensions`

`array`

An array of extensions that should be used to resolve modules. Defaults to `[]`.

**BalmJS** default extensions:

- `.wasm` (New in 0.17.0)
- `.mjs` (New in 0.17.0)
- `.js`
- [`.json`](http://www.json.org/)
- [`.jsx`](http://facebook.github.io/jsx/)
- [`.ts`](http://www.typescriptlang.org/) (New in 1.1.1)
- `.tsx` (New in 1.1.1)
- [`.vue`](https://vuejs.org/)

🌰 For example:

```js
scripts: {
  extensions: ['.ts', '.tsx'];
}
```

Before, usage:

```js
// main.js
import foo from 'foo.ts';
```

Now, you can:

```js
// main.js
import foo from 'foo';
```

### `scripts.alias`

`object`

Replace modules by other modules or paths. Defaults to `{}`.

🌰 For example:

```js
scripts: {
  alias: {
    'vue$': balm.config.isProd ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js'
  }
}
```

## Plugins

### `scripts.plugins`

`array`

Add additional plugins to the compiler. Defaults to `[]`.

> [List of plugins](https://webpack.js.org/plugins/)

## Development

### `scripts.hot`

`boolean`

Hot reload. Defaults to `true`.

### `scripts.sourceMap`

`boolean`

Source mapping. Defaults to `false`.

### `scripts.target`

`string`

To target a specific environment. Defaults to `'web'`.

> [Target config](https://webpack.js.org/configuration/target/#string)

### `scripts.externals` (Rename in `0.20.0`)

`string` `array` `object` `function` `regex`

> New in 0.9.0, rename `cdn` to `externals` in 0.20.0

The same to webpack [externals](https://webpack.js.org/configuration/externals/#externals). Defaults to `null`.

### `scripts.stats`

`object`

Capture timing information for each module. Defaults to:

```js
{
  colors: true,
  modules: false,
  children: false,
  chunks: false,
  chunkModules: false
}
```

> [Stats config](https://webpack.js.org/configuration/stats/)

## Advanced Options

### `scripts.webpack`

`object`

> New in 0.8.4

Overwrite webpack config. Defaults to `{}`.

> [All configuration options](https://webpack.js.org/configuration/)

### `scripts.include`

`array`

> New in 0.9.1

Supply a [Rule.include](https://webpack.js.org/configuration/module/#rule-include) option in `babel-loader` for some vendor scripts from `node_modules`. Defaults to `[]`.

### `scripts.eslint`

`boolean`

The pluggable linting utility for JavaScript and JSX. Defaults to `false`.

### `scripts.options`

`object`

> New in 1.1.0

[Terser minify options](https://github.com/terser-js/terser#minify-options). Defaults to:

```js
{
  parse: {
    ecma: 8
  },
  compress: {
    ecma: 5,
    warnings: false,
    comparisons: false,
    inline: 2
  },
  mangle: {
    safari10: true
  },
  output: {
    ecma: 5,
    comments: false,
    ascii_only: true
  }
}
```

[UglifyJS options](http://lisperator.net/uglifyjs/). (*Version > `0.6.0` and < `1.1.0`*) Defaults to:

```js
{
  compress: {
    comparisons: false,
    drop_console: true
  },
  output: {
    ascii_only: true
  }
}
```

### `scripts.inject`

`boolean`

> New in 1.1.2

Support the hash scripts in the SSR build. Defaults to: `false`.

## Optimization

### `scripts.optimization`

`object`

> New in 0.17.0

Best practices of web performance. Defaults to:

```js
{
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    name: true,
    cacheGroups: {}
  }
}
```

### `scripts.vendorName`

`string`

AllInOne vendor filename or Custom Vendor folder name. Defaults to `'vendor'`.

### `scripts.extractAllVendors`

`boolean`

> Named `scripts.vendor` in version < 0.12.0

All vendors in one (for SPA). Defaults to `false`.

HTML template:

```html
<!-- All vendors in one -->
<script src="%PUBLIC_URL%/scripts/vendor.js"></script>
<!-- Entry -->
<script src="%PUBLIC_URL%/scripts/main.js"></script>
```

### `scripts.vendors`

`array`

Custom Vendor Modules. Defaults to `[]`. (automatic setting by [`scripts.entry`](scripts.md#entry))

### `scripts.cssLoader`

`boolean`

> New in 0.12.0

Use BalmJS default rules or custom rules for `css-loader`. Defaults to `true`.

### `scripts.extractCss`

`object`

> New in 0.12.0

Extract css from some bundle. Defaults to:

```js
{
  enabled: false,
  prefix: ''
}
```

⚠️ **TIPS:** Separating styles from scripts for modular management is more conducive to project maintenance and expansion, See BalmJS advanced usage - [Code Splitting](../advanced/code-splitting.md).

### `scripts.base64Limit`

`number`

> New in 0.22.0

Loads files as `base64` encoded URL. Defaults to: `10000`.
