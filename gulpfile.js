var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify');
    
    
    gulp.task('default', ['index']);
    
    
    gulp.task('index', function(){
       return gulp.src('client/views/index.html')
        .pipe(gulp.dest('public/views/')); 
    });
    
    gulp.task('watch', function(){
       gulp.watch('client/views/index.html',['index']); 
    });