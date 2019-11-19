const t = require('./lang');

const navData = [
  { text: 'guide', link: '/guide/' },
  { text: 'config', link: '/config/' },
  { text: 'api', link: '/api/' }
];

function getNav(lang = 'en') {
  return navData.map(data => {
    let item = Object.assign({}, data);
    item.text = t(item.text, lang);

    if (lang !== 'en') {
      item.link = `/${lang}${item.link}`;
    }

    return item;
  });
}

module.exports = getNav;
