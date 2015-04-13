(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
  var HelloWorld, Test;
  Test = require('./game.coffee');
  HelloWorld = new Test('World');
  return console.log('Hsello ! :)');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxTdGFydGVyXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOlxcRHJvcGJveFxcU2l0ZXNcXHd3d1xcU3RhcnRlclxcc3JjXFxjb2ZmZWVcXGFwcC5jb2ZmZWUiLCJEOlxcRHJvcGJveFxcU2l0ZXNcXHd3d1xcU3RhcnRlclxcc3JjXFxjb2ZmZWVcXGdhbWUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBbUIsU0FBQSxHQUFBO0FBRWYsTUFBQSxnQkFBQTtBQUFBLEVBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxlQUFSLENBQVAsQ0FBQTtBQUFBLEVBQ0EsVUFBQSxHQUFpQixJQUFBLElBQUEsQ0FBSyxPQUFMLENBRGpCLENBQUE7U0FJQSxPQUFPLENBQUMsR0FBUixDQUFZLGFBQVosRUFOZTtBQUFBLENBQW5CLENBQUEsQ0FBQTs7Ozs7QUNBQSxJQUFBLElBQUE7O0FBQUE7QUFDaUIsRUFBQSxjQUFDLElBQUQsR0FBQTtBQUNYLElBRFksSUFBQyxDQUFBLE9BQUQsSUFDWixDQUFBO0FBQUEsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQUEsR0FBVyxJQUFDLENBQUEsSUFBeEIsQ0FBQSxDQURXO0VBQUEsQ0FBYjs7Y0FBQTs7SUFESixDQUFBOztBQUFBLE1BSU0sQ0FBQyxPQUFQLEdBQWlCLElBSmpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChkb2N1bWVudCkucmVhZHkoIC0+XHJcbiAgICBcclxuICAgIFRlc3QgPSByZXF1aXJlKCcuL2dhbWUuY29mZmVlJyk7XHJcbiAgICBIZWxsb1dvcmxkID0gbmV3IFRlc3QoJ1dvcmxkJylcclxuICAgIFxyXG4gICAgIyBSZXR1cm4gYSB0ZXN0IGNvbnNvbGUgbG9nXHJcbiAgICBjb25zb2xlLmxvZygnSHNlbGxvICEgOiknKVxyXG5cclxuKSIsImNsYXNzIFRlc3QgXHJcbiAgICBjb25zdHJ1Y3RvcjogKEBuYW1lKSAtPlxyXG4gICAgICBjb25zb2xlLmxvZyBcIkhlbGxvIFwiICsgQG5hbWVcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGVzdCJdfQ==
