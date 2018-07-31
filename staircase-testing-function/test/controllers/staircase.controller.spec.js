var assert = require('assert');

var staircasecontroller =  require('../../controllers/staircase.controller.js');

// beforeEach('Setting up the staircase', function(){
//     console.log('beforeEach');
//     staircasecontroller.staircase(['20']);
// });

describe('staircasecontroller', function () {

    describe('staircase', function(){

        it('should return possible path for top of the staircase', function(){
            var totalpath = staircasecontroller.staircase('20')
            assert.equal(totalpath, true);
        });


    });



});
