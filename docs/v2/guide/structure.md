# Directory Structure

> Returning to webapp's original nature. :100:

```
project
├── .tmp         // Scaffolds out a temporary directory for development
├── dist         // Scaffolds out the production build
├─┬ src          // Source code in here (Create a directory in project)
│ ├── fonts
│ ├── images
│ ├── media
│ ├─┬ scripts
│ │ └── index.js // Required. A entry file for JS.
│ ├─┬ styles
│ │ └── main.css // Required. A entry file for CSS.
│ └── index.html // Required. A entry file for HTML.
├── .dotfile     // (e.g. .gitignore, .browserslistrc, etc...)
├── babel.config.js
├── balm.config.js  // Required. The default configuration file for Balm.
├── package.json    // Required.
└── ...
```

> :rocket: We recommend using [Balm CLI](https://github.com/balmjs/balm-cli) to scaffold out a front-end web app.

`balm.config.js`: The default configuration entry file in BalmJS project root

- update `package.json` for custom configuration entry file:

```json
{
  "scripts": {
    "dev": "balm --config /path/to/config/balmrc.js",
    "prod": "balm -p --config /path/to/config/balmrc.js"
  }
}
```
