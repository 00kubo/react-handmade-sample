const config = require('./webpack.config.js');

module.exports = Object.assign(config(false), {
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    contentBase: 'public',
    open: true,
    openPage: 'index.html',
    watchContentBase: true,
    inline: true
  },
});