# 样式

## mix.css()

`mix.css(input: string | string[], output: string)`

PostCSS => CSS.

> PostCSS 详细配置请参照 [`balm.config.styles.options`](../config/styles.html#styles-options)。

## mix.sass()

```ts
interface HookOptions {
  src?: object; // = `gulp.src`
  sass?: object;
}
```

`mix.sass(input: string | string[], output: string, options?: HookOptions)`

Sass => CSS.

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  mix.sass('app/styles/*.scss', 'dist/css', {
    sass: {
      // Sass options: 覆盖 `balm.config.styles.sassOptions` 配置
    }
  });
});
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

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  mix.less('app/styles/*.less', 'dist/css', {
    less: {
      // Less options: 覆盖 `balm.config.styles.lessOptions` 配置
    }
  });
});
```

## mix.url()

`mix.url(input: string | string[], output: string)`

更新样式中图片和字体的引用路径。

:chestnut: 举个栗子：

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
  // 其他配置项...
};

balm.go(mix => {
  mix.sass('app/styles/*.scss', 'dist/css');
  mix.url('dist/css/*.css', 'dist/css');
  // 输出：
  // '../images' => '../img'
  // '../fonts' => '../font'
});
```

## mix.sprite()

```ts
interface SpriteOptions {
  extname?: string;
  imageBasePath?: string;
  imageTarget?: string; // NOTE: 覆盖 `BalmJS.config.paths.target.img` 配置
  spriteRetina?: boolean;
  spriteParams?: object;
}
```

`mix.sprite(input: string[], output: string, spriteOptions?: SpriteOptions)`

自定义雪碧图。

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  mix.sprite(['icons'], 'dist/img');
});
```
