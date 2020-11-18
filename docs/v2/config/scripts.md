# Javascript

## scripts.bundler

```ts
type BalmBundler = 'webpack' | 'rollup' | 'esbuild';
```

`scripts.bundler: BalmBundler = 'webpack'`

> New in 3.9.0

Default bundler.

## scripts.minifyOptions

`scripts.minifyOptions: MinifyOptions`

> Rename <del>`options`</del> to `minifyOptions` in 3.9.0

Terser [minify options](https://github.com/terser/terser#minify-options) for webpack and rollup bundler.

Defaults to:

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

> Just for production build

## scripts.lint

`scripts.lint: boolean = false`

The pluggable linting utility for JavaScript and JSX.

> Just for production build
