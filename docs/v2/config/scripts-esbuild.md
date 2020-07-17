# Javascript bundler - esbuild

## scripts.esbuild

`scripts.esbuild: object | boolean = false`

> New in 3.0.0

An extremely fast JavaScript bundler and minifier. See [the TypeScript type definitions](https://github.com/evanw/esbuild/blob/master/lib/types.ts) for the complete set of options.

## scripts.entryPoints

`scripts.entryPoints: string[] = []`

> New in 3.0.0

The shortcut for esbuild entry.

:chestnut: For example:

```js
balm.config = {
  scripts: {
    esbuild: true,
    entryPoints: ['./app/scripts/main-page.js', './app/scripts/sub-page.js']
  }
  // Other Options...
};
```

> If enabled `scripts.esbuild`, _webpack config_ of `config.scripts` will be disabled.
