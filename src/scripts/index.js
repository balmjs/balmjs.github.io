(function (window) {
  const BODY = document.documentElement || document.body;
  const INSTALL_POSITION = document.getElementById('install').offsetTop;
  const CONFIG_POSITION = document.getElementById('config').offsetTop;

  const DEMO = {
    'html5-boilerplate': 'HTML Boilerplate',
    laravel: 'Laravel',
    ts: 'TypeScript'
  };
  const ACTIVE = 'active';

  window.showDemo = () => {
    console.info(
      'Welcome to BalmJS, please select your interested project demo;)'
    );

    for (let key in DEMO) {
      let label = DEMO[key];
      console.log(`${label}: https://github.com/balmjs/demo-${key}`);
    }
  };

  let eventHandler = (e) => {
    let el = e.target;
    if (!el.classList.contains(ACTIVE)) {
      let type = el.dataset.type.toLowerCase();
      el.parentNode.querySelector(`li.${ACTIVE}`).classList.remove(ACTIVE);
      el.classList.add(ACTIVE);
      el.parentNode.parentNode
        .querySelector(`pre.${ACTIVE}`)
        .classList.remove(ACTIVE);
      document.getElementById(`${type}-code`).classList.add(ACTIVE);

      BODY.scrollTop =
        type === 'basic' || type === 'advanced'
          ? CONFIG_POSITION
          : INSTALL_POSITION;
    }
  };

  document.querySelectorAll('.tabs').forEach((tab) => {
    tab.addEventListener('click', eventHandler);
  });
})(window);

showDemo();

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => console.log('THX BalmJS - https://github.com/balmjs'))
      .catch((error) => console.error('GG', error));
  });
}
