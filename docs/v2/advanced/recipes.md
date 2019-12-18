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

## Comparison in production

> Testing with `array.includes` simple demo

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

### Minimum compatibility

- installing

```sh
yarn add @babel/runtime-corejs3
# OR
npm i --save @babel/runtime-corejs3
```

- config `babel.config.js`

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
};
```

### Maximum compatibility

- installing

```sh
yarn add core-js
# OR
npm i --save core-js
```

- config `babel.config.js`

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
