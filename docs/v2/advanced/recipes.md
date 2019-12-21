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

## IE8 compatibility

### 1. Install the dependency used to provide the necessary runtime helpers

```sh
yarn add core-js @babel/runtime-corejs3
# OR
npm i --save core-js @babel/runtime-corejs3
```

### 2. Upgrade `.browserslistrc`

```
ie 8 # add it
```

### 3. Config `babel.config.js`

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

### 4. Config `balm`

```js
balm.config = {
  scripts: {
    options: {
      ie8: true // Add it
    }
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
import 'core-js/features/object/define-property';
import 'core-js/features/object/create';
import 'core-js/features/object/assign';
import 'core-js/features/array/for-each';
import 'core-js/features/array/index-of';
import 'core-js/features/function/bind';
import 'core-js/features/promise';
```

> In IE8 `Object.defineProperty` can only be used on DOM objects. This is unfortunate as it's required to set getters and setters. Due to this if you plan on supporting IE8 or below then the usage of getters and setters isn't recommended.
