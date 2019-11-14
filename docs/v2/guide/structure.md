# Directory Structure

> Returning to webapp's original nature.

```
project
├── .tmp         // Scaffolds out a temporary directory for development
├── dist         // Scaffolds out the production build
├─┬ src          // Source code in here (Create a directory in project)
│ ├─┬ styles
│ │ └── main.css // Required. A entry file for CSS.
│ ├─┬ scripts
│ │ └── main.js  // Required. A entry file for JS.
│ ├── images
│ ├── fonts
│ ├── media
│ └── index.html // Required. A entry file for HTML.
├─┬ config       // Optional. But recommended. Refer to BalmCLI's templates.
│ ├── balmrc.js
│ └── publish.js
├── .dotfile     // (e.g. .gitignore, .browserslistrc)
├── gulpfile.js  // Required. A configuration file for Balm.
├── package.json // Required.
└── ...
```

> We recommend using [Balm CLI](https://github.com/balmjs/balm-cli) to scaffold out a front-end web app.
