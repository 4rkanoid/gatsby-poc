// @flow
import path from 'path';
import DashboardPlugin from 'webpack-dashboard/plugin/index';
const stylelint = require('stylelint')(require('./styleLint.config'));

export const modifyWebpackConfig = (config: any, stage: string) => {
  if (stage === 'develop' || stage === 'develop-html') {
    config.removePlugin('no-errors');

    config.preLoader('js', {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: __dirname,
    });
    config.plugin('dev-dash', DashboardPlugin);
    config.merge(current => {
      current.postcss = () => [
        require('postcss-import')({
          plugins: [stylelint],
        }),
        stylelint,
        require('postcss-cssnext')({ browsers: 'last 2 versions' }),
        require('postcss-browser-reporter'),
        require('postcss-reporter')({ clearMessages: true }),
      ];
      return current;
    });

    config.merge({
      eslint: {
        useEslintrc: false,
        formatter: require('eslint-friendly-formatter'),
        configFile: path.resolve(__dirname, '.eslintrc.js'),
      },
    });
  }
  return config;
};
