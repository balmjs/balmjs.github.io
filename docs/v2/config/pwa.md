# PWA

## pwa.enabled

`pwa.enabled: boolean = false`

Enable PWA for building.

## pwa.manifest

`pwa.manifest: string = 'manifest.json'`

Web App Manifest: `manifest.json` or `manifest.webmanifest`.

## pwa.workboxSw

`pwa.workboxSw: string = 'node_modules/workbox-sw/build/workbox-sw.js'`

Set `workbox-sw.js` source.

## pwa.mode

`pwa.mode: string = 'generateSW'`

Cache assets and take full advantage of features used to build [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/).

[**Two Primary Mode**](https://developers.google.com/web/tools/workbox/modules/workbox-build#which_mode_to_use)

- `generateSW`: The generateSW mode creates a service worker file for you, and writes it out to disk.
- `injectManifest`: The injectManifest mode will generate a list of URLs to precache, and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.

## pwa.options

`pwa.options: object = {}`

The config of the building PWA.

- `generateSW` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config).
- `injectManifest` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_injectmanifest_config).

## pwa.swSrcFilename

`pwa.swSrcFilename: string = 'service-worker.js'`

## pwa.swDestFilename

`pwa.swDestFilename: string = 'sw.js'`
