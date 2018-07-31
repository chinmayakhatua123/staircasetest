var assert = require('assert');
var staircasecontroller =  require('../../controllers/staircase.controller.js');

describe('staircasecontroller', function () {

    describe('staircase', function(){

        it('should return true if valid first stiarcase ', function(){
            var count = staircasecontroller.staircase('0')
            assert.equal(count, 0);
        });

        it('should return true if valid second stiarcase ', function(){
            var count = staircasecontroller.staircase('1')
            assert.equal(count, 1);
        });

        it('should return true if valid third stiarcase ', function(){
            var count = staircasecontroller.staircase('3')
            assert.equal(count, 1);
        });

    });

});