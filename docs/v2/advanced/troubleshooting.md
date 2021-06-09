# Troubleshooting

## 1. For Chinese developers

### 1.1 Cannot find module 'node-sass'

- A1: These parameters can be used as environment variable: `SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/`

- A2: As local or global `.npmrc` configuration file: `sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`

### 1.2 gifsicle/mozjpeg/optipng pre-build test failed

- A1: edit hosts: `199.232.xxx.133 raw.githubusercontent.com` (find IP by [IPAddress.com](https://www.ipaddress.com/))

- A2: As local or global `.npmrc` configuration file: `registry=https://registry.npm.taobao.org`
