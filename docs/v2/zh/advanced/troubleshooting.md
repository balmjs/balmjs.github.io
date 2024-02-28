# 常见问题

## 1. For legacy npm

### 1.1 npm ERR! Invalid dependency type requested: alias

- `npm i -g npm@6.9.0` (npm >= 6.9.0)

## 2. For Chinese developers

### 2.1 Cannot find module 'node-sass'

- A1: 设置环境变量：`SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/`

- A2: 设置本地或全局 `.npmrc` 配置文件：`sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`

### 2.2 gifsicle/mozjpeg/optipng pre-build test failed

- A1: 编辑 hosts：`199.232.xxx.133 raw.githubusercontent.com`（通过[IPAddress.com](https://www.ipaddress.com/)找 IP）

- A2: 设置本地或全局 `.npmrc` 配置文件：`registry=https://registry.npm.taobao.org`
