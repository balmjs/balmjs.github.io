# Versioning / Cache Busting

## `mix.version(input, output, excludes)`

The `mix.version` method will automatically append a unique hash to the filenames of all compiled files, allowing for more convenient cache busting.

- Arguments
  - `input`: `string` `array`
  - `output`: `string`
  - `excludes`: `array`
- Usage
  ```js
  // Without excludes
  mix.version('app/**/*', 'dist');
  ```

  ```js
  // With excludes (Note: 'input' and 'output' belong to the same directory)
  mix.version('dist/**/*', 'dist', ['dist/manifest.json']);
  ```
