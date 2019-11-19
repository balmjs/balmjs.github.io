# 样式

> 根据 [Can I Use](https://caniuse.com/) 规则解析 CSS 并添加兼容浏览器的前缀。
>
> Autoprefixer 采用 [Browserslist](https://github.com/ai/browserslist#queries)

## styles.extname

`styles.extname: string = 'css'`

预编译 [PostCSS](https://postcss.org/)/[Sass](https://sass-lang.com/)/[Less](http://lesscss.org/) 生成 CSS 文件。

> 支持的样式后缀：`css`，`scss`/`sass` 和 `less`。

:chestnut: 举个栗子：

```js
balm.config = {
  styles: {
    extname: 'scss'
  }
  // 其他配置项...
};
```

## styles.minified

`styles.minified: boolean = false`

忽略环境变量，强制执行 CSS 压缩。

> **提示：** 经常在开发模式下配合 [`mix.serve`](/api/serve) 一起使用。

## styles.atImportPaths

`styles.atImportPaths: string[] = []`

确保 [Balm](https://github.com/balmjs/balm) 样式中包含 `@import` 能正确解析第三方引用路径。

## styles.options

`styles.options: object`

CSS 压缩优化。[详细配置](https://cssnano.co/guides/optimisations/)。

默认值为：

```js
{
  safe: true,
  autoprefixer: false,
  discardComments: {
    removeAll: true
  }
}
```

## styles.sassOptions

`styles.sassOptions: object = {}`

Sass 预编译 [详细配置](https://github.com/sass/node-sass#options)。

## styles.lessOptions

`styles.lessOptions: object = {}`

Less 预编译 [详细配置](https://github.com/gulp-community/gulp-less#options)。

## styles.postcssEnvOptions

`styles.postcssEnvOptions: object`

PostCSS 环境 [详细配置](https://github.com/csstools/postcss-preset-env#options)。

默认值为：

```js
{
  stage: 0,
  autoprefixer: {
    flexbox: 'no-2009'
  }
}
```

## styles.postcssPlugins

`styles.postcssPlugins: object[] = []`

PostCSS [插件](https://www.postcss.parts/)。

## styles.postcssLoaderOptions

```ts
interface PostcssLoaderOptions {
  exec?: boolean;
  parser?: string | object;
  syntax?: string | object;
  stringifier?: string | object;
  config?: object;
  plugins?: object[] | Function; // NOTE: 等同于 `styles.postcssPlugins`
  sourceMap: string | boolean;
}
```

`styles.postcssLoaderOptions: PostcssLoaderOptions = { sourceMap: false }`

PostCSS loader [详细配置](https://github.com/postcss/postcss-loader#options)。

## styles.imageBasePath

`styles.imageBasePath: string = '../'`

雪碧图生成的 CSS 中对应引用雪碧图的基础路径（相对路径）。

## styles.sprites

`styles.sprites: string[] = []`

转换每组文件夹中的图片生成雪碧图和对应的 CSS。

:chestnut: 举个栗子：

```js
// 输入：
// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*.png`

balm.config = {
  styles: {
    sprites: ['icons']
  }
  // 其他配置项...
};

// 输出：
// 图片：`/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites.png`
// 样式：`/path/to/workspace/${roots.source}/${paths.source.css}/sprites/_icons.${styles.extname}`
```

## styles.spriteRetina

`styles.spriteRetina: boolean = false`

启用 retina 雪碧图生成器。

:chestnut: 举个栗子：

```js
// 输入：
// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*.png`
// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*@2x.png`

balm.config = {
  styles: {
    sprites: ['icons'],
    spriteRetina: true
  }
  // 其他配置项...
};

// 输出：
// 图片：`/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites.png`
//        `/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites@2x.png`
// 样式：`/path/to/workspace/${roots.source}/${paths.source.css}/sprites/_icons.${styles.extname}`
```

## styles.spriteParams

`styles.spriteParams: object = {}`

雪碧图 [详细配置](https://github.com/twolfson/gulp.spritesmith#spritesmithparams).
