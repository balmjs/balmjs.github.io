import './my-sw';

(function(window) {
  const DEMO = {
    boilerplate: 'Boilerplate',
    html: 'HTML',
    laravel: 'Laravel',
    vue: 'Vue.js',
    ts: 'TypeScript'
  };
  const ACTIVE = 'active';

  window.showDemo = () => {
    for (let key in DEMO) {
      let label = DEMO[key];
      console.log(`${label}: https://github.com/balmjs/demo-${key}`);
    }
  };

  let eventHandler = e => {
    let el = e.target;
    if (!el.classList.contains(ACTIVE)) {
      let type = el.dataset.type.toLowerCase();
      el.parentNode.querySelector(`li.${ACTIVE}`).classList.remove(ACTIVE);
      el.classList.add(ACTIVE);
      el.parentNode.parentNode
        .querySelector(`pre.${ACTIVE}`)
        .classList.remove(ACTIVE);
      document.getElementById(`${type}-code`).classList.add(ACTIVE);
    }
  };

  document.querySelectorAll('.tabs').forEach(tab => {
    tab.addEventListener('click', eventHandler);
  });
})(window);

console.info('Welcome to BalmJS, please select your project demo;)');

showDemo();
