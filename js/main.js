(function(window) {
  var getUrl = function(type) {
    var name = type ? ('demo-' + type) : 'balm-boilerplate';
    return 'https://github.com/balmjs/' + name;
  };

  var demo = {
    'Boilerplate': {
      url: getUrl()
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
