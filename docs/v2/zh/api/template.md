# 模板

## mix.html()

`mix.html(input: string, output: string)`

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go((mix) => {
  mix.html('src/index.html', 'dist');
});
```

- 源模板

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello BalmJS</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
  </head>

  <body>
    <div id="app">
      <span>Hello</span>
      <img src="%PUBLIC_URL%/images/logo.svg" alt="BalmJS" />
      <a href="//balm.js.org/">BalmJS</a>
    </div>

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- 生产文件

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello BalmJS</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>

  <body>
    <div id="app">
      <span>Hello</span>
      <img src="img/logo.svg" alt="BalmJS" />
      <a href="//balm.js.org/">BalmJS</a>
    </div>

    <script src="js/main.js"></script>
  </body>
</html>
```
