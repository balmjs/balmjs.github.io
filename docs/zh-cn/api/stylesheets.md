# 样式API

## `mix.css(input, output)`

__[PostCSS](http://postcss.org/)__ 转为 CSS

- 参数
  - `input`: `string` `array`
  - `ouput`: `string`
- 用法
  ```js
  /**
   * 单文件
   *
   * 输入：'/path/to/project/app/styles/single.css'
   * 输出：'/path/to/project/dist/css/single.css'
   */
  mix.css('app/styles/single.css', 'dist/css');
  ```

  ```js
  /**
   * 多文件
   *
   * 输入：
   * '/path/to/project/app/styles/multi-a.css'
   * '/path/to/project/app/styles/multi-b.css'
   * 输出：
   * '/path/to/project/dist/css/multi-a.css'
   * '/path/to/project/dist/css/multi-b.css'
   */
  mix.css(['app/styles/multi-a.css', 'app/styles/multi-b.css'], 'dist/css');
  // 或
  mix.css('app/styles/*.css', 'dist/css');
  ```

> 请参照 [PostCSS options](../configuration/styles.md#stylespostcssplugins)

## `mix.sass(input, output)`

__[Sass](http://sass-lang.com/)__ 转为 CSS

- 参数
  - `input`: `string` `array`
  - `ouput`: `string`
- 用法
  ```js
  /**
   * 单文件
   *
   * 输入：'/path/to/project/app/styles/single.scss'
   * 输出：'/path/to/project/dist/css/single.css'
   */
  mix.sass('app/styles/single.scss', 'dist/css');
  ```

  ```js
  /**
   * 多文件
   *
   * 输入：
   * '/path/to/project/app/styles/multi-a.scss'
   * '/path/to/project/app/styles/multi-b.scss'
   * 输出：
   * '/path/to/project/dist/css/multi-a.css'
   * '/path/to/project/dist/css/multi-b.css'
   */
  mix.sass(['app/styles/multi-a.scss', 'app/styles/multi-b.scss'], 'dist/css');
  // 或
  mix.sass('app/styles/*.scss', 'dist/css');
  ```

## `mix.less(input, output)`

__[Less](http://lesscss.org/)__ 转为 CSS

- 参数
  - `input`: `string` `array`
  - `ouput`: `string`
- 用法
  ```js
  /**
   * 单文件
   *
   * 输入：'/path/to/project/app/styles/single.less'
   * 输出：'/path/to/project/dist/css/single.css'
   */
  mix.less('app/styles/single.less', 'dist/css');
  ```

  ```js
  /**
   * 多文件
   *
   * 输入：
   * '/path/to/project/app/styles/multi-a.less'
   * '/path/to/project/app/styles/multi-b.less'
   * 输出：
   * '/path/to/project/dist/css/multi-a.css'
   * '/path/to/project/dist/css/multi-b.css'
   */
  mix.sass(['app/styles/multi-a.less', 'app/styles/multi-b.less'], 'dist/css');
  // 或
  mix.less('app/styles/*.less', 'dist/css');
  ```

## `mix.cssmin(input, output, renameOptions)`

- 参数
  - `input`: `string` `array`
  - `ouput`: `string`
  - `renameOptions`: `object`（默认值：`{suffix: '.min'}`）
- 用法
  ```js
  /**
   * 单文件
   *
   * 输入：'/path/to/project/app/styles/single.css'
   * 输出：'/path/to/project/dist/css/single.min.css'
   */
  mix.cssmin('app/styles/single.css', 'dist/css');
  ```

  ```js
  /**
   * 多文件
   *
   * 输入：
   * '/path/to/project/app/styles/multi-a.css'
   * '/path/to/project/app/styles/multi-b.css'
   * 输出：
   * '/path/to/project/dist/css/multi-a.min.css'
   * '/path/to/project/dist/css/multi-b.min.css'
   */
  mix.cssmin(['app/styles/multi-a.css', 'app/styles/multi-b.css'], 'dist/css');
  // 或
  mix.cssmin('app/styles/*.css', 'dist/css');
  ```
