const path = require('path');

module.exports = {
  extends: [
    'airbnb-base',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'packages/'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-hooks'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'consistent-return': 'off',
    'arrow-parens': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    '@typescript-eslint/no-unused-expressions': ['warn'],
    'no-plusplus': ['warn'],
    'no-lonely-if': ['warn'],
    'prefer-spread': ['warn'],
    'no-param-reassign': ['warn'],
  },
};
