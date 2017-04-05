import { resolve, join } from 'path';
import { format } from 'util';
import pkg from './package.json';
import gulp from 'gulp';
import hub from 'gulp-hub';
import process from 'process';
import environments from 'gulp-environments';
import del from 'del';

var development = environments.development;
var production = environments.production;

hub(['gulp/*.js']);

gulp.task('set-prod-node-env', function() {
	// process.env.NODE_ENV = 'production';
	environments.current(production);
});

/*
 * For small tasks you can use arrow functions and export
 */
const clean = () => del([pkg.paths.build]);
export { clean };

export function setEnv (done) {
	process.env.NODE_ENV = 'production';
	environments.current(production);
	return done();
}

const build = gulp.series(clean, setEnv, gulp.parallel('scripts', 'styles', 'jsons', 'fonts', 'images', 'templates'));
gulp.task('build', build)

gulp.task('serve', gulp.series(clean, gulp.parallel(['scripts', 'styles', 'images', 'jsons','fonts', 'templates']), 'browser'));
