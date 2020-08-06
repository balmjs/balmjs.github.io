# Upgrading To 3.0 From 2.x

Hello **`balm-core`** :tada:

> Born to build, better enterprise workflow with Node.js

## 1. Installing **`balm`**

```sh
yarn global add balm-core
yarn add -D balm@next
```

OR

```sh
npm install -g balm-core
npm install -D balm@next
```

## 2. Upgrade entry config file

> `/path/to/project`

- <del>gulpfile.js</del> => **`balm.config.js`**

  ```js
  module.exports = {
    // Your project config
  };
  ```

  OR

  ```js
  const getConfig = require('./config/balmrc.js');

  const api = (mix) => {
    // Your recipe config
  };

  module.exports = (balm) => {
    return {
      config: getConfig(balm), // Your project config
      api
    };
  };
  ```

- update `package.json`:

  ```json
  {
    "scripts": {
      "dev": "balm",
      "prod": "balm -p"
    }
  }
  ```

## 3. `balm.config` Changes

- config.styles.<del>minified</del> => config.styles.`minify`
- config.scripts.<del>hot</del>
- config.scripts.**`esbuild`**
- config.scripts.**`buildOptions`**
- config.scripts.**`useTransform`**
- config.scripts.**`transformOptions`**
- config.assets.<del>publicUrlPlaceholder</del>
- config.assets.<del>publicUrl</del>

> bundler:
>
> - `esbuild` (new)
> - `webpack` (old)
