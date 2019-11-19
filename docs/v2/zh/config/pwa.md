# PWA

## pwa.enabled

`pwa.enabled: boolean = false`

打包时启用 PWA。

## pwa.manifest

`pwa.manifest: string = 'manifest.json'`

Manifest 文件：`manifest.json` 或 `manifest.webmanifest`。

## pwa.workboxSw

`pwa.workboxSw: string = 'node_modules/workbox-sw/build/workbox-sw.js'`

设置 `workbox-sw.js` 源文件。

## pwa.mode

`pwa.mode: string = 'generateSW'`

[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) 的 [**两种主要模式**](https://developers.google.com/web/tools/workbox/modules/workbox-build#which_mode_to_use)

- `generateSW`
- `injectManifest`

## pwa.options

`pwa.options: object = {}`

The config of the building PWA.

- `generateSW` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config).
- `injectManifest` mode [options](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_injectmanifest_config).

## pwa.swSrcFilename

`pwa.swSrcFilename: string = 'service-worker.js'`

## pwa.swDestFilename

`pwa.swDestFilename: string = 'sw.js'`
