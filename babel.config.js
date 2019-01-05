module.exports = function (api) {
  const presets = ["@babel/preset-react", "@babel/preset-env"];
  const plugins = ["@babel/plugin-syntax-export-default-from", "transform-export-extensions"];
  api.cache(true)
  return {
    presets,
    plugins
  };
}