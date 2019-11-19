# 发布

## mix.publish()

```ts
interface RenameOptions {
  dirname?: string;
  prefix?: string;
  basename?: string;
  suffix?: string;
  extname?: string;
}

interface TemplateOption {
  input: string;
  output: string;
  renameOptions: string | Function | RenameOptions;
}
```

`mix.publish(input: string | TemplateOption[], output: string, renameOptions?: string | Function | RenameOptions)`

从本地发布静态资源和模板到远程。

:chestnut: 举个栗子：

- 发布静态资源 (styles, scripts, images, fonts, media)
  - 输入：`${roots.target}/{css,js,img,font,media}/**/*`
  - 输出：`${assets.root}/${assets.mainDir}/${assets.subDir}`

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  mix.publish();
});
```

- 发布模板
  - 输入：`${roots.target}/index.html`
  - 输出：`${assets.root}/views/new-filename.blade.php`

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  // 单模板
  mix.publish('index.html', 'views', {
    basename: 'new-filename',
    suffix: '.blade',
    extname: '.php'
  });

  // 多模板
  mix.publish([
    {
      input: 'index.html',
      output: 'views',
      renameOptions: {
        basename: 'new-filename',
        suffix: '.blade',
        extname: '.php'
      }
    }
    // 更多配置
  ]);
});
```

## mix.zip()

`mix.zip(input: string | string[] = '', output = '', filename = 'archive.zip')`

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  // 你的项目配置
};

balm.go(mix => {
  // 默认用法
  // 输入：'/path/to/project/dist/**/*'
  // 输出：'/path/to/project/archive.zip'
  mix.zip();

  // 附带 dotfile 的用法
  mix.zip(['dist/**/*', 'dist/.some-dotfile']);
});
```

## mix.ftp()

```ts
interface FtpConfig {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  remotePath?: string;
}

interface HookOptions {
  src?: object; // = `gulp.src`
  ftp?: FtpConfig;
}
```

`mix.ftp(localFiles: string, options?: HookOptions)`

:chestnut: 举个栗子：

```js
const balm = require('balm');

balm.config = {
  ftp: {
    options: {
      host: '192.168.1.1',
      port: 22,
      username: 'root',
      password: '',
      remotePath: '/path/to/webroot/project'
    }
  }
};

balm.go(mix => {
  //（本地）输入：'/path/to/project/dist/archive.zip'
  //（远程）输出：`${ftp.options.remotePath}/archive.zip`
  mix.ftp('dist/archive.zip');
  // OR
  mix.ftp('dist/archive.zip', {
    // FTP options: 覆盖 `balm.config.ftp.options` 配置
  });
});
```
