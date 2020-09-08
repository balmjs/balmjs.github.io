# 配置

`balm.config.js`: BalmJS 项目根目录默认配置入口文件

- 更新 `package.json` 可以自定义配置入口文件：

```json
{
  "scripts": {
    "dev": "balm --config /path/to/config/balmrc.js",
    "prod": "balm -p --config /path/to/config/balmrc.js"
  }
}
```

- [环境](environment.md)
- [目录和路径](paths.md)
- [模板](html.md)
- [样式](styles.md)
- [脚本](scripts.md)
- [脚本打包 - esbuild](scripts-esbuild.md)
- [脚本打包 - webpack](scripts-webpack.md)
- [图片](images.md)
- [额外文件](extras.md)
- [静态资源打包](assets.md)
- [开发服务器](server.md)
- [FTP](ftp.md)
- [PWA](pwa.md)
- [日志](logs.md)
