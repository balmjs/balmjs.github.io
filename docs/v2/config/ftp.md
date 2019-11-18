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

FTP options.

## ftp.watchFiles

`ftp.watchFiles: string[] = []`

Automatically upload FTP when the watching files is changed in development mode.
