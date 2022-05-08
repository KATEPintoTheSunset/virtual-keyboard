module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-param-reassign": 0,
    indent: 0,
    "no-fallthrough": 0,
    "no-unused-expressions": [2, { allowTernary: true }]
  },
};
