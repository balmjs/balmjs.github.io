# 脚本

## mix.js()

`mix.js(input: BalmEntry, output: string, webpackOptions?: object)`

⚠️ `3.9.0` 起 `mix.js` 已弃用，请使用 `mix.webpack`/`mix.rollup`/`mix.esbuild` 代替。

## mix.webpack()

`mix.js(input: BalmEntry, output: string, options?: object)`

> New in 3.9.0

使用 webpack 编译 JS。

## mix.esbuild()

`mix.js(input: string | string[], output: string, options?: BuildOptions | TransformOptions)`

> New in 3.9.0

使用 esbuild 编译 JS。

## mix.rollup()

`mix.js(input: InputOptions, output: OutputOptions | OutputOptions[])`

> New in 3.9.0

使用 rollup 编译 JS。

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

JS 压缩。

:chestnut: 举个栗子：

```js
const api = (mix) => {
  mix.js('app/scripts/app.js', 'dist/js');
  // 'app/scripts/app.js' => 'dist/js/main.js'

  mix.jsmin('dist/js/main.js', 'dist/js', {
    terser: {
      // Terser options: 覆盖 `balm.config.scripts.options` 配置
    },
    rename: {
      // 自定义重命名配置
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
