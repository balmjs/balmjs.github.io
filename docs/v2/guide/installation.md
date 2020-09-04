# Installation

## 0. Requirements

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least node `12.0.0` and npm `5.2.0`** by running `node -v` and `npm -v` in a terminal/console window. Older versions maybe produce errors, but newer versions are fine.

You develop apps in the context of an [Balm workspace](./structure.md).

To create a new workspace and initial starter app:

```sh
# /path/to/YOUR_WORKSPACE
mkdir -p my-project/src/{styles,scripts}
echo "Hello World" > my-project/src/index.html

cd my-project
npm init -y
```

## 1. Installing `balm`

```sh
yarn global add balm-core
yarn add -D balm
```

OR

```sh
npm install -g balm-core
npm install -D balm
```

> We currently recommend using [Yarn](https://yarnpkg.com/en/docs/install) instead of npm.

## 2. Configuration

In your project directory, create a file named `balm.config.js` in your project root with these contents:

```js
module.exports = {
  // Your project config
};
```

:page_with_curl: Refer to [configuration docs](../config/) to learn more about config **`balm`**.

## 3. Usage

Edit `package.json`:

```json
{
  "scripts": {
    "dev": "balm",
    "prod": "balm -p"
  }
}
```

Run the command in your project directory:

```sh
# For development
npm run dev

# For production
npm run prod
```
