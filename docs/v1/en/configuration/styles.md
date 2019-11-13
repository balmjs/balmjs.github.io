# Stylesheet

### `styles.ext`

`string`

Supported CSS extensions: css, [scss](http://sass-lang.com/), [less](http://lesscss.org/). Defaults to `'css'`.

> Default `css` extension for [PostCSS](http://postcss.org/)

🌰 For example:

```js
styles: {
  ext: 'scss'
}
```

### <del>`styles.autoprefixer`</del>

`array`

Parse CSS and add vendor prefixes to rules by [Can I Use](http://caniuse.com/). Defaults to `['last 1 version']`.

> Autoprefixer uses [Browserslist](https://github.com/ai/browserslist#queries)

🌰 For example:

```js
styles: {
  autoprefixer: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']
}
```

⚠️ **Deprecated in 1.5.1, Use a `.browserslistrc` config file in current or parent directories instead.**

🌰 For example:

```config
# Browsers that we support

> 0.5%
last 2 versions
Firefox ESR
not dead
```

### `styles.options`

`object`

CSS optimisations. Defaults to:

```js
{
  safe: true,
  discardComments: {
    removeAll: true
  }
}
```

[CssNano Optimisations](https://cssnano.co/guides/optimisations/)

### `styles.includePaths`

`array`

> New in 0.6.0

Ensure file's parent directory in the include path. Defaults to `[]`.

### `styles.sassOptions`

`object`

> New in 1.5.5

Node.js bindings to libsass [options](https://github.com/sass/node-sass#options). Defaults to `{}`.

🌰 For example:

```js
styles: {
  ext: 'scss',
  sassOptions: {
    importer: require('node-sass-glob-importer')()
  }
}
```

### `styles.lessOptions`

`object`

> New in 1.5.5

`gulp-less` [options](https://github.com/gulp-community/gulp-less#options). Defaults to `{}`.

  🌰 For example:

  ```js
  styles: {
    ext: 'less',
    lessOptions: {
      plugins: [
        // ...
      ]
    }
  }
  ```

### `styles.postcssPlugins`

`array`

> New in 0.13.0

[PostCSS plugins](https://www.postcss.parts/). Defaults to `[]`.

__BalmJS__ default postcss plugins:

- For PostCSS
  - [postcss-import](https://github.com/postcss/postcss-import)
  - [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)
  - [postcss-preset-env](https://preset-env.cssdb.org/)
- For Sass/Less
  - [autoprefixer](https://github.com/postcss/autoprefixer)

### `styles.postcssEnvOptions`

`object`

> New in 1.1.0

[PostCSS Preset Env options](https://github.com/csstools/postcss-preset-env#options). Defaults to:

```js
{
  stage: 0,
  autoprefixer: {
    flexbox: 'no-2009'
  }
}
```

### `styles.postcssOptions`

`object`

> New in 0.13.0

[PostCSS options](https://github.com/postcss/postcss#options). Defaults to `{}`.

### `styles.postcssOptions`

`object`

> New in 0.13.0

[PostCSS loader options](https://github.com/postcss/postcss-loader#options). Defaults to:

```js
{
  exec: undefined,
  parser: undefined,
  syntax: undefined,
  stringifier: undefined,
  config: undefined,
  // plugins: [], // NOTE: Use `styles.postcssPlugins` to set.
  sourceMap: false
}
```
