# 其他

## mix.generateSW()

`mix.generateSW(pwaOptions: object)`

## mix.injectManifest()

`mix.injectManifest(pwaOptions: object)`

:chestnut: 举个栗子：

```js
const config = {
  pwa: {
    enabled: true // NOTE: 仅限生产模式
  }
  // 其他配置项...
};

module.exports = (balm) => {
  const api = (mix) => {
    if (!mix.env.isProd) {
      mix.copy(workboxSw, balm.config.roots.tmp);
      // PWA 测试
      mix.generateSW();
      // mix.injectManifest();
    }
  };

  return {
    config,
    api
  };
};
```

## mix.modernizr()

开发模式下通过 [`modernizr.json`](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) 手动生成一个 modernizr 脚本。
