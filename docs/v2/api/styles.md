# Working With Stylesheets

## mix.css()

`mix.css(input: string | string[], output: string)`

PostCSS => CSS.

> PostCSS options, refer to [`balm.config.styles.options`](../config/styles.html#styles-options).

## mix.sass()

```ts
interface HookOptions {
  src?: object;
  sass?: object;
}
```

`mix.sass(input: string | string[], output: string, options?: HookOptions)`

Sass => CSS.

🌰 For example:

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  mix.sass('app/styles/*.scss', 'dist/css', {
    sass: {
      // Sass options: overwrite `balm.config.styles.sassOptions`
    }
  });
});
```

## mix.less()

```ts
interface HookOptions {
  src?: object;
  less?: object;
}
```

`mix.less(input: string | string[], output: string, options?: HookOptions)`

Less => CSS.

🌰 For example:

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  mix.less('app/styles/*.less', 'dist/css', {
    less: {
      // Less options: overwrite `balm.config.styles.lessOptions`
    }
  });
});
```

## mix.url()

`mix.url(input: string | string[], output: string)`

Update images and fonts references path.

🌰 For example:

```js
const balm = require('balm');

balm.config = {
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

balm.go(mix => {
  mix.sass('app/styles/*.scss', 'dist/css');
  mix.url('dist/css/*.css', 'dist/css');
  // Output:
  // '../images' => '../img'
  // '../fonts' => '../font'
});
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

🌰 For example:

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  mix.sprite(['icons'], 'dist/img');
});
```
