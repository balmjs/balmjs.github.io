# Recipes

## Optimize your command

- Edit `/path/to/project/package.json`:

```json
{
  // ...
  "scripts": {
    "dev": "gulp",
    "prod": "gulp --production"
  }
  // ...
}
```

- For silent mode

```json
{
  // ...
  "scripts": {
    "dev": "gulp --silent",
    "prod": "gulp --silent --production"
  }
  // ...
}
```

> `gulp --production` alias: `gulp -p`

Then, you can run the command like this:

- For development

```sh
yarn run dev
# OR
npm run dev
```

- For production

```sh
yarn run prod
# OR
npm run prod
```
