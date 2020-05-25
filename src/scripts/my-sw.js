if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => console.log('THX BalmJS - https://balmjs.com'))
      .catch((error) => console.error('GG', error));
  });
}
