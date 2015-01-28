# was-it-used

> Spy on 3rd party modules to tell if they were really used during testing

[![NPM][was-it-used-icon] ][was-it-used-url]

[![Build status][was-it-used-ci-image] ][was-it-used-ci-url]
[![dependencies][was-it-used-dependencies-image] ][was-it-used-dependencies-url]
[![devdependencies][was-it-used-devdependencies-image] ][was-it-used-devdependencies-url]

[was-it-used-icon]: https://nodei.co/npm/was-it-used.png?downloads=true
[was-it-used-url]: https://npmjs.org/package/was-it-used
[was-it-used-ci-image]: https://travis-ci.org/bahmutov/was-it-used.png?branch=master
[was-it-used-ci-url]: https://travis-ci.org/bahmutov/was-it-used
[was-it-used-dependencies-image]: https://david-dm.org/bahmutov/was-it-used.png
[was-it-used-dependencies-url]: https://david-dm.org/bahmutov/was-it-used
[was-it-used-devdependencies-image]: https://david-dm.org/bahmutov/was-it-used/dev-status.png
[was-it-used-devdependencies-url]: https://david-dm.org/bahmutov/was-it-used#info=devDependencies

Read [Was NodeJS module used](http://bahmutov.calepin.co/was-nodejs-module-used.html).

## Example

Figure out which modules are used

```js
var modules = ['./foo', './bar'].map(function (name) {
  return path.resolve(__dirname, name);
});
var wasIt = require('was-it-used');
wasIt(modules); // init
// use modules, even via another file that calls require('foo');
var foo = require('./foo');
foo();
var bar = require('./bar');
// bar is not used!
console.table(wasIt.used); // using console.table npm module
/*
key     value
------  -----
foo.js  true 
bar.js  false
*/
```

Implemented using [really-need](https://github.com/bahmutov/really-need) `require` wrapper.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/was-it-used/issues) on Github


## MIT License

The MIT License (MIT)

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
