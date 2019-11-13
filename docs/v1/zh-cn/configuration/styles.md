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

### <del>`styles.autoprefixer`</del>

`array`

根据 [Can I Use](http://caniuse.com/) 规则解析CSS并添加兼容浏览器的前缀。默认值为：`['last 1 version']`。

> Autoprefixer 使用 [Browserslist](https://github.com/ai/browserslist#queries)

🌰 例如：

```js
styles: {
  autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR']
}
```

⚠️ **Deprecated in 1.5.1，请使用一个 `.browserslistrc` 配置文件代替。**

🌰 例如：

```config
> 0.5%
last 2 versions
Firefox ESR
not dead
```

### `styles.options`

`object`

CSS优化配置。默认值为：

```js
{
  safe: true,
  discardComments: {
    removeAll: true
  }
}
```

[CssNano Optimisations](https://cssnano.co/guides/optimisations/)

### `styles.includePaths`

`array`

> New in 0.6.0

确保包含路径中的文件的父目录。默认值为：`[]`。

### `styles.sassOptions`

`object`

> New in 1.5.5

[Node-sass Options](https://github.com/sass/node-sass#options)。默认值为：`{}`。

🌰 例如：

```js
styles: {
  ext: 'scss',
  sassOptions: {
    importer: require('node-sass-glob-importer')()
  }
}
```

### `styles.lessOptions`

`object`

> New in 1.5.5

`gulp-less` [Options](https://github.com/gulp-community/gulp-less#options). Defaults to `{}`.

  🌰 例如：

  ```js
  styles: {
    ext: 'less',
    lessOptions: {
      plugins: [
        // ...
      ]
    }
  }
  ```

### `styles.postcssPlugins`

`array`

> New in 0.13.0

[PostCSS plugins](https://www.postcss.parts/). 默认值为：`[]`。

__BalmJS__ 默认已加载的PostCSS插件：

- For PostCSS
  - [postcss-import](https://github.com/postcss/postcss-import)
  - [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)
  - [postcss-preset-env](https://preset-env.cssdb.org/)
- For Sass/Less
  - [autoprefixer](https://github.com/postcss/autoprefixer)

### `styles.postcssEnvOptions`

`object`

> New in 1.1.0

[PostCSS Preset Env options](https://github.com/csstools/postcss-preset-env#options). 默认值为：

```js
{
  stage: 0,
  autoprefixer: {
    flexbox: 'no-2009'
  }
}
```

### `styles.postcssOptions`

`object`

> New in 0.13.0

[PostCSS options](https://github.com/postcss/postcss#options). 默认值为：`{}`。

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
