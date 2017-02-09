module.exports = {
  env: { es6: true, node: true },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'import',
    'ava',
    'prettier',
    'babel',
    'flowtype',
    'filenames',
    'jsx-a11y',
  ],
  globals: { document: true, foo: true, window: true },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:ava/recommended',
    'plugin:flowtype/recommended',
  ],
  parserOptions: { sourceType: 'module', ecmaFeatures: { jsx: true } },
  settings: {
    'import/core-modules': ['gatsby-helpers'],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: [
              '',
              '.js',
              '.jsx',
              '.cjsx',
              '.coffee',
              '.ts',
              '.tsx',
              '.json',
              '.less',
              '.css',
              '.scss',
              '.sass',
              '.toml',
              '.yml',
              '.yaml',
            ],
            root: [__dirname],
          },
        },
      },
    },
    flowtype: { onlyFilesWithFlowAnnotation: false },
  },
  rules: {
    'flowtype/require-return-type': [
      2,
      'always',
      {
        excludeArrowFunctions: true,
      },
    ],
    'flowtype/require-parameter-type': [
      2,
      {
        excludeArrowFunctions: true,
      },
    ],
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'prettier/prettier': ['error', { trailingComma: true, singleQuote: true }],
  },
};
