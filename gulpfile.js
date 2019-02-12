const gulp = require('gulp');
const stylus = require('gulp-stylus');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-html-minifier');
const imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-html-minifier');

gulp.task('one', () => {
    return gulp.src('./src/css/*.styl')
      .pipe(stylus())
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css/min'))
});
 
gulp.task('minify', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build/html'))
});

gulp.task('imgmin', () => {
    return gulp.src('./src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
});

gulp.task('watch', () => {
    gulp.watch('./src/css/*.styl', gulp.series(['one']));
    gulp.watch('./src/*.html', gulp.series(['minify']));
    gulp.watch('./src/assets/img/*', gulp.series(['imgmin']));
});