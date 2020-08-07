# Javascript bundler - webpack

## scripts.entry

```ts
interface BalmEntryObject {
  [entryChunkName: string]: string | string[];
}
```

`scripts.entry: string | string[] | BalmEntryObject = ''`

The entry point for the bundle.

When `scripts.entry` is `BalmEntryObject`:

1. `{ [key: string]: value: string }`: Bundle one entry point per HTML page.
2. `{ [key: string]: value: string[] }`: Creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points.

:chestnut: For example:

```js
module.exports = {
  scripts: {
    entry: {
      lib: ['vue', 'vue-router'],
      ui: ['balm-ui'],
      app: './app/scripts/main-page.js',
      subapp: './app/scripts/sub-page.js'
    }
  }
  // Other Options...
};
```

Then, your HTML templates:

```html
<!-- Page One -->
<script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>
<script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>
<script src="%PUBLIC_URL%/scripts/app.js"></script>
```

```html
<!-- Page Two -->
<script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>
<script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>
<script src="%PUBLIC_URL%/scripts/subapp.js"></script>
```

> Tips: You can rename `vendor` with `scripts.vendorName`.

## scripts.library

`scripts.library: string | object = ''`

The name of the exported library.

## scripts.libraryTarget

`scripts.libraryTarget: string = 'var'`

The type of the exported library.

> Supported options: `var`, `this`, `window`, `global`, `commonjs`, `commonjs2`, `amd`, `umd`.

:chestnut: For example:

```js
module.exports = {
  scripts: {
    library: 'AwesomeLibraryName',
    libraryTarget: 'umd'
  }
  // Other Options...
};
```

## scripts.loaders

`scripts.loaders: Rule[] = []`

An array of [Rule](https://webpack.js.org/configuration/module/#rule) automatically applied loaders.

**BalmJS** default loaders:

- [`html`](https://github.com/webpack-contrib/html-loader)
- [`style`](https://github.com/webpack-contrib/style-loader)
- [`css`](https://github.com/webpack-contrib/css-loader)
- [`postcss`](https://github.com/postcss/postcss-loader)
- [`babel`](https://github.com/babel/babel-loader)
- [`url`](https://github.com/webpack-contrib/url-loader)
- [`file`](https://github.com/webpack-contrib/file-loader)

> [List of loaders](https://webpack.js.org/loaders/)

:chestnut: For example:

First, install a loader:

```sh
yarn add -D vue-loader
# OR
npm i -D vue-loader
```

Then, use it:

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  scripts: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()]
  }
  // Other Options...
};
```

## scripts.includeJsResource

`scripts.includeJsResource: string[] = []`

(**Absolute path**) Supply a [Rule.include](https://webpack.js.org/configuration/module/#ruleinclude) option in `babel-loader` for some extra vendor scripts from local anywhere.

## scripts.defaultLoaders

```ts
interface BalmScriptsDefaultLoaders {
  html?: boolean;
  css?: boolean;
  js?: boolean;
  url?: boolean;
}
```

`scripts.defaultLoaders: BalmScriptsDefaultLoaders = {}`

> Rename <del>`disableDefaultLoaders`</del> to `defaultLoaders` in 2.5.0

Enable/Disable **BalmJS** some default loaders.

## scripts.useEsModule

`scripts.useEsModule: boolean = true`

> New in 2.23.0

Use ES modules syntax for default loaders.

## scripts.htmlLoaderOptions

`scripts.htmlLoaderOptions: object = {}`

> New in 2.11.0

The extra options of the balm default `html-loader`.

## scripts.postcssLoaderOptions

```ts
interface PostcssLoaderOptions {
  exec?: boolean;
  parser?: string | object;
  syntax?: string | object;
  stringifier?: string | object;
  config?: object;
  plugins?: object[] | Function; // NOTE: The same to `styles.postcssPlugins`
  sourceMap: string | boolean;
}
```

`scripts.postcssLoaderOptions: PostcssLoaderOptions = { sourceMap: false }`

> Migrated from <del>`styles.postcssLoaderOptions`</del> in 2.11.0

PostCSS loader for webpack. Reference [options](https://github.com/postcss/postcss-loader#options).

## scripts.urlLoaderOptions

`scripts.urlLoaderOptions: object = {}`

> New in 2.1.0

The extra options of the balm default `url-loader`.

:chestnut: For example:

```js
module.exports = {
  scripts: {
    urlLoaderOptions: {
      esModule: false
    }
  }
  // Other Options...
};
```

Before, usage in your vue file:

```html
<template>
  <img :src="require('@/assets/logo.png').default" />
</template>
```

Then, your can:

```html
<template>
  <img :src="require('@/assets/logo.png')" />
</template>
```

## scripts.extensions

`scripts.extensions: string[] = []`

An array of extensions that should be used to resolve modules.

**BalmJS** default extensions:

- [`.wasm`](https://webassembly.org/)
- `.mjs`
- `.js`
- [`.json`](https://json.org/)
- [`.jsx`](https://facebook.github.io/jsx/)
- [`.ts`](https://www.typescriptlang.org/)
- `.tsx`
- [`.vue`](https://vuejs.org/)

:chestnut: For example:

```js
module.exports = {
  scripts: {
    extensions: ['.vue']
  }
  // Other Options...
};
```

Before, usage:

```js
// main.js
import foo from 'foo.vue';
```

Now, you can:

```js
// main.js
import foo from 'foo';
```

## scripts.alias

`scripts.alias: object = {}`

Replace modules by other modules or paths.

:chestnut: For example:

```js
module.exports = {
  scripts: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
  // Other Options...
};
```

## scripts.plugins

`scripts.loaders: plugins[] = []`

Add additional plugins to the compiler.

> [List of plugins](https://webpack.js.org/plugins/)

## scripts.sourceMap

`scripts.sourceMap: string | boolean = false`

Source mapping.

## scripts.target

`scripts.target: string = 'web'`

To [target](https://webpack.js.org/configuration/target/) a specific environment.

## scripts.externals

`scripts.externals: string | object | Function | RegExp = ''`

The same to webpack [externals](https://webpack.js.org/configuration/externals/).

## scripts.stats

`scripts.stats: string | object`

Capture timing information for each module. Reference [options](https://webpack.js.org/configuration/stats/).

Defaults to:

```js
{
  colors: true,
  modules: false,
  children: false,
  chunks: false,
  chunkModules: false
}
```

## scripts.webpackOptions

`scripts.webpackOptions: object = {}`

Full custom [webpack configuration](https://webpack.js.org/configuration/).

## scripts.options

`scripts.options: object`

Terser [minify options](https://github.com/terser/terser#minify-options).

Defaults to:

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

## scripts.inject

`scripts.inject: boolean = false`

Support the hash scripts in the SSR build.

## scripts.optimization

`scripts.optimization: object = {}`

Webpack optimizations for manual configuration and overrides. Reference [options](https://webpack.js.org/configuration/optimization/).

## scripts.extractAllVendors

`scripts.extractAllVendors: boolean = false`

- HTML template:

```html
<!-- All vendors in one -->
<script src="%PUBLIC_URL%/scripts/vendor.js"></script>
<!-- Entry -->
<script src="%PUBLIC_URL%/scripts/main.js"></script>
```

> **Tips:** You can rename `vendor` with `scripts.vendorName`.

## scripts.vendorName

`scripts.vendorName: string = 'vendor'`

(For SPA) AllInOne vendor filename or Vendors folder name.

## scripts.extractCss

`scripts.extractCss: { enabled: boolean; prefix: string; }`

Extract css from some bundle.

Defaults to:

```js
{
  enabled: false,
  prefix: ''
}
```

:warning: **TIPS:** Separating styles from scripts for modular management is more conducive to project maintenance and expansion, See BalmJS advanced usage - [Code Splitting](../advanced/code-splitting.md).

## scripts.ie8

`scripts.ie8: boolean = false`

> New in 2.2.0

Supporting Internet Explorer 8 and below (IE6-8). [IE compatibility config](../advanced/recipes.html#ie-compatibility).

> :warning: **TIPS:** In IE8 `Object.defineProperty` can only be used on DOM objects. This is unfortunate as it's required to set getters and setters. Due to this if you plan on supporting IE8 or below then the usage of getters and setters isn't recommended.