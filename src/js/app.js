(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
  var Hello;
  require('./game.coffee');
  return Hello = new Test;
});



},{"./game.coffee":2}],2:[function(require,module,exports){
var Test;

Test = (function() {
  function Test(name) {
    this.name = name;
    console.log("Hello " + this.name);
  }

  return Test;

})();

module.exports = Test;



},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOlxcRHJvcGJveFxcU2l0ZXNcXHd3d1xcU3RhcnRlclxcc3JjXFxjb2ZmZWVcXGFwcC5jb2ZmZWUiLCJEOlxcRHJvcGJveFxcU2l0ZXNcXHd3d1xcU3RhcnRlclxcc3JjXFxjb2ZmZWVcXGdhbWUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBbUIsU0FBQSxHQUFBO0FBRWYsTUFBQSxLQUFBO0FBQUEsRUFBQSxPQUFBLENBQVEsZUFBUixDQUFBLENBQUE7U0FFQSxLQUFBLEdBQVEsR0FBQSxDQUFBLEtBSk87QUFBQSxDQUFuQixDQUFBLENBQUE7Ozs7O0FDQUEsSUFBQSxJQUFBOztBQUFBO0FBQ2lCLEVBQUEsY0FBQyxJQUFELEdBQUE7QUFDWCxJQURZLElBQUMsQ0FBQSxPQUFELElBQ1osQ0FBQTtBQUFBLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFBLEdBQVcsSUFBQyxDQUFBLElBQXhCLENBQUEsQ0FEVztFQUFBLENBQWI7O2NBQUE7O0lBREosQ0FBQTs7QUFBQSxNQUlNLENBQUMsT0FBUCxHQUFpQixJQUpqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KCAtPlxyXG4gICAgXHJcbiAgICByZXF1aXJlICcuL2dhbWUuY29mZmVlJ1xyXG4gICAgXHJcbiAgICBIZWxsbyA9IG5ldyBUZXN0XHJcblxyXG4pIiwiY2xhc3MgVGVzdCBcclxuICAgIGNvbnN0cnVjdG9yOiAoQG5hbWUpIC0+XHJcbiAgICAgIGNvbnNvbGUubG9nIFwiSGVsbG8gXCIgKyBAbmFtZVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUZXN0Il19
