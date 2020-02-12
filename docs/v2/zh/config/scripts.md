# 脚本

## scripts.entry

```ts
interface BalmEntryObject {
  [entryChunkName: string]: string | string[];
}
```

`scripts.entry: string | string[] | BalmEntryObject = ''`

脚本入口点。

当 `scripts.entry` 为 `BalmEntryObject` 对象时：

1. `{ [key: string]: value: string }`: 每个 HTML 页面对应一个脚本入口文件。
2. `{ [key: string]: value: string[] }`:（提取第三方模块）创建一个单独的文件，由多个入口脚本之间共享的通用模块组成。

:chestnut: 举个栗子：

```js
balm.config = {
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

导出的库的名称。

## scripts.libraryTarget

`scripts.libraryTarget: string = 'var'`

导出的库的类型。

> 支持的选项：`var`, `this`, `window`, `global`, `commonjs`, `commonjs2`, `amd`, `umd`.

:chestnut: 举个栗子：

```js
balm.config = {
  scripts: {
    library: 'AwesomeLibraryName',
    libraryTarget: 'umd'
  }
  // 其他配置项...
};
```

## scripts.loaders

`scripts.loaders: Rule[] = []`

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

balm.config = {
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

## scripts.includeJsResource

`scripts.includeJsResource: string[] = []`

（**绝对路径**）在 `babel-loader` 中为某些需要额外依赖的脚本提供一个 [Rule.include](https://webpack.js.org/configuration/module/#ruleinclude) 选项。

## scripts.urlLoaderOptions

`scripts.urlLoaderOptions: object = {}`

> New in 2.1.0

balm 默认的 `url-loader` 中额外的配置。

:chestnut: 举个栗子：

```js
balm.config = {
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

启用或禁用 **BalmJS** 某些默认 loaders。

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
balm.config = {
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
balm.config = {
  scripts: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
  // 其他配置项...
};
```

## scripts.plugins

`scripts.loaders: plugins[] = []`

添加额外的插件到编译器。

> [Plugins 列表](https://webpack.js.org/plugins/)

## scripts.hot

`scripts.hot: boolean = true`

开启热加载。

## scripts.sourceMap

`scripts.sourceMap: string | boolean = false`

开启源映射。

## scripts.target

`scripts.target: string = 'web'`

针对[特定的环境](https://webpack.js.org/configuration/target/)来编译脚本。

## scripts.externals

`scripts.externals: string | object | Function | RegExp = ''`

同 webpack 的 [externals](https://webpack.js.org/configuration/externals/) 参数。

## scripts.stats

`scripts.stats: string | object`

捕获每个模块的编译信息。[详细配置](https://webpack.js.org/configuration/stats/)。

默认值为：

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

完整的 [webpack 配置](https://webpack.js.org/configuration/)。

## scripts.lint

`scripts.lint: boolean = false`

开启 JavaScript 和 JSX 的代码规范验证。

## scripts.options

`scripts.options: object`

JS 压缩 [详细配置](https://github.com/terser/terser#minify-options)。

默认值为：

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

支持 SSR 模式中构建脚本生成 hash。

## scripts.optimization

`scripts.optimization: object = {}`

WEB 性能优化。[详细配置](https://webpack.js.org/configuration/optimization/)。

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

`scripts.extractCss: { enabled: boolean; prefix: string; }`

提取脚本中的样式。

默认值为：

```js
{
  enabled: false,
  prefix: ''
}
```

:warning: **提示：** 将样式从脚本中分离进行模块化管理更有利于项目维护和扩展，详见 BalmJS 进阶用法 - [代码分离](../advanced/code-splitting.md)。

## scripts.ie8

`scripts.ie8: boolean = false`

> New in 2.2.0

支持低版本 IE 浏览器（IE6-8）。[IE 向下兼容性配置](../advanced/recipes.html#ie-向下兼容方案).

> 如果启用了 `scripts.ie8`，`scripts.hot` 将失效。

> :warning: **提示：** 在 IE8 中，请不要使用 (ES6) `Class` 的 `get` 和 `set` 用法。
