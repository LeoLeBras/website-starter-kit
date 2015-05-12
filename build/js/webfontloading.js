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

    var supportsWoff2 = (function (win) {
        if (!("FontFace" in win)) {
            return false;
        }
        var f = new win.FontFace("t", "url( \"data:application/font-woff2,\" ) format( \"woff2\" )", {});
        f.load()["catch"](function () {});
        return f.status == "loading";
    })(window);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9mYWtlXzJjYzQ5MTBiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxBQUFDLENBQUEsWUFBVTs7Ozs7Ozs7OztBQVdQLFFBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0FBRTFCLGFBQVMsT0FBTyxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztBQUVuQyxZQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUUsQ0FBQztBQUNqRCxZQUFJLEdBQUcsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBRSxRQUFRLENBQUUsQ0FBRSxDQUFDLENBQUUsQ0FBQztBQUMxRSxZQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztBQUN6QyxVQUFFLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztBQUN0QixVQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNmLFVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFFLEVBQUUsRUFBRSxHQUFHLENBQUUsQ0FBQzs7QUFFdkMsaUJBQVMsV0FBVyxHQUFFO0FBQ2xCLGdCQUFJLE9BQU8sQ0FBQztBQUNaLGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxvQkFBSSxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNELDJCQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjthQUNKOztBQUVELGdCQUFJLE9BQU8sRUFBRTtBQUNULGtCQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUM7YUFDN0IsTUFDSTtBQUNELDBCQUFVLENBQUUsV0FBVyxDQUFFLENBQUM7YUFDN0I7U0FDSjtBQUNELG1CQUFXLEVBQUUsQ0FBQztBQUNkLGVBQU8sRUFBRSxDQUFDO0tBQ2I7O0FBRUQsUUFBSSxFQUFHLGVBQWUsSUFBSSxHQUFHLENBQUEsQUFBRSxFQUFFO0FBQzdCLGVBQU87S0FDVjs7QUFFRCxRQUFJLGFBQWEsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ2hDLFlBQUksRUFBRyxVQUFVLElBQUksR0FBRyxDQUFBLEFBQUUsRUFBRztBQUN6QixtQkFBTyxLQUFLLENBQUM7U0FDaEI7QUFDRCxZQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUUsR0FBRyxFQUFFLDZEQUF5RCxFQUFFLEVBQUUsQ0FBRSxDQUFDO0FBQy9GLFNBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBTSxDQUFDLFlBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUIsZUFBTyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztLQUNoQyxDQUFBLENBQUcsTUFBTSxDQUFFLENBQUM7O0FBR2IsUUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVM7UUFDeEIsVUFBVSxHQUFHLFFBQVE7UUFDckIsV0FBVyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7Ozs7OztBQU0xQyxRQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUUsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBRSxZQUFZLENBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ2pHLG1CQUFXLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQztLQUN4Qzs7QUFFRCxXQUFPLENBQUUsV0FBVyxDQUFFLENBQUM7Q0FFMUIsQ0FBQSxXQUFRLENBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCl7XG5cbiAgICAvKiAqKlxuICAgICAgICBsb2FkQ1NTXG5cbiAgICAgICAgKEZpbGFtZW50R3JvdXAuY29tIC0gdjAuMS4wIC0gMjAxNC0wNy0yNFxuICAgICAgICBodHRwOi8vZmlsYW1lbnRncm91cC5jb20vXG4gICAgICAgIENvcHlyaWdodCAoYykgMjAxNCBGaWxhbWVudCBHcm91cCBDb3B5cmlnaHQgMjAxNCBAc2NvdHRqZWhsLCBGaWxhbWVudCBHcm91cCwgSW5jLiBMaWNlbnNlZCBNSVQpXG4gICAgICAgIFxuICAgICoqICovXG4gICAgXG4gICAgdmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkQ1NTKCBocmVmLCBiZWZvcmUsIG1lZGlhICl7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3MgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJsaW5rXCIgKTtcbiAgICAgICAgdmFyIHJlZiA9IGJlZm9yZSB8fCB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwic2NyaXB0XCIgKVsgMCBdO1xuICAgICAgICB2YXIgc2hlZXRzID0gd2luZG93LmRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgICAgICBzcy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgc3MuaHJlZiA9IGhyZWY7XG4gICAgICAgIHNzLm1lZGlhID0gXCJhbGxcIjtcbiAgICAgICAgcmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBzcywgcmVmICk7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVNZWRpYSgpe1xuICAgICAgICAgICAgdmFyIGRlZmluZWQ7XG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7IGkrKyApe1xuICAgICAgICAgICAgICAgIGlmKCBzaGVldHNbIGkgXS5ocmVmICYmIHNoZWV0c1sgaSBdLmhyZWYuaW5kZXhPZiggaHJlZiApID4gLTEgKXtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIHNzLm1lZGlhID0gbWVkaWEgfHwgXCJhbGxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIHRvZ2dsZU1lZGlhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlTWVkaWEoKTtcbiAgICAgICAgcmV0dXJuIHNzO1xuICAgIH1cbiAgICBcbiAgICBpZiggISggXCJxdWVyeVNlbGVjdG9yXCIgaW4gZG9jICkgKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YXIgc3VwcG9ydHNXb2ZmMiA9IChmdW5jdGlvbiggd2luICl7XG4gICAgICAgIGlmKCAhKCBcIkZvbnRGYWNlXCIgaW4gd2luICkgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGYgPSBuZXcgd2luLkZvbnRGYWNlKCBcInRcIiwgJ3VybCggXCJkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjIsXCIgKSBmb3JtYXQoIFwid29mZjJcIiApJywge30gKTtcbiAgICAgICAgZi5sb2FkKCkuY2F0Y2goZnVuY3Rpb24oKSB7fSk7XG4gICAgICAgIHJldHVybiBmLnN0YXR1cyA9PSAnbG9hZGluZyc7XG4gICAgfSkoIHdpbmRvdyApO1xuXG4gICAgXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgZm9udERpclVybCA9ICcuL2Nzcy8nLFxuICAgICAgICBmb250RmlsZVVybCA9IGZvbnREaXJVcmwgKyAnd29mZi5jc3MnO1xuXG4gICAgLyppZiggc3VwcG9ydHNXb2ZmMiApIHtcbiAgICAgICAgZm9udEZpbGVVcmwgPSBmb250RGlyVXJsICsgJy0td29mZjIuY3NzJztcbiAgICB9Ki9cbiAgICBcbiAgICBpZih1YS5pbmRleE9mKCBcIkFuZHJvaWRcIiApID4gLTEgJiYgdWEuaW5kZXhPZiggXCJsaWtlIEdlY2tvXCIgKSA+IC0xICYmIHVhLmluZGV4T2YoIFwiQ2hyb21lXCIgKSA9PT0gLTEgKXtcbiAgICAgICAgZm9udEZpbGVVcmwgPSBmb250RGlyVXJsICsgJ3R0Zi5jc3MnO1xuICAgIH1cblxuICAgIGxvYWRDU1MoIGZvbnRGaWxlVXJsICk7XG5cbn0oIHRoaXMgKSk7Il19
