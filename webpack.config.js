const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.join(__dirname, './client/index.js')],
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-0']
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: ['file-loader'], 
      }
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3001, // Defaults to 8080
    contentBase: path.resolve(__dirname, './client/dist'),
    watchContentBase: true,
    proxy: {
      context: () => true,
      '/': 'http://localhost:3003',
      secure: false
    }
  },
};