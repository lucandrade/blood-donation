'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var style = function (build) {
    var src = gulp.src('./src/scss/index.scss');
    if (build) {
    } else {
        src
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed',
                includePaths: [
                    './node_modules/bulma'
                ]
            }).on('error', sass.logError))
            .pipe(rename('app.min.css'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./server'));
    }
}

gulp.task('style', function () {
    style(false);
});
