# Logs

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

Show log for balm tasks.

## logs.formatOptions

`logs.formatOptions: object = {}`

Node.js - `util.inspect(object[, options])`. Reference [options](https://github.com/nodejs/node/blob/master/doc/api/util.md#utilinspectobject-options).

:chestnut: For example:

```js
module.exports = {
  logs: {
    level: 2 // The smaller, the detailed
  }
  // Other Options...
};
```
