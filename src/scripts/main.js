(function(window) {
  let getUrl = name => {
    return `https://github.com/balmjs/demo-${name}`;
  };

  let demo = {
    'Boilerplate': getUrl('boilerplate'),
    'HTML': getUrl('html'),
    'Laravel': getUrl('laravel'),
    'Vue.js': getUrl('vue'),
    'TypeScript': getUrl('ts')
  };

  window.showDemo = () => {
    for (let key in demo) {
      let value = demo[key];
      console.log(`${key}: ${value}`);
    }
  };

  let eventHandler = e => {
    let el = e.target;
    if (!el.classList.contains('active')) {
      let type = el.dataset.type.toLowerCase();
      el.parentNode.querySelector('li.active').classList.remove('active');
      el.classList.add('active');
      el.parentNode.parentNode.querySelector('pre.active').classList.remove('active');
      document.getElementById(`${type}-code`).classList.add('active');
    }
  };

  let tabs = document.querySelectorAll('.tabs');
  tabs.forEach(tab => {
    tab.addEventListener('click', eventHandler);
  });

})(window);

console.info('Welcome to BalmJS, please select your project demo;)');

showDemo();
