# 自定义任务 API

- 环境
  - [`env`](environment.html#mix-env)
- 模板
  - [`mix.html()`](template.html#mix-html)
- 样式
  - [`mix.css()`](styles.html#mix-css)
  - [`mix.sass()`](styles.html#mix-sass)
  - [`mix.less()`](styles.html#mix-less)
  - [`mix.url()`](styles.html#mix-url)
  - [`mix.sprite()`](styles.html#mix-sprite)
- 脚本
  - [`mix.webpack()`](scripts.html#mix-webpack)
  - [`mix.esbuild()`](scripts.html#mix-esbuild)
  - [`mix.rollup()`](scripts.html#mix-rollup)
  - [`mix.jsmin()`](scripts.html#mix-jsmin)
- 文件
  - [`mix.copy()`](files.html#mix-copy)
  - [`mix.remove()`](files.html#mix-remove)
  - [`mix.replace()`](files.html#mix-replace)
- 缓存
  - [`mix.version()`](cache.html#mix-version)
- 服务
  - [`mix.serve()`](server.html#mix-serve)
- 发布
  - [`mix.publish()`](deployment.html#mix-publish)
  - [`mix.zip()`](deployment.html#mix-zip)
  - [`mix.ftp()`](deployment.html#mix-ftp)
- 其他
  - [`mix.generateSW()`](others.html#mix-generatesw)
  - [`mix.injectManifest()`](others.html#mix-injectmanifest)
  - [`mix.modernizr()`](others.html#mix-modernizr)

```js
const api = (mix) => {
  // 使用API自定义任务
};

module.exports = (balm) => {
  return {
    config: {}, // Your project config
    api
  };
};
```

> `balm.config` 请参照 [BalmJS 配置文档](../config/)
