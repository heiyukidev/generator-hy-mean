var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var destination = './app';


gulp.task('loadLibs', function() {
  var libs = [
    "app/lib/angular/angular.js",
    "app/lib/angular-ui-router/release/angular-ui-router.min.js"
  ];
  return gulp.src(libs)
    .pipe(plumber())
    .pipe(concat("libs.min.js"))
    .pipe(gulp.dest(destination));
});

gulp.task('build', function() {

  return gulp.src(['./app/components/**/*.module.js',
      './app/components/**/*.service.js',
      './app/components/**/*.controller.js',
      './app/components/**/*.directive.js',
      './app/pages/**/*.module.js',
      './app/pages/**/*.service.js',
      './app/pages/**/*.controller.js',
      './app/pages/**/*.directive.js',
      './app/assets/**/*.js',
      'app/app.js'
    ])
    .pipe(plumber())
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(destination));
});
gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['build', 'loadLibs'])
});

gulp.task('default', ['loadLibs', 'build', 'watch']);
