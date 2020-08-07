# 服务

## mix.serve()

`mix.serve(handler: Function)`

开发模式下手动启动服务。监听服务请参照 [这里](https://gulpjs.com/docs/en/api/watch#chokidar-instance)。

:chestnut: 举个栗子：

```js
const config = {
  useDefaults: false // 必须为 `mix.serve()` 设置
  // 其他配置项...
};

const api = (mix) => {
  mix.serve((watcher, reload) => {
    // 监听变化的文件
    watcher.on('change', (file) => {
      console.log('changed', file);

      const extname = file.split('.')[1];
      if (extname === 'css') {
        mix.css(file, 'dist/css');
      }
      if (extname === 'js') {
        mix.js(`./${file}`, 'dist/js');
      }

      reload(); // 刷新浏览器
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
