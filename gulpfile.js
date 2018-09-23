const gulp 		   = require('gulp');
const less 		   = require('gulp-less');
const browserSync  = require('browser-sync');
const autoPrefixer = require('gulp-autoprefixer');
const cleanCSS 	   = require('gulp-clean-css');
const gcmq 		   = require('gulp-group-css-media-queries');
const smartGrid    = require('smart-grid');

const config = {
    root: './src/',
    html: {
        src: 'index.html'
    },
    css: {
        watch: 'less/**/*.less',
        src: 'less/+(styles).less',
        dest: 'css'
    }
};

gulp.task('build', function() {
    gulp.src(config.root + config.css.src)
        .pipe(less())
        .pipe(autoPrefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest(config.root + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.root + config.css.watch, ['build']);
    gulp.watch(config.root + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.root
        }
    });
});

gulp.task('grid', function() {
    smartGrid('src/less', {
        container: {
            maxWidth: '1280px'
        }
    });
});