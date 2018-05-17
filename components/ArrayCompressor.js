var ResultMember = require('./ResultMember');

var ArrayCompressor = function(arr) {
  this.src = arr;
  this.resultMembers = [];;
};

ArrayCompressor.prototype = {
  process: function() {
    for(var i in this.src) {
      this.processOneArrayElement(i);
    }
    return this.resultMembers.join(',');
  },

  processOneArrayElement: function(i) {
    if (i == 0) {
      this.initFirst();
    } else {
      var diff = this.src[i] - this.lastNumber;
      if (diff == 1) {
        this.currentResultMember.incrementBoundary();
        this.lastNumber = this.src[i];
      } else if (diff > 1) {
        this.createNewResultMember(i);
      } else {
        throw new Exception('wrong array format');
      }
    }
  },

  initFirst: function() {
    this.lastNumber = this.src[0];
    this.currentResultMember = new ResultMember(this.src[0]);
    this.resultMembers.push(this.currentResultMember);
  },

  createNewResultMember: function(i) {
    this.currentResultMember = new ResultMember(this.src[i]);
    this.resultMembers.push(this.currentResultMember);
    this.lastNumber = this.src[i];
  }
};

module.exports = ArrayCompressor;
