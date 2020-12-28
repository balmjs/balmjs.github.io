# Configuration

`balm.config.js`: The default configuration entry file in BalmJS project root

- update `package.json` for custom configuration entry file:

```json
{
  "scripts": {
    "dev": "balm --config /path/to/config/balmrc.js",
    "prod": "balm -p --config /path/to/config/balmrc.js"
  }
}
```

- [Environment](environment.md)
- [Roots & Paths](paths.md)
- [HTML](html.md)
- [Stylesheets](styles.md)
- [JavaScript](scripts.md)
- [Application bundler - webpack](scripts-webpack.md)
- [Library bundler - rollup](scripts-rollup.md)
- [JavaScript bundler - esbuild](scripts-esbuild.md)
- [Images](images.md)
- [Extras](extras.md)
- [Assets](assets.md)
- [Server](server.md)
- [FTP](ftp.md)
- [PWA](pwa.md)
- [Logs](logs.md)
