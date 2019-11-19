# 日志

## logs.level

`logs.level: number = 3`

```ts
enum LogLevel {
  Trace = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4
}
```

Balm 任务日志级别。

## logs.formatOptions

`logs.formatOptions: object = {}`

Node.js - `util.inspect(object[, options])`. [详细配置](https://github.com/nodejs/node/blob/master/doc/api/util.md#utilinspectobject-options)。

:chestnut: 举个栗子：

```js
balm.config = {
  logs: {
    level: 2 // 设置级别越小，日志越详细
  }
  // 其他配置项...
};
```
