require("dotenv").config();
var axios = require('axios');
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

switch (process.argv[2]) {
    case "concert-this":
        concertThis(process.argv[3]);
        break;  
    case "spotify-this-song":
        spotifyThis(process.argv[3]);
        break;
    case "movie-this":
        movieThis(process.argv[3]);
        break;
    case "spotify-this-song":
        break;
    default:
}

function concertThis(arg) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp";
    axios.get(queryUrl)
        .then(function (response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city);
            console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
}

function spotifyThis(arg) {
    if (arg) {
        spotify.search({
            type: 'track',
            query: arg
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Name: " + data.tracks.items[0].track.name);
            console.log("Album Name: " + data.tracks.items[0].album.name);
            console.log("Preview of Song: " + data.tracks.items[0].preview_url);
        });
    } else {
        axios.search({
                type: 'track',
                query: 'The Sign'
            })
            .then(function (data) {
                console.log(data.tracks.items[0].album.name);
                console.log(data.tracks.items[0].artists[0].name);
            })
            .catch(function (err) {
                console.log(err);
            });

    }
}

function movieThis(arg) {
    if(arg){
        var movieQueryUrl = "https://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=trilogy";
    axios.get(movieQueryUrl).then(function (response) {
        var urlResponse = response;
        console.log("Title: " + urlResponse.data.Title);
        console.log("Year: " + urlResponse.data.Year);
        console.log("IMDB Rating: " + urlResponse.data.imdbRating);
        console.log(urlResponse.data.Ratings[1]);
        console.log("Countries Movie was produced in: " + urlResponse.data.Country);
        console.log("Language: " + urlResponse.data.Language);
        console.log("Plot: " + urlResponse.data.Plot);
        console.log("Actors: " + urlResponse.data.Actors);
    });
    } else {
    var movieQueryUrl = "https://www.omdbapi.com/?t=" + "Mr.Nobody"+ "&y=&plot=short&apikey=trilogy";
    axios.get(movieQueryUrl).then(function (response) {
        var urlResponse = response;
        console.log("Title: " + urlResponse.data.Title);
        console.log("Year: " + urlResponse.data.Year);
        console.log("IMDB Rating: " + urlResponse.data.imdbRating);
        console.log(urlResponse.data.Ratings[1]);
        console.log("Countries Movie was produced in: " + urlResponse.data.Country);
        console.log("Language: " + urlResponse.data.Language);
        console.log("Plot: " + urlResponse.data.Plot);
        console.log("Actors: " + urlResponse.data.Actors);
    })
    };
}