// Load general packages
import gulp from 'gulp';
import pkg  from '../package.json';
import path from 'path';

// Jsons variables
const src  = path.join(pkg.src.json, '**/*.json');
const dest = pkg.build.json;

// Copy font files to dest directory
gulp.task('jsons', function() {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
});
