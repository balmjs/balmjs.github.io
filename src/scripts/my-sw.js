if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => console.log('THX BalmJS - https://github.com/balmjs'))
      .catch((error) => console.error('GG', error));
  });
}
