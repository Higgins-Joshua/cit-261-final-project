const API_KEY = '8b847caf'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`
const YT_API_KEY = 'AIzaSyAV6o7zGYoPS_5TxASAXM7IXGegO5ZYHe0'
const YT_API_URL = `https://www.googleapis.com/youtube/v3/search?key=${YT_API_KEY}&part=snippet`

function searchDB(event, url) {
    document.querySelector('#movieRatings').innerHTML = '';
    fetch(`${API_URL}&t=${event.movieTitle.value}`)
        .then(function(data){
            return data.json();
        })

        .then(function(json) {
            populateMovieData(json);
            window.location.href = "#t2";
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

  movieObj.Ratings.map(rating =>
    document.querySelector('#movieRatings').innerHTML += (`<li>${rating.Source}: ${rating.Value}</li>`)
  );

  fetch(`${YT_API_URL}&q=${movieObj.Title} trailer`)
    .then(function(data) {
      return data.json();
    })

    .then(function(json) {
      var videoId = json.items[0].id.videoId;
      var iframeURL = `https://www.youtube.com/embed/${videoId}`;
      var videoTitle = json.items[0].snippet.title;

      document.querySelector('#embedVideoTitle').innerHTML = videoTitle;

      var ifrm = document.createElement('iframe');
      ifrm.setAttribute('src', `${iframeURL}`);
      ifrm.setAttribute('width', '500px');
      ifrm.setAttribute('height', '300px');
      document.querySelector('#embedVideo').appendChild(ifrm);
    })
}

function goToP1() {
  window.location.href = "#t1";
}

function goToP3() {
  window.location.href = "#t3";
}

function goToP4() {
  window.location.href = "#t4";
}
