# Server

### `server.open`

`boolean`

决定在服务器启动时自动打开哪个URL。默认值为：`true`。

### `server.https`

`boolean`

> New in 0.10.3

启用https进行本地主机开发。注意 - 这是代理选项不需要的，因为它会从你的目标网址中推断出来。默认值为：`undefined`。

### `server.host`

`string`

如果您知道使用正确的IP，则覆盖主机检测。默认值为：`null`。

### `server.port`

`number`

使用特定的端口。默认值为：`3000`。

### `server.proxy`

`string` `object` `boolean`

代理一个现有的虚拟主机。Browsersync将用代理URL封装您的虚拟主机来查看您的网站。默认值为：`undefined`。

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

### `server.proxyTable`

`object`

定义HTTP代理到您的自定义API后端。默认值为：`{}`。

> Full list of `http-proxy-middleware` [configuration options](https://github.com/chimurai/http-proxy-middleware#options)

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

### `server.historyApiFallback`

`boolean`

> New in 0.6.0

使用HTML5 History API。默认值为：`false`。

### `server.options`

`object`

> New in 0.10.4

[Browsersync options](https://browsersync.io/docs/options). Defaults to `{}`.
