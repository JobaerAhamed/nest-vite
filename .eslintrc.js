const {
  compilerOptions: { paths },
} = require('./tsconfig.json');

const pathAliases =
  [
    ...new Set(
      Object.keys(paths)?.map((key) => key.replace(/[^A-Za-z-_]+/g, '')) || [],
    ),
  ]?.join('|') || '';

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    'secure-typescript',
    // 'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react-refresh'],
  rules: {
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 0,
    'security/detect-object-injection': 0,
    'react-refresh/only-export-components': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^react', '^@?\\w'],
              [`^@(${pathAliases})(/.*|$)`],
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};
