# Working With Stylesheets

## mix.css()

`mix.css(input: string | string[], output: string)`

PostCSS => CSS.

> PostCSS options, refer to [`balm.config.styles.options`](../config/styles.html#styles-options).

## mix.sass()

```ts
interface HookOptions {
  src?: object; // = `gulp.src`
  sass?: object;
}
```

`mix.sass(input: string | string[], output: string, options?: HookOptions)`

Sass => CSS.

:chestnut: For example:

```js
const api = (mix) => {
  mix.sass('app/styles/*.scss', 'dist/css', {
    sass: {
      // Sass options: overwrite `balm.config.styles.sassOptions`
    }
  });
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```

## mix.less()

```ts
interface HookOptions {
  src?: object; // = `gulp.src`
  less?: object;
}
```

`mix.less(input: string | string[], output: string, options?: HookOptions)`

Less => CSS.

:chestnut: For example:

```js
const api = (mix) => {
  mix.less('app/styles/*.less', 'dist/css', {
    less: {
      // Less options: overwrite `balm.config.styles.lessOptions`
    }
  });
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```

## mix.url()

`mix.url(input: string | string[], output: string)`

Update images and fonts references path.

:chestnut: For example:

```js
const config = {
  paths: {
    source: {
      img: 'images',
      font: 'fonts'
    },
    target: {
      img: 'img',
      font: 'font'
    }
  }
  // Other Options...
};

const api = (mix) => {
  mix.sass('app/styles/*.scss', 'dist/css');
  mix.url('dist/css/*.css', 'dist/css');
  // Output:
  // '../images' => '../img'
  // '../fonts' => '../font'
};

module.exports = (balm) => {
  return {
    config,
    api
  };
};
```

## mix.sprite()

```ts
interface SpriteOptions {
  extname?: string;
  imageBasePath?: string;
  imageTarget?: string; // NOTE: overwrite `BalmJS.config.paths.target.img`
  spriteRetina?: boolean;
  spriteParams?: object;
}
```

`mix.sprite(input: string[], output: string, spriteOptions?: SpriteOptions)`

CSS sprites.

:chestnut: For example:

```js
const api = (mix) => {
  mix.sprite(['icons'], 'dist/img');
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```
