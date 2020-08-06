# Server

## mix.serve()

`mix.serve(handler: Function)`

Manual start server for development. Reference [watcher](https://gulpjs.com/docs/en/api/watch#chokidar-instance).

:chestnut: For example:

```js
const config = {
  useDefaults: false // Required for `mix.serve()`
  // Other Options...
};

const api = (mix) => {
  mix.serve((watcher, reload) => {
    // Watch change files
    watcher.on('change', (file) => {
      console.log('changed', file);

      const extname = file.split('.')[1];
      if (extname === 'css') {
        mix.css(file, 'dist/css');
      }
      if (extname === 'js') {
        mix.js(`./${file}`, 'dist/js');
      }

      reload(); // Refresh browser
    });
  });
};

module.exports = (balm) => {
  return {
    config,
    api
  };
};
```
