'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var style = function (build) {
    var compressSass = function () {
        return sass({
            outputStyle: 'compressed',
            includePaths: [
                './node_modules/bulma'
            ]
        });
    }
    var src = gulp.src('./src/scss/index.scss');

    if (build) {
        src
            .pipe(compressSass().on('error', sass.logError))
            .pipe(rename('app.min.css'))
            .pipe(gulp.dest('./'));
    } else {
        src
            .pipe(sourcemaps.init())
            .pipe(compressSass().on('error', sass.logError))
            .pipe(rename('app.min.css'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./server'));
    }
}

var html = function (build) {
    gulp.src('./src/index.html')
        .pipe(gulp.dest(build ? './' : './server'));
}

gulp.task('style', function () {
    style(false);
});

gulp.task('html', function () {
    html(false);
});
