# CSS配置

### `styles.ext`

`string`

支持的样式后缀：css, [scss](http://sass-lang.com/), [less](http://lesscss.org/)。默认值为：`'css'`。

> 默认 `css` 后缀采用的是 [PostCSS](http://postcss.org/)

🌰 例如：

```js
styles: {
  ext: 'scss'
}
```

### `styles.autoprefixer`

`array`

根据 [Can I Use](http://caniuse.com/) 规则解析CSS并添加兼容浏览器的前缀。默认值为：`['last 1 version']`。

> Autoprefixer 使用 [Browserslist](https://github.com/ai/browserslist#queries)

🌰 例如：

```js
styles: {
  autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR']
}
```

### `styles.options`

`object`

CSS优化配置。默认值为：

```js
{
  safe: true,
  autoprefixer: false,
  discardComments: {
    removeAll: true
  }
}
```

🌰 例如：

```js
styles: {
  options: {
    safe: true,
    autoprefixer: false
  }
}
```

### `styles.includePaths`

`array`

> New in 0.6.0

确保包含路径中的文件的父目录。默认值为：`[]`。

### `styles.postcssPlugins`

`array`

> New in 0.13.0

[PostCSS plugins](https://www.postcss.parts/). 默认值为：`[]`.

__BalmJS__ 默认已加载的PostCSS插件：

- [autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-cssnext](http://cssnext.io/)
- [postcss-import](https://github.com/postcss/postcss-import)

### `styles.postcssOptions`

`object`

> New in 0.13.0

[PostCSS options](https://github.com/postcss/postcss#options). 默认值为：`{}`.

### `styles.postcssOptions`

`object`

> New in 0.13.0

[PostCSS loader options](https://github.com/postcss/postcss-loader#options). 默认值为：

```js
{
  exec: undefined,
  parser: undefined,
  syntax: undefined,
  stringifier: undefined,
  config: undefined,
  // plugins: [], // 注意：请使用 `styles.postcssPlugins` 配置插件
  sourceMap: false
}
```
