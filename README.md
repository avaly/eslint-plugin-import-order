# @avaly/eslint-plugin-import-order

[![build status](https://travis-ci.org/avaly/eslint-plugin-import-order.svg?branch=master)](https://travis-ci.org/avaly/eslint-plugin-import-order)

**NOTE:** This is a fork of the https://github.com/benmosher/eslint-plugin-import plugin which includes only the `order` rule with Flow types support.

This was not accepted in the upstream project: https://github.com/benmosher/eslint-plugin-import/pull/732

## Rules

**Style guide:**

* Enforce a convention in module import order ([`order`])

[`order`]: ./docs/rules/order.md

## Installation

```sh
# inside your project's working tree
yarn add -D @avaly/eslint-plugin-import-order
```

## Usage

In your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['@avaly/eslint-plugin-import-order'],
  rules: {
    '@avaly/import-order/order': [ERROR],
  }
};
```
