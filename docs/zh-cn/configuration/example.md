### 一个简单的 `gulpfile.js` 配置例子 (`/path/to/project/gulpfile.js`)

```js
// 1. 导入 balm
var balm = require('balm');

// 2. 配置 balm
balm.config = {
  server: {
    open: true,
    proxyTable: {
      '/api': {
        target: 'http://your.project.dev', // 代理的目标域名
        changeOrigin: true // 虚拟域名站点必备
      }
    }
  },
  roots: {
    source: 'app', // 源代码根目录（如果项目中没有此目录，请自行新建一个名叫“app”的文件夹）
    target: 'dist' // 生产构建目录（打包目录）
  },
  paths: {
    source: {
      css: 'styles', // 样式目录 = ./app/styles
      js: 'scripts', // 脚本目录 = ./app/scripts
      img: 'images', // 图片目录 = ./app/images
      font: 'fonts'  // 字体目录 = ./app/fonts
    }
  },
  styles: {
    ext: 'scss', // 项目主样式后缀名
    autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR']
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
      main: './app/scripts/main.js'
    }
  },
  // sprites: {
  //   image: ['img-icon'], // 图片雪碧图文件夹：['./app/images/img-icon']
  //   svg: ['svg-icon']    // SVG雪碧图文件夹：['./app/images/svg-icon']
  // },
  assets: {
    root: '/path/to/your_remote_project', // 远程项目的根目录（如：PHP后端项目）
    publicPath: 'public', // 远程项目的静态资源目录：'/path/to/your_remote_project/public'
    subDir: ''            // 远程项目的静态资源子目录：`/path/to/your_remote_project/public/${subDir}`
  },
  cache: false
};

// 3. 运行 balm
balm.go(function(mix) {
  if (balm.config.production) {
    // 发布静态资源 (styles,scripts,images,fonts,media)
    // 从本地 `${roots.target}/{css,js,img,font,media}`
    // 到远程 `${assets.root}/${assets.publicPath}/${assets.subDir}`
    mix.publish();

    // 发布HTML模板
    // 从本地 `${roots.target}/old-filename.html`
    // 到远程 `${assets.root}/views/new-filename.blade.php`
    mix.publish('index.html', 'views', {
      basename: 'new-filename',
      suffix: '.blade',
      extname: '.php'
    });
  }
});
```
