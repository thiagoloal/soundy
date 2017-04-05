// Common imports
import gulp            from 'gulp';
import pkg             from '../package.json';
import path            from 'path';
import gutil           from 'gulp-util';

// Scripts specific packages
import modernizr       from 'gulp-modernizr';
import uglify          from 'gulp-uglify';
import webpack         from 'webpack';
import webpackStream   from 'webpack-stream';
import webpackSettings from './webpack.config.js';

// Scripts variables
const src = path.join(pkg.src.script, '**/*.{js,jsx}');
const dest = path.join(process.cwd(), pkg.build.script);


gulp.task('scripts', function(done) {
	return gulp.src(src)
		.pipe(webpackStream(webpackSettings, webpack))
		.on('error', function(error) {
			gutil.log(error.message);
			this.emit('end');
		})
		.pipe(gulp.dest(dest));
});

gulp.task('modernizr', function() {
	return gulp.src([path.join(pkg.src.style, '**/*'), path.join(pkg.src.script, '**/*.{js,jsx}')])
		.pipe(modernizr())
		.pipe(uglify())
		.pipe(gulp.dest(dest));
});
