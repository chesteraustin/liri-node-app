'use strict';

(function(){
	var tweets = require("./tweets")
	var songs = require("./songs");
	var movies = require("./movies");
	var random = require("./random");

	var command = process.argv[2];
	var term = process.argv[3];

	switch(command) {
		case "my-tweets":
			tweets.getTweets()
			break;
		case "spotify-this-song":
			songs.searchTerm(term);
			break;
		case "movie-this":
			movies.searchTerm(term);
			break;
		case "do-what-it-says":
			random.randomAction();
			break;
		default:
			console.log("Please select a command `my-tweets` or `spotify-this-song \"SONG-TITLE\"` or `movie-this \"MOVIE-TITLE\"` or `do-what-it-says`");
	}
})();