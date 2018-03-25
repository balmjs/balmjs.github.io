var balm = require('balm');
var config = require('./config/balmrc');
require('./config/tasks');

balm.config = config;
balm.afterTask = 'generate-service-worker';

balm.go(function(mix) {
  mix.copy(
    'node_modules/workbox-sw/build/workbox-sw.js',
    balm.config.production ? balm.config.roots.target : balm.config.roots.tmp
  );

  if (balm.config.production) {
    mix.copy('docs/_book/**/*', 'dist/docs');

    mix.zip(['example/**/*', 'example/.babelrc']);
    mix.copy('balm-example.zip', 'dist');
  }
});
