(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsoleWrapper = (function () {
    function ConsoleWrapper(value) {
        var debug = arguments[1] === undefined ? false : arguments[1];

        _classCallCheck(this, ConsoleWrapper);

        this.el = value;
    }

    _createClass(ConsoleWrapper, [{
        key: "speak",
        value: function speak() {
            debugger;
            console.log(this.el);
        }
    }]);

    return ConsoleWrapper;
})();

module.exports = ConsoleWrapper;

},{}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _appCoreJs = require("./app/core.js");

var _appCoreJs2 = _interopRequireDefault(_appCoreJs);

var Console = new _appCoreJs2["default"](Sprint("body"));
Console.speakw;

},{"./app/core.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9hcHAvY29yZS5qcyIsIkQ6L0Ryb3Bib3gvU2l0ZXMvd3d3L1N0YXJ0ZXIvc3JjL2pzL2Zha2VfY2Y5ZmU0NGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNDTSxjQUFjO0FBQ0wsYUFEVCxjQUFjLENBQ0osS0FBSyxFQUFnQjtZQUFkLEtBQUssZ0NBQUcsS0FBSzs7OEJBRDlCLGNBQWM7O0FBRVosWUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7S0FDbkI7O2lCQUhDLGNBQWM7O2VBSVgsaUJBQUU7QUFDSCxxQkFBUztBQUNULG1CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4Qjs7O1dBUEMsY0FBYzs7O0FBVXBCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDOzs7Ozs7O3lCQ1hMLGVBQWU7Ozs7QUFDMUMsSUFBSSxPQUFPLEdBQUcsMkJBQW1CLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbmNsYXNzIENvbnNvbGVXcmFwcGVye1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGRlYnVnID0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuZWwgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHNwZWFrKCl7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29uc29sZVdyYXBwZXI7IiwiaW1wb3J0IENvbnNvbGVXcmFwcGVyIGZyb20gXCIuL2FwcC9jb3JlLmpzXCI7XHJcbnZhciBDb25zb2xlID0gbmV3IENvbnNvbGVXcmFwcGVyKFNwcmludCgnYm9keScpKTtcclxuQ29uc29sZS5zcGVha3ciXX0=
