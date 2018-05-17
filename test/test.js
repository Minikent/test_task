var assert = require('assert');
var arrayCompress = require('../');

var testCases = [
  {src: [1, 2, 3, 4, 5, 6, 7, 8], result: "1-8"},
  {src: [1, 3, 4, 5, 6, 7, 8], result: "1,3-8"},
  {src: [1, 3, 4, 5, 6, 7, 8, 10, 11, 12], result: "1,3-8,10-12"},
  {src: [1, 2, 3], result: "1-3"},
  {src: [1, 2], result: "1,2"},
  {src: [1, 2, 4], result: "1,2,4"},
  {src: [1, 2, 4, 5, 6], result: "1,2,4-6"},
  {src: [1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21], result: "1-3,7-9,15,17,19-21"},
  {src: [1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002], result: "1-6,100,1091,1999-2002"},
  {src: [1], result: "1"},
  {src: [1, 3, 5, 7, 9, 11], result: "1,3,5,7,9,11"}
];

describe('arrayCompressor', function() {
  var describeCase = function(i) {
    describe('' + testCases[i].src, function() {
      it('should return "' + testCases[i].result + '"', function() {
        arrayCompress(testCases[i].src, function(result) {
          assert.equal(result, testCases[i].result);
        });
      });
    });
  }
  for (var i in testCases) {
    describeCase(i);
  }
});
