# Server

## server.port

`server.port: number = 3000`

Use a specific port.

## server.host

`server.host: string | null = null`

Override host detection if you know the correct IP to use.

## server.https

`server.https: boolean | undefined = undefined`

Enable https for localhost development. Note - this is not needed for proxy option as it will be inferred from your target url.

## server.open

`server.open: string | boolean = false`

Decide which URL to open automatically when server starts.

:chestnut: For example:

```js
balm.config = {
  server: {
    open: true
  }
  // Other Options...
};
```

## server.localOnly

`server.localOnly: boolean = false`

Support environments where dynamic hostnames are not required (ie: electron).

## server.proxy

`server.proxy: string | boolean | object = false`

Proxy an EXISTING vhost. Browsersync will wrap your vhost with a proxy URL to view your site.

## server.serveStatic

`server.serveStatic: string[] = []`

Add additional directories from which static files should be served. Should only be used in `proxy` or `snippet` mode.

:chestnut: For example:

```js
balm.config = {
  server: {
    proxy: 'your.project.com',
    serveStatic: [
      {
        route: '/public',
        dir: '/path/to/your_local_public'
      }
    ]
  }
  // Other Options...
};
```

## server.options

`server.options: object = {}`

Browsersync [options](https://browsersync.io/docs/options).

## server.devOptions

`server.devOptions: object = {}`

A development middleware for webpack. Reference [options](https://github.com/webpack/webpack-dev-middleware#options).

## server.hotOptions

`server.hotOptions: object = {}`

Webpack hot reloading you can attach to your own server. Reference [options](https://github.com/webpack-contrib/webpack-hot-middleware#config).

## server.proxyConfig

```ts
interface ProxyConfig {
  context: string | string[];
  options: object;
}
```

`server.proxyConfig: boolean | ProxyConfig | ProxyConfig[] = false`

http-proxy middleware. Reference [`context`](https://github.com/chimurai/http-proxy-middleware#context-matching) & [`options`](https://github.com/chimurai/http-proxy-middleware#options).

:chestnut: For example:

- Single proxy

```js
balm.config = {
  server: {
    proxyConfig: {
      context: '/api',
      options: {
        target: 'http://example.com', // target host
        changeOrigin: true // needed for virtual hosted sites
      }
    }
  }
  // Other Options...
};
```

- Multiple proxies

```js
balm.config = {
  server: {
    proxyConfig: [
      {
        context: '/api',
        options: {
          target: 'http://example.com',
          changeOrigin: true
        }
      },
      {
        context: ['/api2', '/api3'],
        options: {
          target: 'http://example2.com',
          changeOrigin: true
        }
      }
    ]
  }
  // Other Options...
};
```

## server.historyOptions

`server.historyOptions: boolean | object = false`

Using the HTML5 History API. Reference [options](https://github.com/bripkens/connect-history-api-fallback#options).

## server.middlewares

`server.middlewares: object[] = []`

Supply extra middlewares for Browsersync.

## server.extraWatchFiles

`server.extraWatchFiles: string[] = []`

Extra watch files for development.
