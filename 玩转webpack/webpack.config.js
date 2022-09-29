module.exports = {
  entry: './src/index.js',

  mode: 'development',
  devtool: 'cheap-source-map',
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
};
