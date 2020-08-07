const config = require('./balmrc');
const getApi = require('./balm.api');

module.exports = (balm) => {
  return {
    config: Object.assign(config, {
      paths: {
        source: {
          html: 'templates/com'
        }
      }
    }),
    api: getApi('com', balm)
  };
};
