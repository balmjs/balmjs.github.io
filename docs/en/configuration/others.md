# Others

### `useDefault`

`boolean`

Use balm default tasks. Defaults to `true`.

🌰 For example:

```js
var balm = require('balm');

balm.config = {
  useDefault: false, // Don't start balm default tasks
  ...                // Your project config
};

balm.go(function(mix) {
  // Use custom task API
});
```

> Refer to [Custom Task API](../api/toc.md)
