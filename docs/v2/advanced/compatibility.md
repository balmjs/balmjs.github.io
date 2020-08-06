# Compatibility

## 1. Install the dependency used to provide the necessary runtime helpers

```sh
yarn add -D @babel/runtime-corejs3
yarn add core-js
```

OR

```sh
npm i --save-dev @babel/runtime-corejs3
npm i --save core-js
```

## 2. Upgrade `.browserslistrc`

```
defaults
ie 8 # add it
```

## 3. Config `babel.config.js`

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

> `presets` options: add `modules: 'commonjs'` for outdated IE

## 4. Config `balm.config.js`

```js
module.exports = {
  scripts: {
    ie8: true
  }
};
```

### 5. Upgrade entry js file

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
