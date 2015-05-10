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
    otf2ttf = require('otf2ttf');
    zip = require('gulp-zip'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    pngquant = require('imagemin-pngquant'),
    babelify = require('babelify'),
    clean = require('gulp-rimraf'),
    sourcemaps = require('gulp-sourcemaps'),
    cssbeautify = require('gulp-cssbeautify'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    autoprefixer = require('gulp-autoprefixer'),
    ttf2eot = require('gulp-ttf2eot'),
    ttf2woff = require('gulp-ttf2woff'),
    base64 = require('gulp-base64'),
    browserify = require('gulp-browserify'),
    minifyCSS = require('gulp-minify-css');






/* ------------------------------------- */






/**
* Set autoprefixer config
*
* @var string
*/

var prefix = ["last 1 version", "> 1%", "ie 8", "ie"];






/**
* Config dir folders
*
* @var strings
*/

var srcDir = './src/';
var buildDir = __dirname + '/build/';
var distDir = __dirname + '/dist/';

var cssDir = 'css/';
var imgDir = 'img/';
var jsDir = 'js/';
var sassDir = 'sass/';
var fontsDir = 'fonts/';




/* ------------------------------------- */





/**
* Sync modifications
*
* @with  browser-sync
*/

var reload = browserSync.reload;

gulp.task('browser_sync', function(){
   browserSync({
       server: {
           baseDir: buildDir
       }
   });
});

gulp.task('bs-reload', function(){
   browserSync.reload();
});






/**
* Compile Sass
*
* @with  gulp-sourcemaps gulp-sass gulp-minify-css gulp-sourcemaps gulp-cssbeautify
* @return CSS
*/

gulp.task('sass', function(){
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
       .pipe(gulp.dest(buildDir + cssDir));
});






/**
* Compile ES6+ syntax in ES5
*
* @with babelify and gulp-gutil
* @return js
*/

gulp.task('js', function () {
   gulp.src([srcDir + jsDir + '*.js'])
      .pipe(browserify({
          transform: ['babelify'],
          debug: true
      }))
      .on('error', gutil.log)
      .pipe(gulp.dest(buildDir + jsDir));
});






/**
* Minify images
*
* @with  gulp-imagemin imagemin-pngcrush imagemin-pngquant
* @return images
*/

gulp.task('img', function(){
   gulp.src([srcDir + imgDir + '**'])
       .pipe(imagemin({
           progressive: true,
           svgoPlugins: [],
           use: [pngquant()]
       }))
       .pipe(gulp.dest(buildDir + imgDir));
});








/**
* Copy Paste .html files
*
* @return html
*/

gulp.task('html', function(){
   gulp.src(srcDir + '*.html')
      .pipe(gulp.dest(buildDir)); 
});








/**
* Copy Paste vendors files
*
* @return files copy
*/

gulp.task('vendors', function(){
   gulp.src(srcDir + 'vendors/**')
      .pipe(gulp.dest(buildDir + 'vendors/')); 
});






/**
* Dev mode
*
*/

gulp.task('dev', ['browser_sync', 'sass', 'img', 'js', 'html', 'vendors'], function(){
   gulp.watch([srcDir + imgDir + '**'], ['img']);
   gulp.watch([srcDir + jsDir + '**'], ['js']);
   gulp.watch([srcDir + sassDir + '**/*.scss'], ['sass']);
   gulp.watch([srcDir + '*.html'], ['html']);
   gulp.watch([srcDir + 'vendors/**'], ['vendors']);
   gulp.watch([
    buildDir + jsDir + '**', 
    buildDir + imgDir + '**', 
    buildDir + cssDir + '**', 
    buildDir + '*.html', 
    buildDir + 'vendors/**'],
    ['bs-reload']);
});








/**
* Fonts
*
* @with otf2ttf gulp-ttf2woff gulp-base64 gulp-minify-css 
* @return fonts in base64 encode
*/

gulp.task('fonts', function () {

   // otf to ttf
   gulp.src(srcDir + 'fonts/**/*.otf')
      .pipe(otf2ttf())
      .pipe(gulp.dest(srcDir + 'fonts/')); 

   // ttf to woff
   gulp.src(srcDir + 'fonts/**/*.ttf')
      .pipe(ttf2woff())
      .pipe(gulp.dest(srcDir + 'fonts/'));    
   
   // base64 fonts
   gulp.src(srcDir + fontsDir + '*.css')
      .pipe(base64({
          extensions: ['woff', 'ttf'],
          maxImageSize: 12000 * 1024
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
* @with  gulp-rimraf
*/

gulp.task('clean', function () {
   return gulp.src(distDir, {
           read: false
       })
       .pipe(clean());
});






/**
* Generate dist folder
*
* @with  gulp-useref gulp-if gulp-base64
*/

var assets = useref.assets();

gulp.task('dist', ['clean'], function(){
   
   gulp.src(buildDir + '*.html')
       .pipe(assets)
       .pipe(gulpif('*.css', minifyCSS({
           keepSpecialComments: 0
       }), base64()))
       .pipe(gulpif('*.js', uglify()))
       .pipe(assets.restore())
       .pipe(useref())
       .pipe(gulp.dest(distDir));

   gulp.src(buildDir + cssDir + '*.css')
       .pipe(gulp.dest(distDir + cssDir))

});






/**
* Zip prod folder
*
* @with  gulp-zip
*/

gulp.task('zip', ['dist'], function () {
   gulp.src(distDir + '*')
       .pipe(zip('dist.zip'))
       .pipe(gulp.dest('./'));
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
