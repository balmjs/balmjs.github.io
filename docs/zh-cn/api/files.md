# Working With Files & Directories

## `mix.copy(from, to, renameOptions)`

- 参数
  - `from`: `string` `array`
  - `to`: `string`
  - `renameOptions`: `object` (Default: `{}`)
- 用法
  ```js
  /**
   * 单文件
   *
   * 输入：'/path/to/project/app/single.html'
   * 输出：'/path/to/project/dist/single.html'
   */
  mix.copy('app/single.html', 'dist');
  // 或带后缀参数
  // 输出：'/path/to/project/dist/single.min.html'
  mix.copy('app/single.html', 'dist', {suffix: '.min'});
  ```

  ```js
  /**
   * 多文件
   *
   * 输入：
   * '/path/to/project/app/multi-a.html'
   * '/path/to/project/app/multi-b.html'
   * 输出：
   * '/path/to/project/dist/multi-a.html'
   * '/path/to/project/dist/multi-b.html'
   */
  mix.copy(['src/multi-a.html', 'src/multi-b.html'], 'dist');
  // 或
  mix.copy('app/*.html', 'dist');
  ```

  ```js
  /**
   * 单目录多文件
   *
   * 输入：
   * '/path/to/project/app/images/logo.png'
   * '/path/to/project/app/images/logo-dark.png'
   * '/path/to/project/app/images/icons/icon-a.png'
   * '/path/to/project/app/images/icons/icon-b.png'
   * 输出：
   * '/path/to/project/dist/img/logo.png'
   * '/path/to/project/dist/img/logo-dark.png'
   */
  mix.copy('app/images/*', 'dist/img');
  ```

  ```js
  /**
   * 多目录多文件
   *
   * 输入：
   * '/path/to/project/app/images/logo.png'
   * '/path/to/project/app/images/logo-dark.png'
   * '/path/to/project/app/images/icons/icon-a.png'
   * '/path/to/project/app/images/icons/icon-b.png'
   * 输出：
   * '/path/to/project/dist/img/logo.png'
   * '/path/to/project/dist/img/logo-dark.png'
   * '/path/to/project/dist/img/icons/icon-a.png'
   * '/path/to/project/dist/img/icons/icon-b.png'
   */
  mix.copy('app/images/**/*', 'dist/img');
  ```

## `mix.remove(src)`

- 参数
  - `src`: `string` `array`
- 用法
  ```js
  // 单文件
  mix.remove('dist/single.html');
  // 多文件
  mix.remove(['dist/multi-a.html', 'dist/multi-b.html']);
  mix.remove('dist/*.html');
  ```

  ```js
  // 单目录
  mix.remove('dist');
  // 多目录
  mix.remove(['dist/css', 'dist/js']);
  ```
