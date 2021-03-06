# Files & Directories

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

:chestnut: For example:

```js
const api = (mix) => {
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
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```

> Reference `gulp.src` [options](https://gulpjs.com/docs/en/api/src#options)

## mix.remove()

`mix.remove(paths: string | string[])`

Delete files/directories.

:chestnut: For example:

```js
const api = (mix) => {
  mix.remove('foo.txt');
  mix.remove(['bar/a.txt', 'bar/b.txt']);
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```

## mix.replace()

```ts
interface ReplaceOptions {
  substr?: string | RegExp;
  replacement?: string | Function;
}
```

`mix.replace(input: string | string[], output: string, options: ReplaceOptions | ReplaceOptions[])`

> New in 2.9.0
>
> Update `options: ReplaceOptions[]` in 2.10.0
