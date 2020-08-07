const t = require('./lang');

const sidebarData = [
  {
    title: 'intro',
    path: '/'
  },
  {
    title: 'guide', // required
    path: '/guide/', // optional, which should be a absolute path.
    collapsable: false, // optional, defaults to true
    sidebarDepth: 2, // optional, defaults to 1
    children: [
      '/guide/installation',
      '/guide/getting-started',
      '/guide/structure',
      {
        title: 'upgrade',
        path: '/guide/upgrade/',
        children: [
          '/guide/upgrade/upgrade-3.0',
          '/guide/upgrade/upgrade-2.0',
          '/guide/upgrade/upgrade-1.0',
          '/guide/upgrade/upgrade-0.24'
        ]
      }
    ]
  },
  {
    title: 'config',
    path: '/config/',
    collapsable: false,
    children: [
      '/config/environment',
      '/config/paths',
      '/config/html',
      '/config/styles',
      '/config/scripts',
      '/config/scripts-esbuild',
      '/config/scripts-webpack',
      '/config/images',
      '/config/extras',
      '/config/assets',
      '/config/server',
      '/config/ftp',
      '/config/pwa',
      '/config/logs'
    ]
  },
  {
    title: 'api',
    path: '/api/',
    collapsable: false,
    children: [
      '/api/environment',
      '/api/template',
      '/api/styles',
      '/api/scripts',
      '/api/files',
      '/api/cache',
      '/api/server',
      '/api/deployment',
      '/api/others'
    ]
  },
  {
    title: 'advanced',
    path: '/advanced/',
    collapsable: false,
    children: [
      '/advanced/spa',
      '/advanced/mpa',
      '/advanced/code-splitting',
      '/advanced/compatibility'
    ]
  }
];

function getChildren(data, lang) {
  let item = Object.assign({}, data);

  if (item.title) {
    item.title = t(item.title, lang);

    if (item.path && lang !== 'en') {
      item.path = `/${lang}${item.path}`;
    }

    if (item.children && item.children.length) {
      let subItems = [];

      for (let i = 0, len = item.children.length; i < len; i++) {
        let subItem = item.children[i];
        if (typeof item.children[i] === 'object') {
          subItem = getChildren(item.children[i], lang);
        } else if (typeof item.children[i] === 'string' && lang !== 'en') {
          subItem = `/${lang}${item.children[i]}`;
        }

        subItems.push(subItem);
      }

      item.children = subItems;
    }
  }

  return item;
}

function getSidebar(lang = 'en') {
  return sidebarData.map((data) => {
    let item = getChildren(data, lang);
    return item;
  });
}

module.exports = getSidebar;
