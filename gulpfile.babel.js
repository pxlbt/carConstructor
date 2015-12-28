'use strict';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import babelify from 'babelify';
import plumber from 'gulp-plumber';
import source from 'vinyl-source-stream';

gulp.task('js', () => {
  return browserify({entries: 'js/index.js'})
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist/js'));
});


gulp.task('js-watch', ['js'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js'], () => {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(['js/**/*.js', 'js/**/*.jsx'], ['js-watch']);
});
