# Getting Started

:zap: The simplest structure for webapp ([Full structure](structure.md))

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
├── balm.config.js
└── package.json
```

And you can also [download the example](https://balm.js.org/balm-example.zip) and try it.

## Webapp directory

### 1. A HTML template

> `/path/to/project/src/index.html`

```html
<!doctype html>
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

### 2. A CSS entry file

> `/path/to/project/src/styles/main.css`

```css
* {
  margin: 0;
  padding: 0;
}
```

### 3. A JS entry file

> `/path/to/project/src/scripts/index.js`

```js
document.getElementById('app').innerHTML = '<h1>Hello BalmJS</h1>';
```

> Compiling `index.js` to `main.js` by Balm.
>
> Please refer to the Project settings - [3. Configure balm](#_3-configure-balm) below.

## Project settings

### 1. Autoprefixer uses [Browserslist](https://github.com/browserslist/browserslist#queries)

In your project directory, create a file named `.browserslistrc` in your project root with these contents:

```
defaults
```

### 2. Configure `babel`

> enable [ES2015 features](https://babeljs.io/docs/en/learn) by using [Babel](https://babeljs.io/)

In your project directory, create a file named `babel.config.js` in your project root with these contents:

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};
```

> Balm has the latest `@babel/preset-env` and `@babel/plugin-transform-runtime` built-in.

### 3. Configure `balm`

In your project directory, create a file named `balm.config.js` in your project root with these contents:

- Basic example

  ```js
  // Your project config
  module.exports = {
    roots: {
      source: 'src' // Source code root (Create a directory named 'src' in project)
    },
    styles: {
      extname: 'css' // Main style extension: css,scss,less
    },
    scripts: {
      main: './src/scripts/index.js' // The entry script (Create a javascript file)
    }
  };
  ```

- Advanced example

```js
// Your project config
const config = {
  server: {
    open: true,
    proxyOptions: {
      target: 'http://your.project.dev', // Target host
      changeOrigin: true, // Needed for virtual hosted sites
      pathFilter: '/api'
    }
  },
  roots: {
    source: 'src' // Source code root (Create a directory named 'src' in project)
    target: 'dist' // The production build
  },
  paths: {
    source: {
      css: 'styles', //   CSS dir: ./src/styles
      js: 'scripts', //    JS dir: ./src/scripts
      img: 'images', // Image dir: ./src/images
      font: 'fonts'  //  Font dir: ./src/fonts
    }
  },
  styles: {
    extname: 'css', // Main style extension: css,scss,less
    sprites: ['icons'] // Icons path: './src/images/icons'
  },
  scripts: {
    entry: {
      // Custom vendors
      // HTML: <script src="%PUBLIC_URL%/scripts/vendor/mylib.js"></script>
      mylib: [
        'your-project-vendors',
        'your-project-plugins'
      ],
      // The entry script (Create a javascript file)
      main: './src/scripts/index.js'
    }
  },
  assets: {
    root: '/path/to/your_remote_project', // Remote project root path
    mainDir: 'public', // Remote assets dir: '/path/to/your_remote_project/public'
    subDir: '', // Remote assets subdir: `/path/to/your_remote_project/public/${subDir}`
    cache: true
  }
};

// Custom tasks by API
const api = (mix) => {
  if (mix.env.isProd) {
    // Publish assets(styles,scripts,images,fonts,media)
    // from local `${roots.target}/{css,js,img,font,media}`
    // to `${assets.root}/${assets.mainDir}/${assets.subDir}`
    mix.publish();

    // Publish html templates
    // from local `${roots.target}/index.html`
    // to remote `${assets.root}/views/new-filename.blade.php`
    mix.publish([
      {
        input: 'index.html',
        output: 'views',
        renameOptions: {
          basename: 'new-filename',
          suffix: '.blade',
          extname: '.php'
        }
      }
    ]);
  }
});

const beforeTask = () => {}; // Function or custom gulp task name
const afterTask = () => {}; // Function or custom gulp task name

module.exports = (balm) => {
  return {
    beforeTask,
    afterTask,
    config,
    api
  };
};
```

> **Tips:** If you refer to balm's standard project structure, you can develop your project with almost **zero configuration**.

### 4. Update `package.json`

```json
{
  "scripts": {
    "dev": "balm",
    "prod": "balm -p"
  }
}
```

Now, Let's enjoy! :ghost:
