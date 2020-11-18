# Working With JavaScript

## mix.js()

`mix.js(input: BalmEntry, output: string, webpackOptions?: object)`

⚠️ `mix.js` is deprecated in `3.9.0`, please use `mix.webpack`/`mix.rollup`/`mix.esbuild` instead.

## mix.webpack()

`mix.js(input: BalmEntry, output: string, options?: object)`

> New in 3.9.0

Compiling JS with webpack.

## mix.esbuild()

`mix.js(input: string | string[], output: string, options?: BuildOptions | TransformOptions)`

> New in 3.9.0

Compiling JS with esbuild.

## mix.rollup()

`mix.js(input: InputOptions, output: OutputOptions | OutputOptions[])`

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
