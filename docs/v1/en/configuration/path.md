# Root & Path

## Input

### `roots.source`

`string`

Source code (Input directory). Defaults to `'src'`.

🌰 For example:

```js
roots: {
  source: 'app'
}
```

### `paths.source.base`

`string`

(Input) Application directory. Defaults to `''`.

### `paths.source.css`

`string`

(Input) Stylesheet directory. Defaults to `'styles'`.

### `paths.source.js`

`string`

(Input) JavaScript directory. Defaults to `'scripts'`.

### `paths.source.img`

`string`

(Input) Image directory. Defaults to `'images'`.

### `paths.source.font`

`string`

(Input) Font directory. Defaults to `'fonts'`.

### `paths.source.media`

`string`

> New in 0.9.1

(Input) Media directory. Defaults to `'media'`.

🌰 For example:

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

## Output

### `roots.target`

`string`

Production (Output directory). Defaults to `'dist'`.

🌰 For example:

```js
roots: {
  target: 'dist'
}
```

### `paths.target.base`

`string`

(Output) Application directory. Defaults to `''`.

### `paths.target.css`

`string`

(Output) Stylesheet directory. Defaults to `'css'`.

### `paths.target.js`

`string`

(Output) JavaScript directory. Defaults to `'js'`.

### `paths.target.img`

`string`

(Output) Image directory. Defaults to `'img'`.

### `paths.target.font`

`string`

(Output) Font directory. Defaults to `'font'`.

### `paths.target.media`

`string`

> New in 0.9.1

(Output) Media directory. Defaults to `'media'`.

🌰 For example:

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
