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
 * Date of creative : 2014-01-04
 * Last updated: 2015-11-27
 */

import base64 from 'gulp-base64';
import babel from 'gulp-babel';
import browserSync, { reload }  from 'browser-sync';
import clean  from 'gulp-rimraf';
import cssbeautify  from 'gulp-cssbeautify';
import cssnano  from 'gulp-cssnano';
import del from 'del';
import gulp  from 'gulp';
import imagemin  from 'gulp-imagemin';
import inline  from 'gulp-inline-source';
import pngquant  from 'imagemin-pngquant';
import postcss  from 'gulp-postcss';
import sass  from 'gulp-sass';
import sourcemaps  from 'gulp-sourcemaps';
import uglify  from 'gulp-uglify';
import ttf2woff  from 'gulp-ttf2woff';
import ttf2woff2  from 'gulp-ttf2woff2';
import watch  from 'gulp-watch';
import webpack  from 'gulp-webpack';
import config from './config.js';
const { srcDir, buildDir, distDir, cssDir, imgDir, sassDir, fontsDir, jsDir } = config.dir;



// Browser sync
gulp.task('browser_sync', () => (
    browserSync({
        server: {
            baseDir: buildDir
        },
        port: config.server.port,
        online: true
    })
));



// Sass
gulp.task('sass', () => {

    let customFonts = {},
        weights = [],
        fonts = config.fonts.custom;

    weights[300] = 'Light';
    weights[400] = 'Regular';
    weights[600] = 'SemiBold';
    weights[700] = 'Bold';
    weights[800] = 'ExtraBold';

    for(let font in fonts) {
        customFonts[font] = {variants: {}};
        fonts[font].map(weight => {
            let url = {};
            config.fonts.formats.split(' ').map(format => {
                url[format] = `./../fonts/${font.replace(/\s+/g, '')}/${font.replace(/\s+/g, '')}-${weights[weight]}.${format}`;
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
        }));
});



// Babel
gulp.task('js', () => (
    gulp.src(`${srcDir + jsDir}*.js`)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(buildDir + jsDir))
        .pipe(reload({
            stream: true
        }))
));



// Images
gulp.task('img', () => (
    gulp.src(srcDir + imgDir + '**')
        .pipe(imagemin())
        .pipe(gulp.dest(buildDir + imgDir))
        .pipe(reload({
            stream: true
        }))
));



// HTML
gulp.task('html', () => (
    gulp.src(srcDir + '*.html')
        .pipe(gulp.dest(buildDir))
        .pipe(reload({
            stream: true
        }))
));



// Cleaner
gulp.task('clean', () => (
    gulp.src(buildDir, {
        read: false
    }).pipe(clean())
));



// Fonts
gulp.task('fonts', () => {

    // ttf to woff
    gulp.src(srcDir + 'fonts/**/*.ttf')
        .pipe(ttf2woff())
        .pipe(gulp.dest(buildDir + fontsDir));

    // ttf to woff2
    gulp.src(srcDir + 'fonts/**/*.ttf')
        .pipe(ttf2woff2())
        .pipe(gulp.dest(buildDir + fontsDir));

});



// Dev
gulp.task('dev', ['clean'], () => {
    gulp.start('browser_sync', 'fonts', 'sass', 'img', 'js', 'html');
    watch(srcDir + imgDir + '**', () => gulp.start('img'));
    watch(srcDir + sassDir + '**/*.scss', () => gulp.start('sass'));
    watch(srcDir + fontsDir + '**/*', () => gulp.start('fonts'));
    watch(srcDir + '*.html', () => gulp.start('html'));
});



// Clean dist dir
gulp.task('clean-dist', () => del([distDir + '**/*']) );



// Prod
gulp.task('build', ['clean-dist'], () => {

    // Move img files
    gulp.src(buildDir + imgDir + '**')
        .pipe(gulp.dest(distDir + imgDir));

    // Move html files + inline scripts
    gulp.src(buildDir + '*.html')
        .pipe(inline())
        .pipe(gulp.dest(distDir));

    // Move fonts files
    gulp.src(buildDir + fontsDir + '**/*')
        .pipe(gulp.dest(distDir + fontsDir));

    // Base64 img in css files files and minify (except css font files)
    gulp.src(buildDir + cssDir + '*')
        .pipe(base64({
            extensions: ['svg', 'png', 'jpg']
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(distDir + cssDir));

    // Uglify js files
    gulp.src(buildDir + jsDir + '**/*.js')
        .pipe(babel(config.javascript.babel))
        .pipe(uglify())
        .pipe(gulp.dest(distDir + jsDir));

});




/*

      _____       _
     / ____|     | |
    | |  __ _   _| |_ __
    | | |_ |  | | | |  _ \
    | |__| | |_| | | |_) |
     \_____|\__,_|_|  __/  .
                   | |
                   |_|

*/
