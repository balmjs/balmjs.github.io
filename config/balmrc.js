module.exports = {
  styles: {
    extname: 'css'
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
    includes: ['CNAME'],
    excludes: ['service-worker.js']
  }
};
