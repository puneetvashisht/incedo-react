var gulp = require('gulp');
var babel = require('gulp-babel')
var concat = require('gulp-concat')


gulp.task('task1', function(){
    gulp.src('./app/**/*.jsx')
    .pipe(babel({
        presets: ['react']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./build'))
})