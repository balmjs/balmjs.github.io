const getConfig = require('./balmrc');
const getApi = require('./balm.api');

module.exports = (balm) => {
  return {
    config: Object.assign(getConfig(balm), {
      paths: {
        source: {
          html: 'templates/org'
        }
      }
    }),
    api: getApi('org', balm)
  };
};
