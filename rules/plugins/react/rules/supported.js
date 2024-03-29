module.exports = {
  rules: {
    'react/boolean-prop-naming': [
      'error',
      {
        validateNested: true,
      },
    ],
    'react/button-has-type': [
      'error',
      {
        button: true,
        reset: false,
        submit: true,
      },
    ],
    'react/default-props-match-prop-types': [
      'error',
      {
        allowRequiredDefaults: false,
      },
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
    ],
    'react/display-name': [
      'off',
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/forbid-component-props': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/forbid-dom-props': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/forbid-elements': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true,
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
        forbid: [
          'any',
          'array',
          'object',
        ],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/no-namespace': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': [
      'error',
      'always',
    ],
    'react/prefer-exact-props': 'error',
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],
    'react/prop-types': [
      'error',
      {
        customValidators: [],
        ignore: [],
        skipUndeclared: false,
      },
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],
    'react/require-optimization': [
      'off',
      {
        allowDecorators: [],
      },
    ],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: [
            '/^render.+$/',
            'render',
          ],
        },
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
      },
    ],
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': [
      'error',
      'always',
    ],
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
};
