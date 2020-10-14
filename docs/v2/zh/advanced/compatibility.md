# 兼容性方案

## 1. 安装依赖

```sh
yarn add -D @babel/runtime-corejs3
yarn add core-js
```

OR

```sh
npm i --save-dev @babel/runtime-corejs3
npm i --save core-js
```

## 2. 更新 `.browserslistrc`

```
defaults
ie 8 # 追加
```

## 3. 配置 `babel.config.js`

```js
module.exports = function (api) {
  let envOptions = api.env('production')
    ? {
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: true }
      }
    : {};
  let runtimeOptions = api.env('production') ? { corejs: 3 } : {};

  return {
    presets: [['@babel/preset-env', envOptions]],
    plugins: [['@babel/plugin-transform-runtime', runtimeOptions]]
  };
};
```

> `presets` options: 添加 `modules: 'commonjs'` 可兼容低版本 IE

## 4. 配置 `balm.config.js`

```js
module.exports = {
  scripts: {
    ie8: true
  }
};
```

## 5. 更新入口脚本

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
