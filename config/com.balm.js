const getConfig = require('./balmrc');
const getApi = require('./balm.api');

module.exports = (balm) => {
  return {
    config: Object.assign(getConfig(balm), {
      paths: {
        source: {
          html: 'templates/com'
        }
      },
      html: {
        analytics: {
          google: 'G-YL2E2LRLN0',
          custom: {
            src: 'https://insights.balmjs.com/script.js',
            siteId: 'a3c742ca-a24c-4893-945a-49684c6c2374'
          }
        }
      }
    }),
    api: getApi('com', balm)
  };
};
