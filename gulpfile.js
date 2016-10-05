var
	gulp = require('gulp'),
	del = require('del'),
	browsersync = require('browser-sync'),
	pkg = require('./package.json');

var devBuild, source, mainjs, dest, htmlSources, imagesSources, imguri, cssSources, fontsSources, coffeeSources, jsSources, sassSources, jsonSources, sassStyle, syncOpts;


// file locations



devBuild = process.env.NODE_ENV || 'development';
var syncOpts = {
		server: {
			baseDir: dest,
			index: 'index.html'
		},
		open: true,
		notify: true
	};



console.log(pkg.name + ' ' + pkg.version + ', ' + devBuild + ' build');

gulp.task('clean', function() {
	del([
		dest + '*'
	]);
});

gulp.task('mainjs', function() {
	gulp.src(mainjs.in)
		.pipe(gulp.dest(mainjs.out))
		// .pipe(connect.reload())
		.pipe(browsersync.reload({ stream: true }));
});

gulp.task('browsersync', function() {
	browsersync(syncOpts);
});

gulp.task('default', ['mainjs', 'browsersync'], function() {});
