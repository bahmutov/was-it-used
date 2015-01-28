var path = require('path');
var modules = ['./foo', './bar'].map(function (name) {
  return path.resolve(__dirname, name);
});

require('lazy-ass');
var check = require('check-more-types');
var wasIt = require('..');
require('console.table');

wasIt(modules);

require('./use-foo');

console.log('after finished using foo');
console.table(wasIt.used);

var filenames = Object.keys(wasIt.used);
la(filenames.length === 2, 'should have info about two modules', wasIt.used);
filenames.forEach(function (filename) {
  if (/foo\.js$/.test(filename)) {
    la(wasIt.used[filename], filename, 'should have been used', wasIt.used);
  } else if (/bar\.js$/.test(filename)) {
    la(!wasIt.used[filename], filename, 'should NOT have been used', wasIt.used);
  }
});
