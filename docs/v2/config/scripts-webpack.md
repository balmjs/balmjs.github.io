# Application bundler - webpack

> ⚠️ NOTE: `webpack@4` is used by current version, and `webpack@5` is used in `balm-core@canary` (For related configuration, please refer to the corresponding webpack official documentation)

> BalmJS will invoke analyzer, when you run `npm run prod --report`.

## scripts.entry

```ts
interface EntryObject {
  [name: string]: string | string[];
}

type BalmEntry = string | string[] | EntryObject;
```

`scripts.entry: BalmEntry = ''`

The entry point for the bundle.

When `scripts.entry` is `EntryObject`:

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

The name of the exported library. See webpack [output.library](https://webpack.js.org/configuration/output/#outputlibrary).

## scripts.libraryTarget

`scripts.libraryTarget: string = 'var'`

Configure how the library will be exposed. See webpack [output.libraryTarget](https://webpack.js.org/configuration/output/#outputlibrarytarget).

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

`scripts.loaders: RuleSetRule[] = []`

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

## scripts.defaultLoaders

```ts
interface BalmLoaders {
  html?: boolean;
  css?: boolean;
  js?: boolean;
  url?: boolean;
}
```

`scripts.defaultLoaders: BalmLoaders = {}`

> Rename <del>`disableDefaultLoaders`</del> to `defaultLoaders` in 2.5.0

Enable/Disable **BalmJS** some default loaders.

## scripts.useEsModule

`scripts.useEsModule: boolean = true`

> New in 2.23.0

Use ES modules syntax for the balm default loaders.

## scripts.includeJsResource

`scripts.includeJsResource: string[] = []`

(**Absolute path**) Supply a [Rule.include](https://webpack.js.org/configuration/module/#ruleinclude) option in `babel-loader` for some extra vendor scripts from local anywhere.

## scripts.excludeUrlResource

`scripts.excludeUrlResource: string[] = []`

> New in 3.7.0

(**Absolute path**) Supply a [Rule.exclude](https://webpack.js.org/configuration/module/#ruleexclude) option in `url-loader` for images assets from local anywhere.

## scripts.babelLoaderOptions

`scripts.babelLoaderOptions: object = {}`

> New in 3.9.6

The extra options of the balm default `babel-loader`. Reference [options](https://github.com/babel/babel-loader#options).

## scripts.urlLoaderOptions

`scripts.urlLoaderOptions: object = {}`

> New in 2.1.0

The extra options of the balm default `url-loader`. Reference [options](https://github.com/webpack-contrib/url-loader#options).

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

## scripts.postcssLoaderOptions

```ts
interface PostcssLoaderOptions {
  exec?: boolean;
  postcssOptions?: object | Function; // NOTE: `postcssOptions.plugins` is the same to `styles.postcssPlugins`
  sourceMap: string | boolean;
}
```

`scripts.postcssLoaderOptions: PostcssLoaderOptions = {}`

> Migrated from <del>`styles.postcssLoaderOptions`</del> in 2.11.0

PostCSS loader for webpack. Reference [options](https://github.com/postcss/postcss-loader#options).

## scripts.htmlLoaderOptions

`scripts.htmlLoaderOptions: object = {}`

> New in 2.11.0

The extra options of the balm default `html-loader`. Reference [options](https://github.com/webpack-contrib/html-loader#options).

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

## scripts.optimization

`scripts.optimization: object = {}`

Webpack optimizations for manual configuration and overrides. See webpack [optimization](https://webpack.js.org/configuration/optimization/).

## scripts.plugins

`scripts.plugins: Plugin[] = []`

Add additional plugins to the compiler.

> [List of plugins](https://webpack.js.org/plugins/)

## scripts.injectHtml

`scripts.injectHtml: boolean = false`

> New in 3.16.0

Auto inject scripts and generate html entry file. (By default, you need to manually create the HTML entry file.)

> NOTE: Because the content of the `<body>` element of the default template is empty, so you must set a custom template by `scripts.htmlPluginOptions.template` for some SPA (e.g. Vue.js).

## scripts.htmlPluginOptions

`scripts.htmlPluginOptions: object = {}`

> New in 3.16.0

Html plugin for webpack. Reference [options](https://github.com/jantimon/html-webpack-plugin/tree/4.x#options).

:chestnut: For example:

- For SPA

  ```js
  module.exports = {
    scripts: {
      entry: {
        app: './app/scripts/main.js'
      }
    },
    injectHtml: true
    // Other Options...
  };
  ```

- For MPA

  ```js
  module.exports = {
    scripts: {
      entry: {
        'page-1': './app/scripts/p1.js',
        'page-2': './app/scripts/p2.js'
      }
    },
    injectHtml: true,
    htmlPluginOptions: {
      template: './app/templates/index.html'
      title: ['Page 1', 'Page 2']
    }
    // Other Options...
  };
  ```

## scripts.extractCss

<del>`scripts.extractCss: { enabled: boolean; prefix: string; }` for `balm-core` < 3.16.0</del>

`scripts.extractCss: boolean = false`

Extract css from some bundle. (`scripts.injectHtml = true` required)

> Just for production build

:warning: **TIPS:** Separating styles from scripts for modular management is more conducive to project maintenance and expansion, See BalmJS advanced usage - [Code Splitting](../advanced/code-splitting.md).

## scripts.sourceMap

`scripts.sourceMap: string | boolean = false`

Source mapping. See webpack [devtool](https://webpack.js.org/configuration/devtool/).

## scripts.target

- current version: `scripts.target: string = 'web'`
- canary version: `scripts.target: string | string[] = ['web', 'es5']`

To target a specific environment. See webpack [target](https://webpack.js.org/configuration/target/).

## scripts.externals

`scripts.externals: string | object | Function | RegExp = ''`

Provides a way of excluding dependencies from the output bundles. See webpack [externals](https://webpack.js.org/configuration/externals/).

## scripts.stats

`scripts.stats: object | string`

Capture timing information for each module. See webpack [stats](https://webpack.js.org/configuration/stats/).

Defaults to:

```js
{
  colors: true,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: false
}
```

## scripts.webpackOptions

`scripts.webpackOptions: object = {}`

Full custom [webpack configuration](https://webpack.js.org/configuration/).

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

## scripts.useCache

`scripts.useCache: boolean = false`

> Rename <del>`inject`</del> to `useCache` in 3.16.0

Support the hash scripts in the SSR build.

## scripts.ie8

`scripts.ie8: boolean = false`

> New in 2.2.0

Supporting Internet Explorer 8 and below (IE6-8). [IE compatibility config](../advanced/recipes.html#ie-compatibility).

> :warning: **TIPS:** In IE8 `Object.defineProperty` can only be used on DOM objects. This is unfortunate as it's required to set getters and setters. Due to this if you plan on supporting IE8 or below then the usage of getters and setters isn't recommended.
