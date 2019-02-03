const balm = require('balm');
const gulp = require('gulp');
const workboxBuild = require('workbox-build');

const DIST_DIR = balm.config.isProd ? 'dist' : '.tmp';

gulp.task('generate-service-worker', () => {
  return workboxBuild
    .injectManifest({
      globDirectory: DIST_DIR,
      globPatterns: ['**/*.{html,css,js,ico,png,svg}'],
      swDest: `${DIST_DIR}/sw.js`,
      swSrc: `src/service-worker.js`
    })
    .then(({ warnings }) => {
      // In case there are any warnings from workbox-build, log them.
      for (let warning of warnings) {
        console.warn(warning);
      }
      console.info('Service worker generation completed.');
    })
    .catch(error => {
      console.warn('Service worker generation failed:', error);
    });
});
