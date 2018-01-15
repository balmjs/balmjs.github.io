# BalmJS
> 一个灵活的Web应用程序前端工作流程

## 什么是 BalmJS ？

BalmJS 规定了最佳实践和工具，以帮助您保持高效。

## 项目结构
> 让 webapp 返璞归真

```
project
├── .tmp         // 开发模式：生成的一个临时目录
├── dist         // 生产模式：生成的一个打包目录
├─┬ src          // 项目源代码。（在项目中创建此文件夹）
│ ├─┬ styles
│ │ └── main.css // 必须的。CSS样式入口文件。
│ ├─┬ scripts
│ │ └── main.js  // 必须的。JS脚本入口文件。
│ ├── images
│ ├── fonts
│ ├── media
│ └── index.html // 必须的。HTML模板入口文件。
├─┬ config       // 可选的。但推荐。请参照 BalmCLI 模板。
│ ├── balmrc.js
│ └── publish.js
├── .dotfile     // (.babelrc, .gitignore, 等……)
├── gulpfile.js  // 必须的。Balm的配置文件。
├── package.json // 必须的。
└── ...
```

> 我们推荐使用 [Balm CLI](https://github.com/balmjs/balm-cli) 来构建一个前端Web应用的脚手架程序。
