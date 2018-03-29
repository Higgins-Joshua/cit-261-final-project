const API_KEY = '8b847caf'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

function searchDB(event, url) {
    fetch(`${API_URL}&t=${event.movieTitle.value}`)
        .then(function(data){
            return data.json();
        })

        .then(function(json) {
            console.log(json);
        })
}