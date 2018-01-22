# Assets for remote

## `mix.zip(input, output)`

- Arguments
  - `input`: `string` `array` (Default: `${balm.config.target.base}/**/*`)
  - `output`: `string` (Default: '.')
- Usage
  ```js
  /**
   * Default usage
   *
   * Input:  '/path/to/project/dist/**/*'
   * Output: '/path/to/project/archive.zip'
   */
  mix.zip();
  // With dotfile
  mix.zip(['dist/**/*', 'dist/.babelrc']);
  ```

  ```js
  /**
   * Custom usage
   *
   * Input:  '/path/to/project/dist/img/**/*'
   * Output: '/path/to/project/test/archive.zip'
   */
  mix.zip('dist/img/**/*', 'test');
  // Not recommended usage
  mix.zip(['dist/css/**/*', 'dist/js/**/*'], 'test');
  ```

## `mix.ftp(input)`

- Arguments
  - `input`: `string`
- Usage
  ```js
  var balm = require('balm');

  balm.config = {
    ftp: {
      host: '192.168.1.1',
      port: 22,
      user: 'root',
      pass: '123456',
      remotePath: '/path/to/webroot/project'
    }
  };

  balm.go(function(mix) {
    // (local)Input:   /path/to/project/dist/archive.zip
    // (remote)Output: /path/to/webroot/project/archive.zip
    mix.ftp('dist/archive.zip');
  });
  ```

## `mix.publish(input, output, renameOptions)`

- Arguments
  - `input`: `string` `array`
  - `output`: `string`
  - `renameOptions`: `object` (Default: `{}`)
- Usage
  ```js
  /**
   * Publish assets(styles,scripts,images,fonts,media)
   *
   * (local)Input: `${roots.target}/{css,js,img,font,media}`
   * '/path/to/local_project/dist/css/**/*'
   * '/path/to/local_project/dist/js/**/*'
   * '/path/to/local_project/dist/img/**/*'
   * '/path/to/local_project/dist/font/**/*'
   * '/path/to/local_project/dist/media/**/*'
   * (remote)Output: `${assets.root}/${assets.publicPath}/${assets.subDir}`
   * '/path/to/remote_project/public'
   */
  mix.publish();
  ```

  ```js
  /**
   * Publish html templates
   *
   * (local)Input: `${roots.target}/old-filename.html`
   * '/path/to/local_project/dist/multi-a.html'
   * '/path/to/local_project/dist/multi-b.html'
   * (remote)Output: `${assets.root}/views/new-filename.php`
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
