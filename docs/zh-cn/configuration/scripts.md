# JS 配置

## 入口

### `scripts.entry`

`object`

脚本入口点。默认值为：`null`。

1.  `key(string): value(string)`: 每个 HTML 页面对应一个脚本入口文件。
2.  `key(string): value(array)`:（提取第三方模块）创建一个单独的文件，由多个入口脚本之间共享的通用模块组成。

🌰 例如：

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

然后，你的 HTML 模板中就可以使用自定义提取 `lib` 和 `ui`：

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

## 输出

### `scripts.library`

`string`

> New in 0.8.4

导出的库的名称。默认值为：`''`。

### `scripts.libraryTarget`

`string`

> New in 0.8.4

导出的库的类型。默认值为：`'var'`。

支持的选项: `var`, `this`, `window`, `global`, `commonjs`, `commonjs2`, `amd`, `umd`.

### `scripts.umdNamedDefine`

`string`

> New in 0.9.0

当使用 `libraryTarget: 'umd'` 时，设置：

```js
umdNamedDefine: true;
```

## Loaders

### `scripts.loaders`

`array`

一系列自动应用的 loaders. 默认值为：`[]`。

Each item can have these properties:

- `test`: A condition that must be met
- `exclude`: A condition that must not be met
- `include`: A condition that must be met
- `loader`: A string of “!” separated loaders
- `loaders`: An array of loaders as string

**BalmJS** 默认已加载的 loaders:

- [`html`](https://github.com/webpack/html-loader)
- [`style`](https://github.com/webpack/style-loader)
- [`css`](https://github.com/webpack/css-loader)
- [`postcss`](https://github.com/postcss/postcss-loader)
- [`babel`](https://github.com/babel/babel-loader)
- [`url`](https://github.com/webpack/url-loader)
- [`file`](https://github.com/webpack/file-loader)

> [List of loaders](https://webpack.js.org/loaders/)

🌰 例如：

首先，安装你需要的 loader：

```sh
$ npm i -D vue-loader

# 或者使用yarn安装
$ yarn add -D vue-loader
```

然后，加载它：

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

用来解析模块的文件扩展数组。默认值为：`[]`。

**BalmJS** 默认已支持的扩展名：

- `.wasm` (New in 0.17.0)
- `.mjs` (New in 0.17.0)
- `.js`
- [`.json`](http://www.json.org/)
- [`.jsx`](http://facebook.github.io/jsx/)
- [`.ts`](http://www.typescriptlang.org/) (New in 1.1.1)
- `.tsx` (New in 1.1.1)
- [`.vue`](https://vuejs.org/)

🌰 例如：

```js
scripts: {
  extensions: ['.ts', '.tsx'];
}
```

之前的用法：

```js
// main.js
import foo from 'foo.ts';
```

现在的用法：

```js
// main.js
import foo from 'foo';
```

### `scripts.alias`

`object`

用其他模块或路径替换模块。默认值为：`{}`。

🌰 例如：

```js
scripts: {
  alias: {
    'vue$': balm.config.isProd ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js'
  }
}
```

## 插件

### `scripts.plugins`

`array`

添加额外的插件到编译器。默认值为：`[]`。

> [List of plugins](https://webpack.js.org/plugins/)

## 开发调试

### `scripts.hot`

`boolean`

开启热加载。默认值为：`true`。

### `scripts.sourceMap`

`boolean`

开启源映射。默认值为：`false`。

### `scripts.target`

`string`

针对特定的环境。默认值为：`'web'`。

> [Target config](https://webpack.js.org/configuration/target/#string)

### `scripts.externals` (`0.20.0`中重命名)

`string` `array` `object` `function` `regex`

> New in 0.9.0, rename `cdn` to `externals` in 0.20.0

同 webpack 的 [externals](https://webpack.js.org/configuration/externals/#externals) 参数。默认值为：`null`。

### `scripts.stats`

`object`

捕获每个模块的时间信息。默认值为：

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

## 高级配置

### `scripts.webpack`

`object`

> New in 0.8.4

重写 webpack 配置项。默认值为：`{}`。

> [All configuration options](https://webpack.js.org/configuration/)

### `scripts.include`

`array`

> New in 0.9.1

在 `babel-loader` 中为 `node_modules` 的某些依赖脚本提供一个 [Rule.include](https://webpack.js.org/configuration/module/#rule-include) 选项

### `scripts.eslint`

`boolean`

JavaScript 和 JSX 的可插入 linting 实用程序。默认值为：`false`。

### `scripts.options`

`object`

> New in 1.1.0

[Terser minify options](https://github.com/terser-js/terser#minify-options). 默认值为：

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

[UglifyJS options](http://lisperator.net/uglifyjs/). (*Version > `0.6.0` and < `1.1.0`*) 默认值为：

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

支持 SSR 模式中构建脚本生成 hash。默认值为：`false`。

## 优化

### `scripts.optimization`

`object`

> New in 0.17.0

WEB 性能的最佳实践。默认值为：

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

- 提取所有第三方依赖合成一个文件的文件名（需要设置 `scripts.extractAllVendors: true`）
- 提取部分第三方依赖合成自定义文件的文件夹名

默认值为：`'vendor'`。

### `scripts.extractAllVendors`

`boolean`

> Named `scripts.vendor` in version < 0.12.0

开启提取所有第三方依赖的功能（仅限单页面项目）。默认值为：`false`。

HTML 模板：

```html
<!-- 提取所有第三方脚本 -->
<script src="%PUBLIC_URL%/scripts/vendor.js"></script>
<!-- 入口脚本 -->
<script src="%PUBLIC_URL%/scripts/main.js"></script>
```

### `scripts.vendors`

`array`

提取部分第三方依赖合成自定义文件名的列表。默认值为：`[]`。（`balm` 会根据 [`scripts.entry`](scripts.md#入口) 配置自动设置此参数）

### `scripts.cssLoader`

`boolean`

> New in 0.12.0

使用 BalmJS 中默认的 `css-loader` 规则，如果设为 `false`，需要在 [Loaders](scripts.md#loaders) 中自行配置 `css-loader` 规则。默认值为：`true`。

### `scripts.extractCss`

`object`

> New in 0.12.0

提取脚本中的第三方样式依赖。默认值为：

```js
{
  enabled: false,
  prefix: ''
}
```

⚠️ **TIPS:** 将样式从脚本中分离进行模块化管理更有利于项目维护和扩展，详见 BalmJS 进阶用法 - [代码分离](http://balmjs.com/docs/en/advanced/code-splitting.html)。

### `scripts.base64Limit`

`number`

> New in 0.22.0

将文件加载为 `base64` 编码的 URL。默认值为：`10000`.
