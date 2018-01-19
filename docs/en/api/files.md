# Working With Files & Directories

## `mix.copy(from, to, renameOptions)`

- Arguments
  - `from`: `string` `array`
  - `to`: `string`
  - `renameOptions`: `object` (Default: `{}`)
- Usage
  ```js
  /**
   * Single file
   *
   * Input:  '/path/to/project/app/single.html'
   * Output: '/path/to/project/dist/single.html'
   */
  mix.copy('app/single.html', 'dist');
  // OR with suffix
  // Output: '/path/to/project/dist/single.min.html'
  mix.copy('app/single.html', 'dist', {suffix: '.min'});
  ```

  ```js
  /**
   * Multiple files
   *
   * Input:
   * '/path/to/project/app/multi-a.html'
   * '/path/to/project/app/multi-b.html'
   * Output:
   * '/path/to/project/dist/multi-a.html'
   * '/path/to/project/dist/multi-b.html'
   */
  mix.copy(['src/multi-a.html', 'src/multi-b.html'], 'dist');
  // OR
  mix.copy('app/*.html', 'dist');
  ```

  ```js
  /**
   * Multiple files with a directory
   *
   * Input:
   * '/path/to/project/app/images/logo.png'
   * '/path/to/project/app/images/logo-dark.png'
   * '/path/to/project/app/images/icons/icon-a.png'
   * '/path/to/project/app/images/icons/icon-b.png'
   * Output:
   * '/path/to/project/dist/img/logo.png'
   * '/path/to/project/dist/img/logo-dark.png'
   */
  mix.copy('app/images/*', 'dist/img');
  ```

  ```js
  /**
   * Multiple files with directories
   *
   * Input:
   * '/path/to/project/app/images/logo.png'
   * '/path/to/project/app/images/logo-dark.png'
   * '/path/to/project/app/images/icons/icon-a.png'
   * '/path/to/project/app/images/icons/icon-b.png'
   * Output:
   * '/path/to/project/dist/img/logo.png'
   * '/path/to/project/dist/img/logo-dark.png'
   * '/path/to/project/dist/img/icons/icon-a.png'
   * '/path/to/project/dist/img/icons/icon-b.png'
   */
  mix.copy('app/images/**/*', 'dist/img');
  ```

## `remove(src)`

- Arguments
  - `src`: `string` `array`
- Usage
  ```js
  // Single file
  mix.remove('dist/single.html');
  // Multiple files
  mix.remove(['dist/multi-a.html', 'dist/multi-b.html']);
  mix.remove('dist/*.html');
  ```

  ```js
  // Single directory
  mix.remove('dist');
  // Multiple directories
  mix.remove(['dist/css', 'dist/js']);
  ```
