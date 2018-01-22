# JS配置

## 入口

### `scripts.entry`

`object`

脚本入口点。默认值为：`null`。

1. `key(string): value(string)`: 每个HTML页面对应一个脚本入口文件。
2. `key(string): value(array)`:（提取第三方模块）创建一个单独的文件，由多个入口脚本之间共享的通用模块组成。

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

然后，你的HTML模板中就可以使用自定义提取 `lib` 和 `ui`：

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

### `scripts.filename`

`string`

指定磁盘上每个输出文件的名称。你__不能__在这里指定绝对路径！默认值为：`'[name]`。

- 每个构建使用唯一的hash来生成：

```js
filename: '[name].[hash]'
```

- 根据文件内容hash来生成：

```js
filename: '[chunkhash]'
```

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
umdNamedDefine: true
```

### `scripts.chunkFilename`

The filename of non-entry chunks as relative path inside the `output.path` directory. 默认值为：`'(auto)'`。

- `[id]` is replaced by the id of the chunk.（开发模式默认值）
- `[name]` is replaced by the name of the chunk (or with the id when the chunk has no name).
- `[hash]` is replaced by the hash of the compilation.
- `[chunkhash]` is replaced by the hash of the chunk.（生产模式默认值）

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

__BalmJS__ 默认已加载的 loaders:

- [`html`](https://github.com/webpack/html-loader)
- [`style`](https://github.com/webpack/style-loader)
- [`css`](https://github.com/webpack/css-loader)
- [`postcss`](https://github.com/postcss/postcss-loader)
- [`babel`](https://github.com/babel/babel-loader)
- [`url`](https://github.com/webpack/url-loader)
- [`file`](https://github.com/webpack/file-loader)

> [List of loaders](https://webpack.js.org/loaders/)

🌰 例如：

首先，安装你需要的loader：

```sh
$ npm i -D vue-loader

# 或者使用yarn安装
$ yarn add -D vue-loader
```

然后，加载它：

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

用来解析模块的文件扩展数组。默认值为：`[]`。

__BalmJS__ 默认已支持的扩展名：

- `.js`
- [`.json`](http://www.json.org/)
- [`.jsx`](http://facebook.github.io/jsx/)
- [`.vue`](https://vuejs.org/)

🌰 例如：

```js
scripts: {
  extensions: ['.ts', '.tsx']
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
    'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js'
  }
}
```

### `scripts.include`

`array`

> New in 0.9.1

在 `babel-loader` 中为 `node_modules` 的某些依赖脚本提供一个 [Rule.include](https://webpack.js.org/configuration/module/#rule-include) 选项

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

### `scripts.eslint`

`boolean`

JavaScript和JSX的可插入linting实用程序。默认值为：`false`。

## 高级配置

### `scripts.webpack`

`object`

> New in 0.8.4

重写webpack配置项。默认值为：`{}`。

> [All configuration options](https://webpack.js.org/configuration/)

### `scripts.options`

`object`

> New in 0.6.0

[UglifyJS options](http://lisperator.net/uglifyjs/). 默认值为：

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

## 优化

### `scripts.vendorName`

`string`

AllInOne vendor filename or Custom Vendor folder name. 默认值为：`'vendor'`。

### `scripts.extractAllVendors`

`boolean`

> Named `scripts.vendor` in version < 0.12.0

All vendors in one (for SPA). 默认值为：`false`。

### `scripts.vendors`

`array`

Custom Vendor Modules. 默认值为：`[]`. (automatic setting by `scripts.entry`。

### `scripts.cdn`

`string` `array` `object` `function` `regex`

> New in 0.9.0

The same to webpack [externals](https://webpack.js.org/configuration/externals/#externals). 默认值为：`null`。

### `scripts.cssLoader`

`boolean`

> New in 0.12.0

Use BalmJS default rules or custom rules for `css-loader`. 默认值为：`true`。

### `scripts.extractCss`

`object`

> New in 0.12.0

Extract css from some bundle. 默认值为：

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