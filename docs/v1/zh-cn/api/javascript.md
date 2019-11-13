# 脚本 API

## `mix.js(input, output)`

- 参数
  - `input`: `string` `object`
  - `ouput`: `string`
- 用法

  ```js
  /**
   * 单文件
   *
   * (ES6+)输入：'/path/to/project/app/scripts/single.js'
   * (ES5) 输出：'/path/to/project/dist/js/main.js'
   */
  mix.js('app/scripts/single.js', 'dist/js');
  // 或
  mix.js(
    {
      main: './src/scripts/single.js'
    },
    'dist/js'
  );
  ```

  ```js
  /**
   * 多文件
   *
   * (ES6+)输入：
   * '/path/to/project/app/scripts/multi-a.js'
   * '/path/to/project/app/scripts/multi-b.js'
   * (ES5) 输出：
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

> Updated in 0.24.0

- 参数
  - `input`: `string` `array`
  - `ouput`: `string`
  - `uglifyOptions`: `object` (默认值：`{}`)
  - `renameOptions`: `object`（默认值：`{suffix: '.min'}`）
- 用法

  ```js
  /**
   * 单文件
   *
   * (ES5)输入：'/path/to/project/app/scripts/single.js'
   *      输出：'/path/to/project/dist/js/single.min.js'
   */
  mix.jsmin('app/scripts/single.js', 'dist/js');
  ```

  ```js
  /**
   * 多文件
   *
   * (ES5)输入：
   * '/path/to/project/app/scripts/multi-a.js'
   * '/path/to/project/app/scripts/multi-b.js'
   * 输出：
   * '/path/to/project/dist/js/multi-a.min.js'
   * '/path/to/project/dist/js/multi-b.min.js'
   */
  mix.jsmin(['app/scripts/multi-a.js', 'app/scripts/multi-b.js'], 'dist/js');
  // 或
  mix.jsmin('app/scripts/*.js', 'dist/js');
  ```

> [脚本优化配置](https://github.com/mishoo/UglifyJS2#minify-options)来自于 UglifyJS API
