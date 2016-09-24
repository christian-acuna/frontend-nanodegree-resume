var src               = 'src';
var dist              = 'dist';
var public            = 'public';
// var production        = 'build/production';
// var srcAssets         = 'app/_assets';
// var developmentAssets = 'build/assets';
// var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: './'
      },
      files: [
        src + '/css/*.css',
        src + '/js/*.js'
      ]
    }
  }
};
