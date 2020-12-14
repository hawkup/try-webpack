// Some legacy modules rely on this being the window object. Let's update our index.js so this is the case:

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?wrapper=window',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    }),
  ],
}