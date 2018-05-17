var ResultMember = function(lowerBoundary) {
  this.lowerBoundary = lowerBoundary;
  this.upperBoundary = lowerBoundary;
}

ResultMember.prototype = {
  toString: function() {
    if (this.upperBoundary == this.lowerBoundary) {
      return '' + this.lowerBoundary;
    } else if (1 == this.upperBoundary - this.lowerBoundary) {
      return this.lowerBoundary + ',' + this.upperBoundary;
    } else {
      return this.lowerBoundary + '-' + this.upperBoundary;
    }
  },
  incrementBoundary: function() {
    this.upperBoundary = ++this.upperBoundary;
  }
};
module.exports = ResultMember;
