var zxb = (function () {
  'use strict';

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

}());
