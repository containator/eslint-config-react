module.exports = {
  extends: ['./rules/supported-rules'].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y'],
};
