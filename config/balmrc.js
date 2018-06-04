module.exports = {
  server: {
    open: false
  },
  styles: {
    ext: 'css',
    autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR']
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
    includes: ['CNAME', '_config.yml'],
    excludes: ['service-worker.js']
  },
  zip: 'balm-example.zip'
};
