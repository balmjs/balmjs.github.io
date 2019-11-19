# 其他

## mix.generateSW()

`mix.generateSW(pwaOptions: object)`

## mix.injectManifest()

`mix.injectManifest(pwaOptions: object)`

:chestnut: 举个栗子：

```js
const balm = require('balm');

const workboxSw = 'node_modules/workbox-sw/build/workbox-sw.js';

balm.config = {
  pwa: {
    enabled: true, // NOTE: 仅限生产模式
    workboxSw
  }
  // 其他配置项...
};

balm.go(mix => {
  if (!balm.config.env.isProd) {
    mix.copy(workboxSw, balm.config.roots.tmp);
    // PWA 测试
    mix.generateSW();
    // mix.injectManifest();
  }
});
```

## mix.modernizr()

开发模式下通过 [`modernizr.json`](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json) 手动生成一个 modernizr 脚本。
