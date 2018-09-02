# 快速上手

最简单的 WEB 应用项目结构（[完整目录结构](structure.md)）

```
project
├─┬ app
│ ├─┬ styles
│ │ └── main.css
│ ├─┬ scripts
│ │ └── main.js
│ └── index.html
├── .babelrc  (for balm@23)
├── babel.config.js (for balm@next)
├── gulpfile.js
└── package.json
```

你也可以 [下载例子](http://balmjs.com/balm-example.zip) 来帮助学习。

## WEB 应用目录

### 1. 一个模板入口文件 (`/path/to/project/app/index.html`)

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

### 2. 一个样式入口文件 (`/path/to/project/app/styles/main.scss`)

```css
* {
  margin: 0;
  padding: 0;
}
```

### 3. 一个脚本入口文件 (`/path/to/project/app/scripts/main.js`)

```js
document.getElementById('app').innerHTML = '<h1>Hello BalmJS</h1>';
```

## 项目配置文件

### 1. 配置 `babel`

> 使用 [Babel](https://babeljs.io/) 开启 [ES2015 特性](https://babeljs.io/docs/en/learn)

#### 1.1 `babel.config.js` (`/path/to/project/babel.config.js`)

在你的项目根目录下，新建一个名叫 `babel.config.js` 的配置文件：

- `balm` 版本 >= 0.24.0

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};
```

#### 1.2 `.babelrc` (`/path/to/project/.babelrc`)

在你的项目根目录下，新建一个名叫 `.babelrc` 的配置文件：

- `balm` 版本 >= 0.7.0

配置内容：

```json
{
  "presets": ["env"],
  "plugins": ["transform-runtime"]
}
```

- `balm` 版本 < 0.7.0

首先，在你的项目根目录下运行命令：

```sh
# 可编译ES6
$ npm install --save-dev babel-preset-es2015

# 可编译部分ES7
$ npm install --save-dev babel-preset-stage-0
```

然后，编辑 `.babelrc` 配置内容：

```json
{
  "presets": ["es2015", "stage-0"]
}
```

### 2. `balm` 配置文件 [`gulpfile.js`](../configuration/example.html) (`/path/to/project/gulpfile.js`)
