'use strict';

(function(){
	var key = require("./key");
	var songs = require("./songs");

	var command = process.argv[2];
	var term = process.argv[3];

	switch(command) {
		case "my-tweets":
			console.log("my-tweets");
			break;
		case "spotify-this-song":
			songs.searchTerm(term);
			break;
		case "movie-this":
			console.log("movie-this");
			break;
		case "do-what-it-says":
			console.log("do-what-it-says");
			break;
		default:
			console.log("default");
	}
})();