# FAQ

### How to import `zepto` modules?

First, run this command in your project directory:

```sh
npm i -D exports-loader script-loader

// OR install with yarn
yarn add -D exports-loader script-loader
```

Then, edit `balm` config:

```js
balm.config = {
  ...
  scripts: {
    ...
    loaders: [{
      test: /zepto\.js/,
      loader: 'exports-loader?window.Zepto!script-loader'
    }],
    alias: {
      zeptoSrc: 'zepto/src'
    }
  },
  ...
};
```

And, use it in `/path/to/project/app/scripts/main.js`:

```js
import $ from 'zeptoSrc/zepto';
import 'zeptoSrc/event';

// enjoy coding
```

### `npm@2.x.x` bug

Q1:

```sh
Error: Cannot find module 'babel-runtime/helpers/classCallCheck'
```

A1:

```sh
npm install babel-runtime
```

Q2:

```sh
Error: Cannot resolve module 'webpack-hot-middleware/client' in /path/to/your_project
```

A2:

```sh
npm install webpack-hot-middleware
```
