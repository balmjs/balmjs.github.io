const getConfig = require('./balmrc');
const getApi = require('./balm.api');

module.exports = (balm) => {
  return {
    config: Object.assign(getConfig(balm), {
      paths: {
        source: {
          html: 'templates/org'
        }
      },
      html: {
        analytics: {
          google: 'G-ZSY058Q10D',
          custom: {
            src: 'https://analytics.balmjs.com/api/script.js',
            siteId: '0931d043-e593-44db-8de4-d754f4aeb3b5'
          }
        }
      }
    }),
    api: getApi('org', balm)
  };
};
