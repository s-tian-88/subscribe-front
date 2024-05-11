const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const ProgressPLugin = require('webpack').ProgressPlugin;


module.exports = merge(common, {

  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new ProgressPLugin()
  ],

  devServer: {
    port: 8080,
  }

});
