# JavaScript bundler - esbuild

> ⚠️ NOTE: experimental for `balm 3+`, and `balm-core@next` required

## scripts.entry

`scripts.entry: string | string[] = ''`

The shortcut for esbuild entry.

:chestnut: For example:

```js
module.exports = {
  scripts: {
    bundler: 'esbuild',
    entry: ['./app/scripts/main-page.js', './app/scripts/sub-page.js']
  }
  // Other Options...
};
```

## scripts.buildOptions

`scripts.buildOptions: BuildOptions = {}`

[Build options](https://esbuild.github.io/api/#build-api).

## scripts.useTransform

`scripts.useTransform: boolean = false`

Transforming a file by custom build.

## scripts.transformOptions

`scripts.transformOptions: TransformOptions = {}`

[Transform options](https://esbuild.github.io/api/#transform-api).

:chestnut: For example:

```js
module.exports = {
  scripts: {
    bundler: 'esbuild',
    entry: ['./app/scripts/react-entry.js'],
    useTransform: true,
    transformOptions: {
      loader: 'jsx'
    }
  }
  // Other Options...
};
```
