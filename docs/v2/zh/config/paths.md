# 目录和路径

## 根目录

### `roots.source`

`roots.source: string = 'src'`

（输入源）源代码。

### `roots.target`

`roots.target: string = 'dist'`

（输出目标）打包目录。

:chestnut: 举个栗子：

```js
balm.config = {
  roots: {
    source: 'app', // `/path/to/workspace/app`
    target: 'dist' // `/path/to/workspace/dist`
  }
  // 其他配置项...
};
```

## 应用目录

```ts
interface BalmPath {
  base: string; //  应用根目录
  css: string; //   样式目录
  js: string; //    脚本目录
  img: string; //   图片目录
  font: string; //  字体目录
  media: string; // 媒体目录
}
```

### `paths.source`

`paths.source: BalmPath`

（输入源）未编译的源代码。

- `paths.source.base: string = ''`
- `paths.source.css: string = 'styles'`
- `paths.source.js: string = 'scripts'`
- `paths.source.img: string = 'images'`
- `paths.source.font: string = 'fonts'`
- `paths.source.media: string = 'media'`

### `paths.target`

`paths.target: BalmPath`

（输出目标）已编译的静态资源。

- `paths.target.base: string = ''`
- `paths.target.css: string = 'css'`
- `paths.target.js: string = 'js'`
- `paths.target.img: string = 'img'`
- `paths.target.font: string = 'font'`
- `paths.target.media: string = 'media'`

:chestnut: 举个栗子：

```js
balm.config = {
  paths: {
    source: {
      css: 'styles', // `/path/to/workspace/${roots.source}/styles`
      js: 'scripts', // `/path/to/workspace/${roots.source}/scripts`
      img: 'images',
      font: 'fonts'
    },
    target: {
      css: 'css', // `/path/to/workspace/${roots.target}/css`
      js: 'js', // `/path/to/workspace/${roots.target}/js`
      img: 'img',
      font: 'font'
    }
  }
  // 其他配置项...
};
```
