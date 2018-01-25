# Code Splitting

> Example for [Vue](https://vuejs.org/) + [BalmUI Lite](http://mdl.balmjs.com/)

## 1. Include full code

### 1.1 All in one script

- __`/path/to/project/app/index.html`__

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Webapp</title>
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
  <div id="app"><!-- Your Template --></div>

  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

- __`/path/to/project/app/scripts/main.js`__

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui-lite';
import 'balm-ui-lite/dist/balm-ui-lite.css'; // Not recommended

Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 1.2 Config `balm` from splitting vendors code

```js
balm.config = {
  scripts: {
    entry: {
      lib: ['vue'],
      ui: ['balm-ui-lite'],
      main: './app/scripts/main.js'
    }
  }
};
```

### 1.3 Split vendors code

- __`/path/to/project/app/index.html`__

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Webapp</title>
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
  <div id="app"><!-- Your Template --></div>

  <!-- Include: vue, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>

  <!-- Include: balm-ui-lite, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

- __`/path/to/project/app/styles/main.scss`__

```scss
@import 'node_modules/balm-ui-lite/src/styles/balm-ui-lite.scss'; // Recommended
```

- __`/path/to/project/app/scripts/main.js`__

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 1.4 Split css code

- __`/path/to/project/app/index.html`__

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Webapp</title>

  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/dist/balm-ui-lite.css">
  <!-- endbuild -->

  <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
  <div id="app"><!-- Your Template --></div>

  <!-- Include: vue, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>

  <!-- Include: balm-ui-lite, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

- __`/path/to/project/app/styles/main.scss`__

```scss
// @import 'node_modules/balm-ui-lite/src/styles/balm-ui-lite.scss';
```

## 2. Include partial code (Mobile recommended)

### 2.1 All in one script

- __`/path/to/project/app/scripts/main.js`__

```js
import Vue from 'vue';
import App from './views/layouts/app';

// Include UI scripts
import UiButton from 'balm-ui-lite/components/button';
import $alert from 'balm-ui-lite/plugins/alert';

// Include UI styles (Not recommended)
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/button.css';
import 'balm-ui-lite/components/dialog.css';

// Use UI components
Vue.component(UiButton.name, UiButton);
Vue.use($alert);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```

### 2.2 Config `balm` from splitting vendors code

```js
balm.config = {
  scripts: {
    entry: {
      lib: ['vue'],
      ui: [
        'balm-ui-lite/components/button',
        'balm-ui-lite/plugins/alert'
      ],
      main: './app/scripts/main.js'
    }
  }
};
```

### 2.3 Split all code

- __`/path/to/project/app/index.html`__

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Webapp</title>

  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/core.css">
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/button.css">
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/dialog.css">
  <!-- endbuild -->

  <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
  <div id="app"><!-- Your Template --></div>

  <!-- Include: vue, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/lib.js"></script>

  <!-- Include: balm-ui-lite, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

- __`/path/to/project/app/scripts/main.js`__

```js
import Vue from 'vue';
import App from './views/layouts/app';

// Include UI scripts
import UiButton from 'balm-ui-lite/components/button';
import $alert from 'balm-ui-lite/plugins/alert';

// Use UI components
Vue.component(UiButton.name, UiButton);
Vue.use($alert);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```
