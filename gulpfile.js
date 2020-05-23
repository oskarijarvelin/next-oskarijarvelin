'use strict';

/* 
HOW TO USE:

1. INITIALIZE: npm init
2. INSTALL DEPENDENCIES: npm i gulp gulp-sass gulp-sourcemaps gulp-clean-css gulp-autoprefixer gulp-concat gulp-plumber gulp-notify gulp-touch-cmd node-sass --save-dev
4. RUN gulp

*/

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    cleanCSS    = require('gulp-clean-css'),
    prefixer    = require('gulp-autoprefixer'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    touch       = require('gulp-touch-cmd');

    sass.compiler = require('node-sass');

// ERROR-HANDLING
var error = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Gulp-failure!",
    sound:    "Sosumi"
  })(err);
  this.emit('end');
};

// SASS-PREPROCESSING, AUTOPREFIXING, SOURCEMAPPING AND MINIFYING FOR PRODUCTION
gulp.task('styles', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(plumber({errorHandler: error}))
        .pipe(sourcemaps.init())
        .pipe(sass()) // SASS-PREPROCESSING
        .pipe(prefixer()) // AUTOPREFIXING
        .pipe(cleanCSS()) // MINIFYING
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/'))
        .pipe(touch()); // PREVENT GETTING STUCK IN SERVER FILE CACHE BY EDITING TIMESTAMPS
});

gulp.watch('scss/**/*.scss', gulp.series('styles'));
gulp.task('default', gulp.series('styles'));