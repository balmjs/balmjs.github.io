# Single Page Application

## 0. Structure

```
project
├─┬ src
│ ├─┬ fonts
│ │ ├── ...
│ │ └── custom-regular.woff
│ ├─┬ images
│ │ ├── ...
│ │ └── logo.png
│ ├─┬ styles
│ │ ├── ...
│ │ └── main.scss
│ ├─┬ scripts
│ │ ├─┬ assets
│ │ │ ├── ...
│ │ │ └── avatar.png
│ │ ├── ...
│ │ └── main.js
│ └── index.html
├── .browserslistrc
├── babel.config.js
├── gulpfile.js
├── package.json
└── ...
```

:warning: **Tips:**

- The images used in CSS are recommended to be placed in the `src/images` folder.
- The images used in JS are recommended to be placed in the `src/scripts/assets` folder.

## 1. HTML

- `/path/to/project/src/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SPA webapp</title>
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

## 2. CSS

- `/path/to/project/src/styles/main.scss`

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

// 6. Page-specific styles
@import 'pages/home';

// 7. Themes
@import 'themes/default';
```

## 3. JS

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
