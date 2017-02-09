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
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:ava/recommended',
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
    'prettier/prettier': ['error', { trailingComma: true, singleQuote: true }],
  },
};
