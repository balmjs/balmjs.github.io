# Stylesheets

## styles.extname

`styles.extname: string = 'css'`

Supported CSS extensions: `css`, `scss`/`sass` and `less`.

- `css` for [PostCSS](https://postcss.org/)
- `scss`/`sass` for [Sass](https://sass-lang.com/)
- `less` for [Less](http://lesscss.org/)

## styles.minified

`styles.minified: boolean = false`

## styles.atImportPaths

`styles.atImportPaths: string[] = []`

## styles.options

`styles.options: object`

Cssnano optimisations.

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

LibSass [options](https://github.com/sass/node-sass#options)

## styles.lessOptions

`styles.lessOptions: object = {}`

Less plugin for Gulp, reference [options](https://github.com/gulp-community/gulp-less#options)

## styles.postcssEnvOptions

`styles.postcssEnvOptions: object`

PostCSS Preset Env [options](https://github.com/csstools/postcss-preset-env#options)

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

PostCSS [plugins](https://www.postcss.parts/)

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

PostCSS loader for webpack, reference [options](https://github.com/postcss/postcss-loader#options)

## styles.imageBasePath

`styles.imageBasePath: string = '../'`

## styles.sprites

`styles.sprites: string[] = []`

## styles.spriteRetina

`styles.spriteRetina: boolean = false`

## styles.spriteParams

`styles.spriteParams: object = {}`
