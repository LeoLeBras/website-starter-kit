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

var _coreJs = require("./core.js");

var _coreJs2 = _interopRequireDefault(_coreJs);

var Console = new _coreJs2["default"](Sprint("body"));
Console.speak();

},{"./core.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9zcmMvY29yZS5qcyIsIkQ6L0Ryb3Bib3gvU2l0ZXMvd3d3L1N0YXJ0ZXIvc3JjL2pzL3NyYy9mYWtlXzIwOGVmMDJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQU0sY0FBYztBQUNMLGFBRFQsY0FBYyxDQUNKLEtBQUssRUFBZ0I7WUFBZCxLQUFLLGdDQUFHLEtBQUs7OzhCQUQ5QixjQUFjOztBQUVaLFlBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0tBQ25COztpQkFIQyxjQUFjOztlQUlYLGlCQUFFO0FBQ0gscUJBQVM7QUFDVCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7OztXQVBDLGNBQWM7OztBQVVwQixNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQzs7Ozs7OztzQkNWTCxXQUFXOzs7O0FBQ3RDLElBQUksT0FBTyxHQUFHLHdCQUFtQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNqRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ29uc29sZVdyYXBwZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZGVidWcgPSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy5lbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc3BlYWsoKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb25zb2xlV3JhcHBlcjsiLCJpbXBvcnQgQ29uc29sZVdyYXBwZXIgZnJvbSBcIi4vY29yZS5qc1wiO1xyXG52YXIgQ29uc29sZSA9IG5ldyBDb25zb2xlV3JhcHBlcihTcHJpbnQoJ2JvZHknKSk7XHJcbkNvbnNvbGUuc3BlYWsoKTsiXX0=
