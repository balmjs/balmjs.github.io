# FTP

## ftp.options

```ts
interface FtpConfig {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  remotePath?: string;
}
```

`ftp.options: FtpConfig = {}`

FTP 配置项。

## ftp.watchFiles

`ftp.watchFiles: string[] = []`

开发模式下当被监听的文件发生改动时则将自动上传 FTP。
