if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('THX BalmJS - https://balmjs.com'); // SW registered
      })
      .catch((registrationError) => {
        console.log('GG!', registrationError); // SW registration failed
      });
  });
}
