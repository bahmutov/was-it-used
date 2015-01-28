require('lazy-ass');
var check = require('check-more-types');
var quote = require('quote');
var path = require('path');
require = require('really-need');

var used = {};

function isPrimitive(x) {
  return check.string(x) ||
    check.number(x) ||
    check.bool(x);
}

function proxyExports(options, exports, filename) {
  options = options || {};

  la(check.unemptyString(filename), 'missing loaded filename');
  console.log('loaded', filename);

  if (!check.has(used, filename)) {
    used[filename] = false;
  }

  if (isPrimitive(exports)) {
    used[filename] = true;
    return exports;
  }

  if (check.fn(exports)) {
    console.log('proxying a function', quote(exports.name));
    return function proxyFn() {
      used[filename] = true;
      return exports.apply(null, arguments);
    };
  }

  return exports;
}

function wasIt(options, names) {
  if (arguments.length === 1) {
    names = options;
    options = {};
  }
  options = options || {};
  la(check.arrayOfStrings(names), 'expected list of module names', names);
  names.forEach(function (name) {
    console.log('require', quote(name));
    require(name, {
      bust: true,
      post: proxyExports.bind(null, options)
    });
  });
}

wasIt.used = used;
module.exports = wasIt;

