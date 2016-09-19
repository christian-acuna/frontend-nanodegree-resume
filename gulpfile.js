var gulp = require('gulp');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var responsive = require('gulp-responsive');
var csslint = require('gulp-csslint');
var del = require('del');
csslint.addFormatter('csslint-stylish');

var bs = require('browser-sync').create();
var $ = require('gulp-load-plugins')();

gulp.task('images:main', function() {
  return gulp.src('src/images/main/christian_acuna.jpg')
    .pipe($.responsive({
      // Convert all images to JPEG format
      '*': [{
        width: 350,
        rename: {
          extname: '.jpg',
        },
      }, {
        width: 350 * 2,
        rename: {
          suffix: '@2x',
          extname: '.jpg',
        },
      }, {
        width: 350,
        rename: {
          extname: '.webp'
        },
      }, {
        width: 350 * 2,
        rename: {
          suffix: '@2x',
          extname: '.webp',
        },
      }],
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('images:portfolio', function() {
  return gulp.src('src/images/*.{jpg,png}')
    .pipe($.responsive({
      // Convert all images to JPEG format
      '*': [{
        width: 500,
        rename: {
          extname: '.jpg',
        },
      }, {
        width: 500 * 2,
        rename: {
          suffix: '@2x',
          extname: '.jpg',
        },
      }, {
        width: 500 * 3,
        rename: {
          suffix: '@3x',
          extname: '.jpg',
        },
      }, {
        width: 500,
        rename: {
          extname: '.webp'
        },
      }, {
        width: 500 * 2,
        rename: {
          suffix: '@2x',
          extname: '.webp',
        },
      }, {
        width: 500 * 3,
        rename: {
          suffix: '@3x',
          extname: '.webp',
        },
      }],
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean:images', function() {
  return del(['dist/images/**']);
});

// gulp.task('scripts', function() {
//   gulp.src('src/js/*.js')
//     .pipe($.plumber())
//     .pipe($.uglify())
//     .pipe($.rename('app.min.js'))
//     .pipe(gulp.dest('dist/js'));
// });

gulp.task('css', function() {
  gulp.src('src/css/style.css')
    .pipe(csslint({
      'shorthand': false
    }))
    .pipe(csslint.formatter('stylish'));
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe($.plumber())
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(bs.stream());
});

gulp.task('serve', ['minify-css'], function() {

  bs.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('src/js/*.js').on('change', bs.reload);
  gulp.watch('src/css/*.css', ['minify-css']);
  gulp.watch('./*.html').on('change', bs.reload);
});

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['css', 'minify-css', 'serve']);
