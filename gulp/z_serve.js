import pkg          from '../package.json';
import gulp         from 'gulp';
import path         from 'path';
import sourcemaps   from 'gulp-sourcemaps';
import environments from 'gulp-environments';

// Serve specific packages
import browserSync  from 'browser-sync';
const  reload       =    browserSync.reload;

gulp.task('browser', gulp.parallel(() => {
	// gulp.parallel(['scripts', 'styles', 'templates', 'images', 'jsons','fonts']);
	gulp.watch(path.join(pkg.src.script, '**/*.{js,jsx}'), gulp.parallel('scripts'));
	gulp.watch(path.join(pkg.src.style, '**/*.styl'), gulp.parallel('styles'));
	gulp.watch(path.join(pkg.src.images, '**/*.{png,jpg,jpeg,gif,svg}'), gulp.parallel('images'));
	gulp.watch(path.join(pkg.src.json, '**/*.json'), gulp.parallel('jsons'));
	gulp.watch(path.join(pkg.src.fonts, '**/*.{eot,woff,woff2,svg,ttf}'), gulp.parallel('fonts'));
	gulp.watch(path.join(pkg.paths.templates, '**/*.{pug,swig,json,html}'), gulp.parallel('templates'));
}, () => {
	browserSync({
		server: {
			baseDir: [pkg.paths.build],
			middleware: []
		},
		files: [pkg.build.css + '**/*.css', pkg.build.images + '**/*', pkg.build.script + '**/*.js', pkg.paths.build + '**/*.html']
	});

}));
