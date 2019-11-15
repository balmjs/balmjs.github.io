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
    sidebarDepth: 2,
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
    title: 'api',
    path: '/api/',
    children: []
  }
];

function getChildren(data, lang) {
  let item = Object.assign({}, data);

  if (item.title) {
    item.title = t(item.title, lang);

    if (
      item.children &&
      item.children.length &&
      !item.children.every(value => typeof value === 'string')
    ) {
      let subItems = [];

      for (let i = 0, len = item.children.length; i < len; i++) {
        let subItem =
          typeof item.children[i] === 'object'
            ? getChildren(item.children[i], lang)
            : item.children[i];
        subItems.push(subItem);
      }

      item.children = subItems;
    }
  }

  return item;
}

function getSidebar(lang = 'en') {
  return sidebarData.map(data => {
    let item = getChildren(data, lang);
    return item;
  });
}

module.exports = getSidebar;
