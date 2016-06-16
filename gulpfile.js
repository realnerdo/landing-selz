var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('styles', function(){
    return gulp.src('assets/less/store.less')
            .pipe(less())
            .pipe(autoprefixer())
            .pipe(gulp.dest('assets/css'))
            .pipe(connect.reload())
            .pipe(notify('Looking good!'));
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch('assets/less/*.less', ['styles']);
});

gulp.task('default', ['connect', 'watch']);
