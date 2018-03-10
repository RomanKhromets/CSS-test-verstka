var gulp 		= require('gulp'), 
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync');
	// concat		= require('gulp-concat'),
	// uglify		= require('gulp-uglifyjs');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/main.scss')
			.pipe(sass())
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	setTimeout( function(){}, 1000);
	browserSync({
		server: {
			baseDir: 'app'
		},
	});
});

gulp.task('watch',['browser-sync','sass'], function() {
	gulp.watch('app/sass/**/*.scss', function(){
		setTimeout(function(){gulp.start('sass');},500)
	});
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});
