/**
 * Léo Le Bras
 * http://leolebras.com/
 *
 * Work with Gulp
 * http://gulpjs.com/
 *
 * Copyright 2014 - 2015
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date of creative : 2014-04-01
 * Last updated: 2015-28-07
 */



/**
 * Import dev dependencies
 *
 */
var autoprefixer = require('autoprefixer'),
    base64 = require('gulp-base64'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync'),
    clean = require('gulp-rimraf'),
    cssbeautify = require('gulp-cssbeautify'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    inline = require('gulp-inline-source'),
    otf2ttf = require('otf2ttf');
    minifyCSS = require('gulp-minify-css'),
    pngcrush = require('imagemin-pngcrush'),
    pngquant = require('imagemin-pngquant'),
    postcss = require('gulp-postcss'),
    pxtorem = require('postcss-pxtorem'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    ttf2woff = require('gulp-ttf2woff'),
    watch = require('gulp-watch'),
    zip = require('gulp-zip');
var reload = browserSync.reload;



/* ------------------------------------- */



/**
 * Config dir folders
 *
 */
var srcDir = __dirname + '/src/';
var buildDir = './__build__/';
var distDir = __dirname + '/production/';

var cssDir = 'css/';
var imgDir = 'img/';
var jsDir = 'js/';
var sassDir = 'sass/';
var fontsDir = 'fonts/';



/* ------------------------------------- */



/**
 * Sync modifications
 *
 */
gulp.task('browser_sync', function() {
    browserSync({
        server: {
            baseDir: buildDir
        }
    });
});



/**
 * Compile .scss files (sass)
 *
 */
gulp.task('sass', function() {
    gulp.src([srcDir + 'sass/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.message + ' on line ' + err.lineNumber + ' in file : ' + err.fileName);
        })
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 1 version']
            }),
            pxtorem({
                media_query: true,
                prop_white_list: ['font-size', 'line-height', 'letter-spacing', 'margin',
                    'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding',
                    'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'width',
                    'height', 'top', 'left', 'bottom', 'right', 'border-radius', 'border',
                    'border-top', 'border-right', 'border-bottom', 'border-left', 'min-width',
                    'max-width', 'min-height', 'max-height', 'background-size',
                    'background-position', 'transform'
                ]
            })
        ]))
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(cssbeautify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildDir + cssDir))
        .pipe(reload({
            stream: true
        }));
});



/**
 * Compile .js files (babel)
 *
 */
gulp.task('js', function() {
    gulp.src([srcDir + jsDir + '*.js'])
        .pipe(browserify({
            transform: ['babelify'],
            debug: true
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest(buildDir + jsDir))
        .pipe(reload({
            stream: true
        }));
});



/**
 * Minify images
 *
 */
gulp.task('img', function() {
    gulp.src([srcDir + imgDir + '**'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(buildDir + imgDir))
        .pipe(reload({
            stream: true
        }));
});



/**
 * Copy Paste .html files
 *
 */
gulp.task('html', function() {
    gulp.src(srcDir + '*.html')
        .pipe(gulp.dest(buildDir))
        .pipe(reload({
            stream: true
        }));
});



/**
 * Clean build folder
 *
 */
gulp.task('clean', function() {
    return gulp.src(buildDir, {
            read: false
        })
        .pipe(clean());
});



/**
 * Dev mode
 *
 */
gulp.task('dev', ['clean'], function() {

    gulp.start('browser_sync', 'fonts', 'sass', 'img', 'js', 'html');

    watch(srcDir + imgDir + '**', function() {
        gulp.start('img');
    });
    watch(srcDir + jsDir + '**', function() {
        gulp.start('js');
    });
    watch(srcDir + sassDir + '**/*.scss', function() {
        gulp.start('sass');
    });
    watch(srcDir + '*.html', function() {
        gulp.start('html');
    });

});



/* ------------------------------------- */



/**
 * Fonts
 *
 */
gulp.task('fonts', function() {

    // otf to ttf
    gulp.src(srcDir + 'fonts/**/*.otf')
        .pipe(otf2ttf())
        .pipe(gulp.dest(srcDir + 'fonts/'));

    // ttf to woff
    gulp.src(srcDir + 'fonts/**/*.ttf')
        .pipe(ttf2woff())
        .pipe(gulp.dest(srcDir + 'fonts/'));

    // base64 fonts
    gulp.src([srcDir + fontsDir + 'ttf.css', srcDir + fontsDir + 'woff.css'])
        .pipe(base64({
            extensions: ['woff', 'ttf'],
            maxImageSize: 120000 * 1024
        }))
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(buildDir + 'css/'));

});



/* ------------------------------------- */



/**
 * Clean dist folder
 *
 */
gulp.task('clean-dist', function() {
    return gulp.src(distDir, {
            read: false
        })
        .pipe(clean());
});



/**
 * Generate dist folder
 *
 */
gulp.task('production', ['clean-dist'], function() {

    // Move img files
    gulp.src(buildDir + imgDir + '**')
        .pipe(gulp.dest(distDir + imgDir));

    // Move html files + inline scripts
    gulp.src(buildDir + '*.html')
        .pipe(inline())
        .pipe(gulp.dest(distDir));

    // Move css font files
    gulp.src([buildDir + cssDir + 'ttf.css', buildDir + cssDir + 'woff.css'])
        .pipe(gulp.dest(distDir + cssDir));

    // Base64 img in css files files and minify (except css font files)
    gulp.src([buildDir + cssDir + '*', '!' + buildDir + cssDir + 'ttf.css', '!' + buildDir + cssDir + 'woff.css'])
        .pipe(base64({
            extensions: ['svg', 'png', 'jpg'],
            maxImageSize: 100 * 1024, // bytes
        }))
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(distDir + cssDir));

    // Uglify js files
    gulp.src(buildDir + jsDir + '*')
        .pipe(uglify())
        .pipe(gulp.dest(distDir + jsDir));

});




/* **********************************

      _____       _
     / ____|     | |
    | |  __ _   _| |_ __
    | | |_ |  | | | |  _ \
    | |__| | |_| | | |_) |
     \_____|\__,_|_|  __/  .
                   | |
                   |_|

********************************** */
