# Sprite

### `sprites.basePath`

`string`

Path to use in CSS referring to image location. Defaults to `'../'`.

### `sprites.padding`

`number`

Amount of pixels to include between images or svgs. Defaults to `1`.

### `sprites.image`

`array`

Image folder name. Defaults to `[]`.

🌰 For example:

```js
sprites: {
  image: ['custom-icons']
}
```

Before images:

```
project
├─┬ src
│ ├─┬ styles
│ │ └── main.scss
│ ├─┬ images
│ │ ├─┬ custom-icons // Note: folder name
│ │ │ ├── a.png
│ │ │ ├── b.png
│ │ │ └── c.png
│ │ └── ... // other images
...
```

After images:

```
project
├─┬ src
│ ├─┬ styles
│ │ ├─┬ sprites
│ │ │ └── _custom-icons.scss // New style for css sprite
│ │ └── main.scss
│ ├─┬ images
│ │ ├─┬ custom-icons
│ │ │ ├── a.png
│ │ │ ├── b.png
│ │ │ └── c.png
│ │ ├── custom-icons-sprite.png // New css sprite file (Note: just in '.tmp' or 'dist')
│ │ └── ... // other images
...
```

### `sprites.mode`

Output modes: `css`, `view`, `defs`, `symbol`, `stack`. Defaults to `'css'`.

### `sprites.svg`

`array`

SVG folder name. Defaults to `[]`.

🌰 For example:

```js
sprites: {
  svg: ['custom-svg']
}
```

Before images:

```
project
├─┬ src
│ ├─┬ styles
│ │ └── main.scss
│ ├─┬ images
│ │ ├─┬ custom-svg // Note: folder name
│ │ │ ├── a.svg
│ │ │ ├── b.svg
│ │ │ └── c.svg
│ │ └── ... // other images
...
```

After images:

```
project
├─┬ src
│ ├─┬ styles
│ │ ├─┬ svg
│ │ │ └── _custom-svg.scss // New style for svg sprite
│ │ └── main.scss
│ ├─┬ images
│ │ ├─┬ custom-svg
│ │ │ ├── a.svg
│ │ │ ├── b.svg
│ │ │ └── c.svg
│ │ ├── custom-svg-css.svg // New svg sprite file: `custom-svg-${sprites.mode}.svg` (Note: just in '.tmp' or 'dist')
│ │ └── ... // other images
...
```
