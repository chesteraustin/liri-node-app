'use strict';

(function(){
	var spotifySearch = {
		"title": "item is spotifySearch",
		"searchTerm": function(song) {
			var Spotify = require('node-spotify-api');
			var spotify = new Spotify({id:"f3def5c7d1ad4b289d9c1022ffaad070", secret: "63aad47916024a6c91753ddf1e8a5b18"});
			
			spotify.search({
				type: 'track', 
				query: song
			}, function(err, data) {
				if (err) {
					return console.log('Error occurred: ' + err);
				}
				console.log("Artist: " + data.tracks.items[0].artists[0].name);
				console.log("Song Name: " + data.tracks.items[0].name);
				console.log("Preview Link: " + data.tracks.items[0].preview_url);
				console.log("Album Title: " + data.tracks.items[0].album.name);
 			});
		}
	}

	module.exports = spotifySearch;

})();