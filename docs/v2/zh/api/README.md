# 自定义任务 API

- 环境
  - [`env`](environment.html#mix-env)
- 模板
  - [`mix.html(input, output)`](template.html#mix-html)
- 样式
  - [`mix.css(input, output)`](styles.html#mix-css)
  - [`mix.sass(input, output, options?)`](styles.html#mix-sass)
  - [`mix.less(input, output, options?)`](styles.html#mix-less)
  - [`mix.url(input, output)`](styles.html#mix-url)
  - [`mix.sprite(input, output, spriteOptions?)`](styles.html#mix-sprite)
- 脚本
  - [`mix.js(input, output, webpackOptions?)`](scripts.html#mix-js)
  - [`mix.jsmin(input, output, options?)`](scripts.html#mix-jsmin)
- 文件
  - [`mix.copy(input, output, options?)`](files.html#mix-copy)
  - [`mix.remove(paths)`](files.html#mix-remove)
- 缓存
  - [`mix.version(input, output, assetsOptions?)`](cache.html#mix-version)
- 服务
  - [`mix.serve(handler)`](server.html#mix-serve)
- 发布
  - [`mix.publish(input, output, renameOptions?)`](deployment.html#mix-publish)
  - [`mix.zip(input?, output?, filename?)`](deployment.html#mix-zip)
  - [`mix.ftp(localFiles, options?)`](deployment.html#mix-ftp)
- 其他
  - [`mix.generateSW(pwaOptions)`](others.html#mix-generatesw)
  - [`mix.injectManifest(pwaOptions)`](others.html#mix-injectmanifest)
  - [`mix.modernizr()`](others.html#mix-modernizr)

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  // 使用自定义任务API
});
```

> `balm.config` 请参照 [BalmJS 配置文档](../config/)
