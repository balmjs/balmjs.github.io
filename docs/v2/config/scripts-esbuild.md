# Javascript bundler - esbuild

> ⚠️ NOTE: experimental for `balm@3`, and `balm-core` required

## scripts.esbuild

`scripts.esbuild: boolean = false`

Enabled an extremely fast JavaScript bundler and minifier.

> If enabled `scripts.esbuild`, _webpack configs_ of `config.scripts` will be disabled.

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

`scripts.buildOptions: BuildOptions = {}`

Esbuild options. See [the TypeScript type definitions](https://github.com/evanw/esbuild/blob/master/lib/types.ts) for the complete set of options.

## scripts.useTransform

`scripts.useTransform: boolean = false`

Transforming a file by custom build.

## scripts.transformOptions

`scripts.transformOptions: TransformOptions = {}`

Transform options. See [the TypeScript type definitions](https://github.com/evanw/esbuild/blob/master/lib/types.ts) for the complete set of options.

:chestnut: For example:

```js
balm.config = {
  scripts: {
    esbuild: true,
    entry: ['./app/scripts/react-entry.js'],
    useTransform: true,
    transformOptions: {
      loader: 'jsx'
    }
  }
  // Other Options...
};
```
