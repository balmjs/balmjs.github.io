# 兼容IE8 (ES3)

首先，在你的项目目录下运行命令安装依赖：

```sh
$ npm i -D babel-preset-es2015-loose
$ npm i -D babel-plugin-transform-es3-member-expression-literals
$ npm i -D babel-plugin-transform-es3-property-literals
```

然后，编辑 `/path/to/project/.babelrc`：

```json
{
  "presets": ["es2015-loose"],
  "plugins": [
    "transform-es3-member-expression-literals",
    "transform-es3-property-literals"
  ]
}
```
