# 常见问题

## fix(webpack@5)

### TypeError: The 'compilation' argument must be an instance of Compilation

在你的项目根目录下，新建一个名叫 `babel.env.js` 的配置文件：

```js
process.env.USE_LOCAL_WEBPACK = true;
```
