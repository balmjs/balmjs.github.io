const { version } = require('../package.json');

module.exports = {
  styles: {
    extname: 'scss',
    dartSass: true
  },
  scripts: {
    lint: true,
    esbuild: true
  },
  // images: {
  //   defaultPlugins: {
  //     png: false
  //   }
  // },
  extras: {
    includes: ['CNAME'],
    excludes: ['service-worker.js']
  },
  assets: {
    publicUrl: '/',
    cache: true,
    excludes: ['dist/img/icons/*']
  },
  pwa: {
    manifest: 'manifest.webmanifest',
    version: `v${version.replace(/\./g, '')}-0`
  }
  // logs: {
  //   level: 2
  // }
};
