# 快速上手

:zap: 最简单的 WEB 应用项目结构 ([完整项目结构](structure.md))

```
project
├─┬ src
│ ├─┬ scripts
│ │ └── index.js
│ ├─┬ styles
│ │ └── main.css
│ └── index.html
├── .browserslistrc
├── babel.config.js
├── gulpfile.js
└── package.json
```

你也可以直接 [下载例子](https://balm.js.org/balm-example.zip) 来帮助学习。

## WEB 应用目录

### 1. 一个模板入口文件

> `/path/to/project/src/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello BalmJS</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css" />
  </head>

  <body>
    <div id="app"><!-- Your Template --></div>
    <script src="%PUBLIC_URL%/scripts/main.js"></script>
  </body>
</html>
```

### 2. 一个样式入口文件

> `/path/to/project/src/styles/main.css`

```css
* {
  margin: 0;
  padding: 0;
}
```

### 3. 一个脚本入口文件

> `/path/to/project/src/scripts/index.js`

```js
document.getElementById('app').innerHTML = '<h1>Hello BalmJS</h1>';
```

> 通过 Balm 将 `index.js` 编译成 `main.js`。
>
> 请参照下面项目配置中的 [3. `balm` 配置文件](#_3-balm-配置文件-gulpfile-js)。

## 项目配置

### 1. Autoprefixer 采用 [Browserslist](https://github.com/ai/browserslist#queries)

在你的项目根目录下，新建一个名叫 `.browserslistrc` 的配置文件：

```
> 0.5%
last 2 versions
Firefox ESR
not dead
```

### 2. 配置 `babel`

> 使用 [Babel](https://babeljs.io/) 开启 [ES2015 特性](https://babeljs.io/docs/en/learn)

在你的项目根目录下，新建一个名叫 `babel.config.js` 的配置文件：

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};
```

> Balm 已内置了最新的 `@babel/preset-env` 和 `@babel/plugin-transform-runtime`，无需额外安装。

### 3. `balm` 配置文件 `gulpfile.js`

- 一个简单的 `gulpfile.js` 配置例子（`/path/to/project/gulpfile.js`）

```js
// 1. 导入 balm
const balm = require('balm');

// 2. 配置 balm
balm.config = {
  server: {
    open: true,
    proxyConfig: {
      context: '/api',
      options: {
        target: 'http://your.project.dev', // 代理的目标域名
        changeOrigin: true // 虚拟域名站点必备
      }
    }
  },
  roots: {
    source: 'src', // 源代码根目录（如果项目中没有此目录，请自行新建一个名叫“src”的文件夹）
    target: 'dist' // 生产构建目录（打包目录）
  },
  paths: {
    source: {
      css: 'styles', // 样式目录 = ./src/styles
      js: 'scripts', // 脚本目录 = ./src/scripts
      img: 'images', // 图片目录 = ./src/images
      font: 'fonts' //  字体目录 = ./src/fonts
    }
  },
  styles: {
    extname: 'css', // 项目主样式后缀名：css,scss,less
    sprites: ['icons'] // 雪碧图源文件：['./src/images/icons']
  },
  scripts: {
    entry: {
      // 对应模板中的HTML用法：<script src="%PUBLIC_URL%/scripts/vendor/mylib.js"></script>
      // mylib: [
      //   'your-project-library-1',
      //   'your-project-library-2',
      //   'your-project-plugin-A',
      //   'your-project-plugin-B'
      // ],
      // 脚本入口文件
      main: './src/scripts/index.js'
    }
  },
  assets: {
    root: '/path/to/your_remote_project', // 远程项目的根目录（如：PHP后端项目）
    mainDir: 'public', // 远程项目的静态资源目录：'/path/to/your_remote_project/public'
    subDir: '', // 远程项目的静态资源子目录：`/path/to/your_remote_project/public/${subDir}`
    cache: false
  }
};

// 3. 运行 balm
balm.go((mix) => {
  if (balm.config.env.isProd) {
    // 发布静态资源 (styles,scripts,images,fonts,media)
    // 从本地 `${roots.target}/{css,js,img,font,media}`
    // 到远程 `${assets.root}/${assets.mainDir}/${assets.subDir}`
    mix.publish();

    // 发布HTML模板
    // 从本地 `${roots.target}/index.html`
    // 到远程 `${assets.root}/views/new-filename.blade.php`
    mix.publish('index.html', 'views', {
      basename: 'new-filename',
      suffix: '.blade',
      extname: '.php'
    });
  }
});
```

> **提示：** 如果你参照了 `balm` 的标准项目结构，就可以几乎 **零配置** 来进行项目开发。

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  server: {
    // 开发模式 调试接口配置
  },
  assets: {
    // 生产模式 打包配置
  }
};

balm.go();
```
