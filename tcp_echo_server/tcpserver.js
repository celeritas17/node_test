var net = require('net');
var server = net.createServer(function(target){
	console.log("server connected");
	target.on("end", function(){
		console.log("disconnected");
	});
	
	target.on("data", function(data){
		console.log("Got this: " + data + "from: " + target.remoteAddress + "\n");
		target.write(data + " ");
	});

	target.write("I'm listening...\r\n(Type 'q' or 'Q' to quit)\n");

});

server.listen(8100, function(){console.log("server bound-- touchdown");});
