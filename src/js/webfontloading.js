(function(){

    /* **
        loadCSS

        (FilamentGroup.com - v0.1.0 - 2014-07-24
        http://filamentgroup.com/
        Copyright (c) 2014 Filament Group Copyright 2014 @scottjehl, Filament Group, Inc. Licensed MIT)
        
    ** */
    
    var doc = window.document;
    
    function loadCSS( href, before, media ){
        
        var ss = window.document.createElement( "link" );
        var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
        var sheets = window.document.styleSheets;
        ss.rel = "stylesheet";
        ss.href = href;
        ss.media = "all";
        ref.parentNode.insertBefore( ss, ref );
        
        function toggleMedia(){
            var defined;
            for( var i = 0; i < sheets.length; i++ ){
                if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
                    defined = true;
                }
            }
            
            if( defined ){
                ss.media = media || "all";
            }
            else {
                setTimeout( toggleMedia );
            }
        }
        toggleMedia();
        return ss;
    }
    
    if( !( "querySelector" in doc ) ){
        return;
    }
    
    var supportsWoff2 = (function( win ){
        if( !( "FontFace" in win ) ) {
            return false;
        }
        var f = new win.FontFace( "t", 'url( "data:application/font-woff2," ) format( "woff2" )', {} );
        f.load().catch(function() {});
        return f.status == 'loading';
    })( window );

    
    var ua = navigator.userAgent,
        fontDirUrl = './css/',
        fontFileUrl = fontDirUrl + 'woff.css';

    /*if( supportsWoff2 ) {
        fontFileUrl = fontDirUrl + '--woff2.css';
    }*/
    
    if(ua.indexOf( "Android" ) > -1 && ua.indexOf( "like Gecko" ) > -1 && ua.indexOf( "Chrome" ) === -1 ){
        fontFileUrl = fontDirUrl + 'ttf.css';
    }

    loadCSS( fontFileUrl );

}( this ));