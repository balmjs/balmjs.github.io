# Publish

## Ftp

### `ftp.options`

`object`

> New in 1.6.0

FTP options. Defaults to:

```js
{
  host: undefined, // Required
  port: 22,
  username: 'anonymous',
  password: null,
  remotePath: '/',
  logging: false
}
```

🌰 For example:

```js
ftp: {
  options: {
    host: '192.168.1.1',
    port: 22,
    user: 'root',
    pass: '123456',
    remotePath: '/path/to/webroot',
    logging: true
  }
}
```

⚠️ NOTE: If `balm < 1.6.0`, please refer to the configuration

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

Usage: Refer to **Custom Task API** - [mix.ftp](../api/assets.html#mixftpinput)

### `ftp.watchFiles`

`array`

> New in 1.6.0

Automatically upload FTP when the watching files is changed in DEV mode. Defaults to `[]`.

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

### `assets.mainDir` (Rename in `1.0.0`)

`string`

> Rename `publicPath` to `mainDir` in 1.0.0

The `public` directory contains the front controller and your assets (images, JavaScript, CSS, etc.). Defaults to `'public'`.

### `assets.subDir`

`string`

Public subdirectory. Defaults to `''`.

### `assets.buildDir`

`string`

> New in 1.5.0

Build directory for all versioned files of the dynamic language project (e.g. PHP). Defaults to: `'build'`.

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

Cache excludes. Defaults to `[]`.

### `assets.includes`

`array`

> New in 0.6.1

Cache includes. Defaults to `[]`.

🌰 For example:

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

Versioning/Cache Busting switch. Defaults to `false`.

🌰 For example:

```js
cache: true;
```
