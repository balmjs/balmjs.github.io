# 文件

## mix.copy()

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
  rename?: string | Function | RenameOptions;
}
```

`mix.copy(input: string | string[], output: string, options?: HookOptions)`

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  mix.copy('app/old-filename.html', 'dist', {
    rename: {
      basename: 'new-filename',
      suffix: '.blade',
      extname: '.php'
    }
  });

  mix.copy(['app/foo/*', 'app/bar/**/*'], 'dist/copied', {
    src: {
      base: '.'
    }
  });
});
```

> `gulp.src` [详细配置](https://gulpjs.com/docs/en/api/src#options)

## mix.remove()

`mix.remove(paths: string | string[])`

删除文件或文件夹。

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  mix.remove('foo.txt');
  mix.remove(['bar/a.txt', 'bar/b.txt']);
});
```
