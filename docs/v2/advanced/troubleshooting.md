# Troubleshooting

## fix(webpack@5)

### TypeError: The 'compilation' argument must be an instance of Compilation

In your project directory, create a file named `babel.env.js` in your project root with these contents:

```js
process.env.USE_LOCAL_WEBPACK = true;
```
