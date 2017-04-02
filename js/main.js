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

  var eventHandler = function(e) {
    var el = e.target;
    if (!el.classList.contains('active')) {
      var type = el.dataset.type.toLowerCase();
      el.parentNode.querySelector('li.active').classList.remove('active');
      el.classList.add('active');
      el.parentNode.parentNode.querySelector('pre.active').classList.remove('active');
      document.getElementById(type + '-code').classList.add('active');
    }
  };

  var tabs = document.querySelectorAll('.tabs');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', eventHandler);
  });

})(window);

console.info('Welcome to BalmJS, please select your project demo;)');

showDemo();
