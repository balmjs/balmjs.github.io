# 图片

## images.plugins

```ts
interface BalmImagesPlugins {
  gif?: boolean | Function;
  jpeg?: boolean | Function;
  png?: boolean | Function;
  svg?: boolean | Function;
}
```

`images.plugins: BalmImagesPlugins | Function[] = {}`

> New in 2.5.0, Rename <del>`defaultPlugins`</del> to `plugins` in 2.22.0

启用或禁用指定格式的图片压缩优化。

**BalmJS** 默认已加载的 imagemin 插件：

- [gifsicle](https://github.com/imagemin/imagemin-gifsicle)
- [mozjpeg](https://github.com/imagemin/imagemin-mozjpeg)
- [optipng](https://github.com/imagemin/imagemin-optipng)
- [svgo](https://github.com/imagemin/imagemin-svgo)

> ⚠️ pre-build test failed [解决方案](../advanced/troubleshooting.md)
