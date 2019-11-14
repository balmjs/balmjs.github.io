const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..')
      }
    }
  },
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
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Configuration', link: '/config/' },
          { text: 'API Reference', link: '/api/' }
        ],
        sidebar: [
          {
            title: 'Introduction',
            path: '/'
          },
          {
            title: 'Guide', // required
            path: '/guide/', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
              '/guide/installation',
              '/guide/getting-started',
              '/guide/structure',
              {
                title: 'Upgrade Guide',
                path: '/guide/upgrade/',
                children: [
                  '/guide/upgrade/upgrade-2.0',
                  '/guide/upgrade/upgrade-1.0',
                  '/guide/upgrade/upgrade-0.24'
                ]
              }
            ]
          },
          {
            title: 'Configuration',
            path: '/config/',
            children: [
              '/config/environment',
              '/config/paths',
              '/config/html',
              '/config/styles',
              '/config/scripts',
              '/config/extras',
              '/config/assets',
              '/config/server',
              '/config/logs'
            ]
          },
          {
            title: 'API Reference',
            path: '/api/',
            children: []
          }
        ]
      },
      '/zh/': {
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '配置', link: '/config/' },
          { text: 'API', link: '/api/' },
          { text: 'FAQ', link: '/faq/' }
        ]
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
        ga: '' // UA-00000000-0
      }
    ]
    // '@vuepress/last-updated'
  ]
};
