(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function () {

    /* **
        loadCSS
         (FilamentGroup.com - v0.1.0 - 2014-07-24
        http://filamentgroup.com/
        Copyright (c) 2014 Filament Group Copyright 2014 @scottjehl, Filament Group, Inc. Licensed MIT)
        
    ** */

    var doc = window.document;

    function loadCSS(href, before, media) {

        var ss = window.document.createElement("link");
        var ref = before || window.document.getElementsByTagName("script")[0];
        var sheets = window.document.styleSheets;
        ss.rel = "stylesheet";
        ss.href = href;
        ss.media = "all";
        ref.parentNode.insertBefore(ss, ref);

        function toggleMedia() {
            var defined;
            for (var i = 0; i < sheets.length; i++) {
                if (sheets[i].href && sheets[i].href.indexOf(href) > -1) {
                    defined = true;
                }
            }

            if (defined) {
                ss.media = media || "all";
            } else {
                setTimeout(toggleMedia);
            }
        }
        toggleMedia();
        return ss;
    }

    if (!("querySelector" in doc)) {
        return;
    }
    /*
    var supportsWoff2 = (function( win ){
        if( !( "FontFace" in win ) ) {
            return false;
        }
        var f = new win.FontFace( "t", 'url( "data:application/font-woff2," ) format( "woff2" )', {} );
        f.load().catch(function() {});
        return f.status == 'loading';
    })( window );*/

    var ua = navigator.userAgent,
        fontDirUrl = "./css/",
        fontFileUrl = fontDirUrl + "woff.css";

    /*if( supportsWoff2 ) {
        fontFileUrl = fontDirUrl + '--woff2.css';
    }*/

    if (ua.indexOf("Android") > -1 && ua.indexOf("like Gecko") > -1 && ua.indexOf("Chrome") === -1) {
        fontFileUrl = fontDirUrl + "ttf.css";
    }

    loadCSS(fontFileUrl);
})(undefined);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9mYWtlXzFkYTk3Mzc5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxBQUFDLENBQUEsWUFBVTs7Ozs7Ozs7OztBQVdQLFFBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0FBRTFCLGFBQVMsT0FBTyxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztBQUVuQyxZQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUUsQ0FBQztBQUNqRCxZQUFJLEdBQUcsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBRSxRQUFRLENBQUUsQ0FBRSxDQUFDLENBQUUsQ0FBQztBQUMxRSxZQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztBQUN6QyxVQUFFLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztBQUN0QixVQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNmLFVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFFLEVBQUUsRUFBRSxHQUFHLENBQUUsQ0FBQzs7QUFFdkMsaUJBQVMsV0FBVyxHQUFFO0FBQ2xCLGdCQUFJLE9BQU8sQ0FBQztBQUNaLGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxvQkFBSSxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNELDJCQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjthQUNKOztBQUVELGdCQUFJLE9BQU8sRUFBRTtBQUNULGtCQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7YUFDN0IsTUFDSTtBQUNELDBCQUFVLENBQUUsV0FBVyxDQUFFLENBQUM7YUFDN0I7U0FDSjtBQUNELG1CQUFXLEVBQUUsQ0FBQztBQUNkLGVBQU8sRUFBRSxDQUFDO0tBQ2I7O0FBRUQsUUFBSSxFQUFHLGVBQWUsSUFBSSxHQUFHLENBQUEsQUFBRSxFQUFFO0FBQzdCLGVBQU87S0FDVjs7Ozs7Ozs7Ozs7QUFZRCxRQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUztRQUN4QixVQUFVLEdBQUcsUUFBUTtRQUNyQixXQUFXLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7Ozs7O0FBTTFDLFFBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBRSxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFFLFlBQVksQ0FBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDakcsbUJBQVcsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO0tBQ3hDOztBQUVELFdBQU8sQ0FBRSxXQUFXLENBQUUsQ0FBQztDQUUxQixDQUFBLFdBQVEsQ0FBRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKXtcblxuICAgIC8qICoqXG4gICAgICAgIGxvYWRDU1NcblxuICAgICAgICAoRmlsYW1lbnRHcm91cC5jb20gLSB2MC4xLjAgLSAyMDE0LTA3LTI0XG4gICAgICAgIGh0dHA6Ly9maWxhbWVudGdyb3VwLmNvbS9cbiAgICAgICAgQ29weXJpZ2h0IChjKSAyMDE0IEZpbGFtZW50IEdyb3VwIENvcHlyaWdodCAyMDE0IEBzY290dGplaGwsIEZpbGFtZW50IEdyb3VwLCBJbmMuIExpY2Vuc2VkIE1JVClcbiAgICAgICAgXG4gICAgKiogKi9cbiAgICBcbiAgICB2YXIgZG9jID0gd2luZG93LmRvY3VtZW50O1xuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWRDU1MoIGhyZWYsIGJlZm9yZSwgbWVkaWEgKXtcbiAgICAgICAgXG4gICAgICAgIHZhciBzcyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImxpbmtcIiApO1xuICAgICAgICB2YXIgcmVmID0gYmVmb3JlIHx8IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJzY3JpcHRcIiApWyAwIF07XG4gICAgICAgIHZhciBzaGVldHMgPSB3aW5kb3cuZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgICAgIHNzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBzcy5ocmVmID0gaHJlZjtcbiAgICAgICAgc3MubWVkaWEgPSBcImFsbFwiO1xuICAgICAgICByZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIHNzLCByZWYgKTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lZGlhKCl7XG4gICAgICAgICAgICB2YXIgZGVmaW5lZDtcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgICAgICAgaWYoIHNoZWV0c1sgaSBdLmhyZWYgJiYgc2hlZXRzWyBpIF0uaHJlZi5pbmRleE9mKCBocmVmICkgPiAtMSApe1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCBkZWZpbmVkICl7XG4gICAgICAgICAgICAgICAgc3MubWVkaWEgPSBtZWRpYSB8fCBcImFsbFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggdG9nZ2xlTWVkaWEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVNZWRpYSgpO1xuICAgICAgICByZXR1cm4gc3M7XG4gICAgfVxuICAgIFxuICAgIGlmKCAhKCBcInF1ZXJ5U2VsZWN0b3JcIiBpbiBkb2MgKSApe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qXG4gICAgdmFyIHN1cHBvcnRzV29mZjIgPSAoZnVuY3Rpb24oIHdpbiApe1xuICAgICAgICBpZiggISggXCJGb250RmFjZVwiIGluIHdpbiApICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmID0gbmV3IHdpbi5Gb250RmFjZSggXCJ0XCIsICd1cmwoIFwiZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmYyLFwiICkgZm9ybWF0KCBcIndvZmYyXCIgKScsIHt9ICk7XG4gICAgICAgIGYubG9hZCgpLmNhdGNoKGZ1bmN0aW9uKCkge30pO1xuICAgICAgICByZXR1cm4gZi5zdGF0dXMgPT0gJ2xvYWRpbmcnO1xuICAgIH0pKCB3aW5kb3cgKTsqL1xuXG4gICAgXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgZm9udERpclVybCA9ICcuL2Nzcy8nLFxuICAgICAgICBmb250RmlsZVVybCA9IGZvbnREaXJVcmwgKyAnd29mZi5jc3MnO1xuXG4gICAgLyppZiggc3VwcG9ydHNXb2ZmMiApIHtcbiAgICAgICAgZm9udEZpbGVVcmwgPSBmb250RGlyVXJsICsgJy0td29mZjIuY3NzJztcbiAgICB9Ki9cbiAgICBcbiAgICBpZih1YS5pbmRleE9mKCBcIkFuZHJvaWRcIiApID4gLTEgJiYgdWEuaW5kZXhPZiggXCJsaWtlIEdlY2tvXCIgKSA+IC0xICYmIHVhLmluZGV4T2YoIFwiQ2hyb21lXCIgKSA9PT0gLTEgKXtcbiAgICAgICAgZm9udEZpbGVVcmwgPSBmb250RGlyVXJsICsgJ3R0Zi5jc3MnO1xuICAgIH1cblxuICAgIGxvYWRDU1MoIGZvbnRGaWxlVXJsICk7XG5cbn0oIHRoaXMgKSk7Il19
