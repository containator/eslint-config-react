module.exports = {
  rules: {
    'react/jsx-boolean-value': [
      'error',
      'never',
    ],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': [
      'error',
      'line-aligned',
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'never',
        props: 'never',
      },
    ],
    'react/jsx-curly-newline': [
      'error',
      'consistent',
    ],
    'react/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.jsx',
        ],
      },
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop',
    ],
    'react/jsx-fragments': [
      'error',
      'element',
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-newline': [
      'error',
      {
        prevent: true,
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always',
      },
    ],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'none',
      },
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: false,
      },
    ],
    'react/jsx-sort-props': 'error',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never',
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line',
      },
    ],
  },
};
