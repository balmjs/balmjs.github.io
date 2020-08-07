module.exports = (domain, balm) => {
  return (mix) => {
    mix.copy(
      balm.config.pwa.workboxSw,
      mix.env.isProd ? balm.config.roots.target : balm.config.roots.tmp
    );

    if (mix.env.isProd) {
      // mix.copy('docs/v1/_book/**/*', 'dist/docs/v1');
      // mix.copy('docs/v2/.vuepress/dist/**/**', 'dist/docs/v2');
      // mix.copy('docs/index.html', 'dist/docs');
      mix.copy('docs/v2/.vuepress/dist/**/**', 'dist/docs');

      mix.zip('example/**/*');
      mix.copy('archive.zip', 'dist', {
        rename: {
          basename: 'balm-example'
        }
      });

      mix.injectManifest();

      // For two domains
      mix.copy(`config/CNAME_${domain}`, 'dist', {
        rename: {
          basename: 'CNAME'
        }
      });
    }
  };
};
