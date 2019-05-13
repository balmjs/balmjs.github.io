# Publish

## Ftp

### `ftp.host`

`string`

必须的。默认值为：`undefined`。

### `ftp.port`

`number`

默认值为：`22`。

### `ftp.user`

`string`

默认值为：`'anonymous'`。

### `ftp.pass`

`string`

默认值为：`null`。

### `ftp.remotePath`

`string`

默认值为：`'/'`。

### `ftp.logging`

`boolean`

> New in 1.0.0

默认值为：`false`。

🌰 例如：

```js
ftp: {
  host: '192.168.1.1',
  port: 22,
  user: 'root',
  pass: '123456',
  remotePath: '/path/to/webroot',
  logging: true
}
```

用法：请参照 __自定义任务 API 文档__ - [mix.ftp](../api/assets.html#mixftpinput)

## Assets

### `assets.publicUrlPlaceholder`

`string`

> New in 0.8.0

HTML模式中可使用。默认值为：`'%PUBLIC_URL%'`。

### `assets.publicUrl`

`string`

> New in 0.8.0

默认值为：`''`。

### `assets.root`

`string`

远程项目的根目录。默认值为：`'assets'`。

### `assets.mainDir` (`1.0.0`中重命名)

`string`

> Rename `publicPath` to `mainDir` in 1.0.0

静态资源目录包含了前端的静态资源文件（图片，脚本，样式，等等）。默认值为：`'public'`。

### `assets.subDir`

`string`

静态资源根目录。默认值为：`''`。

### `assets.options`

`object`

> New in 0.6.0

默认值为：

```js
{
  fileNameManifest: 'asset-manifest.json',
  dontRenameFile: ['.html', '.php'],
  dontUpdateReference: ['.html', '.php']
}
```

### `assets.excludes`

`array`

> New in 0.6.0

排除缓存文件。默认值为：`[]`。

### `assets.includes`

`array`

> New in 0.6.1

缓存额外文件。默认值为：`[]`。

🌰 例如：

```js
assets: {
  publicUrl: '',
  root: '/path/to/your_remote_project',
  mainDir: 'public',
  subDir: 'mobile'
}
```

## Cache

### `cache`

`boolean`

生成缓存文件的开关。默认值为：`false`。

🌰 例如：

```js
cache: true
```
