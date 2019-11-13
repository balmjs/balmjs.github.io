# 根目录和路径

## 输入源

### `roots.source`

`string`

源代码（输入源根目录）。默认值为 `'src'`。

🌰 例如：

```js
roots: {
  source: 'app'
}
```

### `paths.source.base`

`string`

（输入源）应用根目录。默认值为 `''`。

### `paths.source.css`

`string`

（输入源）样式目录。默认值为 `'styles'`。

### `paths.source.js`

`string`

（输入源）脚本目录。默认值为 `'scripts'`。

### `paths.source.img`

`string`

（输入源）图片目录。默认值为 `'images'`。

### `paths.source.font`

`string`

（输入源）字体目录。默认值为 `'fonts'`。

### `paths.source.media`

`string`

> New in 0.9.1

（输入源）媒体目录。默认值为 `'media'`。

🌰 例如：

```js
paths: {
  source: {
    css: 'styles',
    js: 'scripts',
    img: 'images',
    font: 'fonts'
  }
}
```

## 输出目标

### `roots.target`

`string`

打包目录（输出目标根目录）。默认值为 `'dist'`。

🌰 例如：

```js
roots: {
  target: 'dist'
}
```

### `paths.target.base`

`string`

（输出目标）应用根目录。默认值为 `''`。

### `paths.target.css`

`string`

（输出目标）样式目录。默认值为 `'css'`。

### `paths.target.js`

`string`

（输出目标）脚本目录。默认值为 `'js'`。

### `paths.target.img`

`string`

（输出目标）图片目录。默认值为 `'img'`。

### `paths.target.font`

`string`

（输出目标）字体目录。默认值为 `'font'`。

### `paths.target.media`

`string`

> New in 0.9.1

（输出目标）媒体目录。默认值为 `'media'`。

🌰 例如：

```js
paths: {
  target: {
    css: 'css',
    js: 'js',
    img: 'img',
    font: 'font'
  }
}
```
