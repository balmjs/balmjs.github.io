const moment = require('moment');
const getNav = require('./config/nav');
const getSidebar = require('./config/sidebar');

module.exports = {
  base: '/docs/v2/',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'English', // this will be set as the lang attribute on <html>
      title: 'BalmJS',
      description: 'A flexible Front-End workflow for webapps'
    },
    '/zh/': {
      lang: '中文',
      title: 'BalmJS',
      description: '一个灵活的前端工作流方案'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        nav: getNav('en'),
        sidebar: getSidebar('en')
      },
      '/zh/': {
        nav: getNav('zh'),
        sidebar: getSidebar('zh')
      }
    },
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'balmjs/balm',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub'
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-138309536-1' // UA-00000000-0
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ]
  ]
};
