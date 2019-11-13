# HTML配置

### `html.options`

`object`

[HTMLMinifier options](https://github.com/kangax/html-minifier#options-quick-reference). 默认值为：

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

🌰 例如：

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
