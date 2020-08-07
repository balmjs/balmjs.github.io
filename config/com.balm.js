const config = require('./balmrc');
const getApi = require('./balm.api');

module.exports = (balm) => {
  return {
    config,
    api: getApi('com', balm)
  };
};
