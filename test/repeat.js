var R = require('../source/index.js');
var eq = require('./shared/eq.js');


describe('repeat', function() {
  it('returns a lazy list of identical values', function() {
    eq(R.repeat(0, 5), [0, 0, 0, 0, 0]);
  });

  it('can accept any value, including `null`', function() {
    eq(R.repeat(null, 3), [null, null, null]);
  });

});
