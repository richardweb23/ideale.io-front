module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "trailingComma": "es5",
        "semi": true,
        "jsxSingleQuote": false,
        "singleQuote": false,
        "useTabs": true,
        "tabWidth": 4,
        "endOfLine": "auto"
      }
    ]
  },
}