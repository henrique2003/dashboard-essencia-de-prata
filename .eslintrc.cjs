module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': ['error'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      { max: 1, maxEOF: 0 }
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  settings: {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@": "./src"
        },
        extensions: [".ts", ".tsx"]
      }
    }
  }
}
