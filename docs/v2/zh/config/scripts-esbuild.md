# 脚本打包 - esbuild

> ⚠️ 提示：`balm@3`实验性的新特性，必须安装 `balm-core@next`

## scripts.esbuild

`scripts.esbuild: boolean = false`

启用一个急速脚本打包工具。

> 如果启用了 `scripts.esbuild`, `config.scripts` 中的 _webpack 相关配置_ 将全部失效。

## scripts.entry

`scripts.entry: string | string[] = ''`

esbuild 入口配置快捷方式。

:chestnut: 举个栗子：

```js
balm.config = {
  scripts: {
    esbuild: true,
    entry: ['./app/scripts/main-page.js', './app/scripts/sub-page.js']
  }
  // 其他配置项...
};
```

## scripts.buildOptions

`scripts.buildOptions: object = {}`

Esbuild 配置。完整配置请参照[TS 定义](https://github.com/evanw/esbuild/blob/master/lib/types.ts)。
