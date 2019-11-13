# Code Splitting

> Example for [Vue](https://vuejs.org/) + [BalmUI](https://material.balmjs.com/)

## 1. Include full code

### 1.1 All in one script

- **`/path/to/project/app/index.html`**

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

- **`/path/to/project/app/scripts/main.js`**

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui';
import 'balm-ui/dist/balm-ui.css'; // Not recommended

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
      ui: ['balm-ui'],
      main: './app/scripts/main.js'
    }
  }
};
```

### 1.3 Split vendors code

- **`/path/to/project/app/index.html`**

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

  <!-- Include: balm-ui, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

- **`/path/to/project/app/styles/main.scss`**

```scss
@import 'node_modules/balm-ui/src/styles/balm-ui.scss'; // Recommended
```

- **`/path/to/project/app/scripts/main.js`**

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

### 1.4 Split css code

- **`/path/to/project/app/index.html`**

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Webapp</title>

  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/dist/balm-ui.css">
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

  <!-- Include: balm-ui, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

- **`/path/to/project/app/styles/main.scss`**

```scss
// @import 'node_modules/balm-ui/src/styles/balm-ui.scss';
```

## 2. Include partial code

> Recommended for Mobile

### 2.1 All in one script

- **`/path/to/project/app/scripts/main.js`**

```js
import Vue from 'vue';
import App from './views/layouts/app';

// Include UI scripts
import UiButton from 'balm-ui/components/button';
import $alert from 'balm-ui/plugins/alert';

// Include UI styles (Not recommended)
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/dialog.css';

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
balm.config = {
  scripts: {
    entry: {
      lib: ['vue'],
      ui: ['balm-ui'],
      main: './app/scripts/main.js'
    }
  }
};
```

### 2.3 Split all code

- **`/path/to/project/app/index.html`**

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Webapp</title>

  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css">
  <link rel="stylesheet" href="/node_modules/balm-ui/components/button.css">
  <link rel="stylesheet" href="/node_modules/balm-ui/components/dialog.css">
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

  <!-- Include: balm-ui, etc... -->
  <script src="%PUBLIC_URL%/scripts/vendor/ui.js"></script>

  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

- **`/path/to/project/app/scripts/main.js`**

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
