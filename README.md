# liri-node-app
## This app will give the user various commands to search for songs, concerts, and movies.

# Instructions (Once files are cloned onto the local machine with node installed).
1. ## Open liri.js in the terminal and run the following commands to install the packages.

    >npm install axios

    >npm install moment

    >npm install node-spotify-api

1. ## You will need to go to https://developer.spotify.com/my-applications/#!/ to create an app and recieve your Spotfiy keys. Create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

    #Spotify API keys

    SPOTIFY_ID=your-spotify-id

    SPOTIFY_SECRET=your-spotify-secret


1. ## You will now have access to the following commands to search what you want using node in terminal, replacing the contents of the quotes with desired search terms.

    >node liri js movie-this "MOVIE NAME"

    >node liri js concert-this "ARTIST NAME"

    >node liri js spotify-this-song "SONG NAME"

# Screenshots of results below:
Movie-this:
![Movie](/images/movie)