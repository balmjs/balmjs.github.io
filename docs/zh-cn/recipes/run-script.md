# Optimize your command

Edit `/path/to/project/package.json`:

```json
...
"scripts": {
  "dev": "gulp",
  "prod": "gulp --production"
},
...
```

OR

```json
...
"scripts": {
  "dev": "gulp --silent",
  "prod": "gulp --silent --production"
},
...
```

Then, you can run the command like this:

```sh
# For development
$ npm run dev

# For production
$ npm run prod
```
