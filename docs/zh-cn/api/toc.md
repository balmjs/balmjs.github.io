# 自定义任务 API

- 模板
  - `mix.html()`
- 样式
  - `mix.css(input, output)`
  - `mix.sass(input, output)`
  - `mix.less(input, output)`
  - `mix.csspath()`
  - <del>`mix.cssmin(input, output, renameOptions = {suffix: '.min'})`</del>
- 脚本
  - `mix.js(input, output)`
  - <del>`mix.jsmin(input, output, renameOptions = {suffix: '.min'})`</del>
- 文件和目录
  - `mix.copy(from, to, renameOptions = {})`
  - `mix.remove(src)`
- 缓存
  - `mix.version(input, output, excludes = [])`
- 服务器
  - `mix.serve()`
- 静态资源
  - `mix.zip(input = '', output = '')`
  - `mix.ftp(input)`
  - `mix.publish(input = '', output = '', renameOptions = {})`

```js
var balm = require('balm');

balm.config = {
  // 你的项目配置项
};

balm.go(function(mix) {
  // 自定义任务 API
});
```

> `balm.config` 请参照 [BalmJS 配置文档](../configuration/toc.md)
