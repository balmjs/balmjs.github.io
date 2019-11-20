module.exports = {
  styles: {
    extname: 'css'
  },
  scripts: {
    entry: {
      main: './src/scripts/main.js'
    },
    lint: true,
    options: {
      compress: {
        drop_console: false
      }
    }
  },
  extras: {
    includes: ['CNAME'],
    excludes: ['service-worker.js']
  },
  assets: {
    cache: false,
    excludes: ['dist/img/icons/*']
  }
};
