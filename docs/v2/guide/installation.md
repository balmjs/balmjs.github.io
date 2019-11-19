# Installation

## 0. Requirements

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least node `10.13.x` and npm `5.2.x`** by running `node -v` and `npm -v` in a terminal/console window. Older versions maybe produce errors, but newer versions are fine.

:bell: BalmJS workflow using [gulp](https://gulpjs.com/) for the build process, so you need install `gulp-cli` globally and `gulp` local dependency.

```sh
yarn global add gulp-cli
yarn add -D gulp
# OR
npm install -g gulp-cli
npm install -D gulp

# Verify
$ gulp -v
# Output:
# CLI version: 2.2.0
# Local version: 4.0.0
```

## 1. Installing **`balm`**

```sh
yarn add -D balm
# OR
npm install -D balm
```

> We currently recommend using [Yarn](https://yarnpkg.com/en/docs/install) instead of npm.

## 2. Configuration

In your project directory, create a file named `gulpfile.js` in your project root with these contents:

```js
// 1. import balm
const balm = require('balm');

// 2. config balm
balm.config = {
  // Your project config
};

// 3. run & enjoy
balm.go();
```

:page_with_curl: Refer to [configuration docs](../config/) to learn more about config **`balm`**.

## 3. Usage

Run the command in your project directory:

```sh
# For development
gulp

# For production
gulp --production
# OR
gulp -p
```
