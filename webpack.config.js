const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const defineEnvPlugin = new webpack.DefinePlugin({
  "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL),
});

const path = require("path");

module.exports = {
  output: {
    path: path.resolve("dist"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=3000000",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [htmlWebpackPlugin, defineEnvPlugin],
};
