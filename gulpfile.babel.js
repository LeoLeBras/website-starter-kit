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

import babel from 'gulp-babel';
import base64 from 'gulp-base64';
import browserSync, { reload }  from 'browser-sync';
import clean  from 'gulp-rimraf';
import cssbeautify  from 'gulp-cssbeautify';
import cssnano  from 'gulp-cssnano';
import gulp  from 'gulp';
import gulpif  from 'gulp-if';
import gutil  from 'gulp-util';
import imagemin  from 'gulp-imagemin';
import inline  from 'gulp-inline-source';
import pngcrush  from 'imagemin-pngcrush';
import pngquant  from 'imagemin-pngquant';
import postcss  from 'gulp-postcss';
import sass  from 'gulp-sass';
import sourcemaps  from 'gulp-sourcemaps';
import uglify  from 'gulp-uglify';
import ttf2woff  from 'gulp-ttf2woff';
import ttf2woff2  from 'gulp-ttf2woff2';
import watch  from 'gulp-watch';
import config from './config.js';
const { srcDir, buildDir, distDir, cssDir, imgDir, sassDir, fontsDir, jsDir } = config.dir;



/* ------------------------------------- */



/**
 * Sync modifications
 *
 */
gulp.task('browser_sync', () => (
    browserSync({
        server: {
            baseDir: buildDir
        },
        port: config.server.port
    })
));



/**
 * Compile .scss files (sass)
 *
 */
gulp.task('sass', () => {

    let customFonts = {},
        weights = [],
        fonts = config.fonts.custom;

    // Weights
    weights[300] = 'Light';
    weights[400] = 'Regular';
    weights[600] = 'SemiBold';
    weights[700] = 'Bold';
    weights[800] = 'ExtraBold';

    // Parse fonts
    for(let font in fonts) {
        customFonts[font] = {variants: {}};
        fonts[font].map(weight => {
            let url = {};
            config.fonts.formats.split(' ').map(format => {
                url[format] = `./../fonts/${font.replace(/\s+/g, '')}/${font.replace(/\s+/g, '')}-${weights[weight]}.${format}`
            });
            customFonts[font]['variants'][weight] = {
                normal: { url: url }
            };
        });
    }

    return gulp.src([srcDir + 'sass/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss([
            require('autoprefixer')({
                browsers: config.css.autoprefixer
            }),
            require('postcss-pxtorem')({
                media_query: true,
                prop_white_list: []
            }),
            require('postcss-font-magician')({
                custom: customFonts,
                formats: config.fonts.formats
            })
        ]))
        .pipe(cssbeautify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(buildDir + cssDir))
        .pipe(reload({
            stream: true
        }))
});



/**
 * Compile .js files (babel)
 *
 */
gulp.task('js', () => (
    gulp.src([srcDir + jsDir + '*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel(config.javascript.babel))
        .on('error', function(error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(sourcemaps.write('.'))
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
gulp.task('clean', () => (
    gulp.src(buildDir, {
        read: false
    }).pipe(clean())
));



/**
 * Fonts
 *
 */
gulp.task('fonts', () => {

    // ttf
    gulp.src(srcDir + 'fonts/**/*.ttf')
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
    watch(srcDir + imgDir + '**', () => gulp.start('img'));
    watch(srcDir + jsDir + '**', () => gulp.start('js'));
    watch(srcDir + sassDir + '**/*.scss', () => gulp.start('sass'));
    watch(srcDir + fontsDir + '**/*', () => gulp.start('fonts'));
    watch(srcDir + '*.html', () => gulp.start('html'));
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
        .pipe(cssnano())
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
