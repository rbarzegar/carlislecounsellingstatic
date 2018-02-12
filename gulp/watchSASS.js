var gulp = require('gulp'),
    browserSync = require('browser-sync').create();


//Gulp watch task
gulp.task('watch', ['css'], function() {
    
		browserSync.init({
        notify: true,
        server: {
            baseDir: "app"
        }
    });

    gulp.watch('app/*.html', browserSync.reload);

    gulp.watch('app/scss/**/*.scss', function() {
    	gulp.start('cssInject');
    });
    
    gulp.watch('app/js/**/*.js', function () {
        gulp.start('scriptsRefresh');
    });
    //other watchers
});


gulp.task('cssInject', ['css'], function() {
	return gulp.src('./app/css/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
    browserSync.reload();
});