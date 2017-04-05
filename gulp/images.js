// Load general packages
import gulp         from     'gulp';
import pkg          from     '../package.json';
import environments from     'gulp-environments';
import path         from     'path';
import changed      from     'gulp-changed';
import gutil        from     'gulp-util';

// Image specific plugins
import imagemin     from     'gulp-imagemin';
import webp         from     'gulp-webp';

// Images variables
const src = path.join(pkg.src.images, '**/*.{png,jpg,jpeg,gif,svg}');
const dest = pkg.build.images;

// Image tasks
gulp.task('images:webp', function() {
	return gulp.src(path.join(dest, '**/*.{png,jpg,jpeg,gif,svg}'))
		.pipe(environments.production(webp()))
		.pipe(gulp.dest(dest));
});

gulp.task('images:optimize', function() {
	return gulp.src(src)
		.pipe(environments.production(imagemin()))
		.pipe(gulp.dest(dest));
});

gulp.task('images', gulp.series('images:optimize'));
