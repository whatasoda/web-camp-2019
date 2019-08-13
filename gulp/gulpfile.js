const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

gulp.task('pug', () => {
  return gulp.src('src/pug/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', (done) => {
  gulp.watch('src/pug/**/*.pug', gulp.task('pug'));
  gulp.watch('src/scss/**/*.scss', gulp.task('sass'));
  done();
});

gulp.task('default', gulp.series(
  gulp.parallel('pug', 'sass'),
  'watch',
));
