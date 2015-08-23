(function(){
	'use strict';

	var gulp 				= require('gulp'),
			sass 				= require('gulp-sass'),
			uglify 			= require('gulp-uglify'),
			minifycss 	= require('gulp-minify-css'),
			rename 			= require('gulp-rename'),
			concat 			= require('gulp-concat'),
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


	// Scritps
	gulp.task('scritp', function(){
		return gulp.src([
				'src/js/confirm.js',
				'src/js/alert.js'
			])
			.pipe(concat('scritps.js'))
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('assets/js'));
	});


	// Watch
	gulp.task('watch', function() {
		gulp.watch('src/sass/**/*.scss', ['styles']);
		gulp.watch('src/js/*.js', ['scritp']);
	});

	gulp.task('default', ['styles', 'watch', 'scritp']);

})();