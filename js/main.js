(function(window) {
  var getUrl = function(name) {
    return 'https://github.com/balmjs/demo-' + name;
  };

  var demo = {
    'Boilerplate': getUrl('boilerplate'),
    'HTML': getUrl('html'),
    'Laravel': getUrl('laravel'),
    'Vue.js': getUrl('vue'),
    'TypeScript': getUrl('ts')
  };

  window.showDemo = function() {
    for (var key in demo) {
      var value = demo[key];
      console.log(key + ': ' + value);
    }
  };
})(window);

console.info('Welcome to BalmJS, please select your project demo;)');

showDemo();
