module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },
  'rules': {
    'semi': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
  },
  'extends': ['eslint:recommended', 'google'],
}
;
