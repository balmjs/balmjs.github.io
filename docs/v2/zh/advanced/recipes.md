# 一些技巧

## 优化你的命令

- 编辑 `/path/to/project/package.json`：

```json
{
  // ...
  "scripts": {
    "dev": "gulp",
    "prod": "gulp --production"
  }
  // ...
}
```

- 静默模式

```json
{
  // ...
  "scripts": {
    "dev": "gulp --silent",
    "prod": "gulp --silent --production"
  }
  // ...
}
```

> `gulp --production` 别名：`gulp -p`
>
> `gulp --silent` 别名：`gulp -S`

然后，你就可以运行下面的命令了：

- 开发模式

```sh
yarn run dev
# OR
npm run dev
```

- 生产模式

```sh
yarn run prod
# OR
npm run prod
```

## 生产模式脚本比较

> 使用 `array.includes` 简单的例子做测试

- `@babel/preset-env` + (`core-js@2` | `core-js@3`)

| `@babel/preset-env` Options               | Size       | ES6 |
| ----------------------------------------- | ---------- | --- |
| `{ "useBuiltIns": false, "corejs": 2 }`   | 1010 bytes | ×   |
| `{ "useBuiltIns": "entry", "corejs": 2 }` | 6.43 KiB   | √   |
| `{ "useBuiltIns": "entry", "corejs": 3 }` | 10.3 KiB   | √   |
| `{ "useBuiltIns": "usage", "corejs": 2 }` | 6.36 KiB   | √   |
| `{ "useBuiltIns": "usage", "corejs": 3 }` | 10.3 KiB   | √   |

- `@babel/plugin-transform-runtime` + (`@babel/runtime-corejs2` | `@babel/runtime-corejs3`)

| `@babel/plugin-transform-runtime` Options | Size       | ES6 |
| ----------------------------------------- | ---------- | --- |
| `{ "corejs": false }`                     | 1010 bytes | ×   |
| `{ "corejs": 2 }`                         | 1010 bytes | ×   |
| `{ "corejs": 3 }`                         | 8.78 KiB   | √   |

### 最小兼容

- 安装

```sh
yarn add @babel/runtime-corejs3
# OR
npm i --save @babel/runtime-corejs3
```

- 配置 `babel.config.js`

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
};
```

### 最大兼容

- 安装

```sh
yarn add core-js
# OR
npm i --save core-js
```

- 配置 `babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
};
```
