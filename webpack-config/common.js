const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const ROOT_PATH = path.join(__dirname, "..");
const APP_PATH = path.join(ROOT_PATH, "src/");
const DIST_PATH = path.join(ROOT_PATH, "build");
const TS_CONFIG_PATH = path.join(ROOT_PATH, "tsconfig.json");
const TSLINT_CONFIG_PATH = path.join(ROOT_PATH, "tslint.json");

const createConfig = (env, argv) => ({
  entry: APP_PATH,
  output: {
    filename: "bundle.js",
    path: DIST_PATH,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        include: APP_PATH,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|ttf|jpg|mp4)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets",
        },
      },
      { test: /\.ink$/, loader: path.join(ROOT_PATH, "webpack-config", "ink", "ink-loader.js") },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: argv.mode === "development",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(APP_PATH, "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: TS_CONFIG_PATH,
      tslint: TSLINT_CONFIG_PATH,
      async: true,
    }),
  ],
});

module.exports = {
  createConfig,
  APP_PATH,
};
