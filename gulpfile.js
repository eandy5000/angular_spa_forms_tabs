var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify');
    
    
    gulp.task('default', ['sassCombo','index','ugly','scss','watch']);
    
    
    gulp.task('index', function(){
       return gulp.src('client/views/index.html')
        .pipe(gulp.dest('public/views/')); 
    });
    
    gulp.task('watch', function(){
       gulp.watch('client/views/index.html',['index']); 
       gulp.watch('client/scripts/*.js',['ugly']);
       gulp.watch('client/styles/*.scss',['sassCombo','scss']);
    });
    
    gulp.task('sassCombo', function(){
       return gulp.src('client/styles/scss/*.scss')
                .pipe(concat('style.scss'))
                .pipe(gulp.dest('client/styles/')); 
    });
    
    gulp.task('scss', function(){
       return sass('client/styles/style.scss')
                .pipe(gulp.dest('public/styles/')); 
    });
    
    gulp.task('ugly', function(){
       return gulp.src('client/scripts/*.js')
                .pipe(uglify())
                .pipe(gulp.dest('public/scripts/')); 
    });