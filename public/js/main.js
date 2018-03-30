const API_KEY = '8b847caf'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

function searchDB(event, url) {
    fetch(`${API_URL}&t=${event.movieTitle.value}`)
        .then(function(data){
            return data.json();
        })

        .then(function(json) {
            // console.log(json.Ratings.map(source => console.log(source.Source + ' ' + source.Value)));
            populateMovieData(json);
        })

    event.movieTitle.value = '';
}

function populateMovieData(movieObj) {
  document.querySelector('#titleOfMovie').innerHTML = movieObj.Title;
  document.querySelector('#releasedDate').innerHTML = movieObj.Released;
  document.querySelector('#movieDirector').innerHTML = movieObj.Director;
  document.querySelector('#production').innerHTML = movieObj.Production;
  document.querySelector('#genre').innerHTML = movieObj.Genre;
  document.querySelector('#movieImage').src = movieObj.Poster;

  // document.querySelector('#movieRatings').innerHTML =
  movieObj.Ratings.map(rating =>
    document.querySelector('#movieRatings').innerHTML += (`<li>${rating.Source}: ${rating.Value}</li>`)
  );

  console.log(movieObj);
}
