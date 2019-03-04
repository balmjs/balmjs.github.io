# Sprite

### `sprites.basePath`

`string`

CSS中引用图片位置的路径。默认值为：`'../'`。

### `sprites.padding`

`number`

包含在图像或SVG之间的像素数量。默认值为：`1`。

### `sprites.image`

`array`

图像文件夹名称的列表。默认值为：`[]`。

🌰 例如：

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
│ │ ├─┬ custom-icons // 注意：文件夹名称
│ │ │ ├── a.png
│ │ │ ├── b.png
│ │ │ └── c.png
│ │ └── ... // 其他图片资源
...
```

After images:

```
project
├─┬ src
│ ├─┬ styles
│ │ ├─┬ sprites
│ │ │ └── _custom-icons.scss // 合成图片雪碧图对应的样式
│ │ └── main.scss
│ ├─┬ images
│ │ ├─┬ custom-icons
│ │ │ ├── a.png
│ │ │ ├── b.png
│ │ │ └── c.png
│ │ ├── custom-icons-sprite.png // 合成的图片雪碧图文件（提示：此文件存放于'.tmp'临时文件夹或'dist'打包文件夹中）
│ │ └── ... // 其他图片资源
...
```
