var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname, //path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    bundle:[
    "./angular-application/app.js",
    "./angular-application/modules/Image/components/RenderImage.js",
    "./angular-application/modules/Image/controllers/ImageController.js",
    "./angular-application/modules/Image/index.js"
    ]
},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "[name].min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
