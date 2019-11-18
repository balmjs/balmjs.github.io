# Extras

## extras.excludes

`extras.excludes: string[] = []`

Exclude additional files in the app directory for building.

🌰 For example:

```js
balm.config = {
  extras: {
    excludes: ['.extra', 'extra.txt']
  }
};
```
