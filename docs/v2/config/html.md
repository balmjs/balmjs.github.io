# HTML

## `html.options`

`html.options: object`

HTML compressor/minifier. Reference [options](https://github.com/kangax/html-minifier#options-quick-reference).

Defaults to:

```js
{
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: {
    compress: {
      drop_console: true
    }
  },
  processConditionalComments: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true
}
```

:chestnut: For example:

```js
balm.config = {
  html: {
    options: {
      collapseWhitespace: false,
      minifyCSS: true,
      minifyJS: {
        compress: {
          drop_console: false
        }
      }
    }
  }
  // Other Options...
};
```
