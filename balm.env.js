process.env.BALM_GIT_FLOW_MAIN = 'dev';
process.env.BALM_GIT_FLOW_RELEASE = 'js-org';
process.env.BALM_GIT_FLOW_RELEASES = ['main', 'js-org'];
process.env.BALM_GIT_FLOW_SCRIPTS = ['release:com', 'release:org'];
process.env.BALM_GIT_FLOW_BUILD_DIR = 'dist';
process.env.BALM_GIT_FLOW_REPOSITORIES = [
  '',
  'git@github.com:balmjs/balm.js.org.git'
];
process.env.BALM_GIT_FLOW_SITE = 'gh-pages';

const useYarn = false;

function setBalmCore(useSource = false) {
  const BALM_ROOT = '/Users/elf-mouse/www/balmjs/balm';
  const BALM_CORE_SOURCE = `${BALM_ROOT}/packages/balm-core`;
  const BALM_CORE = useYarn
    ? '/Users/elf-mouse/.config/yarn/global/node_modules/balm-core'
    : '/usr/local/.npm-global/lib/node_modules/balm-core';

  process.env.BALM_CORE = useSource ? BALM_CORE_SOURCE : BALM_CORE;
}

setBalmCore(true);
