(function(window) {
  var getUrl = function(type) {
    return 'https://github.com/balmjs/balm-' + type;
  };

  var demo = {
    'Boilerplate': {
      url: getUrl('boilerplate')
    },
    'HTML': {
      url: getUrl('html')
    },
    'Laravel': {
      url: getUrl('laravel')
    },
    'Vue.js': {
      url: getUrl('vue')
    },
    'TypeScript': {
      url: getUrl('ts')
    }
  };

  window.showDemo = function() {
    for (var key in demo) {
      var value = demo[key].url;
      console.log(key + ': ' + value);
    }
  };
})(window);

console.info('Welcome to BalmJS, please select your project demo;)');

showDemo();
