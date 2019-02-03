# Installation

### 0. Requirements

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least node `8.x.x` and npm `5.x.x`** by running `node -v` and `npm -v` in a terminal/console window. Older versions maybe produce errors, but newer versions are fine.

BalmJS workflow using [gulp](https://gulpjs.com/) for the build process, so you need install `gulp-cli`.

```sh
$ npm install --global gulp-cli

# Verify
$ gulp -v
# Output: CLI version 2.0.0
```

### 1. Installing **`balm`**

Install with npm:

```sh
$ npm install --save-dev gulp balm
```

Install with [yarn](https://yarnpkg.com/en/docs/install):

```sh
$ yarn add --dev gulp balm
```

### 2. Configuration

In your project directory, create a file named `gulpfile.js` in your project root with these contents:

```js
// 1. Import balm
const balm = require('balm');

// 2. Config balm
balm.config = {
  // Your project config
};

// 3. Run balm
balm.go();
```

Refer to [our configuration docs](../configuration/toc.md) to learn more about config **`balm`**.

### 3. Usage

Run the gulp command in your project directory:

```sh
# For development
$ gulp

# For production
$ gulp --production
```
