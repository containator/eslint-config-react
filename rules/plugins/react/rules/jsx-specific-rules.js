const fixableRules = {

  /**
   * Enforce boolean attributes notation in JSX (fixable)
   */
  'react/jsx-boolean-value': ['error', 'never'],

  /**
   * Validate closing bracket location in JSX (fixable)
   */
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

  /**
   * Validate closing tag location in JSX (fixable)
   */
  'react/jsx-closing-tag-location': 'error',

  /**
   * Enforce curly braces or disallow unnecessary curly braces in JSX (fixable)
   */
  'react/jsx-curly-brace-presence': ['error', {
    children: 'never',
    props: 'never',
  }],

  /**
   * Enforce consistent line breaks inside jsx curly (fixable)
   */
  'react/jsx-curly-newline': ['error', 'consistent'],


  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
   */
  'react/jsx-curly-spacing': [
    'error',
    'never',
    { allowMultiline: true },
  ],

  /**
   * Enforce or disallow spaces around equal signs in JSX attributes (fixable)
   */
  'react/jsx-equals-spacing': ['error', 'never'],

  /**
   * Enforce position of the first prop in JSX (fixable)
   */
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  /**
   * Enforce shorthand or standard form for React fragments (fixable)
   */
  'react/jsx-fragments': ['error', 'element'],

  /**
   * Validate JSX indentation (fixable)
   */
  'react/jsx-indent': ['error', 2],

  /**
   * Validate props indentation in JSX (fixable)
   */
  'react/jsx-indent-props': ['error', 2],

  /**
   * Limit maximum of props on a single line in JSX (fixable)
   */
  'react/jsx-max-props-per-line': ['error', {
    maximum: 1,
    when: 'multiline',
  }],

  /**
   * Disallow unnecessary fragments (fixable)
   */
  'react/jsx-no-useless-fragment': ['error'],

  /**
   * Limit to one expression per line in JSX (fixable)
   */
  'react/jsx-one-expression-per-line': ['error', { allow: 'none' }],

  /**
   * Disallow multiple spaces between inline JSX props (fixable)
   */
  'react/jsx-props-no-multi-spaces': 'error',

  /**
   * Enforce props alphabetical sorting (fixable)
   */
  'react/jsx-sort-props': 'off',

  /**
   * Validate spacing before closing bracket in JSX (fixable)
   */
  'react/jsx-space-before-closing': 'off',

  /**
   * Validate whitespace in and around the JSX opening and closing brackets (fixable)
   */
  'react/jsx-tag-spacing': [
    'error',
    {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
  ],

  /**
   * Prevent missing parentheses around multilines JSX (fixable)
   */
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
};
const rules = {

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   */
  'react/jsx-child-element-spacing': 'off',

  /**
   * Restrict file extensions that may contain JSX
   */
  'react/jsx-filename-extension': ['error', {
    extensions: ['.jsx'],
  }],

  /**
   * Enforce event handler naming conventions in JSX
   */
  'react/jsx-handler-names': ['error'],

  /**
   * Validate JSX has key prop when in array or iterator
   */
  'react/jsx-key': ['error'],

  /**
   * Validate JSX maximum depth
   */
  'react/jsx-max-depth': 'off',

  /**
   * Prevent usage of .bind() and arrow functions in JSX props
   */
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


  /**
   * Prevent comments from being inserted as text nodes
   */
  'react/jsx-no-comment-textnodes': 'error',

  /**
   * Prevent duplicate props in JSX
   */
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

  /**
   * Prevent usage of unwrapped JSX strings
   */
  'react/jsx-no-literals': 'off',

  /**
   * Forbid javascript: URLs
   */
  'react/jsx-no-script-url': ['error'],

  /**
   * Prevent usage of unsafe target='_blank'
   */
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

  /**
   * Disallow undeclared variables in JSX
   */
  'react/jsx-no-undef': 'error',

  /**
   * Enforce PascalCase for user-defined JSX components
   */
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],

  /**
   * Prevent JSX prop spreading
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * Enforce default props alphabetical sorting
   */
  'react/jsx-sort-default-props': [
    'error',
    { ignoreCase: false },
  ],

  /**
   * Prevent React to be incorrectly marked as unused
   */
  'react/jsx-uses-react': 'error',

  /**
   * Prevent variables used in JSX to be incorrectly marked as unused
   */
  'react/jsx-uses-vars': 'error',
};

module.exports = {
  rules: {
    ...fixableRules,
    ...rules,
  },
};
