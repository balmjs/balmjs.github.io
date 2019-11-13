const balm = require('balm');
const balmConfig = require('./config/balmrc');

balm.config = balmConfig;

balm.go(mix => {
  // mix.copy('node_modules/prismjs/themes/prism-tomorrow.css', 'src/styles', {
  //   rename: {
  //     basename: '_prism-tomorrow'
  //   }
  // });

  mix.copy(
    'node_modules/workbox-sw/build/workbox-sw.js',
    balm.config.isProd ? balm.config.roots.target : balm.config.roots.tmp
  );

  if (balm.config.isProd) {
    mix.copy('docs/_book/**/*', 'dist/docs');

    mix.zip('example/**/*');
    mix.copy('archive.zip', 'dist', {
      rename: {
        basename: 'balm-example'
      }
    });

    mix.injectManifest();
  }
});
