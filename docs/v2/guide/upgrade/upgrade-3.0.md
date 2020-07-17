# Upgrading To 3.0 From 2.x

Hello **`balm-core`** :tada:

> Born to build, better enterprise workflow with Node.js

## 1. Installing **`balm`**

```sh
yarn global add balm-core
yarn add -D balm@next
# OR
npm install -g balm-core
npm install -D balm@next
```

## 2. `balm.config` Changes

- config.scripts.<del>hot</del>
- config.scripts.**`esbuild`**
- config.scripts.**`entryPoints`**

> bundler:
>
> - `esbuild` (new)
> - `webpack` (old)
