const webpack = require("webpack");
const merge = require("webpack-merge");
const { createConfig, APP_PATH } = require("./common");

module.exports = (env, argv) =>
  merge(createConfig(env, argv), {
    optimization: {
      minimize: true,
    },
  });
