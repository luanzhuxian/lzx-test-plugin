'use strict';

var a = 1;

var b = 2;

var c = a + b;
var testFn = function testFn() {
  debugger;
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
};

exports.a = a;
exports.b = b;
exports.c = c;
exports.testFn = testFn;
//# sourceMappingURL=lzx-test-plugin.js.map
