module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
  "rules": {
    "react/state-in-constructor": 0,
    "import/no-cycle": 0,
    "react/forbid-prop-types": 0,
    "spaced-comment": 0,
    "arrow-parens": ["error", "as-needed"]
  }
}
