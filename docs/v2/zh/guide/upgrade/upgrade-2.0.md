# 从 1.x 升级到 2.0.0

**`balm.config` 全面升级** :tada:

> **`加粗`**: 新增的，`默认`: 改变的

## 1. 环境

- config.<del>static</del> => config.**`inFrontend`**
- config.**`env`**
  - config.<del>isProd</del> => config.env.`isProd`
  - config.<del>isTest</del> => config.env.`isTest`
  - config.<del>isDev</del> => config.env.`isDev`
  - config.<del>inSSR</del> => config.env.`inSSR`
- config.<del>useDefault</del> => config.`useDefaults`

```js
balm.go(mix => {
  console.log(balm.config.env); // 输出：{ isProd, isTest, isDev, inSSR }
  console.log(mix.env); // 等同于 `balm.config.env`
});
```

## 2. 样式和雪碧图

### 2.1 样式

- config.styles.<del>ext</del> => config.styles.`extname`
- config.styles.**`minified`**
- config.styles.<del>includePaths</del> => config.styles.`atImportPaths`
- config.styles.<del>postcssOptions</del>

### 2.2 雪碧图

- config.<del>sprites.basePath</del> => config.`styles.imageBasePath`
- config.<del>sprites.image</del> => config.`styles.sprites`
- config.<del>sprites.padding</del>
- config.styles.**`spriteRetina`**
- config.styles.**`spriteParams`**

## 3. 脚本

- config.scripts.<del>include</del> => config.scripts.`includeJsResource`
- config.scripts.**`disableDefaultLoaders`**
- config.scripts.<del>webpack</del> => config.scripts.`webpackOptions`
- config.scripts.<del>vendors</del>
- config.scripts.<del>cssLoader</del>
- config.scripts.<del>eslint</del> => config.scripts.`lint`

## 4. 服务

- config.server.<del>browser</del>
- config.server.<del>logLevel</del>
- config.server.<del>reloadDelay</del>
- config.server.<del>proxyContext</del>
- config.server.<del>proxyOptions</del>
- config.server.**`extraWatchFiles`**

## 5. 静态资源打包

- config.assets.**`virtualDir`**
- config.<del>cache</del> => config.`assets.cache`

## 6. 日志

- config.<del>debug</del>
- config.**`logs`**
  - .`level`
  - .`formatOptions`

```js
balm.config = {
  logs: {
    level: 3, // [0, 4] the smaller, the detailed
    formatOptions: {}
  }
};
```
