# PWA

### `pwa.mode`

`string`

> New in 1.4.0

Cache assets and take full advantage of features used to build [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/). Defaults to: `'generateSW'`.

[**Two Primary Mode**](https://developers.google.com/web/tools/workbox/modules/workbox-build#which_mode_to_use)
  - `generateSW`: The generateSW mode creates a service worker file for you, and writes it out to disk.
  - `injectManifest`: The injectManifest mode will generate a list of URLs to precache, and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.

### `pwa.options`

`object`

> New in 1.4.0

The config of the building PWA. Defaults to: `{}`.

- [Full generateSW Config](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config)
- [Full injectManifest Config](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_injectmanifest_config)
