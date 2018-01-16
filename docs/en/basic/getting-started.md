# Getting Started

### 0. The simplest structure for webapp ([Full version](structure.md))

```
project
├─┬ app
│ ├─┬ styles
│ │ └── main.css
│ ├─┬ scripts
│ │ └── main.js
│ └── index.html
├── .babelrc
├── gulpfile.js
└── package.json
```

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

### 2. `.babelrc` (`/path/to/project/.babelrc`)

> enable [ES2015 features](https://babeljs.io/learn-es2015/) using [Babel](https://babeljs.io/)

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
# for ES6 compilation ability
$ npm install --save-dev babel-preset-es2015

# for ES7 compilation ability
$ npm install --save-dev babel-preset-stage-0
```

Then, edit `.babelrc`:

```json
{
  "presets": ["es2015", "stage-0"]
}
```

### 3. [`gulpfile.js`](../configuration/example.html) for `balm` config
