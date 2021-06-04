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
module.exports = {
  styles: {
    extname: 'scss'
  }
  // 其他配置项...
};
```

> ⚠️ `Cannot find module 'node-sass'` [解决方案](../advanced/troubleshooting.md)

### <del>styles.dartSass</del> (Deprecated in 3.17.0)

> ⚠️ 从 3.17.0+起，Sass 预编译只采用 [Dart Sass](https://sass-lang.com/dart-sass)（LibSass 已经弃用）

`styles.dartSass: boolean = false`

> New in 2.6.0

## styles.minify

`styles.minify: boolean = false`

> Rename <del>`minified`</del> to `minify` in 3.0.0

忽略环境变量，强制执行 CSS 压缩。

> **提示：** 经常在开发模式下配合 [`mix.serve`](/api/serve) 一起使用。

## styles.atImportPaths

`styles.atImportPaths: string[] = []`

（**绝对路径**）确保 Balm 样式中包含 `@import` 能正确解析第三方引用路径。

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

module.exports = {
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

module.exports = {
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
