const t = require('./lang');

const navData = [
  { text: 'guide', link: '/guide/' },
  { text: 'config', link: '/config/' },
  { text: 'api', link: '/api/' },
  {
    text: 'ecosystem',
    items: [
      { text: 'BalmCLI', link: 'https://github.com/balmjs/balm-cli' },
      { text: 'BalmUI', link: 'https://material.balmjs.com/' }
    ]
  }
];

function getNav(lang = 'en') {
  return navData.map((data) => {
    let item = Object.assign({}, data);
    item.text = t(item.text, lang);

    if (lang !== 'en') {
      item.link = `/${lang}${item.link}`;
    }

    return item;
  });
}

module.exports = getNav;
