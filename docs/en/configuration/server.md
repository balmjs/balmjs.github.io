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

### <del>`server.proxyTable`</del> (Deprecated in `0.18.0`)

⚠️ From `0.18.0`, use `server.proxyContext` and `server.proxyOptions` instead.

`object`

Define HTTP proxies to your custom API backend. Defaults to `{}`.

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

### `server.options`

`object`

> New in 0.10.4

Keep multiple browsers & devices in sync when building websites. Defaults to `{}`.

> [Browsersync options](https://browsersync.io/docs/options).

### `server.devOptions`

`object`

> New in 0.18.0

A development middleware for webpack. Defaults to `{}`.

> [`webpack-dev-middleware` options](https://github.com/webpack/webpack-dev-middleware#options)

### `server.hotOptions`

`object`

> New in 0.18.0

Webpack hot reloading you can attach to your own server. Defaults to `{}`.

> [Webpack Hot Middleware options](https://github.com/webpack-contrib/webpack-hot-middleware#config)

### `server.proxyContext`

`string` `array`

> New in 0.18.0

Determine which requests should be proxied to the target host. Defaults to `false`. (more on [context matching](https://github.com/chimurai/http-proxy-middleware#context-matching))

### `server.proxyOptions`

`object`

> New in 0.18.0

Proxy middleware configuration. Defaults to `false`.

> Full list of `http-proxy-middleware` [configuration options](https://github.com/chimurai/http-proxy-middleware#options)

🌰 For example:

```js
server: {
  proxyContext: '/api',
  proxyOptions: {
    target: 'http://www.example.org', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
      '^/api/old-path' : '/api/new-path',     // rewrite path
      '^/api/remove/path' : '/path'           // remove base path
    },
    router: {
      // when request.headers.host == 'dev.localhost:3000',
      // override target 'http://www.example.org' to 'http://localhost:8000'
      'dev.localhost:3000' : 'http://localhost:8000'
    }
  }
}
```

### `server.historyOptions` (Rename in `0.18.0`)

`boolean` `object`

> New in 0.6.0, rename `historyApiFallback` to `historyOptions` in 0.18.0

Using the HTML5 History API. Defaults to `false`.

> [`connect-history-api-fallback` options](https://github.com/bripkens/connect-history-api-fallback#options)

### `server.middlewares`

`array`

> New in 0.18.0

Supply extra middlewares for Browsersync. Defaults to `[]`.
