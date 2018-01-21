// 1. Import balm
var balm = require('balm');

// 2. Config balm
balm.config = {
  server: {
    open: true,
    proxyTable: {
      '/api': {
        target: 'http://your.project.dev', // Target host
        changeOrigin: true // Needed for virtual hosted sites
      }
    }
  },
  roots: {
    source: 'app', // Source code root (Create a directory named 'app' in project)
    target: 'dist' // The production build
  },
  paths: {
    source: {
      css: 'styles', //   CSS dir = ./app/styles
      js: 'scripts', //    JS dir = ./app/scripts
      img: 'images', // Image dir = ./app/images
      font: 'fonts'  //  Font dir = ./app/fonts
    }
  },
  styles: {
    ext: 'scss', // Main style extension
    autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR']
  },
  scripts: {
    entry: {
      // HTML: <script src="%PUBLIC_URL%/scripts/vendor/mylib.js"></script>
      // mylib: [
      //   'your-project-library-1',
      //   'your-project-library-2',
      //   'your-project-plugin-A',
      //   'your-project-plugin-B'
      // ],
      // Entry
      main: './app/scripts/main.js'
    }
  },
  // sprites: {
  //   image: ['img-icon'], // Icon path: './app/images/img-icon'
  //   svg: ['svg-icon']    //  SVG path: './app/images/svg-icon'
  // },
  assets: {
    root: '/path/to/your_remote_project', // Remote project root path
    publicPath: 'public', // '/path/to/your_remote_project/public'
    subDir: '' // `/path/to/your_remote_project/public/${subDir}`
  },
  cache: false
};

// 3. Run balm
balm.go(function(mix) {
  if (balm.config.production) {
    // Publish assets(styles,scripts,images,fonts,media)
    // from local `${roots.target}/{css,js,img,font,media}`
    // to remote `${assets.root}/${assets.publicPath}/${assets.subDir}`
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
