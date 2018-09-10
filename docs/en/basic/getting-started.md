# Getting Started

The simplest structure for webapp ([Full version](structure.md))

```
project
├─┬ app
│ ├─┬ styles
│ │ └── main.css
│ ├─┬ scripts
│ │ └── main.js
│ └── index.html
├── .babelrc  (for balm@0.23)
├── babel.config.js (for balm@0.24)
├── gulpfile.js
└── package.json
```

And you can also [download the example](http://balmjs.com/balm-example.zip).

## Webapp directory

### 1. HTML template (`/path/to/project/app/index.html`)

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
  <div id="app"><!-- Your Template --></div>
  <!-- <script src="%PUBLIC_URL%/scripts/vendor/mylib.js"></script> -->
  <script src="%PUBLIC_URL%/scripts/main.js"></script>
</body>

</html>
```

### 2. A CSS entry file (`/path/to/project/app/styles/main.scss`)

```css
* {
  margin: 0;
  padding: 0;
}
```

### 3. A JS entry file (`/path/to/project/app/scripts/main.js`)

```js
document.getElementById('app').innerHTML = '<h1>Hello BalmJS</h1>';
```

## Project settings

### 1. Configure `babel`

> enable [ES2015 features](https://babeljs.io/docs/en/learn) by using [Babel](https://babeljs.io/)

#### 1.1 `babel.config.js` (`/path/to/project/babel.config.js`)

In your project directory, create a file named `babel.config.js` in your project root with these contents:

- For `balm` version >= 0.24.0

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};
```

#### 1.2 `.babelrc` (`/path/to/project/.babelrc`)

In your project directory, create a file named `.babelrc` in your project root with these contents:

- For `balm` version >= 0.7.0

```json
{
  "presets": ["env"],
  "plugins": ["transform-runtime"]
}
```

- For `balm` version < 0.7.0

First, run this command in your project directory:

```sh
# For ES6 compilation ability
$ npm install --save-dev babel-preset-es2015

# For ES7 compilation ability
$ npm install --save-dev babel-preset-stage-0
```

Then, edit `.babelrc`:

```json
{
  "presets": ["es2015", "stage-0"]
}
```

### 2. Configure `balm` by [`gulpfile.js`](../configuration/example.html) (`/path/to/project/gulpfile.js`)
