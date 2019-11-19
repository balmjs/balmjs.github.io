# Extras

## extras.excludes

`extras.excludes: string[] = []`

打包时需要从根目录下排除的额外文件。

:chestnut: 举个栗子：

```js
balm.config = {
  extras: {
    excludes: ['.extra', 'extra.txt']
  }
  // 其他配置项...
};
```
