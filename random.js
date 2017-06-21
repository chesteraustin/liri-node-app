'use strict';

(function(){
	var fs = require("fs");
	var exec = require('child_process').exec;

	var randomAction = {
		"randomAction": function() {
			//Read random.txt
			fs.readFile("random.txt", "utf8", function(err, data) {
				if (err) {
					return console.log(err);
				}
				data = data.split(",");
				var cmd = "node liri " + data[0] + " " + data[1]
				console.log(cmd)
				exec(cmd, function(error, stdout, stderr) {
					console.log(stdout);
				});
			});
		}
	}

	module.exports = randomAction;

})();