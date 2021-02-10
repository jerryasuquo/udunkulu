module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'new-cap': 0,
    'no-underscore-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'no-shadow': 0,
    'no-restricted-globals': 0,
  },
};
