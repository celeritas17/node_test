var dgram = require('dgram');
var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
  console.log(msg + " ");
  server.send(msg, 0, msg.length, rinfo.port , "localhost", function(err, bytes) {
  });
});

server.on("listening", function () {
  var addr = server.address();
  console.log("server at port " + addr.port);
});

server.bind(41234);



