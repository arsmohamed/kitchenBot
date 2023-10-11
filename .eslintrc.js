// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb',
      'prettier',
      'prettier/react',
    ],
    parser: 'babel-eslint',
    rules: {
      'no-unused-vars': 'error',
      'no-unreachable': 'error',
      // Add other ESLint rules as needed
    },
  };
  