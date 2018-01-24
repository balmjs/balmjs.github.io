# 脚本API

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
  mix.js({
    main: './src/scripts/single.js'
  }, 'dist/js');
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
  mix.js({
    'multi-a': './src/scripts/multi-a.js',
    'multi-b': './src/scripts/multi-b.js'
  }, 'dist/js');
  ```



## `mix.jsmin(input, output, renameOptions)`

- 参数
  - `input`: `string` `array`
  - `ouput`: `string`
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
