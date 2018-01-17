# Working With Stylesheets

## `mix.css(input, output)`

__[PostCSS](http://postcss.org/)__ to CSS

- Arguments
  - `input`: `string`
  - `ouput`: `string`
- Usage
  ```js
  /**
   * Single File
   *
   * Input:  '/path/to/project/app/styles/single.css'
   * Output: '/path/to/project/dist/css/single.css'
   */
  mix.css('app/styles/single.css', 'dist/css');
  ```

  ```js
  /**
   * Multiple Files
   *
   * Input:
   * '/path/to/project/app/styles/multi-a.css'
   * '/path/to/project/app/styles/multi-b.css'
   * Output:
   * '/path/to/project/dist/css/multi-a.css'
   * '/path/to/project/dist/css/multi-b.css'
   */
  mix.css(['app/styles/multi-a.css', 'app/styles/multi-b.css'], 'dist/css');
  // OR
  mix.css('app/styles/*.css', 'dist/css');
  ```

> Refer to [PostCSS options](../configuration/styles.md#stylespostcssplugins)

## `mix.sass(input, output)`

__[Sass](http://sass-lang.com/)__ to CSS

- Arguments
  - `input`: `string`
  - `ouput`: `string`
- Usage
  ```js
  /**
   * Single File
   *
   * Input:  '/path/to/project/app/styles/single.scss'
   * Output: '/path/to/project/dist/css/single.css'
   */
  mix.sass('app/styles/single.scss', 'dist/css');
  ```

  ```js
  /**
   * Multiple Files
   *
   * Input:
   * '/path/to/project/app/styles/multi-a.scss'
   * '/path/to/project/app/styles/multi-b.scss'
   * Output:
   * '/path/to/project/dist/css/multi-a.css'
   * '/path/to/project/dist/css/multi-b.css'
   */
  mix.sass(['app/styles/multi-a.scss', 'app/styles/multi-b.scss'], 'dist/css');
  // OR
  mix.sass('app/styles/*.scss', 'dist/css');
  ```

## `mix.less(input, output)`

__[Less](http://lesscss.org/)__ to CSS

- Arguments
  - `input`: `string`
  - `ouput`: `string`
- Usage
  ```js
  /**
   * Single File
   *
   * Input:  '/path/to/project/app/styles/single.less'
   * Output: '/path/to/project/dist/css/single.css'
   */
  mix.less('app/styles/single.less', 'dist/css');
  ```

  ```js
  /**
   * Multiple Files
   *
   * Input:
   * '/path/to/project/app/styles/multi-a.less'
   * '/path/to/project/app/styles/multi-b.less'
   * Output:
   * '/path/to/project/dist/css/multi-a.css'
   * '/path/to/project/dist/css/multi-b.css'
   */
  mix.sass(['app/styles/multi-a.less', 'app/styles/multi-b.less'], 'dist/css');
  // OR
  mix.less('app/styles/*.less', 'dist/css');
  ```

## `mix.cssmin(input, output, renameOptions)`

- Arguments
  - `input`: `string`
  - `ouput`: `string`
  - `renameOptions`: `object` (Default: `{suffix: '.min'}`)
- Usage
  ```js
  /**
   * Single File
   *
   * Input:  '/path/to/project/app/styles/single.css'
   * Output: '/path/to/project/dist/css/single.min.css'
   */
  mix.cssmin('app/styles/single.css', 'dist/css');
  ```

  ```js
  /**
   * Multiple Files
   *
   * Input:
   * '/path/to/project/app/styles/multi-a.css'
   * '/path/to/project/app/styles/multi-b.css'
   * Output:
   * '/path/to/project/dist/css/multi-a.min.css'
   * '/path/to/project/dist/css/multi-b.min.css'
   */
  mix.cssmin(['app/styles/multi-a.css', 'app/styles/multi-b.css'], 'dist/css');
  // OR
  mix.cssmin('app/styles/*.css', 'dist/css');
  ```
