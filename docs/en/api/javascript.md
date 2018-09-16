# Working With JavaScript

## `mix.js(input, output)`

- Arguments
  - `input`: `string` `object`
  - `ouput`: `string`
- Usage

  ```js
  /**
   * Single file
   *
   * (ES6+)Input: '/path/to/project/app/scripts/single.js'
   * (ES5)Output: '/path/to/project/dist/js/main.js'
   */
  mix.js('app/scripts/single.js', 'dist/js');
  // OR
  mix.js(
    {
      main: './src/scripts/single.js'
    },
    'dist/js'
  );
  ```

  ```js
  /**
   * Multiple files
   *
   * (ES6+)Input:
   * '/path/to/project/app/scripts/multi-a.js'
   * '/path/to/project/app/scripts/multi-b.js'
   * (ES5)Output:
   * '/path/to/project/dist/js/multi-a.js'
   * '/path/to/project/dist/js/multi-b.js'
   */
  mix.js(
    {
      'multi-a': './src/scripts/multi-a.js',
      'multi-b': './src/scripts/multi-b.js'
    },
    'dist/js'
  );
  ```

## `mix.jsmin(input, output, uglifyOptions, renameOptions)`

> Updated in 0.24.2

- Arguments
  - `input`: `string` `array`
  - `ouput`: `string`
  - `uglifyOptions`: `object` (Default: `{}`)
  - `renameOptions`: `object` (Default: `{suffix: '.min'}`)
- Usage

  ```js
  /**
   * Single file
   *
   * (ES5)Input: '/path/to/project/app/scripts/single.js'
   *     Output: '/path/to/project/dist/js/single.min.js'
   */
  mix.jsmin('app/scripts/single.js', 'dist/js');
  ```

  ```js
  /**
   * Multiple files
   *
   * (ES5)Input:
   * '/path/to/project/app/scripts/multi-a.js'
   * '/path/to/project/app/scripts/multi-b.js'
   * Output:
   * '/path/to/project/dist/js/multi-a.min.js'
   * '/path/to/project/dist/js/multi-b.min.js'
   */
  mix.jsmin(['app/scripts/multi-a.js', 'app/scripts/multi-b.js'], 'dist/js');
  // OR
  mix.jsmin('app/scripts/*.js', 'dist/js');
  ```

> Most of the [minify options](https://github.com/mishoo/UglifyJS2#minify-options) from the UglifyJS API
