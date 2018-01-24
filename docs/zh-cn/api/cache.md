# Versioning / Cache Busting

## `mix.version(input, output, excludes)`

`mix.version` 方法会自动附加一个唯一的哈希到所有编译文件的文件名，允许更方便的缓存清除。

- 参数
  - `input`: `string` `array`
  - `output`: `string`
  - `excludes`: `array`
- 用法
  ```js
  // 不排除额外文件
  mix.version('app/**/*', 'dist');
  ```

  ```js
  // 排除额外文件（注：排除额外文件时需要指定参数 'input' 和 'output' 为相同的根目录）
  mix.version('dist/**/*', 'dist', ['dist/manifest.json']);
  ```
