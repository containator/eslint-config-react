module.exports = {
  extends: ['./rules/jsx-specific', './rules/supported'].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
        ],
      },
    },
    'propWrapperFunctions': [
      'forbidExtraProps',
      'exact',
      'Object.freeze',
    ],
    'react': {
      pragma: 'React',
      version: 'detect',
    },
  },
};
