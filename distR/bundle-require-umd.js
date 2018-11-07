(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.zxb = factory());
}(this, (function () { 'use strict';

  function add(a, b) {
    return a + b;
  }

  function minus(a, b) {
    return a - b;
  }

  const math = {
    add,
    minus
  };
  var module$1 = math;

  var mathRequire = {
  	module: module$1
  };

  console.log(mathRequire);

  var mainRequire = {

  };

  return mainRequire;

})));
