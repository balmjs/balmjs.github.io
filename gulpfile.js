var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'css',
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'Firefox ESR'
    ]
  },
  scripts: {
    entry: {
      main: './src/scripts/main.js'
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    }
  },
  extras: {
    includes: ['CNAME']
  }
};

balm.go(function(mix){
  if (balm.config.production) {
    mix.copy('./docs/_book/**/*', './dist/docs');
  }
});