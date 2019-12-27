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

## IE 向下兼容方案

### 1. 安装依赖

```sh
yarn add core-js @babel/runtime-corejs3
# OR
npm i --save core-js @babel/runtime-corejs3
```

### 2. 更新 `.browserslistrc`

```
ie 8 # 追加
```

### 3. 配置 `babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
};
```

### 4. 配置 `balm`

```js
balm.config = {
  scripts: {
    ie8: true
  }
};
```

### 5. 更新入口脚本

- `main.js`

```js
import './polyfill';

// Your code
```

- `polyfill.js`

```js
// For IE11 and below
import 'core-js/features/promise';

// For IE8 and below
import 'core-js/features/object/create';
import 'core-js/features/array/for-each';
import 'core-js/features/function/bind';
```
