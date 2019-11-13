# 优化你的命令

编辑 `/path/to/project/package.json`：

```json
...
"scripts": {
  "dev": "gulp",
  "prod": "gulp --production"
},
...
```

或

```json
...
"scripts": {
  "dev": "gulp --silent",
  "prod": "gulp --silent --production"
},
...
```

然后，你就可以运行下面的命令了：

```sh
# 开发模式
$ npm run dev

# 生产模式
$ npm run prod
```
