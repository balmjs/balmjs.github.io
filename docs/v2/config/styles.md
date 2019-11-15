# Stylesheets

## styles.extname

`styles.extname: string = 'css'`

Compiling [PostCSS](https://postcss.org/)/[Sass](https://sass-lang.com/)/[Less](http://lesscss.org/) into CSS.

> Supported CSS extensions: `css`, `scss`/`sass` and `less`.

🌰 For example:

```js
balm.config = {
  styles: {
    extname: 'scss'
  }
};
```

## styles.minified

`styles.minified: boolean = false`

Ignore the environment and force CSS compression.

> Tips: Often used with [`mix.serve`](/api/serve) in development mode.

## styles.atImportPaths

`styles.atImportPaths: string[] = []`

An array of paths that [Balm](https://github.com/balmjs/balm) can look in to attempt to resolve your `@import` declarations.

## styles.options

`styles.options: object`

Cssnano optimisations. Reference [options](https://cssnano.co/guides/optimisations/).

Defaults to:

```js
{
  safe: true,
  autoprefixer: false,
  discardComments: {
    removeAll: true
  }
}
```

## styles.sassOptions

`styles.sassOptions: object = {}`

LibSass [options](https://github.com/sass/node-sass#options).

## styles.lessOptions

`styles.lessOptions: object = {}`

Less plugin for Gulp. Reference [options](https://github.com/gulp-community/gulp-less#options).

## styles.postcssEnvOptions

`styles.postcssEnvOptions: object`

PostCSS Preset Env [options](https://github.com/csstools/postcss-preset-env#options).

Defaults to:

```js
{
  stage: 0,
  autoprefixer: {
    flexbox: 'no-2009'
  }
}
```

## styles.postcssPlugins

`styles.postcssPlugins: object[] = []`

PostCSS [plugins](https://www.postcss.parts/).

## styles.postcssLoaderOptions

```ts
interface PostcssLoaderOptions {
  exec?: boolean;
  parser?: string | object;
  syntax?: string | object;
  stringifier?: string | object;
  config?: object;
  plugins?: object[] | Function; // NOTE: The same to `styles.postcssPlugins`
  sourceMap: string | boolean;
}
```

`styles.postcssLoaderOptions: PostcssLoaderOptions = { sourceMap: false }`

PostCSS loader for webpack. Reference [options](https://github.com/postcss/postcss-loader#options).

## styles.imageBasePath

`styles.imageBasePath: string = '../'`

The path to use in CSS referring to sprite image location.

## styles.sprites

`styles.sprites: string[] = []`

Convert a set of images into a spritesheet and CSS variables.

🌰 For example:

```js
// Input:
// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*.png`

balm.config = {
  styles: {
    sprites: ['icons']
  }
};

// Output:
// image: `/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites.png`
// css: `/path/to/workspace/${roots.source}/${paths.source.css}/sprites/_icons.${styles.extname}`
```

## styles.spriteRetina

`styles.spriteRetina: boolean = false`

Enable retina spritesheet generation.

🌰 For example:

```js
// Input:
// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*.png`
// `/path/to/workspace/${roots.source}/${paths.source.img}/icons/*@2x.png`

balm.config = {
  styles: {
    sprites: ['icons'],
    spriteRetina: true
  }
};

// Output:
// image: `/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites.png`
//        `/path/to/workspace/${roots.target}/${paths.target.img}/icons-sprites@2x.png`
// css: `/path/to/workspace/${roots.source}/${paths.source.css}/sprites/_icons.${styles.extname}`
```

## styles.spriteParams

`styles.spriteParams: object = {}`

Spritesmith [parameters](https://github.com/twolfson/gulp.spritesmith#spritesmithparams).
