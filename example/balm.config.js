// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/

const config = {
  server: {
    open: true,
    proxyConfig: {
      context: '/api',
      options: {
        target: 'http://your.project.dev', // Target host
        changeOrigin: true // Needed for virtual hosted sites
      }
    }
  },
  roots: {
    source: 'src', // Source code root (Create a directory named 'src' in project)
    target: 'dist' // The production build
  },
  paths: {
    source: {
      css: 'styles', //   CSS dir = ./src/styles
      js: 'scripts', //    JS dir = ./src/scripts
      img: 'images', // Image dir = ./src/images
      font: 'fonts' //  Font dir = ./src/fonts
    }
  },
  styles: {
    extname: 'css' // Main style extension: css,scss,less
    // sprites: ['icons'] // Icon path: './src/images/icons'
  },
  scripts: {
    entry: {
      // HTML: <script src="%PUBLIC_URL%/scripts/vendor/mylib.js"></script>
      // mylib: [
      //   'your-project-vendors',
      //   'your-project-plugins'
      // ],
      // Entry
      main: './src/scripts/index.js'
    }
  },
  assets: {
    // root: '/path/to/your_remote_project', // Remote project root path
    mainDir: 'public', // '/path/to/your_remote_project/public'
    subDir: '', // `/path/to/your_remote_project/public/${subDir}`
    cache: true
  }
};

const api = (mix) => {
  if (mix.env.isProd) {
    // Publish assets(styles,scripts,images,fonts,media)
    // from local `${roots.target}/{css,js,img,font,media}`
    // to remote `${assets.root}/${assets.mainDir}/${assets.subDir}`
    mix.publish();

    // Publish html templates
    // from local `${roots.target}/old-filename.html`
    // to remote `${assets.root}/views/new-filename.blade.php`
    mix.publish('index.html', 'views', {
      basename: 'new-filename',
      suffix: '.blade',
      extname: '.php'
    });
  }
};

module.exports = () => {
  return {
    config,
    api
  };
};
