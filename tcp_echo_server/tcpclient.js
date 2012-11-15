var net = require('net');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var client = net.connect({port: 8100}, function(){console.log("client connected"); });

client.on("data", function(data){
	console.log(data.toString());
	rl.question("> ", function(answer) {
		if (answer.toString() != "q" && answer.toString() != "Q")
  			client.write(answer + " ");
  		else 
  			client.end();
	});
});

client.on("end", function(){
	console.log("client disconnected");
});