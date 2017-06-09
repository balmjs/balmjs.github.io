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
    ext: 'css'
  },
  scripts: {
    entry: {
      main: './src/scripts/main.js'
    }
  }
};

balm.go();
