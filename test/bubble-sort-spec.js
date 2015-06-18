var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var bubble_sort = require('../lib/bubble_sort');

describe('Bubble Sorting', function() {

  it('is a function', function() {

    bubble_sort.sort.should.be.function;
  })

  describe('input validation', function() {

    it('should only accept arrays', function() {

      bubble_sort.sort([]).should.have.length(0);
      expect(bubble_sort.sort.bind(bubble_sort, {})).to.throw('Bubble_Sort was not given valid array input to sort.');
      expect(bubble_sort.sort.bind(bubble_sort, NaN)).to.throw('Bubble_Sort was not given valid array input to sort.');
    })
  });

  describe('output validation', function() {

    var input = [6,3,8,1,0,3,2,9,7,3,2];

    it('input should return length 11', function() {

      bubble_sort.sort(input).should.have.length(11);
    });

    it('input should return [0,1,2,2,3,3,3,6,7,8,9] given [6,3,8,1,0,3,2,9,7,3,2]', function() {

      bubble_sort.sort(input).should.deep.equal([0,1,2,2,3,3,3,6,7,8,9]);
    })
  })
})