# 从 0.23.x 升级到 0.24.x

### balm < v0.24.0

- 使用 `.babelrc`

```json
{
  "presets": ["env"],
  "plugins": ["transform-runtime"]
}
```

### balm >= v0.24.0

- 使用 `babel.config.js`（推荐使用）

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};
```

- 或者使用 `.babelrc`

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

> **提示：** 如果使用的 npm >= v5.2.0，运行 `npx babel-upgrade --write` 可自动更新绝大多数依赖。
