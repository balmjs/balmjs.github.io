# HTML

### `html.options`

`object`

[HTMLMinifier options](https://github.com/kangax/html-minifier#options-quick-reference). Defaults to:

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

🌰 For example:

```js
html: {
  options: {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: {
      compress: {
        drop_console: false
      }
    }
  }
}
```
