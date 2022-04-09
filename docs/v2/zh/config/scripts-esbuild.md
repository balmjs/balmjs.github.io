# 脚本打包 - esbuild

> ⚠️ 提示：`balm 3+` 实验性的新特性，必须安装 `balm-core@next`

## scripts.entry

`scripts.entry: string | string[] = ''`

esbuild 入口配置快捷方式。

:chestnut: 举个栗子：

```js
module.exports = {
  scripts: {
    bundler: 'esbuild',
    entry: ['./app/scripts/main-page.js', './app/scripts/sub-page.js']
  }
  // 其他配置项...
};
```

## scripts.buildOptions

`scripts.buildOptions: BuildOptions = {}`

[Build 配置](https://esbuild.github.io/api/#build-api)。

## scripts.useTransform

`scripts.useTransform: boolean = false`

启用自定义转换文件。

## scripts.transformOptions

`scripts.transformOptions: TransformOptions = {}`

[Transform 配置](https://esbuild.github.io/api/#transform-api)。

:chestnut: 举个栗子：

```js
module.exports = {
  scripts: {
    bundler: 'esbuild',
    entry: ['./app/scripts/react-entry.js'],
    useTransform: true,
    transformOptions: {
      loader: 'jsx'
    }
  }
  // Other Options...
};
```
