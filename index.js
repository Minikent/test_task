var ArrayCompressor = require('./components/ArrayCompressor');
function arrayCompress(arr, callback) {
  setImmediate(function() {
    var compressor = new ArrayCompressor(arr);
    callback(compressor.process());
  });
}
module.exports = arrayCompress;
