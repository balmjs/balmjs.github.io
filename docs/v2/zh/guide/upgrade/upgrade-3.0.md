# 从 2.x 升级到 3.0

Hello **`balm-core`** :tada:

> 为企业级前端工作流而生

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

> 打包工具：
>
> - `esbuild` (new)
> - `webpack` (old)
