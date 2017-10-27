const gulp = require('gulp');
const less = require('gulp-less');
const livereload = require('gulp-livereload');

gulp.task('less-css', ()=>{
	gulp.src('./style/*.less')
		.pipe(less())
		.pipe(gulp.dest('./style/'))
		.pipe(livereload());
})

gulp.task('watch', () =>{
	const server = livereload({ start: true });
	gulp.watch(['./style/*.less'], ['less-css']);
})

gulp.task('default', ['less-css', 'watch'])