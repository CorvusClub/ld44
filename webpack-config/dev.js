const webpack = require("webpack");
const merge = require("webpack-merge");
const { createConfig, APP_PATH } = require("./common");

module.exports = (env, argv) =>
  merge(createConfig(env, argv), {
    devtool: "inline-source-map",

    plugins: [new webpack.HotModuleReplacementPlugin()],

    optimization: {
      minimize: false,
    },

    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },

    devServer: {
      contentBase: APP_PATH,
      openPage: "",
      inline: true,
      stats: "minimal",
      open: false,
      hot: true,
      historyApiFallback: true,
      disableHostCheck: true,
    },
  });
