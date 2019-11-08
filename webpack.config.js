const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function(isProduction) {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [
        new TsconfigPathsPlugin({ /*configFile: './path/to/tsconfig.json' */}),
      ]
    },
    plugins: [
    ]
  };
};