import loadCSS from './vendors/loadCSS.js';

/**
 * Web fonts loading with loadCSS
 *
 */
(function(){
    var ua = navigator.userAgent,
        fontDirUrl = './css/',
        fontFileUrl = fontDirUrl + 'woff.css';
    if(ua.indexOf( 'Android' ) > -1 && ua.indexOf( 'like Gecko' ) > -1 && ua.indexOf( 'Chrome' ) === -1 ){
        fontFileUrl = fontDirUrl + 'ttf.css';
    }
    loadCSS(fontFileUrl);
}(this));
