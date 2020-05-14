const fixableRules = {

  /**
   * Standardize the way function component get defined (fixable)
   */
  'react/function-component-definition': ['error', {
    namedComponents: 'arrow-function',
    unnamedComponents: 'arrow-function',
  }],

  /**
   * Prevent usage of unknown DOM property (fixable)
   */
  'react/no-unknown-property': 'error',

  /**
   * Require read-only props. (fixable)
   */
  'react/prefer-read-only-props': 'off',

  /**
   * Prevent extra closing tags for components without children (fixable)
   */
  'react/self-closing-comp': 'error',
};
const rules = {

  /**
   * Enforces consistent naming for boolean props
   */
  'react/boolean-prop-naming': ['error', { validateNested: true }],

  /**
   * Forbid "button" element without an explicit "type" attribute
   */
  'react/button-has-type': [
    'error',
    {
      button: true,
      reset: false,
      submit: true,
    },
  ],

  /**
   * Prevent extraneous defaultProps on components
   */
  'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

  /**
   * Rule enforces consistent usage of destructuring assignment in component
   */
  'react/destructuring-assignment': ['error', 'always'],

  /**
   * Prevent missing displayName in a React component definition
   */
  'react/display-name': ['off', { ignoreTranspilerName: false }],

  /**
   * Forbid certain props on Components
   */
  'react/forbid-component-props': ['off', {
    forbid: [],
  }],

  /**
   * Forbid certain props on DOM Nodes
   */
  'react/forbid-dom-props': ['off', {
    forbid: [],
  }],

  /**
   * Forbid certain elements
   */
  'react/forbid-elements': ['off', {
    forbid: [],
  }],

  /**
   * Forbid foreign propTypes
   */
  'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

  /**
   * Forbid certain propTypes
   */
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

  /**
   * Prevent using this.state inside this.setState
   */
  'react/no-access-state-in-setstate': 'error',

  /**
   * Prevent adjacent inline elements not separated by whitespace.
   */
  'react/no-adjacent-inline-elements': ['error'],

  /**
   * Prevent using Array index in key props
   */
  'react/no-array-index-key': 'error',

  /**
   * Prevent passing children as props
   */
  'react/no-children-prop': 'error',

  /**
   * Prevent usage of dangerous JSX properties
   */
  'react/no-danger': 'warn',

  /**
   * Prevent problem with children and props.dangerouslySetInnerHTML
   */
  'react/no-danger-with-children': 'error',

  /**
   * Prevent usage of deprecated methods, including component lifecyle methods
   */
  'react/no-deprecated': 'error',

  /**
   * Prevent usage of setState in componentDidMount
   */
  'react/no-did-mount-set-state': 'error',

  /**
   * Prevent usage of setState in componentDidUpdate
   */
  'react/no-did-update-set-state': 'error',

  /**
   * Prevent direct mutation of this.state
   */
  'react/no-direct-mutation-state': 'error',

  /**
   * Prevent usage of findDOMNode
   */
  'react/no-find-dom-node': 'error',

  /**
   * Prevent usage of isMounted
   */
  'react/no-is-mounted': 'error',

  /**
   * Prevent multiple component definition per file
   */
  'react/no-multi-comp': ['error', { ignoreStateless: true }],

  /**
   * Prevent usage of shouldComponentUpdate when extending React.PureComponent
   */
  'react/no-redundant-should-component-update': 'error',

  /**
   * Prevent usage of the return value of React.render
   */
  'react/no-render-return-value': 'error',

  /**
   * Prevent usage of setState
   */
  'react/no-set-state': 'off',

  /**
   * Prevent using string references in ref attribute.
   */
  'react/no-string-refs': 'error',

  /**
   * Prevent using this in stateless functional components
   */
  'react/no-this-in-sfc': 'error',

  /**
   * Prevent common casing typos
   */
  'react/no-typos': 'error',

  /**
   * Prevent invalid characters from appearing in markup
   */
  'react/no-unescaped-entities': 'error',

  /**
   * Prevent usage of unsafe lifecycle methods
   */
  'react/no-unsafe': 'error',

  /**
   * Prevent definitions of unused prop types
   */
  'react/no-unused-prop-types': [
    'error',
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],

  /**
   * Prevent definitions of unused state properties
   */
  'react/no-unused-state': 'error',

  /**
   * Prevent usage of setState in componentWillUpdate
   */
  'react/no-will-update-set-state': 'error',

  /**
   * Enforce ES5 or ES6 class for React Components
   */
  'react/prefer-es6-class': ['error', 'always'],

  /**
   * Enforce stateless React Components to be written as a pure function
   */
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

  /**
   * Prevent missing props validation in a React component definition
   */
  'react/prop-types': [
    'error',
    {
      customValidators: [],
      ignore: [],
      skipUndeclared: false,
    },
  ],

  /**
   * Prevent missing React when using JSX
   */
  'react/react-in-jsx-scope': 'error',

  /**
   * Enforce a defaultProps definition for every prop that is not a required prop
   */
  'react/require-default-props': [
    'error',
    { forbidDefaultForRequired: true },
  ],

  /**
   * Enforce React components to have a shouldComponentUpdate method
   */
  'react/require-optimization': ['off', {
    allowDecorators: [],
  }],

  /**
   * Enforce ES5 or ES6 class for returning value in render function
   */
  'react/require-render-return': 'error',

  /**
   * Enforce component methods order
   */
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
        rendering: ['/^render.+$/', 'render'],
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

  /**
   * Enforce propTypes declarations alphabetical sorting
   */
  'react/sort-prop-types': 'off',

  /**
   * State initialization in an ES6 class component should be in a constructor
   */
  'react/state-in-constructor': ['error', 'always'],

  /**
   * Defines where React component static properties should be positioned
   */
  'react/static-property-placement': 'off',

  /**
   * Enforce style prop value being an object
   */
  'react/style-prop-object': 'error',

  /**
   * Prevent void DOM elements (e.g. <img />, <br />) from receiving children
   */
  'react/void-dom-elements-no-children': 'error',
};
module.exports = {
  rules: {
    ...fixableRules,
    ...rules,
  },
};
