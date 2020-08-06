# Extras

## extras.includes

`extras.includes: string[] = []`

Include additional files in the app directory for building.

## extras.excludes

`extras.excludes: string[] = []`

Exclude additional files in the app directory for building.

:chestnut: For example:

```js
module.exports = {
  extras: {
    excludes: ['.extra', 'extra.txt']
  }
  // Other Options...
};
```
