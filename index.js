var ArrayCompressor = require('./components/ArrayCompressor');

function arrayCompress(arr, callback) {
  // Не использовал Promise и async/await, знаю о них, но нужно повторить тему
  setImmediate(function() {
    var compressor = new ArrayCompressor(arr);
    callback(compressor.process());
  });
}
module.exports = arrayCompress;
