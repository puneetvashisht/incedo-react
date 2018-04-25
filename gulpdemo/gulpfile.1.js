var gulp = require('gulp')

gulp.task('copyJSX', function(){
    gulp.src('./src/**/*.jsx')
    .pipe(gulp.dest('./build'))
})

gulp.task('task1', ['copyJSX'], function(){
    console.log('Running task 1');
})