module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
  },
};
