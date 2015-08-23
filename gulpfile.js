(function(){
	'use strict';

	var gulp 				= require('gulp'),
			sass 				= require('gulp-sass'),
			uglify 			= require('gulp-uglify'),
			minifycss 	= require('gulp-minify-css'),
			rename 			= require('gulp-rename'),
			watch 			= require('gulp-watch');

	// Style
	gulp.task('styles', function() {
		gulp.src('src/sass/**/*.scss')
			.pipe(sass({outputStyle: 'expanded'}))
			.pipe(gulp.dest('assets/css'))
			.pipe(rename({suffix: '.min'}))
			.pipe(minifycss())
			.pipe(gulp.dest('assets/css'));
	});

	// Watch
	gulp.task('watch', function() {
		gulp.watch('src/sass/**/*.scss', ['styles']);
	});

	gulp.task('default', ['styles', 'watch']);

})();