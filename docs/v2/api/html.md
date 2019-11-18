# HTML

## mix.html()

`mix.html(input: string, output: string)`

🌰 For example:

```js
const balm = require('balm');

balm.config = {
  // Your project config
};

balm.go(mix => {
  mix.html('src/index.html', 'dist');
});
```

- before

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
      <a href="//balmjs.com/">BalmJS</a>
    </div>

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- after

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
      <a href="//balmjs.com/">BalmJS</a>
    </div>

    <script src="js/main.js"></script>
  </body>
</html>
```
