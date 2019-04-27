module.exports = function(api) {
  api.cache.forever();

  const plugins = [["@babel/proposal-decorators", { legacy: true }], "react-hot-loader/babel"];

  return {
    presets: ["@babel/react", "@babel/typescript", "@babel/env"],
    plugins,
  };
};
