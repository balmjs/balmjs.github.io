# JavaScript

## Entry

### `scripts.entry`

`object`

The entry point for the bundle. Defaults to `null`.

1. `key(string): value(string)`: Bundle one entry point per HTML page.
2. `key(string): value(array)`: Creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points.

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

### `scripts.filename`

`string`

Specifies the name of each output file on disk. You must __not__ specify an absolute path here! Defaults to `'[name]'`.

- Using the unique hash generated for every build:

```js
filename: '[name].[hash]'
```

- Using hashes based on each chunks' content:

```js
filename: '[chunkhash]'
```

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
umdNamedDefine: true
```

### `scripts.chunkFilename`

The filename of non-entry chunks as relative path inside the `output.path` directory. Defaults to `'(auto)'`.

- `[id]` is replaced by the id of the chunk. (automatic setting for development)
- `[name]` is replaced by the name of the chunk (or with the id when the chunk has no name).
- `[hash]` is replaced by the hash of the compilation.
- `[chunkhash]` is replaced by the hash of the chunk. (automatic setting for production)

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

__BalmJS__ default loaders:

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
scripts: {
  loaders: [{
    test: /\.vue$/,
    loader: 'vue'
  }]
}
```

### `scripts.extensions`

`array`

An array of extensions that should be used to resolve modules. Defaults to `[]`.

__BalmJS__ default extensions:

- `.js`
- [`.json`](http://www.json.org/)
- [`.jsx`](http://facebook.github.io/jsx/)
- [`.vue`](https://vuejs.org/)

🌰 For example:

```js
scripts: {
  extensions: ['.ts', '.tsx']
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
    'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js'
  }
}
```

### `scripts.include`

`array`

> New in 0.9.1

Supply a [Rule.include](https://webpack.js.org/configuration/module/#rule-include) option in `babel-loader` for some vendor scripts from `node_modules`. Defaults to `[]`.

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

### `scripts.eslint`

`boolean`

The pluggable linting utility for JavaScript and JSX. Defaults to `false`.

## Advanced Options

### `scripts.webpack`

`object`

> New in 0.8.4

Overwrite webpack config. Defaults to `{}`.

> [All configuration options](https://webpack.js.org/configuration/)

### `scripts.options`

`object`

> New in 0.6.0

[UglifyJS options](http://lisperator.net/uglifyjs/). Defaults to:

```js
{
  compress: {
    warnings: false,
    comparisons: false,
    drop_console: true
  },
  output: {
    comments: false,
    ascii_only: true
  }
}
```

## Optimization

### `scripts.vendorName`

`string`

AllInOne vendor filename or Custom Vendor folder name. Defaults to `'vendor'`.

### `scripts.extractAllVendors`

`boolean`

> Named `scripts.vendor` in version < 0.12.0

All vendors in one (for SPA). Defaults to `false`.

### `scripts.vendors`

`array`

Custom Vendor Modules. Defaults to `[]`. (automatic setting by [`scripts.entry`](scripts.md#entry))

### `scripts.cdn`

`string` `array` `object` `function` `regex`

> New in 0.9.0

The same to webpack [externals](https://webpack.js.org/configuration/externals/#externals). Defaults to `null`.

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
  use: 'css-loader',
  fallback: 'style-loader',
  publicPath: '',
  pluginOptions: {
    filename: 'css/vendor/[name].css'
  }
}
```

⚠️ __TIPS:__ Separating styles from scripts for modular management is more conducive to project maintenance and expansion, See BalmJS advanced usage.
