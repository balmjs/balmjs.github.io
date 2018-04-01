# Server

### `server.open`

`boolean`

决定在服务器启动时自动打开哪个 URL。默认值为：`true`。

### `server.https`

`boolean`

> New in 0.10.3

启用 https 进行本地主机开发。注意 - 这是代理选项不需要的，因为它会从你的目标网址中推断出来。默认值为：`undefined`。

### `server.host`

`string`

如果您知道使用正确的 IP，则覆盖主机检测。默认值为：`null`。

### `server.port`

`number`

使用特定的端口。默认值为：`3000`。

### `server.proxy`

`string` `object` `boolean`

代理一个现有的虚拟主机。Browsersync 将用代理 URL 封装您的虚拟主机来查看您的网站。默认值为：`undefined`。

### `server.serveStatic`

`array`

> New in 0.10.4

添加应从其提供静态文件的其他目录。只能在 `proxy` 或 `snippet` 模式下使用。默认值为：`[]`。

🌰 例如：

```js
server: {
  proxy: 'your.project.com',
  serveStatic: [{
    route: '/public',
    dir: '/path/to/your_local_public'
  }]
}
```

### <del>`server.proxyTable`</del> (`0.18.0`中已弃用)

⚠️ 从 `0.18.0` 起，使用 `server.proxyContext` 和 `server.proxyOptions` 代替。

`object`

定义 HTTP 代理到您的自定义 API 后端。默认值为：`{}`。

🌰 例如：

```js
server: {
  host: '192.168.1.1',
  port: 8080,
  proxyTable: { // 代理部分
    '/api': { // 接口名称
       target: 'http://your.project.dev', // 代理的目标域名
       changeOrigin: true // 虚拟域名站点必备
    }
  }
}
```

### `server.localOnly`

`boolean`

支持不需要动态主机名的环境（如：electron）。默认值为：`false`。

### `server.options`

`object`

> New in 0.10.4

建立网站时让多个浏览器和设备保持同步。默认值为：`{}`。

> [Browsersync options](https://browsersync.io/docs/options).

### `server.devOptions`

`object`

> New in 0.18.0

用于 webpack 的开发中间件。默认值为：`{}`。

> [`webpack-dev-middleware` options](https://github.com/webpack/webpack-dev-middleware#options)

### `server.hotOptions`

`object`

> New in 0.18.0

Webpack 热重新加载你可以附加到你自己的服务器。默认值为：`{}`。

> [Webpack Hot Middleware options](https://github.com/webpack-contrib/webpack-hot-middleware#config)

### `server.proxyContext`

`string` `array`

> New in 0.18.0

确定哪些请求应该被代理到目标主机。默认值为：`false`。 (更多关于 [context 匹配](https://github.com/chimurai/http-proxy-middleware#context-matching))

### `server.proxyOptions`

`object`

> New in 0.18.0

代理中间件配置。默认值为：`false`。

> Full list of `http-proxy-middleware` [configuration options](https://github.com/chimurai/http-proxy-middleware#options)

🌰 例如：

```js
server: {
  proxyContext: '/api', // 接口名称
  proxyOptions: {
    target: 'http://www.example.org', // 代理的目标域名
    changeOrigin: true                // 虚拟域名站点必备
  }
}
```

### `server.historyOptions` (`0.18.0`中重命名)

`boolean` `object`

> New in 0.6.0, rename `historyApiFallback` to `historyOptions` in 0.18.0

使用 HTML5 History API。默认值为：`false`。

> [`connect-history-api-fallback` options](https://github.com/bripkens/connect-history-api-fallback#options)

### `server.middlewares`

`array`

> New in 0.18.0

为 Browsersync 提供更多额外的中间件。默认值为：`[]`。
