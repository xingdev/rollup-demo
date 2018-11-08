var zxb = (function () {
  'use strict';

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

}());
