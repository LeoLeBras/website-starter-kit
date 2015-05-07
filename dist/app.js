(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsoleWrapper = (function () {
    function ConsoleWrapper() {
        var debug = arguments[0] === undefined ? false : arguments[0];

        _classCallCheck(this, ConsoleWrapper);

        this.name = "Console wrapper!";
    }

    _createClass(ConsoleWrapper, [{
        key: "speak",
        value: function speak() {
            debugger;
            console.log("Hello, I am ", this); //this == the object instance.
        }
    }]);

    return ConsoleWrapper;
})();

module.exports = ConsoleWrapper; //set what can be imported from this file

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9zcmMvZmFrZV85ZGMyZmNmMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FNLGNBQWM7QUFDTCxhQURULGNBQWMsR0FDVTtZQUFkLEtBQUssZ0NBQUcsS0FBSzs7OEJBRHZCLGNBQWM7O0FBRVosWUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztLQUNsQzs7aUJBSEMsY0FBYzs7ZUFJWCxpQkFBRTtBQUNILHFCQUFTO0FBQ1QsbUJBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JDOzs7V0FQQyxjQUFjOzs7QUFXcEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ29uc29sZVdyYXBwZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihkZWJ1ZyA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnQ29uc29sZSB3cmFwcGVyISc7XHJcbiAgICB9XHJcbiAgICBzcGVhaygpe1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8sIEkgYW0gXCIsIHRoaXMpOyAvL3RoaXMgPT0gdGhlIG9iamVjdCBpbnN0YW5jZS5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uc29sZVdyYXBwZXI7IC8vc2V0IHdoYXQgY2FuIGJlIGltcG9ydGVkIGZyb20gdGhpcyBmaWxlIl19
