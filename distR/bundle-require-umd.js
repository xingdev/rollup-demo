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

  var mathRequire = {
    add,
    minus
  };

  const result = mathRequire.add(1, 2);

  var mainRequire = result;

  return mainRequire;

})));
