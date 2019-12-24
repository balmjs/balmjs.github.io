if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('gg'); // SW registered
      })
      .catch(registrationError => {
        console.log('Oh my God ', registrationError); // SW registration failed
      });
  });
}
