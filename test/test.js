'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#print', function() {

    it('should convert 8 digits', function() {
        var result = numFormatter(12345678);
        expect(result).to.equal('12,345,678');
    });
});
