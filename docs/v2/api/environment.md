# Environment

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

The same as the `balm.config.env`.

:chestnut: For example:

```js
const api = (mix) => {
  console.log(mix.env); // Be equal to `balm.config.env`, Output: { isProd, isTest, isDev, inSSR }

  if (mix.env.isProd) {
    // production
  } else {
    // development
  }
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```
