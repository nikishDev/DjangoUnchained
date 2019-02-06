const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('one', () => {
    return gulp.src('./src/css/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', () => {
    gulp.watch('./src/css/**/*.styl', gulp.series('one'));
});