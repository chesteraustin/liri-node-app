'use strict';

(function(){
	var request = require("request");

	var omdbSearch = {
		"searchTerm": function(movie) {
			request("http://www.omdbapi.com/?t=" + encodeURI(movie) + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

					if (!error && response.statusCode === 200) {
						console.log("Movie: " + JSON.parse(body).Title);
						console.log("Year: " + JSON.parse(body).Year);
						console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
						console.log("Country Produced: " + JSON.parse(body).Country);
						console.log("Language: " + JSON.parse(body).Language);
						console.log("Plot: " + JSON.parse(body).Plot);
						console.log("Actors: " + JSON.parse(body).Actors);
					}
			});
		}
	}

	module.exports = omdbSearch;

})();