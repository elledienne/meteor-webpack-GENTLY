Package.describe({
    name: 'elledienne:gently',
    version: '0.0.1',
    summary: 'Add configuration for global.GENTLY = false',
    git: 'https://github.com/elledienne/meteor-webpack-gently',
    documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('webpack:core-config@1.0.1');
  api.add_files(['webpack.config.js']);
});
