var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',

      },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      // { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      { test: /\.ttf$/, loader: 'url-loader?limit=10000&mimetype=application/octet-streasm'},
      { test: /\.eot$/, loader: 'file-loader'},
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },

  plugins: [

    new HtmlwebpackPlugin({
      title: 'webpack-demos',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://127.0.0.1:8080'
    })
  ],


}
