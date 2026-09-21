const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');
const babelParser = require('@babel/eslint-parser');
const globals = require('globals');

const cleanGlobals = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [key.trim(), val])
  );

module.exports = [
  {
    files: ['src/**/*.js', 'config/**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false
        },
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        ...cleanGlobals(globals.browser),
        ...cleanGlobals(globals.node)
      }
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error'
    }
  }
];
