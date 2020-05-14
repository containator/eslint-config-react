module.exports = {
  extends: [
    '@containator/eslint-config-base',
    './rules/plugins/jsx-a11y',
    './rules/plugins/react',
    './rules/plugins/react-hooks',
  ].map(require.resolve),
  rules: {
    'multiline-ternary': 'off',
  },
};
