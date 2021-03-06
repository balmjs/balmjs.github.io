// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended']
};
