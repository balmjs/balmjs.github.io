# Code Splitting

> Example for [Vue](https://vuejs.org/) + [BalmUI](https://material.balmjs.com/)

## 1. Include full code

### 1.1 All in one script

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

// Include UI styles (Not recommended usage)
import 'balm-ui/dist/balm-ui.css';

Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 1.2 Config `balm` from splitting vendors code

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

### 1.3 Split vendors code

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
// Recommended Dart Sass
@use 'balm-ui/dist/balm-ui';
```

OR

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

### 1.4 Split css code (Optional)

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

## 2. Include partial code

> Recommended for Mobile :iphone:

### 2.1 All in one script

- `/path/to/project/src/scripts/main.js`

```js
import Vue from 'vue';
import App from './views/layouts/app';

// Include UI scripts
import UiButton from 'balm-ui/components/button';
import $alert from 'balm-ui/plugins/alert';

// Include UI styles (Not recommended usage)
import 'balm-ui/components/core.css';
import 'balm-ui/components/button/button.scss';
import 'balm-ui/components/dialog/dialog.css';

// Use UI components
Vue.use(UiButton);
Vue.use($alert);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 2.2 Config `balm` from splitting vendors code

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

### 2.3 Split all code

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

// Include UI scripts
import UiButton from 'balm-ui/components/button';
import $alert from 'balm-ui/plugins/alert';

// Use UI components
Vue.use(UiButton);
Vue.use($alert);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```
