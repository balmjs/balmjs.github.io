import { isProd } from './config';

function showUpdatePopup(worker) {
  const updatePopup = document.createElement('div');
  updatePopup.className = 'sw-update-popup';
  updatePopup.innerHTML = `New content is available.<br><button id="refresh">Refresh</button>`;
  document.body.appendChild(updatePopup);

  document
    .getElementById('refresh')
    .addEventListener('click', () =>
      worker.postMessage({ action: 'skipWaiting' })
    );
}

function initPWA() {
  if (isProd && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('THX BalmJS - https://github.com/balmjs');

          let worker;
          reg.addEventListener('updatefound', () => {
            // A wild service worker has appeared in reg.installing!
            worker = reg.installing;

            worker.addEventListener('statechange', () => {
              // Has network.state changed?
              switch (worker.state) {
                case 'installed':
                  if (navigator.serviceWorker.controller) {
                    // new update available
                    showUpdatePopup(worker);
                  }
                  // No update available
                  break;
              }
            });
          });
        })
        .catch((error) => console.error('GG', error));

      let refreshing;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
      });
    });
  }
}

export default initPWA;
