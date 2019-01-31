const app = (() => {

  function getMovie(query) {
    const promiseOfMovieInfo = new Promise((resolve, reject) => {
      fetch(`http://www.omdbapi.com/?apikey=3f1da799&t=${query}`)

      .then((response) => {
        if (!response.ok) {
          throw Error('Bad response for movie request!');
        }
        return response.json();
      })

      .then((result) => {
        appendPoster(result); // TO DO, SHOW FIRST 5 MOVIES
        resolve();
      })

      .catch((errors) => {
        console.log(errors);
        reject();
      })
    });
    return promiseOfMovieInfo;
  }

  function appendPoster(movie) {
    const posterImage = document.createElement('img');
    posterImage.src = movie.Poster;

    const movieRating = document.createElement('span');
    movieRating.innerText = "Rating: " + movie.imdbRating;

    const imgContainer = document.getElementById('movie-container');
    imgContainer.innerHTML = '';
    imgContainer.appendChild(posterImage);
    imgContainer.appendChild(movieRating);
    imgContainer.style.visibility = 'visible';
  }

  return {
    getMovie: (getMovie)
  };

})();