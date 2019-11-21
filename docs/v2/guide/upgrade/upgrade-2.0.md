# Upgrading To 2.0.0 From 1.x

**`balm.config` Full Upgrade** :tada:

> **`bold`**: new, `normal`: changed

## 1. Environment Changes

- config.<del>static</del> => config.**`inFrontend`**
- config.**`env`**
  - config.<del>isProd</del> => config.env.`isProd`
  - config.<del>isTest</del> => config.env.`isTest`
  - config.<del>isDev</del> => config.env.`isDev`
  - config.<del>inSSR</del> => config.env.`inSSR`
- config.<del>useDefault</del> => config.`useDefaults`

```js
balm.go(mix => {
  console.log(balm.config.env); // Output: { isProd, isTest, isDev, inSSR }
  console.log(mix.env); // Be equal to `balm.config.env`
});
```

## 2. Stylesheets & Sprites Changes

### 2.1 Working With Stylesheets

- config.styles.<del>ext</del> => config.styles.`extname`
- config.styles.**`minified`**
- config.styles.<del>includePaths</del> => config.styles.`atImportPaths`
- config.styles.<del>postcssOptions</del>

### 2.2 Working With Sprites

- config.<del>sprites.basePath</del> => config.`styles.imageBasePath`
- config.<del>sprites.image</del> => config.`styles.sprites`
- config.<del>sprites.padding</del>
- config.styles.**`spriteRetina`**
- config.styles.**`spriteParams`**

## 3. JavaScript Changes

- config.scripts.<del>include</del> => config.scripts.`includeJsResource`
- config.scripts.**`disableDefaultLoaders`**
- config.scripts.<del>webpack</del> => config.scripts.`webpackOptions`
- config.scripts.<del>vendors</del>
- config.scripts.<del>cssLoader</del>
- config.scripts.<del>eslint</del> => config.scripts.`lint`

## 4. Server Changes

- config.server.<del>browser</del>
- config.server.<del>logLevel</del>
- config.server.<del>reloadDelay</del>
- config.server.<del>proxyContext</del>
- config.server.<del>proxyOptions</del>
- config.server.**`extraWatchFiles`**

## 5. Assets Changes

- config.assets.**`virtualDir`**
- config.<del>cache</del> => config.`assets.cache`

## 6. Logs Changes

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
