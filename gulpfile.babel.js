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
 import browserSync, { reload }  from 'browser-sync';
 import cssbeautify  from 'gulp-cssbeautify';
 import cssnano  from 'gulp-cssnano';
 import cache from 'gulp-cached';
 import del from 'del';
 import gulp  from 'gulp';
 import gulpIf  from 'gulp-if';
 import imagemin  from 'gulp-imagemin';
 import path from 'path';
 import pngquant  from 'imagemin-pngquant';
 import postcss  from 'gulp-postcss';
 import sass  from 'gulp-sass';
 import sourcemaps  from 'gulp-sourcemaps';
 import ttf2woff  from 'gulp-ttf2woff';
 import ttf2woff2  from 'gulp-ttf2woff2';
 import watch  from 'gulp-watch';
 import webpack from 'webpack';
 import webpackStream  from 'webpack-stream';
 import config from './config.js';
 import { argv } from 'yargs';
 const { srcDir, buildDir, distDir, cssDir, imgDir, sassDir, fontsDir, jsDir } = config.dir;

 const stream = argv.watch ? true : false;
 const production = argv.prod ? true : false;
 const destDir =  production ? distDir : buildDir;

 // Browser sync
 gulp.task('browser_sync', () => {
     browserSync({
         server: {
             baseDir: buildDir
         },
         port: config.server.port,
         online: true
     });

     watch(buildDir + jsDir + '*.js', () => reload());
     watch(buildDir + imgDir + '*', () => reload());
     watch(buildDir + '*.html', () => reload());
 });



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

     gulp.src(srcDir + sassDir + '*.scss')
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
         .pipe(gulpIf(stream, cssbeautify()))
         .pipe(gulpIf(stream, sourcemaps.write('.')))
         .pipe(gulpIf(production, base64({ extensions: ['svg', 'png', 'jpg'] })))
         .pipe(gulpIf(production, cssnano()))
         .pipe(gulp.dest(destDir + cssDir))
         .pipe(gulpIf(stream, reload({ stream })));
 });



 // Babel
 gulp.task('js', () => {
     let entry = {};
     config.javascript.entry.map(item => {
         entry = { ...entry, [item]: `${config.dir.srcDir}${config.dir.jsDir}${item}` };
     });

     gulp.src(`${srcDir + jsDir}*.js`)
         .pipe(webpackStream({
             devtool: 'source-map',
             entry: entry,
             output: {
                 path: destDir + config.dir.jsDir,
                 filename: '[name]'
             },
             resolve: {
                 extensions: ['', '.js'],
                 modulesDirectories: [
                     'node_modules',
                     'src/js/',
                     'src/js/vendors',
                     'src/js/utils'
                 ]
             },
             watch: stream,
             module: {
                 loaders: [{
                     loader: 'babel-loader',
                     query: config.javascript.babel,
                     exclude: [
                         path.resolve(__dirname, 'node_modules/'),
                         path.resolve(__dirname, 'src/js/vendors/')
                     ],
                 }]
             },
             plugins: [
                  new webpack.NoErrorsPlugin()
              ].concat(
                  production ? [
                      new webpack.optimize.UglifyJsPlugin(),
                  ] : []
              )
         }))
         .pipe(gulp.dest(destDir + jsDir));
 });



 // Images
 gulp.task('img', () => {
     gulp.src([srcDir + imgDir + '**'])
         .pipe(cache('img'))
         .pipe(imagemin({
             progressive: true,
             svgoPlugins: [],
             use: [pngquant()]
         }))
         .pipe(gulp.dest(destDir + imgDir));
 });



 // HTML
 gulp.task('html', () => {
     gulp.src(srcDir + '*.html')
         .pipe(cache('html'))
         .pipe(gulp.dest(destDir));
 });



 // Cleaner
 gulp.task('clean', () => del(buildDir + '**/*', {
     force: true
 }));



 // Fonts
 gulp.task('fonts', () => {

     // ttf to woff
     gulp.src(srcDir + 'fonts/**/*.ttf')
         .pipe(ttf2woff())
         .pipe(gulp.dest(destDir + fontsDir));

     // ttf to woff2
     gulp.src(srcDir + 'fonts/**/*.ttf')
         .pipe(ttf2woff2())
         .pipe(gulp.dest(destDir + fontsDir));

 });



 // Dev
 gulp.task('dev', ['clean'], () => {
     gulp.start('fonts', 'sass', 'img', 'js', 'html');

     if(stream) {
         gulp.start('browser_sync');
         watch(srcDir + sassDir + '**/*.scss',  () => gulp.start('sass'));
         watch(srcDir + imgDir + '*',  () => gulp.start('img'));
         watch(srcDir + '*.html',  () => gulp.start('html'));
     }
 });



 // Clean dist dir
 gulp.task('clean-dist', () => {
     del(distDir + '**/*', {
         force: true
     });
 });



 // Prod
 gulp.task('build', ['clean-dist'], () => {
     gulp.start('fonts', 'sass', 'img', 'js', 'html');
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
