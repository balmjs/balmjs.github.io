# 项目结构

> 让 Web 应用返璞归真。:100:

```
project
├── .tmp         // 开发模式：生成的一个临时目录
├── dist         // 生产模式：生成的一个打包目录
├─┬ src          // 项目源代码。（在项目中创建此文件夹）
│ ├── fonts
│ ├── images
│ ├── media
│ ├─┬ scripts
│ │ └── main.js  // 必须的。JS脚本入口文件。
│ ├─┬ styles
│ │ └── main.css // 必须的。CSS样式入口文件。
│ └── index.html // 必须的。HTML模板入口文件。
├─┬ config       // 可选的。但推荐。请参照 BalmCLI 模板。
│ ├── balmrc.js
│ └── publish.js
├── .dotfile     // (例如 .gitignore, .browserslistrc 等）
├── babel.config.js
├── gulpfile.js  // 必须的。Balm的配置文件。
├── package.json // 必须的。
└── ...
```

> :rocket: 我们推荐使用 [Balm CLI](https://github.com/balmjs/balm-cli) 脚手架工具来快速创建一个前端 Web 应用的骨架程序。 :ghost:
