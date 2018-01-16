# Publish

## Zip

### `zip`

`string`

Production to zip. Defaults to `'archive.zip'`.

🌰 For example:

```js
zip: 'archive.zip'
```

Usage: see [Custom Task API](../api/zip.md)

## Ftp

### `ftp.host`

`string`

Required. Defaults to `undefined`.

### `ftp.port`

`number`

Defaults to `22`.

### `ftp.user`

`string`

Defaults to `'anonymous'`.

### `ftp.pass`

`string`

Defaults to `null`.

### `ftp.remotePath`

`string`

Defaults to `'/'`.

🌰 For example:

```js
ftp: {
  host: '192.168.1.1',
  port: 22,
  user: 'root',
  pass: '123456',
  remotePath: '/path/to/webroot'
}
```

Usage: see [Custom Task API](../api/ftp.md)

## Assets

### `assets.publicUrlPlaceholder`

`string`

> New in 0.8.0

Just for HTML template. Defaults to `'%PUBLIC_URL%'`.

### `assets.publicUrl`

`string`

> New in 0.8.0

Defaults to `''`.

### `assets.root`

`string`

Remote project root simulation. Defaults to `'assets'`.

### `assets.publicPath`

`string`

The `public` directory contains the front controller and your assets (images, JavaScript, CSS, etc.). Defaults to `'public'`.

### `assets.subDir`

`string`

Public subdirectory. Defaults to `''`.

### `assets.options`

`object`

> New in 0.6.0

Defaults to:

```js
{
  fileNameManifest: 'rev-manifest.json',
  dontRenameFile: ['.html', '.php'],
  dontUpdateReference: ['.html', '.php']
}
```

### `assets.excludes`

`array`

> New in 0.6.0

Defaults to `[]`.

### `assets.includes`

`array`

> New in 0.6.1

Defaults to `[]`.

🌰 For example:

```js
assets: {
  publicUrl: '',
  root: '/path/to/your_remote_project',
  publicPath: 'public',
  subDir: 'mobile'
}
```

## Cache

### `cache`

`boolean`

Versioning/Cache Busting switch. Defaults to `false`.

🌰 For example:

```js
cache: true
```
