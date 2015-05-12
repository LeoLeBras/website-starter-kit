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
Console.speak();

},{"./app/core.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9hcHAvY29yZS5qcyIsIkQ6L0Ryb3Bib3gvU2l0ZXMvd3d3L1N0YXJ0ZXIvc3JjL2pzL2Zha2VfN2M3ZTU0NDAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNDTSxjQUFjO0FBQ0wsYUFEVCxjQUFjLENBQ0osS0FBSyxFQUFnQjtZQUFkLEtBQUssZ0NBQUcsS0FBSzs7OEJBRDlCLGNBQWM7O0FBRVosWUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7S0FDbkI7O2lCQUhDLGNBQWM7O2VBSVgsaUJBQUU7QUFDSCxxQkFBUztBQUNULG1CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4Qjs7O1dBUEMsY0FBYzs7O0FBVXBCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDOzs7Ozs7O3lCQ1hMLGVBQWU7Ozs7QUFDMUMsSUFBSSxPQUFPLEdBQUcsMkJBQW1CLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2pELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuY2xhc3MgQ29uc29sZVdyYXBwZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZGVidWcgPSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy5lbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc3BlYWsoKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb25zb2xlV3JhcHBlcjsiLCJpbXBvcnQgQ29uc29sZVdyYXBwZXIgZnJvbSBcIi4vYXBwL2NvcmUuanNcIjtcclxudmFyIENvbnNvbGUgPSBuZXcgQ29uc29sZVdyYXBwZXIoU3ByaW50KCdib2R5JykpO1xyXG5Db25zb2xlLnNwZWFrKCk7Il19
