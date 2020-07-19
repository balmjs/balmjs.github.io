# Javascript bundler - esbuild

> ⚠️ NOTE: experimental for `balm@3`, and `balm-core@next` required

## scripts.esbuild

`scripts.esbuild: boolean = false`

Enabled an extremely fast JavaScript bundler and minifier.

> If enabled `scripts.esbuild`, _webpack config_ of `config.scripts` will be disabled.

## scripts.entry

`scripts.entry: string | string[] = ''`

The shortcut for esbuild entry.

:chestnut: For example:

```js
balm.config = {
  scripts: {
    esbuild: true,
    entry: ['./app/scripts/main-page.js', './app/scripts/sub-page.js']
  }
  // Other Options...
};
```

## scripts.buildOptions

`scripts.buildOptions: object = {}`

Esbuild options. See [the TypeScript type definitions](https://github.com/evanw/esbuild/blob/master/lib/types.ts) for the complete set of options.
