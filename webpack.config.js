var weight = 900;

function config() {
  var plugins = [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ];

  return {
    plugins: plugins
  };
}
