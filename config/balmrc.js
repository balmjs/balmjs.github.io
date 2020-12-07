const pkg = require('../package.json');

const version = `v${pkg.version.replace(/\./g, '')}`;
const banner =
  '/*!\n' +
  ` * BalmJS v${pkg.devDependencies.balm}\n` +
  ` * (c) 2018-${new Date().getFullYear()} N.Elf-mousE\n` +
  ' * Released under the MIT License.\n' +
  ' */';

module.exports = (balm) => {
  return {
    styles: {
      extname: 'scss',
      dartSass: true
    },
    scripts: {
      bundler: 'esbuild',
      buildOptions: {
        define: {
          'process.env.NODE_ENV': balm.config.env.isProd
            ? JSON.stringify('production')
            : JSON.stringify('development')
        },
        banner
      },
      lint: true
    },
    extras: {
      includes: ['CNAME'],
      excludes: ['service-worker.js']
    },
    assets: {
      cache: true,
      excludes: ['dist/img/icons/*']
    },
    pwa: {
      manifest: 'manifest.webmanifest',
      version
    }
  };
};
