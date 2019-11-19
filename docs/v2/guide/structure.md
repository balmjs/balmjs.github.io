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
│ │ └── main.js  // Required. A entry file for JS.
│ ├─┬ styles
│ │ └── main.css // Required. A entry file for CSS.
│ └── index.html // Required. A entry file for HTML.
├─┬ config       // Optional. But recommended. Refer to BalmCLI's templates.
│ ├── balmrc.js
│ └── publish.js
├── .dotfile     // (e.g. .gitignore, .browserslistrc, etc...)
├── babel.config.js
├── gulpfile.js  // Required. The default entry configuration file for Balm.
├── package.json // Required.
└── ...
```

> :rocket: We recommend using [Balm CLI](https://github.com/balmjs/balm-cli) to scaffold out a front-end web app. :ghost:
