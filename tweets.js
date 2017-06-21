'use strict';

(function(){
	var key = require("./key");
	var Twitter = require("twitter");

	var tweets = {
		"getTweets": function() {
			var client = new Twitter({
				consumer_key: key.twitterKeys.consumer_key,
				consumer_secret: key.twitterKeys.consumer_secret,
				access_token_key: key.twitterKeys.access_token_key,
				access_token_secret: key.twitterKeys.access_token_secret
			});

			var params = {screen_name: 'xaboomoomoo'};

			client.get('statuses/user_timeline', params, function(error, tweets, response) {
				if (!error) {
					for (var i= 0; i < tweets.length; i++) {
						console.log("Tweet sent on " + tweets[i].created_at + " is [" + tweets[i].text + "]");
					}
				}
			});
		}
	}

	module.exports = tweets;

})();