# 代码分离

> 以 [Vue](https://vuejs.org/) + [BalmUI](https://material.balmjs.com/) 为例

## 1. 引用全部代码

### 1.1 一个脚本（All in One）

- `/path/to/project/src/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your Webapp</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
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

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- `/path/to/project/src/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui';

// 引入 UI 样式（不推荐的用法）
import 'balm-ui/dist/balm-ui.css';

Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 1.2 配置 `balm`，提取第三方库

```js
module.exports = {
  styles: {
    extname: 'scss',
    dartSass: true
  },
  scripts: {
    entry: {
      lib: ['vue'],
      ui: ['balm-ui'],
      main: './src/scripts/main.js'
    }
  }
};
```

### 1.3 分离第三方库代码

- `/path/to/project/src/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your Webapp</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
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

    <!-- Include: vue, etc... -->
    <script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>

    <!-- Include: balm-ui, etc... -->
    <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- `/path/to/project/src/styles/main.scss`

```scss
// 推荐使用 Dart Sass
@use 'balm-ui/dist/balm-ui';
```

或

```scss
@import 'balm-ui/dist/balm-ui.scss';
```

- `/path/to/project/src/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 1.4 分离样式代码（可选）

- `/path/to/project/src/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your Webapp</title>

    <!-- build:css css/vendor.css -->
    <link rel="stylesheet" href="/node_modules/balm-ui/dist/balm-ui.css" />
    <!-- endbuild -->

    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
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

    <!-- Include: vue, etc... -->
    <script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>

    <!-- Include: balm-ui, etc... -->
    <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

## 2. 引用部分代码

> 推荐移动端 H5 使用 :iphone:

### 2.1 一个脚本（All in One）

- `/path/to/project/src/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';

// 引入 UI 脚本
import UiButton from 'balm-ui/components/button';
import $alert from 'balm-ui/plugins/alert';

// 引入 UI 样式（不推荐的用法）
import 'balm-ui/components/core.css';
import 'balm-ui/components/button/button.css';
import 'balm-ui/components/dialog/dialog.css';

// 使用 UI 组件
Vue.use(UiButton);
Vue.use($alert);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 2.2 配置 `balm`，提取第三方库

```js
module.exports = {
  scripts: {
    entry: {
      lib: ['vue'],
      ui: ['balm-ui'],
      main: './src/scripts/main.js'
    }
  }
};
```

### 2.3 分类所有代码

- `/path/to/project/src/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your Webapp</title>

    <!-- build:css css/vendor.css -->
    <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
    <link rel="stylesheet" href="/node_modules/balm-ui/components/button.css" />
    <link rel="stylesheet" href="/node_modules/balm-ui/components/dialog.css" />
    <!-- endbuild -->

    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
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

    <!-- Include: vue, etc... -->
    <script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>

    <!-- Include: balm-ui, etc... -->
    <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

- `/path/to/project/src/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';

// 引入 UI 脚本
import UiButton from 'balm-ui/components/button';
import $alert from 'balm-ui/plugins/alert';

// 使用 UI 组件
Vue.use(UiButton);
Vue.use($alert);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```
