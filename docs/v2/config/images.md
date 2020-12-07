# Images

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

Enable/Disable compress optimizers for the specified format images.

**BalmJS** default imagemin plugins:

- [gifsicle](https://github.com/imagemin/imagemin-gifsicle)
- [mozjpeg](https://github.com/imagemin/imagemin-mozjpeg)
- [optipng](https://github.com/imagemin/imagemin-optipng)
- [svgo](https://github.com/imagemin/imagemin-svgo)

> ⚠️ pre-build test failed [Solution](../advanced/troubleshooting.md)
