const balm = require('balm');
const config = require('./config/balmrc');
// require('./config/tasks');

balm.config = config;
// if (balm.config.isProd) {
//   balm.afterTask = 'generate-service-worker';
// }

balm.go(mix => {
  // mix.copy(
  //   'node_modules/workbox-sw/build/workbox-sw.js',
  //   balm.config.isProd ? balm.config.roots.target : balm.config.roots.tmp
  // );

  if (balm.config.isProd) {
    mix.copy('docs/_book/**/*', 'dist/docs');

    mix.zip(['example/**/*', 'example/.babelrc']);
    mix.copy('balm-example.zip', 'dist');
  }
});
