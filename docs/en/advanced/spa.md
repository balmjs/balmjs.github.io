# Single Page Application

## Structure

```
project
├─┬ src
│ ├─┬ styles
│ │ ├── ...
│ │ └── main.scss
│ ├─┬ scripts
│ │ ├── ...
│ │ └── main.js
│ └── index.html
└── ...
```

### 1. HTML

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

### 2. CSS

- **`/path/to/project/app/styles/main.scss`**

```scss
// 1. Configuration and helpers
@import 'abstracts/variables', 'abstracts/functions', 'abstracts/mixins';

// 2. Vendors
@import 'vendor/normalize';

// 3. Base stuff
@import 'base/base', 'base/fonts', 'base/typography', 'base/helpers';

// 4. Layout-related sections
@import 'layout/header', 'layout/footer';

// 5. Components
@import 'components/button';

// 6. Page-specific styles
@import 'pages/home';

// 7. Themes
@import 'themes/default';
```

### 3. JS

- **`/path/to/project/app/scripts/main.js`**

```js
import Vue from 'vue';
import App from './views/layouts/app';
import BalmUI from 'balm-ui';

Vue.config.productionTip = false;
Vue.use(BalmUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
```
