(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ConsoleWrapper = (function () {
    function ConsoleWrapper(value) {
        var debug = arguments[1] === undefined ? false : arguments[1];

        _classCallCheck(this, ConsoleWrapper);

        this.el = value;
        this.value = 'di';
    }

    _createClass(ConsoleWrapper, [{
        key: 'speak',
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _coreJs = require("./core.js");

var _coreJs2 = _interopRequireDefault(_coreJs);

var Foo = (function (_ConsoleWrapper) {
    function Foo() {
        _classCallCheck(this, Foo);

        if (_ConsoleWrapper != null) {
            _ConsoleWrapper.apply(this, arguments);
        }
    }

    _inherits(Foo, _ConsoleWrapper);

    _createClass(Foo, [{
        key: "run",
        value: function run() {
            console.log(this.el);
        }
    }]);

    return Foo;
})(_coreJs2["default"]);

module.exports = Foo;

},{"./core.js":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _appCoreJs = require('./app/core.js');

var _appCoreJs2 = _interopRequireDefault(_appCoreJs);

var _appFooJs = require('./app/foo.js');

var _appFooJs2 = _interopRequireDefault(_appFooJs);

var Console = new _appCoreJs2['default']('Hello');
Console.speak('Hello !');

var Bar = new _appFooJs2['default']();
Bar.run();

},{"./app/core.js":1,"./app/foo.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9hcHAvY29yZS5qcyIsIkQ6L0Ryb3Bib3gvU2l0ZXMvd3d3L1N0YXJ0ZXIvc3JjL2pzL2FwcC9mb28uanMiLCJEOi9Ecm9wYm94L1NpdGVzL3d3dy9TdGFydGVyL3NyYy9qcy9mYWtlXzJhNDY1MzE5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQ00sY0FBYztBQUNMLGFBRFQsY0FBYyxDQUNKLEtBQUssRUFBZ0I7WUFBZCxLQUFLLGdDQUFHLEtBQUs7OzhCQUQ5QixjQUFjOztBQUVaLFlBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOztpQkFKQyxjQUFjOztlQUtYLGlCQUFFO0FBQ0gscUJBQVM7QUFDVCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7OztXQVJDLGNBQWM7OztBQVdwQixNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7OztzQkNaTCxXQUFXOzs7O0lBRWhDLEdBQUc7YUFBSCxHQUFHOzhCQUFILEdBQUc7Ozs7Ozs7Y0FBSCxHQUFHOztpQkFBSCxHQUFHOztlQUNGLGVBQUU7QUFDSixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckI7OztXQUhDLEdBQUc7OztBQU1ULE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7O3lCQ1JNLGVBQWU7Ozs7d0JBSTFCLGNBQWM7Ozs7QUFIOUIsSUFBSSxPQUFPLEdBQUcsMkJBQW1CLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBR3pCLElBQUksR0FBRyxHQUFHLDJCQUFTLENBQUM7QUFDcEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG5jbGFzcyBDb25zb2xlV3JhcHBlcntcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBkZWJ1ZyA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLmVsID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICdkaSc7XHJcbiAgICB9XHJcbiAgICBzcGVhaygpe1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnNvbGVXcmFwcGVyOyIsImltcG9ydCBDb25zb2xlV3JhcHBlciBmcm9tIFwiLi9jb3JlLmpzXCI7XHJcblxyXG5jbGFzcyBGb28gZXh0ZW5kcyBDb25zb2xlV3JhcHBlcntcclxuICAgIHJ1bigpe1xyXG4gICAgXHRjb25zb2xlLmxvZyh0aGlzLmVsKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGb287IiwiaW1wb3J0IENvbnNvbGVXcmFwcGVyIGZyb20gXCIuL2FwcC9jb3JlLmpzXCI7XHJcbnZhciBDb25zb2xlID0gbmV3IENvbnNvbGVXcmFwcGVyKCdIZWxsbycpO1xyXG5Db25zb2xlLnNwZWFrKCdIZWxsbyAhJyk7XHJcblxyXG5pbXBvcnQgRm9vIGZyb20gXCIuL2FwcC9mb28uanNcIjtcclxudmFyIEJhciA9IG5ldyBGb28oKTtcclxuQmFyLnJ1bigpOyJdfQ==
