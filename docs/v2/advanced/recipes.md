# Recipes

## Optimize your command

- Edit `/path/to/project/package.json`:

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

- For silent mode

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

> `gulp --production` alias: `gulp -p`
>
> `gulp --silent` alias: `gulp -S`

Then, you can run the command like this:

- For development

```sh
yarn run dev
# OR
npm run dev
```

- For production

```sh
yarn run prod
# OR
npm run prod
```

## Compatibility

### 1. Install the dependency used to provide the necessary runtime helpers

```sh
yarn add -D @babel/runtime-corejs3
yarn add core-js
# OR
npm i --save-dev @babel/runtime-corejs3
npm i --save core-js
```

### 2. Upgrade `.browserslistrc`

```
ie 8 # add it
```

### 3. Config `babel.config.js`

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

### 4. Config `balm`

```js
balm.config = {
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
