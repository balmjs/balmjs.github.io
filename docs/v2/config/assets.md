# Assets

## assets.publicUrlPlaceholder

`assets.publicUrlPlaceholder: string = '%PUBLIC_URL%'`

## assets.publicUrl

`assets.publicUrl: string = ''`

:chestnut: For example:

```js
balm.config = {
  assets: {
    publicUrl: 'https://balmjs.com/'
  }
  // Other Options...
};
```

- development

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
      <a href="//balmjs.com/">BalmJS</a>
    </div>

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- production

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello BalmJS</title>
    <link rel="stylesheet" href="https://balmjs.com/css/main.css" />
  </head>

  <body>
    <div id="app">
      <span>Hello</span>
      <img src="https://balmjs.com/img/logo.svg" alt="BalmJS" />
      <a href="//balmjs.com/">BalmJS</a>
    </div>

    <script src="https://balmjs.com/js/main.js"></script>
  </body>
</html>
```

## assets.root

`assets.root: string = 'assets'`

Remote project root simulation.

## assets.mainDir

`assets.mainDir: string = 'public'`

The `public` directory contains the front controller and your assets (images, JavaScript, CSS, etc.).

## assets.subDir

`assets.subDir: string = ''`

Public subdirectory.

## assets.buildDir

`assets.buildDir: string = 'buildDir'`

The directory for all versioned files of the dynamic language project (e.g. PHP).

## assets.virtualDir

`assets.virtualDir: string = ''`

The prefix of the `subDir`, for non-standard dynamic language project.

:chestnut: For example:

```js
balm.config = {
  assets: {
    publicUrl: '/',
    subDir: 'web',
    virtualDir: 'awesome',
    cache: true
  }
  // Other Options...
};
```

- development

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

- production

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

Versioning/Cache Busting switch.

## assets.options

`assets.options: object`

Static asset revisioning with dependency considerations, appends content hash to each filename (eg. _unicorn.css_ => _unicorn.098f6bcd.css_), re-writes references. Reference [options](https://github.com/smysnk/gulp-rev-all#options).

Defaults to:

```js
{
  fileNameManifest: 'rev-manifest.json',
  dontRenameFile: ['.html'],
  dontUpdateReference: ['.html']
}
```

## assets.includes

`assets.includes: string[] = []`

Extra cache files.

## assets.excludes

`assets.excludes: string[] = []`

Exclude cache files from balm defaults.

:chestnut: For example:

```js
balm.config = {
  assets: {
    cache: true,
    excludes: ['dist/img/icons/*']
  }
  // Other Options...
};
```
