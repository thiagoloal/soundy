import pkg          from '../package.json';
import gulp         from 'gulp';
import path         from 'path';
import sourcemaps   from 'gulp-sourcemaps';
import environments from 'gulp-environments';
import gutil        from 'gulp-util';

// Styles specific packages
import browserSync  from 'browser-sync';
import stylus       from 'gulp-stylus';
import stylint      from 'gulp-stylint';
import postcss      from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import flexibility  from 'postcss-flexibility';
import rupture      from 'rupture';
import lost         from 'lost';
import koutoSwiss   from 'kouto-swiss';
import cssnano      from 'gulp-cssnano';
import mqpacker     from 'css-mqpacker';


const  src          =    path.join(pkg.src.style, '**/*.styl');
const  dest         =    pkg.build.style;

// Stylus
gulp.task('styles', () => {
	const configPostcss = [
		lost(),
		flexibility(),
		mqpacker(),
		autoprefixer({
			browsers: [
				'last 3 version',
				'Android >= 4',
				'IE 8-11',
				'> 2% in BR'
			]
		}),
	];
	return gulp.src(src)
		// If development environment, create sourcemaps
		.pipe(environments.development(sourcemaps.init()))
		.pipe(stylint())
		.pipe(stylint.reporter())
		.pipe(stylus({
			'include css': true,
			include: [
				'./node_modules/normalize-styl'
			],
			use: [rupture(), koutoSwiss()]
		}))
		.on('error', function(error) {
			gutil.log(error.message);
			this.emit('end');
		})
		.pipe(postcss(configPostcss))
		.pipe(environments.development(sourcemaps.write()))
		// Write CSS to build/css
		.pipe(environments.production(cssnano()))
		.pipe(gulp.dest(dest))
		.pipe(environments.development(browserSync.stream()));
});
