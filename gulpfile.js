var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    babelify = require('babelify'),
    _browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

var paths = {
    'jsx': {
        name: "./all.js",
        src: "./src/jsx/main.jsx",
        dest: "./dist/js"
    },
    'less': {
        src: ["./src/less/**/*.less"],
        dest: "./dist/css"
    },
    'html': {
        src: "./src/index.html",
        dest: "./dist"
    }
};

var browserify = (files) => {
    return _browserify({
        entries: files,
        debug: true
    }).transform([babelify]);
};

gulp.task('less', () => {
    return gulp.src(paths.less.src)
        .pipe(less())
        .pipe(gulp.dest(paths.less.dest));
});

gulp.task('index', () => {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
});

gulp.task('default', ['index', 'less'], () => {
    return browserify(paths.jsx.src)
        .bundle().on('error', gutil.log)
        .pipe(source(paths.jsx.name))
        .pipe(buffer())
        .pipe(gulp.dest(paths.jsx.dest));
});
