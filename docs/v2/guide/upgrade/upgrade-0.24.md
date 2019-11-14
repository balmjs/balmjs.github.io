# Upgrading To 0.24.x From 0.23.x

### balm < v0.24.0

- via `.babelrc`

```json
{
  "presets": ["env"],
  "plugins": ["transform-runtime"]
}
```

### balm >= v0.24.0

- via `babel.config.js` (Recommended)

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};
```

OR

- via `.babelrc`

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

> **Tips:** If using npm >= v5.2.0, lets run `npx babel-upgrade --write` to automatically update most dependencies.
