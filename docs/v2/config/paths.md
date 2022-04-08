# Roots & Paths

## The Root Directory

### `roots.source`

`roots.source: string = 'src'`

(Input) Source code.

### `roots.target`

`roots.target: string = 'dist'`

(Output) Production code.

:chestnut: For example:

```js
module.exports = {
  roots: {
    source: 'app', // `/path/to/workspace/app`
    target: 'dist' // `/path/to/workspace/dist`
  }
  // Other Options...
};
```

## The App Directory

```ts
interface BalmPath {
  base: string; // Application directory
  html: string; // HTML template directory (New in balm 3+, `paths.source` only)
  css: string; // Stylesheet directory
  js: string; // JavaScript directory
  img: string; // Image directory
  font: string; // Font directory
  media: string; // Media directory
}
```

### `paths.source`

`paths.source: BalmPath`

(Input) Un-compiled assets.

- `paths.source.base: string = ''`
- `paths.source.html: string = ''`
- `paths.source.css: string = 'styles'`
- `paths.source.js: string = 'scripts'`
- `paths.source.img: string = 'images'`
- `paths.source.font: string = 'fonts'`
- `paths.source.media: string = 'media'`

### `paths.target`

`paths.target: BalmPath`

(Output) Compiled assets.

- `paths.target.base: string = ''`
- `paths.target.css: string = 'css'`
- `paths.target.js: string = 'js'`
- `paths.target.img: string = 'img'`
- `paths.target.font: string = 'font'`
- `paths.target.media: string = 'media'`

:chestnut: For example:

```js
module.exports = {
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
  // Other Options...
};
```
