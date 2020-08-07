# 从 2.x 升级到 3.0

Hello **`balm-core`** :tada:

> 为企业级前端工作流而生

## 1. 安装 **`balm`**

```sh
yarn global add balm-core
yarn add -D balm@next
```

或

```sh
npm install -g balm-core
npm install -D balm@next
```

## 2. 升级入口配置文件

> `/path/to/project`

- <del>gulpfile.js</del> => **`balm.config.js`**

  ```js
  module.exports = {
    // 你的项目配置
  };
  ```

  或

  ```js
  const getConfig = require('./config/balmrc.js'); // 你的项目配置

  const api = (mix) => {
    // 使用API自定义任务
  };

  module.exports = (balm) => {
    return {
      config: getConfig(balm),
      api
    };
  };
  ```

- 更新 `package.json`:

  ```json
  {
    "scripts": {
      "dev": "balm",
      "prod": "balm -p"
    }
  }
  ```

## 3. `balm.config` 变化

- config.paths.source.**`html`**
- config.styles.<del>minified</del> => config.styles.`minify`
- config.scripts.<del>hot</del>
- config.scripts.**`esbuild`**
- config.scripts.**`buildOptions`**
- config.scripts.**`useTransform`**
- config.scripts.**`transformOptions`**
- config.assets.<del>publicUrlPlaceholder</del>
- config.assets.<del>publicUrl</del>

> 打包工具：
>
> - `esbuild` (new)
> - `webpack` (old)
