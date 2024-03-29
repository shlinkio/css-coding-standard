module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss'
  ],
  syntax: 'scss',
  plugins: [
    'stylelint-scss',
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'import-notation': 'string',
    'selector-not-notation': 'simple',
    'media-query-no-invalid': null,
    'selector-pseudo-element-colon-notation': null,
    'alpha-value-notation': null,
    'scss/at-import-partial-extension': null,
    'color-hex-length': null,
    'selector-class-pattern': null,
    'scss/no-global-function-names': null,
    'plugin/selector-bem-pattern': {
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$'
      },
      utilitySelectors: '^\\.util-[a-z]+$'
    }
  }
};
