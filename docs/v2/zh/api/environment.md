# 环境

## mix.env

```ts
interface BalmEnvObject {
  isProd: boolean;
  isTest: boolean;
  isDev: boolean;
  inSSR: boolean;
}
```

`mix.env: BalmEnvObject`

同 `balm.config.env`。

:chestnut: 举个栗子：

```js
const api = (mix) => {
  console.log(mix.env); // 等同于 `balm.config.env`，输出：{ isProd, isTest, isDev, inSSR }

  if (mix.env.isProd) {
    // 生产模式
  } else {
    // 开发模式
  }
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```
