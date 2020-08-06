# 模板

## `html.options`

`html.options: object`

HTML 压缩。[详细配置](https://github.com/kangax/html-minifier#options-quick-reference)。

默认值为：

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

:chestnut: 举个栗子：

```js
module.exports = {
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
  // 其他配置项...
};
```
