module.exports = {
  extends: ['./rules/supported'].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y'],
};
