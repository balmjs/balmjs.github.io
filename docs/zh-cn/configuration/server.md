# Server

### `server.open`

`boolean`

Decide which URL to open automatically when server starts. Defaults to `true`.

### `server.https`

`boolean`

> New in 0.10.3

Enable https for localhost development. Note - this is not needed for proxy option as it will be inferred from your target url. Defaults to `undefined`.

### `server.host`

`string`

Override host detection if you know the correct IP to use. Defaults to `null`.

### `server.port`

`number`

Use a specific port. Defaults to `3000`.

### `server.proxy`

`string` `object` `boolean`

Proxy an EXISTING vhost. Browsersync will wrap your vhost with a proxy URL to view your site. Defaults to `undefined`.

### `server.serveStatic`

`array`

> New in 0.10.4

Add additional directories from which static files should be served. Should only be used in `proxy` or `snippet` mode. Defaults to `[]`.

🌰 For example:

```js
server: {
  proxy: 'your.project.com',
  serveStatic: [{
    route: '/public',
    dir: '/path/to/your_local_public'
  }]
}
```

### `server.proxyTable`

`object`

Define HTTP proxies to your custom API backend. Defaults to `{}`.

> Full list of `http-proxy-middleware` [configuration options](https://github.com/chimurai/http-proxy-middleware#options)

🌰 For example:

```js
server: {
  host: '192.168.1.1',
  port: 8080,
  proxyTable: { // proxy partial
    '/api': { // context
       target: 'http://your.project.dev', // target host
       changeOrigin: true // needed for virtual hosted sites
    }
  }
}
```

### `server.localOnly`

`boolean`

Support environments where dynamic hostnames are not required (ie: electron). Defaults to `false`.

### `server.historyApiFallback`

`boolean`

> New in 0.6.0

Using the HTML5 History API. Defaults to `false`.

### `server.options`

`object`

> New in 0.10.4

[Browsersync options](https://browsersync.io/docs/options). Defaults to `{}`.
