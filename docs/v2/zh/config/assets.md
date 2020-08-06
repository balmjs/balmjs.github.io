# 静态资源打包

## assets.publicUrlPlaceholder

`assets.publicUrlPlaceholder: string = '%PUBLIC_URL%'`

HTML 模式中可使用的 `publicUrl` 占位符。

## assets.publicUrl

`assets.publicUrl: string = ''`

:chestnut: 举个栗子：

```js
balm.config = {
  assets: {
    publicUrl: 'https://balmjs.com/'
  }
  // 其他配置项...
};
```

- 开发模式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello BalmJS</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
  </head>

  <body>
    <div id="app">
      <span>Hello</span>
      <img src="%PUBLIC_URL%/images/logo.svg" alt="BalmJS" />
      <a href="//balm.js.org/">BalmJS</a>
    </div>

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- 生产模式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello BalmJS</title>
    <link rel="stylesheet" href="/css/main.css" />
  </head>

  <body>
    <div id="app">
      <span>Hello</span>
      <img src="/img/logo.svg" alt="BalmJS" />
      <a href="//balm.js.org/">BalmJS</a>
    </div>

    <script src="/js/main.js"></script>
  </body>
</html>
```

## assets.root

`assets.root: string = 'assets'`

远程项目的根目录。

## assets.mainDir

`assets.mainDir: string = 'public'`

静态资源目录包含了前端的静态资源文件（图片，脚本，样式，等等）。

## assets.subDir

`assets.subDir: string = ''`

静态资源子目录。

## assets.buildDir

`assets.buildDir: string = 'buildDir'`

（动态语言项目中）静态资源打包目录（例如：PHP 项目等）。

## assets.virtualDir

`assets.virtualDir: string = ''`

`subDir` 的前缀，可用于非标准结构的动态语言项目。

:chestnut: 举个栗子：

```js
balm.config = {
  assets: {
    publicUrl: '/',
    subDir: 'web',
    virtualDir: 'awesome',
    cache: true
  }
  // 其他配置项...
};
```

- 开发模式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello BalmJS</title>
    <!-- build:css awesome/web/css/reset.css -->
    <link rel="stylesheet" href="/node_modules/normalize.css/normalize.css" />
    <!-- endbuild -->
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
  </head>

  <body>
    <h1>Hello BalmJS</h1>
    <!-- build:js awesome/web/js/lib.js -->
    <script src="/node_modules/jquery/dist/jquery.min.js"></script>
    <!-- endbuild -->
    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- 生产模式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello BalmJS</title>
    <link rel="stylesheet" href="awesome/web/css/reset.css" />
    <link rel="stylesheet" href="/awesome/web/css/main.css" />
  </head>

  <body>
    <h1>Hello BalmJS</h1>
    <script src="awesome/web/js/lib.js"></script>
    <script src="/awesome/web/js/main.js"></script>
  </body>
</html>
```

## assets.cache

`assets.cache: boolean = false`

生成缓存文件。

## assets.options

`assets.options: object`

生成缓存 [详细配置](https://github.com/smysnk/gulp-rev-all#options)。

默认值为：

```js
{
  fileNameManifest: 'rev-manifest.json',
  dontRenameFile: ['.html'],
  dontUpdateReference: ['.html']
}
```

## assets.includes

`assets.includes: string[] = []`

缓存额外文件。

## assets.excludes

`assets.excludes: string[] = []`

从默认任务中排除缓存文件。

:chestnut: 举个栗子：

```js
balm.config = {
  assets: {
    cache: true,
    excludes: ['dist/img/icons/*']
  }
  // 其他配置项...
};
```
