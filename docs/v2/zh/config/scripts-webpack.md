# 应用打包 - webpack

> ⚠️ 提示：当前版本使用 `webpack@4`，`balm-core@canary` 中已使用 `webpack@5`（相关配置请参照对应的 webpack 官方文档）

> 当你运行 `npm run prod --report` 时，BalmJS 会启动分析器。

## scripts.entry

```ts
interface EntryObject {
  [name: string]: string | string[];
}

type BalmEntry = string | string[] | EntryObject;
```

`scripts.entry: BalmEntry = ''`

脚本入口点。

当 `scripts.entry` 为 `EntryObject` 对象时：

1. `{ [key: string]: value: string }`: 每个 HTML 页面对应一个脚本入口文件。
2. `{ [key: string]: value: string[] }`:（提取第三方模块）创建一个单独的文件，由多个入口脚本之间共享的通用模块组成。

:chestnut: 举个栗子：

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
  // 其他配置项...
};
```

然后，你的 HTML 模板中就可以使用自定义提取 `lib` 和 `ui`：

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

> Tips: You can rename `vendors` with `scripts.vendorsName`.

## scripts.library

`scripts.library: string | object = ''`

导出的库的名称。详见 webpack [output.library](https://webpack.js.org/configuration/output/#outputlibrary)。

## scripts.libraryTarget

`scripts.libraryTarget: string = 'var'`

导出的库的类型。详见 webpack [output.libraryTarget](https://webpack.js.org/configuration/output/#outputlibrarytarget)。

:chestnut: 举个栗子：

```js
module.exports = {
  scripts: {
    library: 'AwesomeLibraryName',
    libraryTarget: 'umd'
  }
  // 其他配置项...
};
```

## scripts.loaders

`scripts.loaders: RuleSetRule[] = []`

一系列自动应用的 [loaders](https://webpack.js.org/configuration/module/#rule)。

**BalmJS** 默认已加载的 loaders:

- [`html`](https://github.com/webpack-contrib/html-loader)
- [`style`](https://github.com/webpack-contrib/style-loader)
- [`css`](https://github.com/webpack-contrib/css-loader)
- [`postcss`](https://github.com/postcss/postcss-loader)
- [`babel`](https://github.com/babel/babel-loader)
- [`url`](https://github.com/webpack-contrib/url-loader)
- [`file`](https://github.com/webpack-contrib/file-loader)

> [Loaders 列表](https://webpack.js.org/loaders/)

:chestnut: 举个栗子：

首先，安装一个你需要的 loader（下面以 `vue-loader` 为例）：

```sh
yarn add -D vue-loader
# OR
npm i -D vue-loader
```

然后，加载它：

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
  // 其他配置项...
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

启用或禁用 **BalmJS** 某些默认 loaders。

## scripts.useEsModule

`scripts.useEsModule: boolean = true`

> New in 2.23.0

**BalmJS** 默认 loaders 使用 ES modules 语法。

## scripts.includeJsResource

`scripts.includeJsResource: string[] = []`

（**绝对路径**）在 `babel-loader` 中为某些需要额外依赖的脚本提供一个 [Rule.include](https://webpack.js.org/configuration/module/#ruleinclude) 选项。

## scripts.excludeUrlResource

`scripts.excludeUrlResource: string[] = []`

> New in 3.7.0

（**绝对路径**）在 `url-loader` 中为某些图片资源提供一个 [Rule.exclude](https://webpack.js.org/configuration/module/#ruleexclude) 选项。

## scripts.babelLoaderOptions

`scripts.babelLoaderOptions: object = {}`

> New in 3.9.6

balm 默认的 `babel-loader` 中额外的配置。[详细配置](https://github.com/babel/babel-loader#options)。

## scripts.urlLoaderOptions

`scripts.urlLoaderOptions: object = {}`

> New in 2.1.0

balm 默认的 `url-loader` 中额外的配置。[详细配置](https://github.com/webpack-contrib/url-loader#options)。

:chestnut: 举个栗子：

```js
module.exports = {
  scripts: {
    urlLoaderOptions: {
      esModule: false
    }
  }
  // 其他配置项...
};
```

vue 文件之前的用法：

```html
<template>
  <img :src="require('@/assets/logo.png').default" />
</template>
```

现在的用法：

```html
<template>
  <img :src="require('@/assets/logo.png')" />
</template>
```

## scripts.postcssLoaderOptions

```ts
interface PostcssLoaderOptions {
  exec?: boolean;
  postcssOptions?: object | Function; // NOTE: `postcssOptions.plugins` 等同于 `styles.postcssPlugins`
  sourceMap: string | boolean;
}
```

`scripts.postcssLoaderOptions: PostcssLoaderOptions = { sourceMap: false }`

> Migrated from <del>`styles.postcssLoaderOptions`</del> in 2.11.0

PostCSS loader [详细配置](https://github.com/postcss/postcss-loader#options)。

## scripts.htmlLoaderOptions

`scripts.htmlLoaderOptions: object = {}`

> New in 2.11.0

balm 默认的 `html-loader` 中额外的配置。[详细配置](https://github.com/webpack-contrib/html-loader#options)。

## scripts.extensions

`scripts.extensions: string[] = []`

用来解析模块的文件扩展。

**BalmJS** 默认已支持的扩展名：

- [`.wasm`](https://webassembly.org/)
- `.mjs`
- `.js`
- [`.json`](https://json.org/)
- [`.jsx`](https://facebook.github.io/jsx/)
- [`.ts`](https://www.typescriptlang.org/)
- `.tsx`
- [`.vue`](https://vuejs.org/)

:chestnut: 举个栗子：

```js
module.exports = {
  scripts: {
    extensions: ['.vue']
  }
  // 其他配置项...
};
```

之前的用法：

```js
// main.js
import foo from 'foo.vue';
```

现在的用法：

```js
// main.js
import foo from 'foo';
```

## scripts.alias

`scripts.alias: object = {}`

自定义别名，用其他模块或路径替换模块。

:chestnut: 举个栗子：

```js
module.exports = {
  scripts: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
  // 其他配置项...
};
```

## scripts.optimization

`scripts.optimization: object = {}`

WEB 性能优化。详见 webpack [optimization](https://webpack.js.org/configuration/optimization/)。

## scripts.plugins

`scripts.plugins: Plugin[] = []`

添加额外的插件到编译器。

> [Plugins 列表](https://webpack.js.org/plugins/)

## scripts.injectHtml

`scripts.injectHtml: boolean = false`

> New in 3.16.0

自动注入脚本并生成 HTML 入口文件。（默认需要手动创建 HTML 入口文件）

## scripts.htmlPluginOptions

`scripts.htmlPluginOptions: object = {}`

> New in 3.16.0

balm 默认的 `html-webpack-plugin` 中额外的配置。[详细配置](https://github.com/jantimon/html-webpack-plugin/tree/4.x#options)。

:chestnut: For example:

- 单页面应用

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

- 多页面应用

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

## scripts.sourceMap

`scripts.sourceMap: string | boolean = false`

开启源映射。详见 webpack [devtool](https://webpack.js.org/configuration/devtool/)。

## scripts.target

- 当前版本：`scripts.target: string = 'web'`
- canary 版本：`scripts.target: string | string[] = ['web', 'es5']`

针对特定的环境来编译脚本。详见 webpack [target](https://webpack.js.org/configuration/target/)。

## scripts.externals

`scripts.externals: string | object | Function | RegExp = ''`

从打包中排除依赖项的方法。详见 webpack [externals](https://webpack.js.org/configuration/externals/)。

## scripts.stats

`scripts.stats: string | object`

捕获每个模块的编译信息。详见 webpack [stats](https://webpack.js.org/configuration/stats/)。

默认值为：

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

完整可自定义的 [webpack 配置](https://webpack.js.org/configuration/)。

## scripts.extractAllVendors

`scripts.extractAllVendors: boolean = false`

- HTML 模板：

```html
<!-- 提取所有第三方脚本 -->
<script src="%PUBLIC_URL%/scripts/vendor.js"></script>
<!-- 入口脚本 -->
<script src="%PUBLIC_URL%/scripts/main.js"></script>
```

> **Tips:** 你可以使用使用 `scripts.vendorsName` 来重命名 `vendors`。

## scripts.vendorsName

`scripts.vendorsName: string = 'vendors'`

提取 _所有第三方依赖_ 合成一个文件的 **文件名**，或提取 _部分第三方依赖_ 合成自定义文件的 **文件夹名**。

## scripts.extractCss

<del>`scripts.extractCss: { enabled: boolean; prefix: string; }` for `balm-core` < 3.16.0</del>

`scripts.extractCss: boolean = false`

提取脚本中的样式。

:warning: **提示：** 将样式从脚本中分离进行模块化管理更有利于项目维护和扩展，详见 BalmJS 进阶用法 - [代码分离](../advanced/code-splitting.md)。

## scripts.useCache

`scripts.useCache: boolean = false`

> Rename <del>`inject`</del> to `useCache` in 3.16.0

支持 SSR 模式中构建脚本生成 hash。

## scripts.ie8

`scripts.ie8: boolean = false`

> New in 2.2.0

支持低版本 IE 浏览器（IE6-8）。[IE 向下兼容性配置](../advanced/recipes.html#ie-向下兼容方案).

> :warning: **提示：** 在 IE8 中，请不要使用 (ES6) `Class` 的 `get` 和 `set` 用法。
