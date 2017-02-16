var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var destination = './app';

var files = ['app/app.js'];

gulp.task('loadLibs', function() {
  var libs = [
    "app/libs/angular/angular.js",
    "app/libs/angular-ui-router/release/angular-ui-router.min.js"
  ];
  return gulp.src(libs)
    .pipe(plumber())
    .pipe(concat("libs.min.js"))
    .pipe(gulp.dest(destination));
});

gulp.task('build', function() {

  return gulp.src(['./src/components/**/*.module.js',
      './src/components/**/*.service.js',
      './src/components/**/*.controller.js',
      './src/components/**/*.directive.js',
      './src/pages/**/*.module.js',
      './src/pages/**/*.service.js',
      './src/pages/**/*.controller.js',
      './src/pages/**/*.directive.js',
      './src/**/*.module.js',
      './src/**/*.service.js',
      './src/**/*.controller.js',
      './src/**/*.directive.js'
    ])
    .pipe(plumber())
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(destination));
});
gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['build'])
});

gulp.task('default', ['loadLibs', 'build', 'watch']);
