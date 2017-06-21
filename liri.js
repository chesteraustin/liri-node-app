'use strict';

(function(){
	var key = require("./key");
	var songs = require("./songs");
	var movies = require("./movies");

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
			movies.searchTerm(term);
			break;
		case "do-what-it-says":
			console.log("do-what-it-says");
			break;
		default:
			console.log("default");
	}
})();