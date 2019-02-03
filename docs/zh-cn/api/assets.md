# Assets for remote

## `mix.zip(input, output, filename)`

- 参数
  - `input`: `string` `array`（默认值：`${balm.config.target.base}/**/*`）
  - `output`: `string`（默认值：`'.'`）
  - `filename`: `string`（默认值：`'archive.zip'`）
- 用法
  ```js
  /**
   * 默认用法
   *
   * 输入：'/path/to/project/dist/**/*'
   * 输出：'/path/to/project/archive.zip'
   */
  mix.zip();
  // 包含带点的配置文件
  mix.zip(['dist/**/*', 'dist/.babelrc']);
  ```

  ```js
  /**
   * 自定义用法
   *
   * 输入：'/path/to/project/dist/img/**/*'
   * 输出：'/path/to/project/test/archive.zip'
   */
  mix.zip('dist/img/**/*', 'test');
  // 不推荐的用法
  mix.zip(['dist/css/**/*', 'dist/js/**/*'], 'test');
  ```

## `mix.ftp(localFiles, options)`

- 参数
  - `localFiles`: `string`
  - `options`: `object`
- 用法
  ```js
  const balm = require('balm');

  balm.config = {
    ftp: {
      host: '192.168.1.1',
      port: 22,
      user: 'root',
      pass: '123456',
      remotePath: '/path/to/webroot/project',
      logging: true
    }
  };

  balm.go(function(mix) {
    // (local) 输入：'/path/to/project/dist/archive.zip'
    // (remote)输出：'/path/to/webroot/project/archive.zip'
    mix.ftp('dist/archive.zip');
    // OR
    mix.ftp('dist/archive.zip', {
      // FTP options
    });
  });
  ```

## `mix.publish(input, output, renameOptions)`

- 参数
  - `input`: `string` `array`
  - `output`: `string`
  - `renameOptions`: `object`（默认值：`{}`）
- 用法
  ```js
  /**
   * Publish assets(styles,scripts,images,fonts,media)
   *
   * (local)输入： `${roots.target}/{css,js,img,font,media}`
   * '/path/to/local_project/dist/css/**/*'
   * '/path/to/local_project/dist/js/**/*'
   * '/path/to/local_project/dist/img/**/*'
   * '/path/to/local_project/dist/font/**/*'
   * '/path/to/local_project/dist/media/**/*'
   * (remote)输出： `${assets.root}/${assets.mainDir}/${assets.subDir}`
   * '/path/to/remote_project/public'
   */
  mix.publish();
  ```

  ```js
  /**
   * Publish html templates
   *
   * (local)输入： `${roots.target}/old-filename.html`
   * '/path/to/local_project/dist/multi-a.html'
   * '/path/to/local_project/dist/multi-b.html'
   * (remote)输出： `${assets.root}/views/new-filename.php`
   * '/path/to/remote_project/views/admin/new-multi-a.blade.php'
   * '/path/to/remote_project/views/user/new-multi-b.blade.php'
   */
  mix.publish('multi-a.html', 'views/admin', {
    basename: 'new-multi-a',
    suffix: '.blade',
    extname: '.php'
  });

  mix.publish('multi-b.html', 'views/user', {
    basename: 'new-multi-b',
    suffix: '.blade',
    extname: '.php'
  });
  ```
