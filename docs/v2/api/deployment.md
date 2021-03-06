# Deployment

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

Publish assets and templates from local to remote.

:chestnut: For example:

- Publish assets(styles, scripts, images, fonts, media)
  - Input: `${roots.target}/{css,js,img,font,media}/**/*`
  - Output: `${assets.root}/${assets.mainDir}/${assets.subDir}`

```js
const api = (mix) => {
  mix.publish();
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```

- Publish templates
  - Input: `${roots.target}/index.html`
  - Output: `${assets.root}/views/new-filename.blade.php`

```js
const api = (mix) => {
  // For one template
  mix.publish('index.html', 'views', {
    basename: 'new-filename',
    suffix: '.blade',
    extname: '.php'
  });

  // For multiple templates
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
    // More templates
  ]);
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
```

## mix.zip()

`mix.zip(input: string | string[] = '', output = '', filename = 'archive.zip')`

:chestnut: For example:

```js
const api = (mix) => {
  // Default usage
  // Input: '/path/to/project/dist/**/*'
  // Output: '/path/to/project/archive.zip'
  mix.zip();

  // With dotfile
  mix.zip(['dist/**/*', 'dist/.some-dotfile']);
};

module.exports = (balm) => {
  return {
    config: {},
    api
  };
};
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

:chestnut: For example:

```js
const config = {
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

const api = (mix) => {
  // (local)Input:   '/path/to/project/dist/archive.zip'
  // (remote)Output: `${ftp.options.remotePath}/archive.zip`
  mix.ftp('dist/archive.zip');
  // OR
  mix.ftp('dist/archive.zip', {
    // FTP options: overwrite `balm.config.ftp.options`
  });
};

module.exports = (balm) => {
  return {
    config,
    api
  };
};
```
