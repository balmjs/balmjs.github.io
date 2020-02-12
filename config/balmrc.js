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
  images: {
    defaultPlugins: {
      png: false
    }
  },
  extras: {
    includes: ['CNAME'],
    excludes: ['service-worker.js']
  },
  assets: {
    publicUrl: '/',
    cache: false,
    excludes: ['dist/img/icons/*']
  },
  pwa: {
    manifest: 'manifest.webmanifest'
  }
  // logs: {
  //   level: 2
  // }
};
