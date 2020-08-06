# 多页面应用

## 0. 项目结构

```
project
├─┬ src
│ ├─┬ fonts
│ │ ├── ...
│ │ └── custom-regular.woff
│ ├─┬ images
│ │ ├── ...
│ │ └── logo.png
│ ├─┬ scripts
│ │ ├─┬ assets
│ │ │ ├── ...
│ │ │ └── avatar.png
│ │ ├── ...
│ │ ├── admin.js
│ │ └── login.js
│ ├─┬ styles
│ │ ├── ...
│ │ ├── _main.scss
│ │ ├── admin.scss
│ │ └── login.scss
│ ├── ...
│ ├── admin.html
│ └── login.html
├── .browserslistrc
├── babel.config.js
├── balm.config.js
├── package.json
└── ...
```

:warning: **提示：**

- CSS 中使用的图片推荐存放在 `src/images` 文件夹中管理
- JS 中使用的图片推荐存放在 `src/scripts/assets` 文件夹中管理

## 1. 模板

- `/path/to/project/src/login.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Login Page</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/login.css" />
  </head>

  <body>
    <!--[if lte IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]-->
    <div id="app"><!-- Your Template --></div>
    <script src="%PUBLIC_URL%/scripts/vendor/mylib.js"></script>
    <script src="%PUBLIC_URL%/scripts/login.js"></script>
  </body>
</html>
```

- `/path/to/project/src/admin.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Admin Page</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/admin.css" />
  </head>

  <body>
    <!--[if lte IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]-->
    <div id="app"><!-- Your Template --></div>
    <script src="%PUBLIC_URL%/scripts/vendor/mylib.js"></script>
    <script src="%PUBLIC_URL%/scripts/admin.js"></script>
  </body>
</html>
```

## 2. 样式

- `/path/to/project/src/styles/_main.scss`

> :warning: 以下划线(`_`)开头的样式文件都不会被编译成一个 CSS 文件。

```scss
// 1. Configuration and helpers
@import 'abstracts/variables', 'abstracts/functions', 'abstracts/mixins';

// 2. Vendors
@import 'vendors/normalize';

// 3. Base stuff
@import 'base/base', 'base/fonts', 'base/typography', 'base/helpers';

// 4. Layout-related sections
@import 'layouts/header', 'layouts/footer';

// 5. Components
@import 'components/button';
```

- `/path/to/project/src/styles/login.scss`

```scss
// include 1 - 5
@import 'main';

// 6. Page-specific styles
@import 'pages/login';

// 7. Themes
@import 'themes/default';
```

- `/path/to/project/src/styles/admin.scss`

```scss
// include 1 - 5
@import 'main';

// 6. Page-specific styles
@import 'pages/admin';

// 7. Themes
@import 'themes/admin';
```

## 3. 脚本

- `/path/to/project/src/scripts/login.js`

```js
import Vue from 'vue';
import Login from './views/layouts/login';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { Login },
  template: '<login/>'
});
```

- `/path/to/project/src/scripts/admin.js`

```js
import Vue from 'vue';
import Admin from './views/layouts/admin';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { Admin },
  template: '<admin/>'
});
```
