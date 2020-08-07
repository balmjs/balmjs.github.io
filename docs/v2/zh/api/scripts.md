# 脚本

## mix.js()

```ts
interface BalmEntryObject {
  [entryChunkName: string]: string | string[];
}
```

`mix.js(input: string | string[] | BalmEntryObject, output: string, webpackOptions?: object)`

使用 webpack 编译 JS。

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
