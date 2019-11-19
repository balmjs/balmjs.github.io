# Multiple Page Application

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
├── gulpfile.js
├── package.json
└── ...
```

:warning: **Tips:**

- The images used in CSS are recommended to be placed in the `src/images` folder
- The images used in JS are recommended to be placed in the `src/scripts/assets` folder

## 1. HTML

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
    <script src="%PUBLIC_URL%/scripts/vendors/mylib.js"></script>
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
    <script src="%PUBLIC_URL%/scripts/vendors/mylib.js"></script>
    <script src="%PUBLIC_URL%/scripts/admin.js"></script>
  </body>
</html>
```

## 2. CSS

- `/path/to/project/src/styles/_main.scss`

> :warning: The dash style file will not be compiled into a CSS file.

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

## 3. JS

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
