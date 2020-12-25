# Working With JavaScript

## mix.js()

`mix.js(input: BalmEntry, output: string, webpackOptions?: object)`

⚠️ `mix.js` is deprecated in `3.9.0`, please use `mix.webpack`/`mix.rollup`/`mix.esbuild` instead.

## mix.webpack()

`mix.webpack(input: BalmEntry, output: string, options?: object, fn?: Function)`

> New in 3.9.0

Compiling JS with webpack.

> `fn` parameter is new in 3.9.4

## mix.esbuild()

`mix.esbuild(input: string | string[], output: string, options?: BuildOptions | TransformOptions)`

> New in 3.9.0

Compiling JS with esbuild.

## mix.rollup()

`mix.rollup(input: InputOptions, output: OutputOptions | OutputOptions[])`

> New in 3.9.0

Compiling JS with rollup.

## mix.jsmin()

```ts
interface RenameOptions {
  dirname?: string;
  prefix?: string;
  basename?: string;
  suffix?: string;
  extname?: string;
}

interface HookOptions {
  src?: object; // = `gulp.src`
  terser?: object;
  rename?: string | Function | RenameOptions;
}
```

`mix.jsmin(input: string | string[], output: string, options?: HookOptions)`

Minify JS.

:chestnut: For example:

```js
const api = (mix) => {
  mix.js('app/scripts/app.js', 'dist/js');
  // 'app/scripts/app.js' => 'dist/js/main.js'

  mix.jsmin('dist/js/main.js', 'dist/js', {
    terser: {
      // Terser options: overwrite `balm.config.scripts.options`
    },
    rename: {
      // Your rename options
    }
  });
  // 'dist/js/main.js' => 'dist/js/main.min.js'
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```
