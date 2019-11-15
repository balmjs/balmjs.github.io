# Javascript

## scripts.entry

```ts
interface BalmEntryObject {
  [entryChunkName: string]: string | string[];
}
```

`scripts.entry: string | string[] | BalmEntryObject = ''`

The entry point for the bundle.

When `scripts.entry` is `BalmEntryObject`:

1. `{ [key: string]: value: string }`: Bundle one entry point per HTML page.
2. `{ [key: string]: value: string[] }`: Creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points.

🌰 For example:

```js
balm.config = {
  scripts: {
    entry: {
      lib: ['vue', 'vue-router'],
      ui: ['balm-ui'],
      app: './app/scripts/main-page.js',
      subapp: './app/scripts/sub-page.js'
    }
  }
};
```

Then, your HTML templates:

```html
<!-- Page One -->
<script src="%PUBLIC_URL%/scripts/vendors/lib.js"></script>
<script src="%PUBLIC_URL%/scripts/vendors/ui.js"></script>
<script src="%PUBLIC_URL%/scripts/app.js"></script>
```

```html
<!-- Page Two -->
<script src="%PUBLIC_URL%/scripts/vendors/lib.js"></script>
<script src="%PUBLIC_URL%/scripts/vendors/ui.js"></script>
<script src="%PUBLIC_URL%/scripts/subapp.js"></script>
```

## scripts.library

## scripts.libraryTarget

## scripts.loaders

## scripts.includeJsResource

## scripts.disableDefaultLoaders

## scripts.extensions

## scripts.alias

## scripts.plugins

## scripts.hot

## scripts.sourceMap

## scripts.target

## scripts.externals

## scripts.stats

## scripts.webpackOptions

## scripts.eslint

## scripts.options

## scripts.inject

## scripts.optimization

## scripts.splitAllVendors

## scripts.vendorsName

## scripts.extractCss

## scripts.base64Limit
