# BalmJS

> 一个通用的可用于任意 WEB 项目开发的前端工作流方案

## 什么是 BalmJS？

:tada: BalmJS 规范了前端的最佳实践和工具，以帮助开发者保持高效工作。

- 返璞归真：使 WEB 开发回归简单，自然，愉悦。
- 基于项目结构：一个配置文件搞定至少 90% 用例的 WEB 项目管理。
- 学习一次，即可运行任意 WEB 应用：任意前端技术栈全部使用一种方式来进行开发和构建。

## 功能特点

- 基于 **gulp + webpack** 构建前端项目
- 自动编译 PostCSS/Sass/Less
- CSS 自动前缀
- 自动生成雪碧图
- 使用 Babel 开启 ES2015+ 特性
- 图片优化
- 使用 BrowserSync 内置预览服务
- 自定义发布静态资源到远端（前端到后端）项目
- 支持 ZIP/FTP/PWA
- 轻松定义和扩展你自己的项目任务

## 生态系统

| 项目                                                              | 状态                                                     | 描述                                                               |
| ----------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| **[balm-core](https://github.com/balmjs/balm)**                   | [![NPM version][balm-core-image]][balm-core-url]         | BalmJS 工作流编译核心 (`balm 3+` 必需)                             |
| **[balm](https://github.com/balmjs/balm)**                        | [![NPM version][balm-image]][balm-url]                   | BalmJS 工作流运行时                                                |
| **[balm-cli](https://github.com/balmjs/balm-cli)**                | [![NPM version][balm-cli-image]][balm-cli-url]           | BalmJS 脚手架工具                                                  |
| <del>[balm-gui](https://github.com/balmjs/balm-gui)</del>         | N/A                                                      | BalmJS 可视化工具                                                  |
| <del>[balm-ui-lite](https://github.com/balmjs/balm-ui-lite)</del> | [![NPM version][balm-ui-lite-image]][balm-ui-lite-url]   | Material UI 精简版 + Vue                                           |
| **[balm-ui](https://github.com/balmjs/balm-ui)**                  | [![NPM version][balm-ui-image]][balm-ui-url]             | 为 Vue.js 量身定制的下一代 Material UI                             |
| [balm-scroll](https://github.com/balmjs/balm-scroll)              | [![NPM version][balm-scroll-image]][balm-scroll-url]     | Vue.js 平滑滚动方案                                                |
| **[balm-ui-pro](https://github.com/balmjs/balm-ui-pro)**          | [![NPM version][balm-ui-pro-image]][balm-ui-pro-url]     | More configuration definition, less code implementation for Vue.js |
| **[balm-git-flow](https://github.com/balmjs/balm-ui-pro)**        | [![NPM version][balm-git-flow-image]][balm-git-flow-url] | The best practices for front-end git flow                          |

[balm-core-image]: https://badge.fury.io/js/balm-core.svg
[balm-core-url]: https://npmjs.org/package/balm-core
[balm-image]: https://badge.fury.io/js/balm.svg
[balm-url]: https://npmjs.org/package/balm
[balm-cli-image]: https://badge.fury.io/js/balm-cli.svg
[balm-cli-url]: https://npmjs.org/package/balm-cli
[balm-ui-lite-image]: https://badge.fury.io/js/balm-ui-lite.svg
[balm-ui-lite-url]: https://npmjs.org/package/balm-ui-lite
[balm-ui-image]: https://badge.fury.io/js/balm-ui.svg
[balm-ui-url]: https://npmjs.org/package/balm-ui
[balm-scroll-image]: https://badge.fury.io/js/balm-scroll.svg
[balm-scroll-url]: https://npmjs.org/package/balm-scroll
[balm-ui-pro-image]: https://badge.fury.io/js/balm-ui-pro.svg
[balm-ui-pro-url]: https://npmjs.org/package/balm-ui-pro
[balm-git-flow-image]: https://badge.fury.io/js/balm-git-flow.svg
[balm-git-flow-url]: https://npmjs.org/package/balm-git-flow
