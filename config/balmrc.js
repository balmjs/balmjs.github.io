const pkg = require('../package.json');

module.exports = {
  styles: {
    extname: 'scss',
    dartSass: true
  },
  scripts: {
    bundler: 'esbuild',
    lint: true
  },
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
    version: `v${pkg.version.replace(/\./g, '')}`
  }
};
