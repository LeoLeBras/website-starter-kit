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
 * Date of creative : 01/04/2014
 * Last updated: 11/06/2015
 */

import base64 from 'gulp-base64';
import browserify  from 'gulp-browserify';
import browserSync, { reload }  from 'browser-sync';
import clean  from 'gulp-rimraf';
import cssbeautify  from 'gulp-cssbeautify';
import cssnano  from 'gulp-cssnano';
import gulp  from 'gulp';
import gulpif  from 'gulp-if';
import gutil  from 'gulp-util';
import imagemin  from 'gulp-imagemin';
import inline  from 'gulp-inline-source';
import otf2ttf  from 'otf2ttf';
import pngcrush  from 'imagemin-pngcrush';
import pngquant  from 'imagemin-pngquant';
import postcss  from 'gulp-postcss';
import sass  from 'gulp-sass';
import sourcemaps  from 'gulp-sourcemaps';
import uglify  from 'gulp-uglify';
import useref  from 'gulp-useref';
import ttf2woff  from 'gulp-ttf2woff';
import ttf2woff2  from 'gulp-ttf2woff2';
import watch  from 'gulp-watch';
import zip  from 'gulp-zip';

const srcDir = __dirname + '/src/',
      buildDir = './__build__/',
      distDir = __dirname + '/dist/',
      cssDir = 'css/',
      imgDir = 'img/',
      jsDir = 'js/',
      sassDir = 'sass/',
      fontsDir = 'fonts/';



/* ------------------------------------- */



/**
 * Sync modifications
 *
 */
gulp.task('browser_sync', () => (
    browserSync({
        server: {
            baseDir: buildDir
        }
    })
));



/**
 * Compile .scss files (sass)
 *
 */
gulp.task('sass', () => (
    gulp.src([srcDir + 'sass/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', (error) => {
            console.log(error.message + ' on line ' + error.lineNumber + ' in file : ' + error.fileName);
        })
        .pipe(postcss([
            require('autoprefixer')({
                browsers: ['last 1 version']
            }),
            require('postcss-pxtorem')({
                media_query: true,
                prop_white_list: []
            }),
            require('postcss-font-magician')({
                custom: require(srcDir + fontsDir + 'config.js'),
                formats: 'woff2 woff ttf'
            })
        ]))
        .pipe(cssnano())
        .pipe(cssbeautify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildDir + cssDir))
        .pipe(reload({
            stream: true
        }))
));



/**
 * Compile .js files (babel)
 *
 */
gulp.task('js', () => (
    gulp.src([srcDir + jsDir + '*.js'])
        .pipe(browserify({
            transform: ['babelify'],
            debug: true
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest(buildDir + jsDir))
        .pipe(reload({
            stream: true
        }))
));



/**
 * Minify images
 *
 */
gulp.task('img', () => (
    gulp.src([srcDir + imgDir + '**'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(buildDir + imgDir))
        .pipe(reload({
            stream: true
        }))
));



/**
 * Copy Paste .html files
 *
 */
gulp.task('html', () => (
    gulp.src(srcDir + '*.html')
        .pipe(gulp.dest(buildDir))
        .pipe(reload({
            stream: true
        }))
));



/**
 * Clean build folder
 *
 */
gulp.task('clean', () => {
    return gulp.src(buildDir, {
            read: false
        })
        .pipe(clean());
});



/**
 * Fonts
 *
 */
gulp.task('fonts', () => {

    // ttf
    gulp.src(srcDir + 'fonts/**/*.ttf')
        .pipe(gulp.dest(buildDir + fontsDir));

    // otf to ttf
    gulp.src(srcDir + 'fonts/**/*.otf')
        .pipe(otf2ttf())
        .pipe(gulp.dest(buildDir + fontsDir));

    // ttf to woff
    gulp.src(srcDir + 'fonts/**/*.ttf')
        .pipe(ttf2woff())
        .pipe(gulp.dest(buildDir + fontsDir));

    // ttf to woff2
    gulp.src(srcDir + 'fonts/**/*.ttf')
        .pipe(ttf2woff2())
        .pipe(gulp.dest(buildDir + fontsDir));

});



/**
 * Dev mode
 *
 */
gulp.task('dev', ['clean'], () => {

    gulp.start('browser_sync', 'fonts', 'sass', 'img', 'js', 'html');

    watch(srcDir + imgDir + '**', () => {
        gulp.start('img');
    });
    watch(srcDir + jsDir + '**', () => {
        gulp.start('js');
    });
    watch(srcDir + sassDir + '**/*.scss', () => {
        gulp.start('sass');
    });
    watch(srcDir + fontsDir + '**/*', () => {
        gulp.start('fonts');
    });
    watch(srcDir + '*.html', () => {
        gulp.start('html');
    });

});



/* ------------------------------------- */



/**
 * Clean dist folder
 *
 */
gulp.task('clean-dist', () => (
    gulp.src(distDir, {
        read: false
    }).pipe(clean())
));



/**
 * Generate dist folder
 *
 */
gulp.task('production', ['clean-dist'], () => {

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
            extensions: ['svg', 'png', 'jpg']
        }))
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(distDir + cssDir));

    // Uglify js files
    gulp.src(buildDir + jsDir + '*')
        .pipe(uglify())
        .pipe(gulp.dest(distDir + jsDir))

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
