module.exports = {
  server: {
    open: false
  },
  styles: {
    ext: 'css',
    autoprefixer: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']
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
