import gulp from 'gulp';
import pkg from '../package.json';
import path from 'path';
import environments from 'gulp-environments';
import sourcemaps from 'gulp-sourcemaps';

// Templates specific packages
import data from 'gulp-data';
import gutil from 'gulp-util';
import pug from 'gulp-pug';
import prettify from 'gulp-prettify';
import cachebust from 'gulp-cache-bust';

// Task variables
const src = path.join(pkg.templates.pages, '**/*.{pug,html,json}');
const dest = pkg.paths.build;

// Pug compile
gulp.task('templates', () => {
  return gulp.src(src)
    .pipe(pug())
    .on('error', function(error) {
      gutil.log(error.message);
      this.emit('end');
    })
    .pipe(environments.development(prettify()))
    // .pipe(environments.production(cachebust()))
    .pipe(gulp.dest(dest));
});
