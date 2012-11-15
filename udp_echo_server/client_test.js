var dgram = require('dgram');
var readline = require('readline');
var client = dgram.createSocket("udp4");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("> ", function(answer) {
  var new_message = new Buffer(answer);
  client.send(new_message, 0, new_message.length, 41234, "localhost", function(err, bytes) {
    
  });
});

client.on("message", function (msg, rinfo) {
  console.log(msg + " ");
  rl.question("> ", function(answer) {
  var new_message = new Buffer(answer);
  client.send(new_message, 0, new_message.length, 41234, "localhost", function(err, bytes) {});

});
  
  });

