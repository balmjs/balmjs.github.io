# Recipes

## Remote debugging

- Edit `balm.config.js`

```js
const config = {
  inFrontend: false,
  useDefaults: false,
  server: {
    https: true,
    proxy: 'https://awesome.dev', // The remote target address
    serveStatic: [
      // static: remote -> local
      {
        route: '/subdir/js',
        dir: 'subdir/js'
      }
    ]
  },
  roots: {
    source: '/path/to/appRoot' // The entry directory of the Back-end project
  }
};

const api = (mix) => {
  mix.serve();
};

module.exports = () => {
  return {
    config,
    api
  };
};
```
