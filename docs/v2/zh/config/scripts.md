# 脚本

## scripts.bundler

```ts
type BalmBundler = 'webpack' | 'rollup' | 'esbuild';
```

`scripts.bundler: BalmBundler = 'webpack'`

> New in 3.9.0

默认的打包模式。

## scripts.minifyOptions

`scripts.minifyOptions: MinifyOptions`

> Rename <del>`options`</del> to `minifyOptions` in 3.9.0

（webpack 和 rollup 模式）JS 压缩 [详细配置](https://github.com/terser/terser#minify-options)。

默认值为：

```js
{
  ecma: 5,
  parse: {
    ecma: 2017
  },
  compress: {
    warnings: false,
    comparisons: false,
    inline: 2
  },
  mangle: {
    safari10: true
  },
  output: {
    comments: false,
    ascii_only: true
  }
}
```

> 仅生产模式下有效

## scripts.lint

`scripts.lint: boolean = false`

开启 JavaScript 和 JSX 的代码规范验证。

> 仅生产模式下有效
