var net = require('net');
var combiner = require('stream-combiner2');

var serverStream = net.connect(5000, 'localhost', function() {
  var stream = combiner(process.stdin, serverStream, process.stdout);

  stream.on('error', function(e) {
    console.log('ended due to error ' + e);
  });
  stream.on('end', function(e) {
    console.log('ended');
  });
  stream.on('close', function() {
    console.log('closed');
  });
  stream.on('finish', function() {
    console.log('finish');
  });
  stream.on('pipe', function() {
    console.log('pipe');
  });
  stream.on('unpipe', function() {
    console.log('unpipe');
  });
});
