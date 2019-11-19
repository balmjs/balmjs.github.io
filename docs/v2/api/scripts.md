# Working With JavaScript

## mix.js()

```ts
interface BalmEntryObject {
  [entryChunkName: string]: string | string[];
}
```

`mix.js(input: string | string[] | BalmEntryObject, output: string, webpackOptions?: object)`

Compiling JS with webpack.

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
  src?: object;
  terser?: object;
  rename?: string | Function | RenameOptions;
}
```

`mix.jsmin(input: string | string[], output: string, options?: HookOptions)`

Minify JS.

:chestnut: For example:

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
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
});
```
