# 服务

## server.port

`server.port: number = 3000`

使用指定的端口。

## server.host

`server.host: string | null = null`

自定义域名 IP 地址。

## server.https

`server.https: boolean | undefined = undefined`

启用 https 进行本地开发。注意 - 这是不需要配置代理选项，因为它会从你的目标网址中推断出来。

## server.open

`server.open: string | boolean = false`

开发模式下启动 balm 时自动打开浏览器。

:chestnut: 举个栗子：

```js
module.exports = {
  server: {
    open: true
  }
  // 其他配置项...
};
```

## server.localOnly

`server.localOnly: boolean = false`

支持不需要动态主机名的环境（如：electron）。

## server.proxy

`server.proxy: string | boolean | object = false`

代理一个现有的虚拟主机。Browsersync 将用代理 URL 封装您的虚拟主机来查看您的网站。

## server.serveStatic

`server.serveStatic: string[] = []`

添加应从其提供静态文件的其他目录。只能在 `proxy` 或 `snippet` 模式下使用。

:chestnut: 举个栗子：

```js
module.exports = {
  server: {
    proxy: 'your.project.com',
    serveStatic: [
      {
        route: '/public',
        dir: '/path/to/your_local_public'
      }
    ]
  }
  // 其他配置项...
};
```

## server.options

`server.options: object = {}`

Browsersync [详细配置](https://browsersync.io/docs/options)。

## server.devOptions

`server.devOptions: object = {}`

用于 webpack 的开发中间件。[详细配置](https://github.com/webpack/webpack-dev-middleware#options)。

## server.hotOptions

`server.hotOptions: object = {}`

用于 webpack 的热加载中间件。[详细配置](https://github.com/webpack-contrib/webpack-hot-middleware#config)。

## server.proxyConfig

```ts
interface ProxyConfig {
  context: string | string[];
  options: object;
}
```

`server.proxyConfig: boolean | ProxyConfig | ProxyConfig[] = false`

Http 代理中间件。配置参数[`context`](https://github.com/chimurai/http-proxy-middleware#context-matching) & [`options`](https://github.com/chimurai/http-proxy-middleware#options)。

:chestnut: 举个栗子：

- 单个代理

```js
module.exports = {
  server: {
    proxyConfig: {
      context: '/api',
      options: {
        target: 'http://example.com', // 代理的目标域名
        changeOrigin: true // 虚拟域名站点必备
      }
    }
  }
  // 其他配置项...
};
```

- 多个代理

```js
module.exports = {
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
  // 其他配置项...
};
```

## server.historyOptions

`server.historyOptions: boolean | object = false`

使用 HTML5 History API。[详细配置](https://github.com/bripkens/connect-history-api-fallback#options)。

## server.middlewares

`server.middlewares: object[] = []`

为 Browsersync 提供更多额外的中间件。

## server.extraWatchFiles

`server.extraWatchFiles: string[] = []`

开发模式下自定义额外的文件监听。
