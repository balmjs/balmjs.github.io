const balm = require('balm');
const balmConfig = require('./config/balmrc');

balm.config = balmConfig;

balm.go((mix) => {
  mix.copy(
    'node_modules/workbox-sw/build/workbox-sw.js',
    mix.env.isProd ? balm.config.roots.target : balm.config.roots.tmp
  );

  if (mix.env.isProd) {
    mix.copy('docs/v1/_book/**/*', 'dist/docs/v1');
    mix.copy('docs/v2/.vuepress/dist/**/**', 'dist/docs/v2');
    mix.copy('docs/index.html', 'dist/docs');

    mix.zip('example/**/*');
    mix.copy('archive.zip', 'dist', {
      rename: {
        basename: 'balm-example'
      }
    });

    mix.injectManifest();
  }
});
