const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'redux-saga', 'react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
