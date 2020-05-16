module.exports = {
  styles: {
    extname: 'scss',
    dartSass: true
  },
  scripts: {
    lint: true,
    options: {
      compress: {
        ecma: 5,
        warnings: false,
        comparisons: false,
        inline: 2,
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
