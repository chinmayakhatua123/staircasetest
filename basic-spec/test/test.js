var assert = require('assert');
describe('Sample Test String ', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("sampletest".length, 8);
    });
 it('should return second charachter of the string', function () {
        assert.equal("Testing".charAt(1), 'e');
        //throw {myError:'throwing error to fail test'}
    });
});
