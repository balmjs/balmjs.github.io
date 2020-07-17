# 脚本打包 - esbuild

## scripts.esbuild

`scripts.esbuild: object | boolean = false`

> New in 3.0.0

一个急速脚本打包工具。完整配置请参照[TS 定义](https://github.com/evanw/esbuild/blob/master/lib/types.ts)。

## scripts.entryPoints

`scripts.entryPoints: string[] = []`

> New in 3.0.0

esbuild 入口配置快捷方式。

:chestnut: 举个栗子：

```js
balm.config = {
  scripts: {
    esbuild: true,
    entryPoints: ['./app/scripts/main-page.js', './app/scripts/sub-page.js']
  }
  // 其他配置项...
};
```

> 如果启用了 `scripts.esbuild`, `config.scripts` 中的 _webpack 相关配置_ 将全部失效。
