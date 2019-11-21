// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - http://balmjs.com/docs/v2/zh/config/

// 1. Import balm
const balm = require('balm');

// 2. Config balm
balm.config = {
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
    source: 'src', // Source code root (Create a directory named 'app' in project)
    target: 'dist' // The production build
  },
  paths: {
    source: {
      css: 'styles', //   CSS dir = ./app/styles
      js: 'scripts', //    JS dir = ./app/scripts
      img: 'images', // Image dir = ./app/images
      font: 'fonts' //  Font dir = ./app/fonts
    }
  },
  styles: {
    extname: 'css' // Main style extension: css,scss,less
    // sprites: ['icons'] // Icon path: './app/images/icons'
  },
  scripts: {
    entry: {
      // HTML: <script src="%PUBLIC_URL%/scripts/vendors/mylib.js"></script>
      // mylib: [
      //   'your-project-library-1',
      //   'your-project-library-2',
      //   'your-project-plugin-A',
      //   'your-project-plugin-B'
      // ],
      // Entry
      main: './src/scripts/index.js'
    }
  },
  assets: {
    // root: '/path/to/your_remote_project', // Remote project root path
    mainDir: 'public', // '/path/to/your_remote_project/public'
    subDir: '', // `/path/to/your_remote_project/public/${subDir}`
    cache: false
  }
};

// 3. Run balm
balm.go(mix => {
  if (balm.config.env.isProd) {
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
});
