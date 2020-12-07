# 常见问题

## 1. For Chinese developers

### 1.1 Cannot find module 'node-sass'

- A1: 设置环境变量：`SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/`

- A2: 设置本地或全局 `.npmrc` 配置文件：`sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`

### 1.2 gifsicle/mozjpeg/optipng pre-build test failed

- A1: 编辑 hosts：`199.232.xxx.133 raw.githubusercontent.com`（通过[IPAddress.com](https://www.ipaddress.com/)找 IP）

- A2: 设置本地或全局 `.npmrc` 配置文件：`registry=https://registry.npm.taobao.org`

---

## 2. fix(webpack@5)

### 2.1 TypeError: The 'compilation' argument must be an instance of Compilation

在你的项目根目录下，新建一个名叫 `babel.env.js` 的配置文件：

```js
process.env.USE_LOCAL_WEBPACK = true;
```
