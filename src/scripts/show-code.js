const BODY = document.documentElement || document.body;
const INSTALL_POSITION = document.getElementById('install').offsetTop;
const CONFIG_POSITION = document.getElementById('config').offsetTop;
const ACTIVE = 'active';

function showCode() {
  const eventHandler = (e) => {
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
}

export default showCode;
