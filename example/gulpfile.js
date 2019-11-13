// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html

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
    source: 'app', // Source code root (Create a directory named 'app' in project)
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
    ext: 'scss' // Main style extension
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
      main: './app/scripts/main.js'
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
