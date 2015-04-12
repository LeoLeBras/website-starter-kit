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
  * Update : 2015-04-10
  */



 /**
  * Import dependencies
  *
  */

 var gulp = require('gulp'),
     browserSync = require('browser-sync'),
     zip = require('gulp-zip'),
     imagemin = require('gulp-imagemin'),
     pngcrush = require('imagemin-pngcrush'),
     pngquant = require('imagemin-pngquant'),
     clean = require('gulp-rimraf'),
     sourcemaps = require('gulp-sourcemaps'),
     cssbeautify = require('gulp-cssbeautify'),
     sass = require('gulp-sass'),
     coffee = require('gulp-coffee'),
     gutil = require('gulp-util'),
     gulpif = require('gulp-if'),
     uglify = require('gulp-uglify'),
     useref = require('gulp-useref'),
     autoprefixer = require('gulp-autoprefixer'),
     ttf2eot = require('gulp-ttf2eot'),
     ttf2woff = require('gulp-ttf2woff'),
     base64 = require('gulp-base64'),
     minifyCSS = require('gulp-minify-css');



 /* ------------------------------------- */



 /**
  * Set autoprefixer
  *
  * @var string
  */

 var prefix = ["last 1 version", "> 1%", "ie 8", "ie"];






 /**
  * Config src folder
  *
  * @var string
  */

 var srcDir = './src/';






 /**
  * Config prod folder
  *
  * @var string
  */
 var prodDir = __dirname + '/prod/';




 /* ------------------------------------- */




 /**
  * Sync modifications
  *
  * @with  browser-sync
  */

 var reload = browserSync.reload;

 gulp.task('browser_sync', function () {
     browserSync({
         server: {
             baseDir: srcDir
         }
     });
 });

 gulp.task('bs-reload', function () {
     browserSync.reload();
 });






 /**
  * Compile Sass
  *
  * @with  gulp-sourcemaps gulp-sass gulp-minify-css
  */

 gulp.task('sass', function () {
     gulp.src([srcDir + 'sass/**/*.scss'])
         .pipe(sourcemaps.init())
         .pipe(sass())
         .on('error', function (err) {
             console.log(err.message);
         })
         .pipe(minifyCSS({
             keepSpecialComments: 0
         }))
         .pipe(autoprefixer(prefix))
         .pipe(cssbeautify())
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(srcDir + 'css/'));
 });






 /**
  * Minify images
  *
  * @with  gulp-imagemi imagemin-pngcrush imagemin-pngquant
  */

 gulp.task('img', function () {
     gulp.src([srcDir + 'img/**'])
         .pipe(imagemin({
             progressive: true,
             svgoPlugins: [
                 {removeViewBox: false},
                 {removeUselessStrokeAndFill: false},
                 {removeEmptyAttrs: false}],
             use: [pngquant()]
         }))
         .pipe(gulp.dest(prodDir + 'img'));
 });






 /**
  * Remove prod folder
  *
  * @with  gulp-rimraf
  */

 gulp.task('clean', function () {
     return gulp.src(prodDir, {
             read: false
         })
         .pipe(clean());
 });






 /**
  * Compile .coffee in .js
  *
  * @with  gulp-coffee and gulp-util
  */

 gulp.task('coffee', function () {
     gulp.src(srcDir + 'coffee/**')
         .pipe(coffee({
             bare: true
         }).on('error', gutil.log))
         .pipe(gulp.dest(srcDir + 'js/'))
 });






 /**
  * Fonts
  *
  * @with gulp-ttf2woff gulp-base64 gulp-concat
  */

 gulp.task('fonts', function () {
     // .woff
     gulp.src(srcDir + 'fonts/**/*.ttf')
        .pipe(ttf2woff())
        .pipe(gulp.dest(srcDir + 'fonts/'));    
     
     // base64 if ttf or woff
     gulp.src(srcDir + 'fonts/*.css')
        .pipe(base64())
        .pipe(base64({
            extensions: ['woff', 'ttf'],
            maxImageSize: 1200 * 1024
        }))
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(srcDir + 'css/'));
 });






 /**
  * Dev mode
  *
  */

 gulp.task('dev', ['browser_sync', 'sass', 'img', 'coffee'], function () {
     gulp.watch([srcDir + 'sass/**/*.scss'], ['sass']);
     gulp.watch([srcDir + 'img/**'], ['img']);
     gulp.watch([srcDir + 'coffee/**'], ['coffee']);
     gulp.watch([srcDir + 'js/**', srcDir + 'img/**', srcDir + 'css/**', srcDir + '*.html'], ['bs-reload']);
 });






 /**
  * Zip prod folder
  *
  * @with  gulp-zip
  */

 gulp.task('zip', ['prod'], function () {
     gulp.src(prodDir + '**')
         .pipe(zip('prod.zip'))
         .pipe(gulp.dest(__dirname + './'));
 });






 /**
  * Generate prod folder
  *
  */

 var assets = useref.assets();

 gulp.task('prod', ['clean'], function(){
     gulp.src(srcDir + '*.html')
         .pipe(assets)
         .pipe(gulpif('*.css', minifyCSS({
             keepSpecialComments: 0
         })))
         .pipe(gulpif('*.js', uglify()))
         .pipe(assets.restore())
         .pipe(useref())
         .pipe(gulp.dest(prodDir));
     
     gulp.src(srcDir + 'css/*.css')
         .pipe(gulp.dest(prodDir + 'css/'));
 });



 /* ------------------------------------- 
 
        _____       _       
       / ____|     | |      
      | |  __ _   _| |_ __  
      | | |_ |  | | | |  _ \ 
      | |__| | |_| | | |_) |
       \_____|\__,_|_|  __/  .
                     | |    
                     |_|    
 ------------------------------------- */
