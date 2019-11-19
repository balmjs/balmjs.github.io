# 一些技巧

## 优化你的命令

- 编辑 `/path/to/project/package.json`：

```json
{
  // ...
  "scripts": {
    "dev": "gulp",
    "prod": "gulp --production"
  }
  // ...
}
```

- 静默模式

```json
{
  // ...
  "scripts": {
    "dev": "gulp --silent",
    "prod": "gulp --silent --production"
  }
  // ...
}
```

> `gulp --production` 别名：`gulp -p`

然后，你就可以运行下面的命令了：

- 开发模式

```sh
yarn run dev
# OR
npm run dev
```

- 生产模式

```sh
yarn run prod
# OR
npm run prod
```
