const en = require('../lang/en');
const zh = require('../lang/zh');

function t(key, lang) {
  let text = 'unknown';

  if (lang === 'zh') {
    text = zh[key] || key;
  } else {
    text = en[key] || key;
  }

  return text;
}

module.exports = t;
