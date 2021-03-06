module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'typescript-enum',
    'promise'

  ],
  'rules': {
    "require-jsdoc": 0,
    "max-len": ["error", { "code": 100}],
  },
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",],
        "rules": {
          "@typescript-eslint/no-inferrable-types": "off",
          "@typescript-eslint/no-explicit-any": "off",
          "@typescript-eslint/no-empty-function": "off",
          "@typescript-eslint/explicit-module-boundary-types": ['error', { "allowArgumentsExplicitlyTypedAsAny": true }]
        }
    }
  ]
};
