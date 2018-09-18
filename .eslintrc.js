module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: { wx: true },
  extends: 'standard',
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.xu']
  },
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'no-tabs': 'off',
    'indent': [0],
    'no-mixed-spaces-and-tabs': 'off'
  }
}
